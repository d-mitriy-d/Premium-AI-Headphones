'use client';

import { useState } from 'react';

export default function OrderForm() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setStatus('idle');

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      phone: formData.get('phone'),
    };

    try {
      const res = await fetch('/api/send-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus('success');
        (e.target as HTMLFormElement).reset(); 
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-md mx-auto p-8 bg-zinc-950/70 backdrop-blur-xl rounded-3xl border border-zinc-800 shadow-2xl text-white">
      <h2 className="text-3xl font-bold mb-2 text-center bg-gradient-to-r from-white to-zinc-500 bg-clip-text text-transparent">
        Secure Checkout
      </h2>
      <p className="text-zinc-500 text-center text-sm mb-8 italic">Complete your premium audio experience</p>
      
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-xs font-semibold mb-1.5 text-zinc-400 uppercase tracking-widest">Full Name</label>
          <input
            name="name"
            type="text"
            required
            placeholder="John Doe"
            className="w-full px-4 py-3.5 rounded-xl bg-zinc-900/50 border border-zinc-800 focus:ring-1 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all text-white placeholder:text-zinc-700"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold mb-1.5 text-zinc-400 uppercase tracking-widest">Phone Number</label>
          <input
            name="phone"
            type="tel"
            required
            placeholder="+1 (555) 000-0000"
            className="w-full px-4 py-3.5 rounded-xl bg-zinc-900/50 border border-zinc-800 focus:ring-1 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all text-white placeholder:text-zinc-700"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full py-4 rounded-xl font-bold tracking-widest transition-all transform active:scale-95 shadow-xl ${
            loading 
              ? 'bg-zinc-800 text-zinc-500 cursor-not-allowed' 
              : 'bg-primary hover:neon-glow text-primary-foreground shadow-orange-900/20'
          }`}
        >
          {loading ? 'PROCESSING...' : 'PLACE ORDER'}
        </button>

        {status === 'success' && (
          <div className="p-4 bg-green-500/10 text-green-400 rounded-xl text-center border border-green-500/20 text-sm animate-in fade-in zoom-in">
            ✨ Order confirmed! We will contact you shortly.
          </div>
        )}

        {status === 'error' && (
          <div className="p-4 bg-red-500/10 text-red-400 rounded-xl text-center border border-red-500/20 text-sm">
            ❌ Something went wrong. Please check your connection.
          </div>
        )}
      </form>
      
      <div className="mt-6 flex items-center justify-center gap-2 opacity-30">
        <div className="h-[1px] w-8 bg-zinc-500"></div>
        <span className="text-[10px] uppercase tracking-[0.2em]">Verified Payment</span>
        <div className="h-[1px] w-8 bg-zinc-500"></div>
      </div>
    </div>
  );
}