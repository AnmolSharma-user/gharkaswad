import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const FloatingWhatsApp = () => {
  const handleWhatsAppClick = () => {
    const message = "Hi! I would like to order fresh gujias from Ghar Ka Swaad. Please share the menu and availability.";
    const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 group">
      <Button
        onClick={handleWhatsAppClick}
        className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl transition-all duration-300"
        aria-label="Order via WhatsApp"
      >
        <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" />
      </Button>
      
      {/* Animated Text */}
      <div className="absolute right-16 top-1/2 -translate-y-1/2 bg-card border border-border rounded-lg px-4 py-2 text-sm font-medium text-foreground shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap">
        <span className="inline-block animate-pulse">Hey there, are you hungry?</span>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 w-2 h-2 bg-card border-r border-b border-border rotate-45"></div>
      </div>
    </div>
  );
};