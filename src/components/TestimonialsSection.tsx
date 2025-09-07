import { Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    text: "These gujias taste exactly like my grandmother used to make! The fresh mawa and pure cow ghee make all the difference. Truly authentic taste.",
    author: "Priya Sharma",
    rating: 5,
    title: "Just Like Grandma's"
  },
  {
    id: 2,
    text: "I've been in the sweet business for 20 years, and Ghar Ka Swaad's quality is unmatched. No preservatives, pure ingredients, traditional methods.",
    author: "Rajesh Kumar",
    rating: 5,
    title: "Unmatched Quality"
  },
  {
    id: 3,
    text: "Finally, sweets I can give my children without worrying about preservatives. Pure, traditional, and absolutely delicious! Every bite is perfect.",
    author: "Meera Patel",
    rating: 5,
    title: "Pure & Traditional"
  }
];

export const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Love for
            <span className="bg-gradient-primary bg-clip-text text-transparent ml-3">
              Ghar Ka Swaad
            </span>
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-card rounded-2xl p-8 shadow-card hover:shadow-glow transition-all duration-300 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 left-6 w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                <Quote className="w-4 h-4 text-primary-foreground" />
              </div>

              {/* Content */}
              <div className="pt-12">
                <h3 className="text-lg font-bold text-foreground mb-3 uppercase tracking-wide">
                  {testimonial.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {testimonial.text}
                </p>
                
                {/* Author & Rating */}
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-foreground">
                    -{testimonial.author}
                  </span>
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <div
                        key={i}
                        className="w-2 h-2 bg-secondary rounded-full"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};