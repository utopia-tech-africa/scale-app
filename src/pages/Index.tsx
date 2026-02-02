import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import CorePillars from "@/components/CorePillars";
import FeaturedPrograms from "@/components/FeaturedPrograms";
import EventsSummits from "@/components/EventsSummits";
import Podcast from "@/components/Podcast";
import BlogResources from "@/components/BlogResources";
import AboutScaleApp from "@/components/AboutScaleApp";
import CommunityContact from "@/components/CommunityContact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <AboutScaleApp />
        <CorePillars />
        <FeaturedPrograms />
        <EventsSummits />
        {/* <Podcast /> */}
        <BlogResources />
        <CommunityContact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
