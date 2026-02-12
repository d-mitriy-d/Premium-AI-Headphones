"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "How does the AI-powered noise cancellation work?",
    answer:
      "Our proprietary Neural Silence Engine uses a dedicated on-device AI processor to analyze over 500,000 sound samples per second. It distinguishes between unwanted ambient noise, human speech, and your music, applying targeted cancellation that adapts in real time to your environment — whether you're on a plane, in a cafe, or walking down the street.",
  },
  {
    question: "What devices are compatible with the AURA X1?",
    answer:
      "The AURA X1 is compatible with any Bluetooth 5.0+ device including iOS, Android, Windows, macOS, and Linux. The AI-powered multipoint connection lets you seamlessly switch between up to three paired devices. A 3.5mm analog cable is also included for wired listening.",
  },
  {
    question: "How long does the battery last on a single charge?",
    answer:
      "With ANC enabled and AI features active, you'll get up to 60 hours of continuous playback. With ANC off, battery life extends to approximately 80 hours. A 10-minute quick charge provides 5 hours of listening — perfect for when you're in a rush.",
  },
  {
    question: "Is there a companion app?",
    answer:
      "Yes. The AURA Studio app (iOS & Android) unlocks the full potential of the X1. You can customize your AI sound profile, adjust EQ curves, configure spatial audio settings, manage firmware updates, and access detailed listening analytics.",
  },
  {
    question: "What's included in the 3-year warranty?",
    answer:
      "Our comprehensive warranty covers all manufacturing defects, battery degradation beyond 20%, and driver failures. We also include one free replacement of ear cushions and headband padding within the warranty period. Accidental damage protection is available as an add-on.",
  },
  {
    question: "Can I use them for professional music production?",
    answer:
      "Absolutely. The AURA X1 features a studio-grade 32-bit DAC, flat reference monitoring mode, and ultra-low latency wired connection specifically designed for professional use. Many producers and mixing engineers have already adopted the X1 as their go-to monitoring headphone.",
  },
];

export function FaqSection() {
  return (
    <section id="faq" className="relative py-28 px-6">
      <div className="mx-auto max-w-3xl">
        {/* Section Header */}
        <div className="mb-14 text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-medium tracking-widest uppercase text-primary">
            <HelpCircle className="h-3.5 w-3.5" />
            FAQ
          </span>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-balance text-foreground sm:text-4xl">
            Questions &{" "}
            <span className="neon-text">Answers</span>
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-muted-foreground">
            Everything you need to know about the AURA X1. Can't find your
            answer? Reach out to our team.
          </p>
        </div>

        {/* Accordion */}
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={`faq-${index}`}
              value={`faq-${index}`}
              className="rounded-xl border border-border bg-card/50 px-6 transition-colors data-[state=open]:border-primary/30 data-[state=open]:bg-card"
            >
              <AccordionTrigger className="py-5 text-left text-sm font-semibold text-foreground hover:no-underline hover:text-primary transition-colors sm:text-base [&[data-state=open]]:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-sm leading-relaxed text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
