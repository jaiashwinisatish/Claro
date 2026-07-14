import { createFileRoute } from "@tanstack/react-router";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const Route = createFileRoute("/privacy")({
  component: PrivacyPolicy,
});

function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-4xl px-6 py-16 md:py-24">
        <div className="mb-8">
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Last updated: July 14, 2026</p>
          <h1 className="mt-4 font-display text-4xl md:text-5xl text-gradient">Privacy Policy</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Your trust is everything to us. This policy explains how Claro handles your information with the care and respect you deserve.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          <AccordionItem value="collect" className="border border-white/5 rounded-lg bg-white/[0.01] px-6">
            <AccordionTrigger className="text-base font-semibold">What We Collect</AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed">
              <div className="space-y-3">
                <p><strong>Account Information:</strong> When you create an account, we collect your email address and any profile information you choose to provide.</p>
                <p><strong>Your Content:</strong> This includes journal entries, chat conversations, brain dumps, and any other reflections you share with Claro. This is the core of your experience — and it's treated with the highest level of protection.</p>
                <p><strong>Usage Data:</strong> Information about how you interact with Claro, such as session frequency, feature usage patterns, and time spent in reflection.</p>
                <p><strong>Technical Data:</strong> Device type, browser information, IP address (for security purposes), and crash logs to help us improve stability.</p>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="use" className="border border-white/5 rounded-lg bg-white/[0.01] px-6">
            <AccordionTrigger className="text-base font-semibold">How We Use Your Data</AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed">
              <div className="space-y-3">
                <p><strong>To Provide the Service:</strong> Process your reflections through AI to help you gain clarity and insight.</p>
                <p><strong>To Improve Claro:</strong> Analyze usage patterns (in aggregate, never personally identifiable) to enhance features and user experience.</p>
                <p><strong>To Ensure Security:</strong> Detect and prevent fraud, abuse, and technical issues.</p>
                <p><strong>To Communicate:</strong> Send you important updates about your account or service changes (with your consent for marketing communications).</p>
                <p><strong>As Required by Law:</strong> When legally compelled to do so, after careful review and minimization of what we share.</p>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="ai" className="border border-white/5 rounded-lg bg-white/[0.01] px-6">
            <AccordionTrigger className="text-base font-semibold">AI Processing of Your Data</AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed">
              <div className="space-y-3">
                <p>When you share your thoughts with Claro, they are sent to our AI provider for processing. Here's what that means:</p>
                <p><strong>Encryption in Transit:</strong> Your data is encrypted using industry-standard protocols before it leaves your device.</p>
                <p><strong>No Training Without Consent:</strong> We do not use your personal conversations to train third-party public AI models. Your reflections remain between you and Claro.</p>
                <p><strong>Temporary Processing:</strong> AI processing happens in ephemeral sessions. Your data is not permanently stored by the AI provider beyond what's necessary for the immediate response.</p>
                <p><strong>Human Review:</strong> We never have humans review your individual reflections unless you explicitly request support and consent to specific access.</p>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="sharing" className="border border-white/5 rounded-lg bg-white/[0.01] px-6">
            <AccordionTrigger className="text-base font-semibold">Data Sharing</AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed">
              <div className="space-y-3">
                <p>We believe your data is yours, and we treat it that way. Here's when and why we might share information:</p>
                <p><strong>Service Providers:</strong> With trusted third parties who help us operate Claro (like AI providers, hosting services, and analytics tools). These providers are contractually bound to protect your data and use it only for specified purposes.</p>
                <p><strong>Legal Requirements:</strong> When required by law, court order, or government request. We push back on overbroad requests and notify you when legally permitted.</p>
                <p><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your data may be transferred as part of the transaction. We'll notify you in advance.</p>
                <p><strong>With Your Consent:</strong> When you explicitly give us permission to share information for a specific purpose.</p>
                <p className="font-medium text-foreground"><strong>Never Sold:</strong> We never sell your personal data to third parties for marketing purposes. Period.</p>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="retention" className="border border-white/5 rounded-lg bg-white/[0.01] px-6">
            <AccordionTrigger className="text-base font-semibold">Data Retention</AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed">
              <div className="space-y-3">
                <p><strong>Your Content:</strong> Retained for as long as your account is active, unless you choose to delete it. You can export or delete your reflections at any time.</p>
                <p><strong>Account Information:</strong> Retained while your account is active. After account deletion, we retain basic information for legal compliance for a limited period.</p>
                <p><strong>Usage & Technical Data:</strong> Retained in aggregate, anonymized form for service improvement. Personal identifiers are removed or anonymized over time.</p>
                <p><strong>Legal Requirements:</strong> Some data may be retained longer if required by law or for legitimate business purposes like fraud prevention.</p>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="cookies" className="border border-white/5 rounded-lg bg-white/[0.01] px-6">
            <AccordionTrigger className="text-base font-semibold">Cookies & Tracking</AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed">
              <div className="space-y-3">
                <p><strong>Essential Cookies:</strong> Required for Claro to function properly, like keeping you logged in and remembering your preferences.</p>
                <p><strong>Analytics Cookies:</strong> Help us understand how people use Claro so we can improve it. These are anonymized and aggregated.</p>
                <p><strong>Preference Cookies:</strong> Remember your settings and choices to provide a personalized experience.</p>
                <p>You can manage cookie settings through your browser. Note that disabling certain cookies may affect Claro's functionality.</p>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="rights" className="border border-white/5 rounded-lg bg-white/[0.01] px-6">
            <AccordionTrigger className="text-base font-semibold">Your Rights</AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed">
              <div className="space-y-3">
                <p>You have the right to:</p>
                <p><strong>Access:</strong> Request a copy of the personal data we hold about you.</p>
                <p><strong>Correct:</strong> Update or correct inaccurate or incomplete information.</p>
                <p><strong>Delete:</strong> Request deletion of your personal data (with some exceptions for legal or business reasons).</p>
                <p><strong>Portability:</strong> Receive your data in a structured, commonly used format.</p>
                <p><strong>Withdraw Consent:</strong> Change your mind about how we use your data, where consent was the legal basis.</p>
                <p><strong>Object:</strong> Object to certain types of data processing, particularly for marketing purposes.</p>
                <p>To exercise these rights, contact us at privacy@claro.app or use the account deletion process described below.</p>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="deletion" className="border border-white/5 rounded-lg bg-white/[0.01] px-6">
            <AccordionTrigger className="text-base font-semibold">Account & Data Deletion</AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed">
              <div className="space-y-3">
                <p>You can delete your account and all associated data at any time:</p>
                <p><strong>In-App Deletion:</strong> Go to Settings → Account → Delete Account. This will permanently delete your account and all reflections after a brief confirmation period.</p>
                <p><strong>Export First:</strong> We encourage you to export your data before deletion. You can download all your reflections in a readable format.</p>
                <p><strong>What Gets Deleted:</strong> Your account profile, all journal entries, chat history, brain dumps, and associated metadata.</p>
                <p><strong>What Remains:</strong> Anonymized usage data that cannot be linked to you, and records required for legal compliance.</p>
                <p><strong>Recovery:</strong> Once deleted, your data cannot be recovered. Please be certain before proceeding.</p>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="children" className="border border-white/5 rounded-lg bg-white/[0.01] px-6">
            <AccordionTrigger className="text-base font-semibold">Children's Privacy</AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed">
              <div className="space-y-3">
                <p>Claro is not intended for children under 16 years of age. We do not knowingly collect personal information from children under 16.</p>
                <p>If we discover that we have collected information from a child under 16 without parental consent, we will take steps to delete that information promptly.</p>
                <p>If you are a parent or guardian and believe your child has provided us with personal information, please contact us at privacy@claro.app.</p>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="international" className="border border-white/5 rounded-lg bg-white/[0.01] px-6">
            <AccordionTrigger className="text-base font-semibold">International Data Transfers</AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed">
              <div className="space-y-3">
                <p>Claro may store and process your data outside of your country of residence. When we transfer data internationally, we ensure appropriate safeguards are in place to protect your information.</p>
                <p>These safeguards include:</p>
                <p><strong>Standard Contractual Clauses:</strong> Legally binding agreements approved by data protection authorities.</p>
                <p><strong>Adequacy Decisions:</strong> Transfers to countries recognized as having adequate data protection laws.</p>
                <p><strong>Encryption:</strong> Data is encrypted both in transit and at rest.</p>
                <p>By using Claro, you consent to these international transfers in accordance with this policy.</p>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="changes" className="border border-white/5 rounded-lg bg-white/[0.01] px-6">
            <AccordionTrigger className="text-base font-semibold">Changes to This Policy</AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed">
              <div className="space-y-3">
                <p>We may update this privacy policy from time to time. When we do, we will:</p>
                <p><strong>Notify You:</strong> Send you an email for significant changes (with opt-out options for non-essential communications).</p>
                <p><strong>Update the Date:</strong> Change the "Last updated" date at the top of this policy.</p>
                <p><strong>Post Notice:</strong> Display a prominent notice in the app for material changes.</p>
                <p>Your continued use of Claro after changes take effect indicates your acceptance of the updated policy.</p>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="contact" className="border border-white/5 rounded-lg bg-white/[0.01] px-6">
            <AccordionTrigger className="text-base font-semibold">Contact Us</AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed">
              <div className="space-y-3">
                <p>If you have questions about this privacy policy, your data, or your rights, we're here to help.</p>
                <p><strong>Privacy Questions:</strong> privacy@claro.app</p>
                <p><strong>General Inquiries:</strong> hello@claro.app</p>
                <p><strong>Support:</strong> support@claro.app</p>
                <p>You can also reach us through our <a href="/contact" className="text-primary hover:underline">Contact page</a> for any privacy-related requests.</p>
                <p>We typically respond within 5 business days. For urgent privacy concerns, please include "Privacy Request" in your subject line.</p>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <div className="mt-12 pt-8 border-t border-white/5 text-sm text-muted-foreground">
          <p>Claro is part of the Parshva ecosystem, alongside AlterEgo. This policy applies to Claro specifically. For information about other Parshva products, please refer to their respective privacy policies.</p>
        </div>
      </div>
    </main>
  );
}
