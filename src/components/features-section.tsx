"use client";

import { useEffect, useRef, useState } from "react";
import { Brain, AudioLines, Waves, Cpu, BatteryFull, Bluetooth } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Adaptive AI Engine",
    description:
      "On-device neural processor learns your preferences and automatically fine-tunes EQ, noise cancellation, and spatial audio in real time.",
  },
  {
    icon: AudioLines,
    title: "Spatial Sound Mapping",
    description:
      "AI-driven head tracking and room analysis create a fully immersive 3D soundstage that adapts to your physical environment.",
  },
  {
    icon: Waves,
    title: "Active Noise Intelligence",
    description:
      "Context-aware ANC that distinguishes between ambient noise, speech, and music — letting through what matters, filtering what doesn't.",
  },
  {
    icon: Cpu,
    title: "Neural Audio Codec",
    description:
      "Proprietary codec reconstructs compressed audio using AI upscaling, delivering lossless-quality playback from any streaming source.",
  },
  {
    icon: BatteryFull,
    title: "60-Hour Endurance",
    description:
      "Ultra-efficient power management powered by AI workload optimization. Ten minutes of charging gives you five hours of playback.",
  },
  {
    icon: Bluetooth,
    title: "Seamless Multipoint",
    description:
      "Connect to three devices simultaneously with AI-managed switching that predicts which device you intend to use based on context.",
  },
];

function FeatureCard({
  feature,
  index,
}: {
  feature: (typeof features)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`group relative rounded-2xl border border-border bg-card/50 p-7 transition-all duration-700 hover:border-primary/30 hover:bg-card ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Hover glow */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-primary/[0.02]" />

      <div className="relative z-10">
        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:neon-glow">
          <feature.icon className="h-6 w-6" />
        </div>
        <h3 className="mb-2.5 text-base font-semibold text-foreground">
          {feature.title}
        </h3>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {feature.description}
        </p>
      </div>
    </div>
  );
}

export function FeaturesSection() {
  return (
    <section id="features" className="relative py-28 px-6">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-medium tracking-widest uppercase text-primary">
            <Brain className="h-3.5 w-3.5" />
            Powered by AI
          </span>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-balance text-foreground sm:text-4xl md:text-5xl">
            Intelligence you can <span className="neon-text">hear</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Six AI subsystems working in harmony to deliver the most advanced
            personal audio experience ever created.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <FeatureCard key={feature.title} feature={feature} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
