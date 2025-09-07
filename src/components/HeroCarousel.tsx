import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroSnacks1 from '@/assets/hero-snacks-1.jpg';
import heroSnacks2 from '@/assets/hero-snacks-2.jpg';
import heroSnacks3 from '@/assets/hero-snacks-3.jpg';

const slides = [
  {
    id: 1,
    image: heroSnacks1,
    title: 'GHAR KA SWAAD',
    subtitle: 'PURE TRADITION',
    description: '100% handmade, preservative-free gujias prepared with fresh mawa and pure cow ghee'
  },
  {
    id: 2,
    image: heroSnacks2,
    title: 'AUTHENTIC TASTE',
    subtitle: 'ARTISANAL CRAFT',
    description: 'Every gujia is a labor of love—crafted by hand, filled with premium dry fruits'
  },
  {
    id: 3,
    image: heroSnacks3,
    title: 'FRESH INGREDIENTS',
    subtitle: 'FAMILY RECIPE',
    description: 'Reviving the traditional taste of household Indian sweets with zero preservatives'
  }
];

export const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Slide Images */}
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="absolute inset-0 bg-gradient-hero opacity-80 z-10" />
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
              loading={index === 0 ? 'eager' : 'lazy'}
            />
            
            {/* Content Overlay */}
            <div className="absolute inset-0 z-20 flex items-center justify-center">
              <div className="text-center px-6 max-w-4xl">
                <div className="mb-4">
                  <span className="text-primary text-sm font-semibold tracking-[0.2em] uppercase">
                    Presenting
                  </span>
                </div>
                <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold text-foreground mb-4 tracking-tight px-4">
                  {slide.title}
                </h1>
                <h2 className="text-xl sm:text-3xl md:text-4xl font-light text-secondary mb-6 tracking-wide px-4">
                  {slide.subtitle}
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto px-4">
                  {slide.description}
                </p>
                <div className="flex gap-4 justify-center">
                  <Button 
                    variant="hero" 
                    size="lg"
                    onClick={() => {
                      const message = `Hi! I would like to order ${slide.title} gujias from Ghar Ka Swaad. Please share the details.`;
                      const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(message)}`;
                      window.open(whatsappUrl, '_blank');
                    }}
                  >
                    Order Now
                  </Button>
                  <Button 
                    variant="outline-hero" 
                    size="lg"
                    onClick={() => {
                      const message = "Hi! I would like to know more about Ghar Ka Swaad and your gujias. Please share your story and menu.";
                      const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(message)}`;
                      window.open(whatsappUrl, '_blank');
                    }}
                  >
                    Our Story
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-30 p-2 sm:p-3 rounded-full bg-background/10 backdrop-blur-sm border border-primary/30 text-foreground hover:bg-primary/20 transition-all duration-300"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-30 p-2 sm:p-3 rounded-full bg-background/10 backdrop-blur-sm border border-primary/30 text-foreground hover:bg-primary/20 transition-all duration-300"
        aria-label="Next slide"
      >
        <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-12 h-1 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-primary shadow-glow'
                : 'bg-foreground/30 hover:bg-foreground/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};