const HeroSection = () => {
  return (
    <section className="w-full bg-gradient-hero py-16 md:py-24 px-4 md:px-8">
      <div className="container mx-auto text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary leading-tight">
            Artistry in Every Petal
          </h1>
          
          <div className="text-lg md:text-xl lg:text-2xl text-foreground space-y-4 max-w-3xl mx-auto">
            <p className="font-medium">
              30 years of a Family-Owned Business that Committed to Beauty, Quality, and Heartfelt Service
            </p>
            <p className="text-muted-foreground">
              In our place, craftsmanship meets care.
            </p>
            <p className="text-muted-foreground">
              We treat every bouquet as if it's made for our own family.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;