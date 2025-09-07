import { Phone, Mail, MessageCircle, Instagram, Facebook } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-card relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-secondary rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column - Contact Info */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
              Connect With
              <span className="bg-gradient-primary bg-clip-text text-transparent ml-3">
                Us
              </span>
            </h2>

            {/* Contact Methods */}
            <div className="space-y-6 mb-8">
              
              {/* Phone Numbers */}
              <div>
                <h3 className="text-lg font-bold text-foreground mb-3 uppercase tracking-wide">
                  Phone Number
                </h3>
                <div className="space-y-2">
                  <a
                    href="tel:+919885619065"
                    className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors group"
                  >
                    <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    <span>+91 9885619065</span>
                  </a>
                  <a
                    href="tel:+919747329729"
                    className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors group"
                  >
                    <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    <span>+91 9747329729</span>
                  </a>
                </div>
              </div>

              {/* Email */}
              <div>
                <h3 className="text-lg font-bold text-foreground mb-3 uppercase tracking-wide">
                  Email Address
                </h3>
                <a
                  href="mailto:crunchboxinfo@gmail.com"
                  className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors group"
                >
                  <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span>crunchboxinfo@gmail.com</span>
                </a>
              </div>

              {/* WhatsApp */}
              <div>
                <a
                  href="https://wa.me/919885619065"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-3 bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition-colors group"
                >
                  <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-lg font-bold text-foreground mb-4 uppercase tracking-wide">
                Follow Us
              </h3>
              <div className="flex space-x-4">
                <a
                  href="https://instagram.com/gharkaswaad_2025"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-gradient-primary text-primary-foreground hover:shadow-glow hover:scale-110 transition-all duration-300"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://facebook.com/Ghar ka swaad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-gradient-secondary text-primary-foreground hover:shadow-glow hover:scale-110 transition-all duration-300"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - CTA */}
          <div className="text-center lg:text-right">
            <div className="bg-background rounded-3xl p-8 shadow-glow">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Ready to Crunch?
              </h3>
              <p className="text-muted-foreground mb-6">
                Experience the ultimate satisfaction with our premium snack collection. 
                Order now and taste the difference quality makes.
              </p>
              <div className="space-y-3">
                <Button 
                  variant="hero" 
                  size="lg" 
                  className="w-full"
                  onClick={() => {
                    const message = "Hi! I would like to place an order from Ghar Ka Swaad. Please share the menu and pricing.";
                    const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(message)}`;
                    window.open(whatsappUrl, '_blank');
                  }}
                >
                  Order Now
                </Button>
                <Button 
                  variant="outline-hero" 
                  size="lg" 
                  className="w-full"
                  onClick={() => {
                    const message = "Hi! Can you please share your complete menu with prices for Ghar Ka Swaad gujias?";
                    const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(message)}`;
                    window.open(whatsappUrl, '_blank');
                  }}
                >
                  View Menu
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};