'use client';

import { useState } from 'react';

export default function SignUp() {
  const [businessName, setBusinessName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      window.location.href = '/login';
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-[#09090b] text-[#fafafa] flex flex-col justify-center items-center px-6 py-12 font-sans tracking-tight">
      <div className="w-full max-w-md bg-zinc-950 border border-white/[0.08] p-8 rounded-2xl shadow-2xl">
        <div className="flex items-center gap-2.5 mb-6 justify-center">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600">
            <span className="text-base font-black text-white">R</span>
          </div>
          <span className="text-lg font-bold text-white">ReviewRev<span className="text-indigo-400">AI</span></span>
        </div>

        <h1 className="text-2xl font-black text-center text-white">Create your workspace</h1>
        <p className="text-sm text-zinc-400 text-center mt-2 mb-8">Start your 7-day free trial. Cancel anytime.</p>

        <form onSubmit={handleSignUp} className="space-y-5">
          <div>
            <label className="block text-sm font-bold text-zinc-300 mb-1.5">Business Name</label>
            <input 
              type="text" 
              required 
              placeholder="e.g., Downtown Auto Repair" 
              value={businessName}
              onChange={(e) => setBusinessName(e.target.value)}
              className="w-full rounded-xl bg-zinc-900 border border-white/[0.1] px-4 py-3 text-base text-white placeholder-zinc-600 focus:outline-none focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-zinc-300 mb-1.5">Work Email</label>
            <input 
              type="email" 
              required 
              placeholder="name@company.com" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-xl bg-zinc-900 border border-white/[0.1] px-4 py-3 text-base text-white placeholder-zinc-600 focus:outline-none focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-zinc-300 mb-1.5">Password</label>
            <input 
              type="password" 
              required 
              placeholder="••••••••" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-xl bg-zinc-900 border border-white/[0.1] px-4 py-3 text-base text-white placeholder-zinc-600 focus:outline-none focus:border-indigo-500"
            />
          </div>

          <button 
            type="submit" 
            disabled={isLoading}
            className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-3.5 rounded-xl text-base shadow-lg shadow-indigo-600/20 transition-all mt-4"
          >
            {isLoading ? 'Creating account...' : 'Access Dashboard'}
          </button>
        </form>

        <p className="text-center text-sm text-zinc-400 mt-6">
          Already have an account? <a href="/login" className="text-indigo-400 hover:text-indigo-300 font-semibold">Sign In</a>
        </p>
      </div>
    </div>
  );
}
