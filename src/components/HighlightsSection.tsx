import { Flower, Heart, Award } from 'lucide-react';

const HighlightsSection = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-gradient-section px-4 md:px-8">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {/* 30+ Years Experience */}
          <div className="text-center space-y-4 animate-fade-in-scale">
            <div className="relative">
              <div className="text-6xl md:text-7xl font-bold text-primary animate-float">
                30+
              </div>
              <div className="absolute -top-2 -right-2">
                <Award className="w-8 h-8 text-primary-glow" />
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl md:text-2xl font-semibold text-primary">
                Years of Excellence
              </h3>
              <p className="text-muted-foreground">
                Three decades of perfecting our craft and serving customers with passion
              </p>
            </div>
          </div>

          {/* Founded 1992 */}
          <div className="text-center space-y-4 animate-fade-in-scale" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              <div className="text-6xl md:text-7xl font-bold text-primary animate-float" style={{ animationDelay: '2s' }}>
                1992
              </div>
              <div className="absolute -top-2 -right-2">
                <Heart className="w-8 h-8 text-primary-glow" />
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl md:text-2xl font-semibold text-primary">
                Family Legacy
              </h3>
              <p className="text-muted-foreground">
                Since our founding, we've remained a trusted family business
              </p>
            </div>
          </div>

          {/* Quality Symbol */}
          <div className="text-center space-y-4 animate-fade-in-scale" style={{ animationDelay: '0.4s' }}>
            <div className="relative">
              <div className="w-24 h-24 md:w-28 md:h-28 mx-auto bg-gradient-primary rounded-full flex items-center justify-center animate-float" style={{ animationDelay: '4s' }}>
                <Flower className="w-12 h-12 md:w-14 md:h-14 text-white" />
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl md:text-2xl font-semibold text-primary">
                Handcrafted Quality
              </h3>
              <p className="text-muted-foreground">
                Every bloom is carefully tended with natural, traditional methods
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HighlightsSection;