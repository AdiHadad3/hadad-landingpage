const StorySection = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-background px-4 md:px-8">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold text-primary leading-tight animate-fade-in-up">
            From Our Farm to Your Hands – Nature's Finest, Hand-Grown with Precision
          </h2>
          
          <div className="text-lg md:text-xl text-muted-foreground leading-relaxed space-y-6 animate-fade-in-scale">
            <p>
              Nestled in a lush agricultural village, we specialize in cultivating premium gypsophila with full, radiant petals and vibrant hues. Our goal? Deliver breathtaking blooms tailored to your vision — in the color, style, and quality you deserve.
            </p>
            <p>
              With customizable color options and unmatched attention to detail, we're here to grow beauty that reflects your story.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;