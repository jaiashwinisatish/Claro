import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  inquiryType: z.enum(["general", "feedback", "bug", "support", "privacy", "partnership", "other"]),
  message: z.string().min(10),
  honeypot: z.string().optional(),
});

// Simple in-memory rate limiting (for production, use Redis or similar)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const windowMs = 60 * 60 * 1000; // 1 hour
  const maxRequests = 5;

  const record = rateLimitMap.get(ip);

  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + windowMs });
    return true;
  }

  if (record.count >= maxRequests) {
    return false;
  }

  record.count++;
  return true;
}

export default async function handler(req: any, res: any) {
  // Only allow POST requests
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    // Rate limiting
    const ip = req.headers["x-forwarded-for"] || req.headers["x-real-ip"] || req.connection.remoteAddress;
    if (!checkRateLimit(ip)) {
      return res.status(429).json({ error: "Too many requests. Please try again later." });
    }

    // Parse request body
    const body = req.body;
    if (!body) {
      return res.status(400).json({ error: "Request body is required" });
    }

    // Validate with honeypot check
    const result = contactSchema.safeParse(body);

    if (!result.success) {
      return res.status(400).json({ error: "Invalid input data", details: result.error.errors });
    }

    const { honeypot, ...data } = result.data;

    // Honeypot check - if filled, it's a bot
    if (honeypot) {
      // Return success but don't actually process
      return res.status(200).json({ success: true });
    }

    // Log the submission (in production, this would send an email or store in database)
    console.log("Contact form submission:", {
      timestamp: new Date().toISOString(),
      ip: ip,
      ...data,
    });

    // TODO: Integrate email service (Resend, SendGrid, etc.)
    // TODO: Store in database if available
    // For now, just log and return success

    return res.status(200).json({ success: true, message: "Contact form submitted successfully" });
  } catch (error) {
    console.error("Contact form error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

export const config = {
  api: {
    bodyParser: true,
  },
};
