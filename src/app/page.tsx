import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { FeaturesSection } from "@/components/features-section";
import { DetailsSection } from "@/components/details-section";
import { FaqSection } from "@/components/faq-section";
import { Footer } from "@/components/footer";
import OrderForm from "@/components/OrderForm";
import BuySection from "@/components/BuySection";
import AIChat from "@/components/AIChat";

export default function Page() {
  return (
    <main className="relative min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <DetailsSection />
      <FaqSection />
      <OrderForm />
      <AIChat />
      <Footer />
    </main>
  );
}
