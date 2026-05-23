import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { ProductShowcase } from "@/components/product-showcase";
import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

export default function Page() {
  return (
    <main className="bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <ProductShowcase />
      <AboutSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
