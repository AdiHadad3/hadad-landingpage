import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Gallery from "@/components/Gallery";
import StorySection from "@/components/StorySection";
import HighlightsSection from "@/components/HighlightsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <Gallery />
      <StorySection />
      <HighlightsSection />
      <Footer />
    </div>
  );
};

export default Index;
