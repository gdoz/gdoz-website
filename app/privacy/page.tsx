import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />

      <section className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>

            <h1 className="text-4xl font-bold text-foreground mb-8">Privacy Policy</h1>

            <div className="prose prose-invert prose-gray max-w-none space-y-6">
              <p className="text-muted-foreground">Last updated: November 2025</p>

              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">1. Introduction</h2>
              <p className="text-muted-foreground">
                GDOZ Technology Solutions (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your privacy and
                is committed to protecting your personal data. This privacy policy explains how we collect, use, and
                safeguard your information when you visit our website.
              </p>

              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">2. Information We Collect</h2>
              <p className="text-muted-foreground">
                We collect anonymous usage data through Google Analytics 4 to understand how visitors interact with our
                website. This includes:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Pages visited and time spent on each page</li>
                <li>Browser type and device information</li>
                <li>Geographic location (country/region level)</li>
                <li>Referral sources</li>
              </ul>

              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">3. Cookies</h2>
              <p className="text-muted-foreground">
                We use cookies to analyze website traffic and optimize your experience. When you accept our cookie
                notice, we activate Google Analytics 4 tracking. You can manage your cookie preferences through your
                browser settings.
              </p>

              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">4. How We Use Your Information</h2>
              <p className="text-muted-foreground">The data collected is used solely to:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Analyze website performance and user behavior</li>
                <li>Improve our website content and user experience</li>
                <li>Generate aggregate statistical reports</li>
              </ul>

              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">5. Data Sharing</h2>
              <p className="text-muted-foreground">
                We do not sell, trade, or otherwise transfer your personal information to third parties. Analytics data
                is processed by Google in accordance with their privacy policy.
              </p>

              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">6. Your Rights</h2>
              <p className="text-muted-foreground">You have the right to:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Access information about the data we collect</li>
                <li>Request deletion of your data</li>
                <li>Opt-out of analytics tracking via browser settings</li>
              </ul>

              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">7. Contact Us</h2>
              <p className="text-muted-foreground">
                For questions about this privacy policy, please contact us at:{" "}
                <a href="mailto:contact@gdoz.net" className="text-primary hover:underline">
                  contact@gdoz.net
                </a>
              </p>

              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">8. Updates to This Policy</h2>
              <p className="text-muted-foreground">
                We may update this privacy policy from time to time. Any changes will be posted on this page with an
                updated revision date.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
