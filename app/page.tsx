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
    {/* <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white text-center px-4">
  <h1 className="text-4xl md:text-6xl font-bold mb-4">
    Server Under Maintenance
  </h1>

  <p className="text-lg text-gray-300 max-w-xl">
    We are currently improving our website to serve you better.
    Please check back again shortly.
  </p>
</div> */}
    </main>
  );
}
