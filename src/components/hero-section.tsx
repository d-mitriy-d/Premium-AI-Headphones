"use client";

import Image from "next/image";
import { ShoppingBag, Star, Zap, Shield, ChevronDown } from "lucide-react";
import BuySection from "./BuySection";

const badges = [
  {
    icon: Star,
    label: "4.9 Rating",
    position: "top-[18%] left-[5%] md:left-[8%]",
    delay: "animation-delay: 0.5s",
  },
  {
    icon: Zap,
    label: "AI Powered",
    position: "top-[30%] right-[4%] md:right-[8%]",
    delay: "animation-delay: 1s",
  },
  {
    icon: Shield,
    label: "3-Year Warranty",
    position: "bottom-[28%] left-[3%] md:left-[10%]",
    delay: "animation-delay: 1.5s",
  },
];

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-24 pb-16"
    >
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute top-1/4 right-1/4 h-[300px] w-[300px] rounded-full bg-primary/3 blur-[80px]" />
      </div>

      {/* Label */}
      <div className="relative z-10 mb-6 animate-fade-in-up">
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-medium tracking-widest uppercase text-primary">
          <Zap className="h-3.5 w-3.5" />
          Introducing AURA X1
        </span>
      </div>

      {/* Heading */}
      <h1
        className="relative z-10 mb-5 max-w-4xl text-center text-balance text-4xl font-bold leading-tight tracking-tight text-foreground animate-fade-in-up sm:text-5xl md:text-6xl lg:text-7xl"
        style={{ animationDelay: "0.15s" }}
      >
        Sound,{" "}
        <span className="neon-text">Reimagined</span>
        <br />
        by Artificial Intelligence
      </h1>

      {/* Subtitle */}
      <p
        className="relative z-10 mb-10 max-w-xl text-center text-base leading-relaxed text-muted-foreground animate-fade-in-up md:text-lg"
        style={{ animationDelay: "0.3s" }}
      >
        Adaptive noise cancellation, spatial audio calibration, and real-time
        sound optimization — all driven by on-device AI.
      </p>

      {/* Product Image Container */}
      <div className="relative z-10 mx-auto mb-10 w-full max-w-lg animate-fade-in-up" style={{ animationDelay: "0.45s" }}>
        {/* Floating Badges */}
        {badges.map((badge) => (
          <div
            key={badge.label}
            className={`absolute z-20 hidden animate-float md:flex ${badge.position}`}
            style={{ animationDelay: badge.delay.replace("animation-delay: ", "") }}
          >
            <div className="glass-strong flex items-center gap-2 rounded-full px-3.5 py-2 neon-border">
              <badge.icon className="h-3.5 w-3.5 text-primary" />
              <span className="text-xs font-medium text-foreground whitespace-nowrap">
                {badge.label}
              </span>
            </div>
          </div>
        ))}

        {/* Hero Image */}
        <div className="relative aspect-square w-full animate-float">
          <Image
            src="/headphones-hero.jpg"
            alt="AURA X1 Premium AI Headphones floating against a dark background"
            fill
            className="object-contain drop-shadow-2xl"
            priority
            sizes="(max-width: 768px) 90vw, 512px"
          />
          {/* Glow under image */}
          <div className="absolute bottom-0 left-1/2 h-8 w-3/4 -translate-x-1/2 rounded-full bg-primary/20 blur-2xl" />
        </div>
      </div>

      {/* Glassmorphism Buy Card */}
      <div
        className="relative z-10 w-full max-w-md animate-fade-in-up"
        style={{ animationDelay: "0.6s" }}
      >
        <div className="glass-strong rounded-2xl p-6 neon-border">
          <div className="flex items-center justify-between mb-5">
            <div>
              <h3 className="text-lg font-semibold text-foreground">AURA X1</h3>
              <p className="text-sm text-muted-foreground">
                Premium AI Headphones
              </p>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold neon-text">$399</p>
              <p className="text-xs text-muted-foreground line-through">$499</p>
            </div>
          </div>

          <div className="flex items-center gap-1.5 mb-5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={`star-${i}`}
                className="h-4 w-4 fill-primary text-primary"
              />
            ))}
            <span className="ml-1.5 text-xs text-muted-foreground">
              4.9 (2,847 reviews)
            </span>
          </div>

          {/* <button
            type="button"
            className="flex w-full items-center justify-center gap-2.5 rounded-xl bg-primary py-3.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:neon-glow active:scale-[0.98]"
          >
            <ShoppingBag className="h-4.5 w-4.5" />
            Add to Cart
          </button> */}
          <BuySection />

          <p className="mt-3 text-center text-xs text-muted-foreground">
            Free shipping &middot; 30-day returns &middot; 3-year warranty
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#features"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-muted-foreground transition-colors hover:text-primary"
        aria-label="Scroll to features"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] font-medium">Scroll</span>
        <ChevronDown className="h-4 w-4 animate-bounce" />
      </a>
    </section>
  );
}
