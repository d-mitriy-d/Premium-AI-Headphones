"use client";

import { useEffect, useRef, useState } from "react";

const specs = [
  { label: "Driver Size", value: "50mm" },
  { label: "Frequency Range", value: "4Hz - 44kHz" },
  { label: "Impedance", value: "32 Ohm" },
  { label: "Weight", value: "265g" },
  { label: "Battery Life", value: "60 hours" },
  { label: "Bluetooth", value: "5.4 LE" },
  { label: "Codec Support", value: "LDAC / aptX HD" },
  { label: "ANC Depth", value: "-48dB" },
];

export function DetailsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const progress = -rect.top / (rect.height - window.innerHeight);
      setOffset(Math.max(0, Math.min(1, progress)));
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="details"
      ref={sectionRef}
      className="relative overflow-hidden py-28 px-6"
    >
      {/* Parallax background glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          transform: `translateY(${offset * -60}px)`,
          transition: "transform 0.1s linear",
        }}
      >
        <div className="absolute top-1/3 left-1/4 h-[500px] w-[500px] rounded-full bg-primary/[0.04] blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/3 h-[400px] w-[400px] rounded-full bg-primary/[0.03] blur-[80px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <h2
            className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl"
            style={{
              transform: `translateY(${offset * -20}px)`,
              transition: "transform 0.1s linear",
            }}
          >
            Engineered for{" "}
            <span className="neon-text">perfection</span>
          </h2>
          <p
            className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg"
            style={{
              transform: `translateY(${offset * -10}px)`,
              transition: "transform 0.1s linear",
            }}
          >
            Every component has been meticulously selected and tested across
            thousands of hours to deliver uncompromising audio fidelity.
          </p>
        </div>

        {/* Specs Grid */}
        <div className="grid gap-px rounded-2xl border border-border bg-border overflow-hidden sm:grid-cols-2 lg:grid-cols-4">
          {specs.map((spec) => (
            <SpecItem key={spec.label} spec={spec} />
          ))}
        </div>

        {/* Bottom highlight */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          <HighlightCard
            number="01"
            title="Aerospace-Grade Materials"
            description="Titanium headband and carbon-fiber reinforced ear cups deliver extreme durability at minimal weight."
          />
          <HighlightCard
            number="02"
            title="Memory Foam Comfort"
            description="Pressure-mapped ear cushions with cooling gel adapt to your unique ear geometry for all-day wearing."
          />
          <HighlightCard
            number="03"
            title="Studio-Grade DAC"
            description="32-bit / 384kHz digital-to-analog converter ensures every nuance of your music is faithfully reproduced."
          />
        </div>
      </div>
    </section>
  );
}

function SpecItem({ spec }: { spec: { label: string; value: string } }) {
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
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`flex flex-col items-center justify-center bg-card p-8 text-center transition-all duration-700 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      <p className="text-3xl font-bold neon-text md:text-4xl">{spec.value}</p>
      <p className="mt-2 text-sm text-muted-foreground">{spec.label}</p>
    </div>
  );
}

function HighlightCard({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
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
      className={`group rounded-2xl border border-border bg-card/50 p-7 transition-all duration-700 hover:border-primary/30 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <span className="text-sm font-medium text-primary/60">{number}</span>
      <h3 className="mt-3 text-base font-semibold text-foreground">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>
    </div>
  );
}
