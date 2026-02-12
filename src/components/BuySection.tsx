'use client';

import { useState } from 'react';
import OrderForm from './OrderForm';

export default function BuySection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* Сама кнопка Buy */}
      <button 
        onClick={() => setIsModalOpen(true)}
        className="bg-primary duration-300 hover:neon-glow text-sm font-semibold text-primary-foreground py-4 px-10 rounded-full transition-all hover:scale-105 shadow-lg shadow-orange-900/20"
      >
        BUY NOW
      </button>

      {/* Модальное окно с формой */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Задний фон (оверлей) */}
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-md"
            onClick={() => setIsModalOpen(false)} 
          />
          
          {/* Контент модалки */}
          <div className="relative z-10 w-full max-w-md animate-in fade-in zoom-in duration-300">
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute -top-12 right-0 text-white/50 hover:text-white transition-colors"
            >
              Close ✕
            </button>
            <OrderForm />
          </div>
        </div>
      )}
    </>
  );
}