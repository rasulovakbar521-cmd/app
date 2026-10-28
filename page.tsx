'use client';

import { useState } from 'react';

// Теплые, профессиональные b2b-шаблоны без юридического признания вины
const sampleReplies = {
  positive: {
    review: "Five stars! The team fixed my brakes in under an hour. Super transparent pricing and very friendly staff.",
    ai: "Hi! Thank you so much for the 5-star review. We're thrilled to hear our team got your brakes sorted out quickly and transparently. Safe driving, and we're always here whenever you need us!"
  },
  negative: {
    review: "Terrible experience. They charged me $120 just for diagnostics and didn't even fix the AC issue. Avoid this place.",
    ai: "Hello. Thank you for bringing this matter to our attention. We always aim to provide clear diagnostic evaluations for every vehicle. Please reach out to our management team directly at operations@reviewrev.ai so we can verify your repair order details and look into this specific situation."
  }
};

export default function Home() {
  const [isAnnual, setIsAnnual] = useState(false);
  const [activeTab, setActiveTab] = useState<'positive' | 'negative'>('positive');
  const [simulatedPost, setSimulatedPost] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [leadStatus, setLeadStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  // Полная валидная FAQ-разметка 1:1 по требованиям Google SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Do you get full access to my Google Account?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. We utilize secure Google OAuth API protocols. We request limited permissions required to read reviews and submit approved replies. We never see your password."
        }
      },
      {
        "@type": "Question",
        "name": "What happens if a review is fake or abusive?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ReviewRev AI flags suspicious or abusive language directly inside your dashboard queue. You can review the draft, flag the response, or manually report the review directly via Google Maps console."
        }
      },
      {
        "@type": "Question",
        "name": "What languages are supported?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our default models support natural-sounding English responses, which is fully optimized for businesses serving the United States and North American regional customer bases."
        }
      },
      {
        "@type": "Question",
        "name": "How do I cancel my subscription workspace?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can cancel your subscription inside your Billing settings in the dashboard at any time with a single click. There are no long-term contracts, cancellation penalties, or hidden fees."
        }
      }
    ]
  };

  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLeadStatus('loading');
    setTimeout(() => {
      setLeadStatus('success');
      setEmail('');
    }, 800);
  };
  return (
    <div className="min-h-screen bg-[#09090b] text-[#fafafa] antialiased selection:bg-indigo-500/30 selection:text-white font-sans tracking-tight text-base">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      {/* 1. НАВИГАЦИЯ С ЗАКРЫТЫМИ РОУТАМИ И МОБИЛЬНЫМ МЕНЮ */}
      <header className="sticky top-0 z-50 w-full border-b border-white/[0.08] bg-zinc-950/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-600 shadow-md">
              <span className="text-xl font-black text-white">R</span>
            </div>
            <span className="text-xl font-bold tracking-tight text-white">ReviewRev<span className="text-indigo-400">AI</span></span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8 text-base font-semibold text-zinc-300">
            <a href="#features" className="hover:text-white transition-colors">How It Works</a>
            <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
            <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a href="/login" className="rounded-lg bg-zinc-900 px-4 py-2 text-sm font-bold text-white border border-white/[0.1] hover:bg-zinc-800 transition-all">
              Sign In
            </a>
          </div>

          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-zinc-400 hover:text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden border-b border-white/[0.08] bg-zinc-950 px-6 py-4 space-y-3">
            <a href="#features" onClick={() => setIsMenuOpen(false)} className="block text-base font-medium text-zinc-300 hover:text-white">How It Works</a>
            <a href="#pricing" onClick={() => setIsMenuOpen(false)} className="block text-base font-medium text-zinc-300 hover:text-white">Pricing</a>
            <a href="#faq" onClick={() => setIsMenuOpen(false)} className="block text-base font-medium text-zinc-300 hover:text-white">FAQ</a>
            <div className="pt-2">
              <a href="/login" className="block text-center rounded-lg bg-zinc-900 py-2.5 text-sm font-bold text-white border border-white/[0.1]">
                Sign In
              </a>
            </div>
          </div>
        )}
      </header>

      <main>
        {/* 2. HERO-ЗОНА ПО ТРЕБОВАНИЯМ FTC США */}
        <section className="relative px-6 pt-24 pb-16 mx-auto max-w-7xl lg:px-8 overflow-hidden">
          <div className="absolute top-[-5%] left-1/2 -translate-x-1/2 -z-10 h-[500px] w-[900px] rounded-full bg-gradient-to-tr from-indigo-600/10 to-purple-600/5 blur-[140px] pointer-events-none" />
          
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-sm font-semibold text-indigo-300 mb-6">
              Built for auto shops, salons, clinics, and restaurants
            </div>
            <h1 className="text-4xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-100 to-zinc-200 sm:text-6xl lg:leading-[1.12]">
              Reply to every Google review in under a minute.
            </h1>
            <p className="max-w-2xl mx-auto mt-6 text-zinc-300 font-medium text-base sm:text-lg sm:leading-relaxed">
              Replying to Google reviews shows customers you care, and Google officially recommends responding to build online trust. 
              ReviewRev AI streamlines your daily operations by drafting instant, calm, and tailored text responses. 
              <span className="block mt-2 font-bold text-white">You maintain 100% control — approve drafts inside our dashboard before publishing.</span>
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="/signup" className="w-full sm:w-auto inline-flex justify-center items-center rounded-xl bg-indigo-600 px-8 py-4 text-base font-bold text-white hover:bg-indigo-500 shadow-lg shadow-indigo-600/30 active:scale-[0.98] transition-all">
                Start 7-Day Free Trial
              </a>
              <a href="#features" className="w-full sm:w-auto inline-flex justify-center items-center rounded-xl bg-zinc-900 border border-white/[0.1] px-8 py-4 text-base font-bold text-zinc-300 hover:bg-zinc-800 hover:text-white transition-all">
                See How It Works
              </a>
            </div>
          </div>

          {/* 3. ИНТЕРАКТИВНОЕ ДЕМО ПРИМЕРОВ ОТВЕТОВ */}
          <div className="max-w-2xl mx-auto mt-16 rounded-xl bg-zinc-950 border border-white/[0.1] overflow-hidden shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/[0.08] bg-zinc-900/40 px-5 py-4">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                <span className="text-sm font-bold text-zinc-300 ml-1 tracking-wide">Interactive Sample Replies</span>
              </div>
              <div className="flex gap-2 p-1 bg-zinc-950 rounded-lg border border-white/[0.06]">
                <button 
                  onClick={() => { setActiveTab('positive'); setSimulatedPost(false); }}
                  className={`px-3 py-1.5 text-sm font-semibold rounded-md transition-all ${activeTab === 'positive' ? 'bg-zinc-800 text-white' : 'text-zinc-400 hover:text-white'}`}
                >
                  5-Star Review
                </button>
                <button 
                  onClick={() => { setActiveTab('negative'); setSimulatedPost(false); }}
                  className={`px-3 py-1.5 text-sm font-semibold rounded-md transition-all ${activeTab === 'negative' ? 'bg-zinc-800 text-white' : 'text-zinc-400 hover:text-white'}`}
                >
                  Angry Review
                </button>
              </div>
            </div>

            <div className="p-6 space-y-6">
              <div>
                <span className="text-sm font-bold text-zinc-400 uppercase tracking-wider">Incoming Google Review:</span>
                <p className="mt-2 text-base text-zinc-200 bg-zinc-900/40 p-4 rounded-xl border border-white/[0.04] italic leading-relaxed">
                  "{sampleReplies[activeTab].review}"
                </p>
              </div>

              <div>
                <span className="text-sm font-bold text-indigo-400 uppercase tracking-wider block">
                  AI Response Draft (Professional Tone Mode):
                </span>
                <p className="mt-2 text-base text-indigo-200 bg-indigo-950/20 p-4 rounded-xl border border-indigo-500/30 leading-relaxed font-medium">
                  {sampleReplies[activeTab].ai}
                </p>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/[0.06]">
                <p className="text-sm text-zinc-400 font-medium">
                  {simulatedPost ? "🎉 Dashboard simulation: API request prepared for Google Profiles." : "ReviewRev AI requires confirmation before updating your public listings."}
                </p>
                <button
                  onClick={() => setSimulatedPost(true)}
                  disabled={simulatedPost}
                  className={`w-full sm:w-auto px-6 py-3 text-sm font-bold rounded-lg transition-all ${
                    simulatedPost 
                      ? 'bg-zinc-800 text-zinc-500 cursor-default' 
                      : 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-md'
                  }`}
                >
                  {simulatedPost ? 'Approved' : 'Approve & Post'}
                </button>
              </div>
            </div>
          </div>
        </section>
        {/* 4. ЧЕТКИЙ БЛОК WORKFLOW */}
        <section id="features" className="py-24 border-t border-white/[0.06] bg-zinc-950/30">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">Three steps to full review control</h2>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3 max-w-5xl mx-auto">
              <div className="p-6 rounded-xl border border-white/[0.06] bg-zinc-950">
                <div className="text-sm font-bold text-indigo-400 mb-2">STEP 01</div>
                <h3 className="text-lg font-bold text-white mb-2">Connect Google Profile</h3>
                <p className="text-base leading-relaxed text-zinc-400">Securely link your Google Business locations via official Google API OAuth in 2 clicks.</p>
              </div>
              <div className="p-6 rounded-xl border border-white/[0.06] bg-zinc-950">
                <div className="text-sm font-bold text-indigo-400 mb-2">STEP 02</div>
                <h3 className="text-lg font-bold text-white mb-2">Review AI Drafts</h3>
                <p className="text-base leading-relaxed text-zinc-400">When a new review arrives, our system immediately generates a private draft inside your dashboard.</p>
              </div>
              <div className="p-6 rounded-xl border border-white/[0.06] bg-zinc-950">
                <div className="text-sm font-bold text-indigo-400 mb-2">STEP 03</div>
                <h3 className="text-lg font-bold text-white mb-2">Approve and Publish</h3>
                <p className="text-base leading-relaxed text-zinc-400">Check the text, edit if necessary, and click Approve. The response updates on Google Maps instantly.</p>
              </div>
            </div>
          </div>
        </section>
        {/* 5. ТАРИФЫ С ДИНАМИЧЕСКИМ ИЗМЕНЕНИЕМ ЦЕН НА ЭКРАНЕ */}
        <section id="pricing" className="py-24 border-t border-white/[0.06]">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">Predictable plans. No per-reply fees.</h2>
            </div>

            <div className="flex justify-center mb-16">
              <div className="inline-flex p-1 bg-zinc-950 rounded-full border border-white/[0.08]">
                <button onClick={() => setIsAnnual(false)} className={`cursor-pointer rounded-full px-5 py-2 text-sm font-semibold transition-all ${!isAnnual ? 'bg-zinc-800 text-white shadow-sm' : 'text-zinc-400 hover:text-white'}`}>
                  Monthly
                </button>
                <button onClick={() => setIsAnnual(true)} className={`cursor-pointer rounded-full px-5 py-2 text-sm font-semibold transition-all flex items-center gap-1.5 ${isAnnual ? 'bg-indigo-600 text-white shadow-sm' : 'text-zinc-400 hover:text-white'}`}>
                  Annual billing <span className="rounded bg-emerald-500/20 px-1.5 py-0.5 text-xs font-bold text-emerald-400">-20%</span>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-8 mx-auto sm:max-w-2xl md:grid-cols-2 lg:max-w-7xl lg:grid-cols-3">
              {/* STARTER */}
              <div className="flex flex-col justify-between p-8 rounded-xl bg-zinc-950/60 border border-white/[0.06]">
                <div>
                  <h3 className="text-xl font-bold text-white">Starter</h3>
                  <p className="mt-2 text-base text-zinc-400">Essential workflow setup for single-location businesses.</p>
                  <div className="flex items-baseline mt-5 gap-x-1">
                    <span className="text-5xl font-black text-white">${isAnnual ? '23' : '29'}</span>
                    <span className="text-base font-semibold text-zinc-400">/ month</span>
                  </div>
                  <div className="w-full h-px my-5 bg-white/[0.04]" />
                  <ul role="list" className="space-y-4 text-base text-zinc-300 font-medium">
                    <li>✓ 1 Google Maps Location</li>
                    <li>✓ 40 AI Auto-Replies / month</li>
                    <li>✓ Dashboard Approval Queue</li>
                    <li>✓ Email support (within 24h)</li>
                  </ul>
                </div>
                <div className="mt-8">
                  <a href="/signup?plan=starter" className="block w-full text-center rounded-lg bg-zinc-900 border border-white/[0.1] py-3 text-base font-bold text-white hover:bg-zinc-800 transition-all">
                    Start 7-Day Free Trial
                  </a>
                </div>
              </div>

              {/* GROWTH */}
              <div className="relative flex flex-col justify-between p-8 rounded-xl bg-zinc-950 border-2 border-indigo-600 shadow-xl">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-indigo-600 px-4 py-0.5 text-xs font-bold text-white border border-indigo-400">
                  Recommended
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Growth</h3>
                  <p className="mt-2 text-base text-zinc-400">Built for high-volume local brands and multi-locations.</p>
                  <div className="flex items-baseline mt-5 gap-x-1">
                    <span className="text-5xl font-black text-white">${isAnnual ? '47' : '55'}</span>
                    <span className="text-base font-semibold text-zinc-400">/ month</span>
                  </div>
                  <div className="w-full h-px my-5 bg-white/[0.04]" />
                  <ul role="list" className="space-y-4 text-base text-zinc-300 font-medium">
                    <li>✓ Up to 5 Google Maps Locations</li>
                    <li>✓ 200 AI Auto-Replies / month</li>
                    <li>✓ Dashboard Approval Queue</li>
                    <li>✓ Custom Tone Settings</li>
                    <li>✓ Email support (within 24h)</li>
                  </ul>
                </div>
                <div className="mt-8">
                  <a href="/signup?plan=growth" className="block w-full text-center rounded-lg bg-indigo-600 py-3 text-base font-bold text-white hover:bg-indigo-500 transition-all">
                    Claim 7-Day Free Trial
                  </a>
                </div>
              </div>

              {/* AGENCY */}
              <div className="flex flex-col justify-between p-8 rounded-xl bg-zinc-950/60 border border-white/[0.06]">
                <div>
                  <h3 className="text-xl font-bold text-white">Agency</h3>
                  <p className="mt-2 text-base text-zinc-400">For digital marketing agencies managing multiple clients.</p>
                  <div className="flex items-baseline mt-5 gap-x-1">
                    <span className="text-5xl font-black text-white">${isAnnual ? '119' : '149'}</span>
                    <span className="text-base font-semibold text-zinc-400">/ month</span>
                  </div>
                  <div className="w-full h-px my-5 bg-white/[0.04]" />
                  <ul role="list" className="space-y-4 text-base text-zinc-300 font-medium">
                    <li>✓ Up to 20 Google Maps Locations</li>
                    <li>✓ 1,000 AI Auto-Replies / month</li>
                    <li><span className="text-zinc-500">Coming soon:</span> White-label PDF Reporting</li>
                    <li><span className="text-zinc-500">Coming soon:</span> Multi-User Access</li>
                  </ul>
                </div>
                <div className="mt-8">
                  <a href="mailto:sales@reviewrev.ai?subject=Agency%20Plan%20Inquiry" className="block w-full text-center rounded-lg bg-zinc-900 border border-white/[0.1] py-3 text-base font-bold text-white hover:bg-zinc-800 transition-all">
                    Contact for Agency Custom Trial
                  </a>
                </div>
              </div>
            </div>
            <p className="mt-8 text-center text-sm text-zinc-400">No credit card required for standard 7-day trial workspaces.</p>
          </div>
        </section>
        {/* 6. СБОР EMAIL С СОГЛАСИЕМ НА РАССЫЛКУ */}
        <section className="py-20 border-t border-white/[0.06] bg-zinc-900/20">
          <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
            <h2 className="text-2xl font-bold text-white">Not ready for a free trial yet?</h2>
            <p className="mt-3 text-base text-zinc-400">Get our free guide on how answering Google reviews protects your local business profiles.</p>
            
            {leadStatus === 'success' ? (
              <div className="mt-8 p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 text-base font-bold max-w-md mx-auto">
                Check your inbox! We've sent the guide to your email.
              </div>
            ) : (
              <form className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={handleLeadSubmit}>
                <div className="w-full flex flex-col items-start gap-2">
                  <input 
                    type="email" 
                    required 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your business email" 
                    className="w-full rounded-xl bg-zinc-950 border border-white/[0.1] px-4 py-3 text-base text-white placeholder-zinc-500 focus:outline-none focus:border-indigo-500" 
                  />
                  <span className="text-[12px] text-zinc-500 text-left leading-tight">By submitting, you agree to receive product updates. Opt-out anytime.</span>
                </div>
                <button 
                  type="submit" 
                  disabled={leadStatus === 'loading'}
                  className="w-full sm:w-auto bg-zinc-100 hover:bg-white text-zinc-950 font-bold h-[50px] px-6 rounded-xl text-base transition-all whitespace-nowrap"
                >
                  {leadStatus === 'loading' ? 'Sending...' : 'Get Free Guide'}
                </button>
              </form>
            )}
          </div>
        </section>

        {/* 7. ЗАКРЫТИЕ ВСЕХ СТРАХОВ B2B КЛИЕНТОВ */}
        <section id="faq" className="py-24 border-t border-white/[0.06] bg-zinc-950/20">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-white mb-12">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div className="p-6 rounded-xl bg-zinc-950 border border-white/[0.06]">
                <h3 className="text-base font-bold text-white">Do you get full access to my Google Account?</h3>
                <p className="mt-2 text-base leading-relaxed text-zinc-400">No. We utilize secure Google OAuth API protocols. We request limited permissions required to read reviews and submit approved replies. We never see your password.</p>
              </div>
              <div className="p-6 rounded-xl bg-zinc-950 border border-white/[0.06]">
                <h3 className="text-base font-bold text-white">What happens if a review is fake or abusive?</h3>
                <p className="mt-2 text-base leading-relaxed text-zinc-400">ReviewRev AI flags suspicious or abusive language directly inside your dashboard queue. You can review the draft, flag the response, or manually report the review directly via Google Maps console.</p>
              </div>
              <div className="p-6 rounded-xl bg-zinc-950 border border-white/[0.06]">
                <h3 className="text-base font-bold text-white">What languages are supported?</h3>
                <p className="mt-2 text-base leading-relaxed text-zinc-400">Our default models support natural-sounding English responses, which is fully optimized for businesses serving the United States and North American regional customer bases.</p>
              </div>
              <div className="p-6 rounded-xl bg-zinc-950 border border-white/[0.06]">
                <h3 className="text-base font-bold text-white">How do I cancel my subscription workspace?</h3>
                <p className="mt-2 text-base leading-relaxed text-zinc-400">You can cancel your subscription inside your Billing settings in the dashboard at any time with a single click. There are no long-term contracts, cancellation penalties, or hidden fees.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 8. ЛЕГАЛЬНЫЙ ЮРИДИЧЕСКИЙ ПОДВАЛ БЕЗ ФЕЙК-АДРЕСОВ */}
      <footer className="border-t border-white/[0.08] bg-zinc-950 py-12 text-base text-zinc-400">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <p>© 2026 ReviewRev AI. All rights reserved.</p>
            <p className="text-zinc-500 text-xs mt-1">Professional reputation automation for local service brands.</p>
          </div>
          <div className="flex gap-6 text-zinc-400 font-semibold">
            <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy (Updated Oct 2026)</a>
            <a href="/terms" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="mailto:support@reviewrev.ai" className="hover:text-white transition-colors">support@reviewrev.ai</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
