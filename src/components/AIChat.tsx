'use client';
import { useState, useRef, useEffect } from 'react';

export default function AIChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([{ role: 'ai', text: 'Welcome to the Sonic Concierge. How may I assist your listening experience today?' }]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMsg = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input }),
      });
      const data = await res.json();
      setMessages(prev => [...prev, { role: 'ai', text: data.text }]);
    } catch (err) {
      setMessages(prev => [...prev, { role: 'ai', text: 'Apologies, I am having connection issues.' }]);
    } finally {
      setIsTyping(false);
    }
  };
  

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      {isOpen ? (
        <div className="w-80 h-[480px] bg-zinc-950/85 backdrop-blur-2xl border border-zinc-800 rounded-3xl flex flex-col shadow-2xl overflow-hidden">
          <div className="p-5 border-b border-zinc-800 flex justify-between items-center bg-zinc-900/40">
            <div>
              <h3 className="text-white font-bold text-sm">Sonic Concierge</h3>
              <p className="text-[10px] text-green-500 uppercase tracking-widest font-bold">Expert Online</p>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-zinc-500 hover:text-white transition-colors text-xl">✕</button>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 text-sm scrollbar-hide">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] px-4 py-2.5 rounded-2xl ${
                  m.role === 'user' ? 'bg-orange-600 text-white rounded-tr-none' : 'bg-zinc-800/60 text-zinc-200 border border-zinc-700/50 rounded-tl-none'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isTyping && <div className="text-zinc-500 text-[10px] animate-pulse">Typing...</div>}
          </div>

          <div className="p-4 bg-zinc-900/40 border-t border-zinc-800 flex gap-2">
            <input 
              value={input} 
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
              placeholder="Ask a question..."
              className="w-full bg-zinc-800/40 text-white text-xs rounded-xl px-4 py-3 outline-none border border-zinc-700/50 focus:border-orange-500 transition-all"
            />
            <button onClick={sendMessage} className="p-2.5 bg-orange-600 rounded-xl hover:bg-orange-500 transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
            </button>
          </div>
        </div>
      ) : (
        <button onClick={() => setIsOpen(true)} className="bg-orange-600 w-16 h-16 rounded-2xl flex items-center justify-center shadow-2xl hover:scale-110 transition-all">
          <span className="text-2xl">🎧</span>
        </button>
      )}
    </div>
  );
}