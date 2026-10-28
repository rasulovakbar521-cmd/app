export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#09090b] text-[#fafafa] font-sans antialiased py-20 px-6 lg:px-8">
      <div className="max-w-3xl mx-auto space-y-8">
        <div>
          <a href="/" className="text-sm font-semibold text-indigo-400 hover:text-indigo-300 transition-colors">
            ← Back to Home
          </a>
          <h1 className="text-3xl font-black tracking-tight text-white mt-4 sm:text-4xl">
            Privacy Policy
          </h1>
          <p className="text-sm text-zinc-400 mt-2">Last Updated: October 28, 2026</p>
        </div>

        <div className="h-px bg-white/[0.08]" />

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-white">1. Introduction</h2>
          <p className="text-base leading-relaxed text-zinc-300">
            ReviewRev AI ("we," "our," or "us") operates the website and B2B SaaS platform ReviewRev AI. We respect your privacy and are committed to protecting the personal data of our users and their local business accounts.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-white">2. Google Business Profile Data Integration</h2>
          <p className="text-base leading-relaxed text-zinc-300">
            Our platform integrates with official Google Business Profile APIs via secure OAuth authentication. ReviewRev AI only requests restricted scopes necessary to retrieve location reviews and submit your explicitly approved text responses. We do not store, access, or share your Google account credentials or non-public listing data.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-white">3. Data Retention and Security</h2>
          <p className="text-base leading-relaxed text-zinc-300">
            We store dashboard account details using modern encryption methods. Review text data and AI response drafts are processed securely and are never sold to third-party data brokers. You may disconnect your Google Profile integration or delete your workspace account permanently at any time.
          </p>
        </section>

        <footer className="pt-8 text-sm text-zinc-500">
          If you have questions about this US Market compliant policy, contact us at operations@reviewrev.ai
        </footer>
      </div>
    </div>
  );
}
