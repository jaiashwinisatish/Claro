import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { toast } from "sonner";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  inquiryType: z.enum(["general", "feedback", "bug", "support", "privacy", "partnership", "other"]),
  message: z.string().min(10, "Message must be at least 10 characters"),
  honeypot: z.string().optional(),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export const Route = createFileRoute("/contact")({
  component: ContactPage,
});

function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      inquiryType: "general",
      message: "",
      honeypot: "",
    },
  });

  const onSubmit = async (values: ContactFormValues) => {
    // Honeypot check for spam protection
    if (values.honeypot) {
      return;
    }

    setIsSubmitting(true);
    setIsSuccess(false);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit form");
      }

      setIsSuccess(true);
      toast.success("Thanks — we'll get back to you soon.");
      form.reset();
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-4xl px-6 py-16 md:py-24">
        <div className="mb-12 text-center">
          <h1 className="font-display text-4xl md:text-5xl text-gradient">We'd love to hear from you</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Your feedback helps shape Claro into a better reflection space for everyone.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            {isSuccess ? (
              <div className="rounded-lg border border-green-500/20 bg-green-500/5 p-8 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-500/20">
                  <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-foreground">Message Sent!</h3>
                <p className="mt-2 text-muted-foreground">Thanks — we'll get back to you soon.</p>
                <Button
                  onClick={() => setIsSuccess(false)}
                  variant="outline"
                  className="mt-6"
                >
                  Send another message
                </Button>
              </div>
            ) : (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  {/* Honeypot field for spam protection */}
                  <FormField
                    control={form.control}
                    name="honeypot"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            {...field}
                            type="text"
                            className="hidden"
                            tabIndex={-1}
                            autoComplete="off"
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="your@email.com" type="email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="inquiryType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Inquiry Type</FormLabel>
                        <FormControl>
                          <select
                            {...field}
                            className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                          >
                            <option value="general">General Question</option>
                            <option value="feedback">Feedback / Feature Request</option>
                            <option value="bug">Bug Report</option>
                            <option value="support">Support Issue</option>
                            <option value="privacy">Privacy Request</option>
                            <option value="partnership">Partnership/Media</option>
                            <option value="other">Other</option>
                          </select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <textarea
                            {...field}
                            placeholder="Tell us what's on your mind..."
                            className="flex min-h-[120px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm resize-y"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" disabled={isSubmitting} className="w-full">
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            )}
          </div>

          {/* Contact Info Sidebar */}
          <div className="space-y-8">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground/80 mb-4">Contact Information</h3>
              <ul className="space-y-4 text-sm">
                <li>
                  <p className="text-muted-foreground">General inquiries</p>
                  <a href="mailto:hello@claro.app" className="text-primary hover:underline">
                    hello@claro.app
                  </a>
                </li>
                <li>
                  <p className="text-muted-foreground">Support</p>
                  <a href="mailto:support@claro.app" className="text-primary hover:underline">
                    support@claro.app
                  </a>
                </li>
                <li>
                  <p className="text-muted-foreground">Privacy requests</p>
                  <a href="mailto:privacy@claro.app" className="text-primary hover:underline">
                    privacy@claro.app
                  </a>
                </li>
                <li>
                  <p className="text-muted-foreground">Security reports</p>
                  <a href="mailto:security@claro.app" className="text-primary hover:underline">
                    security@claro.app
                  </a>
                </li>
              </ul>
            </div>

            <div className="rounded-lg border border-amber-500/20 bg-amber-500/5 p-4">
              <p className="text-sm text-amber-200">
                <strong>Note:</strong> Claro is a self-reflection tool, not a crisis service. If you're in distress, please contact a licensed professional or local crisis helpline.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
