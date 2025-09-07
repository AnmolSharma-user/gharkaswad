import { HeroCarousel } from '@/components/HeroCarousel';
import { Navigation } from '@/components/Navigation';
import { ProductShowcase } from '@/components/ProductShowcase';
import { AboutSection } from '@/components/AboutSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { ContactSection } from '@/components/ContactSection';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroCarousel />
        <ProductShowcase />
        <AboutSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      
      <FloatingWhatsApp />
      
      {/* Footer */}
      <footer className="bg-card border-t border-border py-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
            GHAR KA SWAAD
          </h2>
          <p className="text-muted-foreground text-sm mb-4">
            Premium handmade gujias crafted with pure ingredients and traditional love
          </p>
          <p className="text-xs text-muted-foreground">
            © 2025 Ghar Ka Swaad. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
