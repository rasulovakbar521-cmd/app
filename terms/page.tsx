export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-[#09090b] text-[#fafafa] font-sans antialiased py-20 px-6 lg:px-8">
      <div className="max-w-3xl mx-auto space-y-8">
        <div>
          <a href="/" className="text-sm font-semibold text-indigo-400 hover:text-indigo-300 transition-colors">
            ← Back to Home
          </a>
          <h1 className="text-3xl font-black tracking-tight text-white mt-4 sm:text-4xl">
            Terms of Service
          </h1>
          <p className="text-sm text-zinc-400 mt-2">Last Updated: October 28, 2026</p>
        </div>

        <div className="h-px bg-white/[0.08]" />

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-white">1. Terms of Use</h2>
          <p className="text-base leading-relaxed text-zinc-300">
            By creating a workspace on ReviewRev AI, you represent that you are an authorized representative of a legally registered business or digital marketing agency operating in the United States or other operational regions.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-white">2. Human-in-the-Loop AI Responsibility</h2>
          <p className="text-base leading-relaxed text-zinc-300">
            ReviewRev AI acts as a drafting utility helper. You acknowledge that our platform requires manual review and approval before publishing responses to public maps listings. You hold final liability for all content uploaded or synced to your business channels.
          </p>
        </section>

        <footer className="pt-8 text-sm text-zinc-500">
          Governed under the state laws of Delaware, USA. Contact: legal@reviewrev.ai
        </footer>
      </div>
    </div>
  );
}
