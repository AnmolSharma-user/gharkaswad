import { Star, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const products = [
  {
    id: 1,
    name: 'Multi Grains Gujiya',
    description: 'Wholesome blend of multiple grains with jaggery and nuts for a healthy indulgence',
    rating: 4.9,
    images: ['/placeholder-multigrain-1.jpg', '/placeholder-multigrain-2.jpg', '/placeholder-multigrain-3.jpg'],
    category: 'Healthy'
  },
  {
    id: 2,
    name: 'Coconut Gujiya',
    description: 'Fresh coconut filling with cardamom and rose petals for a tropical delight',
    rating: 4.8,
    images: ['/placeholder-coconut-1.jpg', '/placeholder-coconut-2.jpg', '/placeholder-coconut-3.jpg'],
    category: 'Traditional'
  },
  {
    id: 3,
    name: 'Chocolate Gujiya',
    description: 'Rich dark chocolate filling with roasted nuts for modern taste buds',
    rating: 4.9,
    images: ['/placeholder-chocolate-1.jpg', '/placeholder-chocolate-2.jpg', '/placeholder-chocolate-3.jpg'],
    category: 'Modern'
  },
  {
    id: 4,
    name: 'Dry Fruits Gujiya',
    description: 'Premium cashews, almonds, pistachios, and raisins with pure ghee',
    rating: 5.0,
    images: ['/placeholder-dryfruits-1.jpg', '/placeholder-dryfruits-2.jpg', '/placeholder-dryfruits-3.jpg'],
    category: 'Premium'
  }
];

const handleBookNow = (productName: string) => {
  const message = `Hi! I would like to book ${productName} from Ghar Ka Swaad. Please let me know the availability and delivery details.`;
  const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, '_blank');
};

export const ProductShowcase = () => {
  return (
    <section id="products" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Flavors of
            <span className="bg-gradient-primary bg-clip-text text-transparent ml-3">
              Authenticity
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every snack is a labor of love — crafted by hand, filled with fresh ingredients, 
            premium quality, and authentic flavors. The brand is a tribute to the generations 
            who have kept traditions alive.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-background rounded-2xl p-6 shadow-card hover:shadow-glow transition-all duration-500 hover:-translate-y-2"
            >
              {/* Product Image Carousel */}
              <div className="aspect-square rounded-xl mb-4 relative overflow-hidden">
                <Carousel className="w-full h-full">
                  <CarouselContent>
                    {product.images.map((image, index) => (
                      <CarouselItem key={index}>
                        <div className="aspect-square bg-gradient-secondary rounded-xl flex items-center justify-center relative overflow-hidden">
                          <div className="text-6xl opacity-20">
                            {product.name.includes('Multi Grains') ? '🌾' : 
                             product.name.includes('Coconut') ? '🥥' :
                             product.name.includes('Chocolate') ? '🍫' : '🌰'}
                          </div>
                          <div className="absolute bottom-2 right-2 bg-background/80 backdrop-blur-sm px-2 py-1 rounded-full text-xs text-muted-foreground">
                            {index + 1}/{product.images.length}
                          </div>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Carousel>
                <button className="absolute top-4 right-4 p-2 rounded-full bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 z-10">
                  <Heart className="w-4 h-4 text-primary" />
                </button>
              </div>

              {/* Product Info */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-primary font-semibold tracking-wide uppercase">
                    {product.category}
                  </span>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-secondary fill-current" />
                    <span className="text-sm text-muted-foreground">{product.rating}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {product.description}
                </p>
                
                <div className="pt-4">
                  <Button 
                    variant="hero" 
                    size="sm" 
                    className="w-full"
                    onClick={() => handleBookNow(product.name)}
                  >
                    Book Now
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button variant="outline-hero" size="lg">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};