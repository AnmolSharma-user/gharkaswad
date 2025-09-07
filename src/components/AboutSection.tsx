export const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-secondary/5">
      <div className="max-w-4xl mx-auto px-6">
        {/* Simple Header */}
        <div className="text-left mb-16">
          <h2 className="text-5xl md:text-6xl font-light text-foreground mb-8 tracking-wide">
            About <span className="font-bold">GHAR KA SWAAD</span>
          </h2>
        </div>

        {/* Content */}
        <div className="space-y-12">
          {/* Main Description */}
          <div className="max-w-3xl">
            <p className="text-xl md:text-2xl text-foreground leading-relaxed font-light">
              Ghar Ka Swaad is a premium, artisanal gujia brand built on the principle of 
              reviving the authentic taste of household Indian sweets.
            </p>
          </div>

          {/* Supporting Text */}
          <div className="max-w-2xl">
            <p className="text-lg text-muted-foreground leading-relaxed">
              In a market flooded with mass-produced sweets laden with preservatives, 
              Ghar Ka Swaad stands out by offering 100% handmade, preservative-free gujias 
              prepared with the same love and care as in a traditional family kitchen.
            </p>
          </div>

          {/* Mission Statement */}
          <div className="border-l-4 border-primary pl-8 py-4">
            <p className="text-lg text-foreground italic">
              "Our mission is to preserve culinary heritage, deliver purity, and make every day a celebration."
            </p>
          </div>

          {/* Simple Stats */}
          <div className="grid grid-cols-3 gap-8 pt-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wide">Handmade</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">0</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wide">Preservatives</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">Pure</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wide">Ingredients</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};