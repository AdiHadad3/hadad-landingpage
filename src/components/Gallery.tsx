import { useState, useEffect } from 'react';

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const images = [
    {
      src: "/lovable-uploads/05a7ab05-bf86-4589-a43f-bff4a84ed662.png",
      alt: "Colorful gypsophila bouquet with pink and blue flowers"
    },
    {
      src: "/lovable-uploads/62a37028-e8ec-42ff-886b-f32b09aa0477.png", 
      alt: "White gypsophila flowers with newspaper wrapping"
    },
    {
      src: "/lovable-uploads/4bb8436f-e3a0-4160-b1a0-13a76168cb80.png",
      alt: "Diverse colored gypsophila flowers arrangement"
    },
    {
      src: "/lovable-uploads/c9601ca7-8b4f-4e8b-aad7-6c035ea36808.png",
      alt: "Pink and blue gypsophila flowers close-up"
    },
    {
      src: "/lovable-uploads/0f90b957-379e-47a2-8e5f-6ea99026b26e.png",
      alt: "Natural blue and pink gypsophila in field setting"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="w-full py-16 md:py-24 bg-gradient-section px-4 md:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Our Blooms
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the vibrant beauty of our hand-grown gypsophila, each petal carefully cultivated with love and precision.
          </p>
        </div>

        {/* Mobile: Single image slider */}
        <div className="md:hidden relative h-80 rounded-2xl overflow-hidden shadow-elegant">
          <img
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            className="w-full h-full object-cover transition-all duration-1000 ease-elegant"
          />
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-primary' : 'bg-white/50'
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>

        {/* Desktop: Grid layout */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative h-64 lg:h-72 rounded-2xl overflow-hidden shadow-elegant hover:shadow-glow transition-all duration-500"
              style={{
                animationDelay: `${index * 0.2}s`
              }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-elegant"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;