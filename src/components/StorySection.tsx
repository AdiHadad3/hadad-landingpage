const StorySection = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-background px-4 md:px-8">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold text-primary leading-tight animate-fade-in-up">
            From Our Farm to Your Hands
          </h2>
          
          <div className="text-center space-y-6 animate-fade-in-scale">
            <h3 className="text-lg md:text-xl text-muted-foreground">
              Nature's Finest, Hand-Grown with Precision
            </h3>
            
            <div className="text-lg md:text-xl text-muted-foreground leading-relaxed space-y-3">
              <p>
                Nestled in a lush village, we grow premium gypsophila with vibrant hues and full petals.
              </p>
              <p>
                With custom colors and precise care, we deliver blooms that reflect your unique vision.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;