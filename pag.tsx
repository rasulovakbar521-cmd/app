'use client';

import { useState } from "react";
import { Button } from "@/components/ui/button";

function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto flex h-16 items-center justify-between px-4">
        <span className="text-xl font-black tracking-tight text-zinc-900">ReviewRev<span className="text-blue-600">AI</span></span>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-zinc-600">
          <a href="#how-it-works" className="hover:text-blue-600">How It Works</a>
          <a href="#demo" className="hover:text-blue-600">Live Demo</a>
          <a href="#pricing" className="hover:text-blue-600">Pricing</a>
        </nav>
        <div className="flex items-center gap-4">
          <Button variant="ghost" className="text-sm font-medium text-zinc-600">Sign In</Button>
          <Button className="text-sm font-medium bg-blue-600 text-white hover:bg-blue-700">Get Started</Button>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const [demoType, setDemoType] = useState<'negative' | 'positive'>('negative');

  return (
    <div className="min-h-screen bg-background text-zinc-900">
      <Navbar />

      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center px-4 py-20 max-w-4xl mx-auto">
        <div className="inline-flex items-center rounded-full border border-zinc-200 px-4 py-1.5 text-sm font-medium bg-zinc-50 mb-6">✨ Driven by advanced AI</div>
        <h1 className="text-4xl sm:text-6xl font-black tracking-tight">Automate Your Google Maps Reviews with <span className="text-blue-600">ReviewRev AI</span></h1>
        <p className="mt-6 text-xl text-muted-foreground max-w-2xl">Never miss a customer review. Our smart AI assistant auto-responds instantly and boosts local SEO.</p>
        <div className="mt-10 flex gap-4 justify-center">
          <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700">Start Free Trial</Button>
          <Button size="lg" variant="outline" className="border-zinc-300">See Live Demo</Button>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-4 border-t border-zinc-200 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Set Up in 60 Seconds</h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6 rounded-2xl border border-zinc-200 bg-white shadow-sm">
            <h3 className="font-bold">1. Connect Google</h3>
            <p className="mt-2 text-sm text-muted-foreground">Securely link your Google Business profile via official OAuth.</p>
          </div>
          <div className="p-6 rounded-2xl border border-zinc-200 bg-white shadow-sm">
            <h3 className="font-bold">2. Set AI Tone</h3>
            <p className="mt-2 text-sm text-muted-foreground">Choose your response style: professional, casual, or friendly.</p>
          </div>
          <div className="p-6 rounded-2xl border border-zinc-200 bg-white shadow-sm">
            <h3 className="font-bold">3. Autopilot</h3>
            <p className="mt-2 text-sm text-muted-foreground">AI instantly auto-responds to new reviews. Watch your ranking grow.</p>
          </div>
        </div>
      </section>
      {/* Live Demo */}
      <section id="demo" className="py-20 px-4 border-t border-zinc-200 bg-zinc-50/30 text-center">
        <h2 className="text-3xl font-bold mb-4">See the AI Magic in Action</h2>
        <div className="mt-6 inline-flex rounded-lg border border-zinc-200 p-1 bg-white mb-12">
          <button onClick={() => setDemoType('negative')} className={`px-4 py-1.5 text-sm font-medium rounded-md transition-all ${demoType === 'negative' ? 'bg-zinc-900 text-white' : 'text-zinc-600'}`}>🔴 Angry 1-Star Review</button>
          <button onClick={() => setDemoType('positive')} className={`px-4 py-1.5 text-sm font-medium rounded-md transition-all ${demoType === 'positive' ? 'bg-zinc-900 text-white' : 'text-zinc-600'}`}>🟢 Happy 5-Star Review</button>
        </div>
        <div className="grid md:grid-cols-2 gap-8 text-left max-w-4xl mx-auto">
          <div className="border-2 border-zinc-200 rounded-2xl bg-white p-6 shadow-sm">
            <span className="text-xs font-semibold text-zinc-400 uppercase">Incoming Google Review</span>
            <p className="text-sm font-bold mt-2">Mark R. (Austin, TX)</p>
            <p className="mt-4 text-sm italic text-zinc-800">{demoType === 'negative' ? '"The wait time was over 45 mins. Food was cold. Never coming back!"' : '"Amazing experience! Fast service, super friendly team. Highly recommend!"'}</p>
          </div>
          <div className="border-2 border-blue-600 rounded-2xl bg-zinc-900 text-white p-6">
            <span className="text-xs font-semibold text-blue-400 uppercase">ReviewRev AI Output</span>
            <p className="mt-4 text-sm text-zinc-200">{demoType === 'negative' ? 'Hi Mark, we are truly sorry for the wait and cold food. This is not our standard. We are addressing this with our kitchen immediately. Please contact us at contact@business.com so we can make this right.' : 'Hi Mark, thank you so much for the fantastic 5-star review! We are thrilled you loved our fast service. We look forward to serving you again soon!'}</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 px-4 bg-zinc-50 border-t border-zinc-200">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Simple, Transparent Pricing</h2>
          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            <div className="flex flex-col justify-between border-2 border-zinc-200 bg-white rounded-2xl p-6 shadow-sm">
              <div>
                <h3 className="text-xl font-bold">Starter Plan</h3>
                <p className="text-sm text-zinc-500 mt-1">Perfect for local small shops</p>
                <p className="text-4xl font-extrabold mt-4">$19<span className="text-sm text-muted-foreground font-medium">/mo</span></p>
                <div className="mt-6 space-y-3 text-sm text-zinc-700">
                  <div>✓ Auto-respond up to 50 reviews/mo</div>
                  <div>✓ Smart sentiment analysis</div>
                  <div>✓ 1 Google Business location</div>
                </div>
              </div>
              <Button className="w-full mt-8 bg-zinc-900 text-white hover:bg-zinc-800">Get Started</Button>
            </div>
            <div className="flex flex-col justify-between border-2 border-blue-600 bg-white rounded-2xl p-6 shadow-md relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white">Most Popular</div>
              <div>
                <h3 className="text-xl font-bold">Growth Plan</h3>
                <p className="text-sm text-zinc-500 mt-1">Best for growing businesses</p>
                <p className="text-4xl font-extrabold mt-4">$39<span className="text-sm text-muted-foreground font-medium">/mo</span></p>
                <div className="mt-6 space-y-3 text-sm text-zinc-700">
                  <div className="font-semibold text-zinc-900">✓ Unlimited AI responses</div>
                  <div>✓ Multi-location dashboard (up to 5)</div>
                  <div>✓ Custom brand tone & keywords</div>
                </div>
              </div>
              <Button className="w-full mt-8 bg-blue-600 text-white hover:bg-blue-700">Get Started</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
