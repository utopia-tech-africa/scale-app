import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import CorePillars from "@/components/Programs";
import FeaturedPrograms from "@/components/Courses";
// import Podcast from "@/components/Podcast";
import BlogResources from "@/components/BlogResources";
import AboutScaleApp from "@/components/AboutScaleApp";
import CommunityContact from "@/components/CommunityContact";
import Footer from "@/components/Footer";
import PartnersBanner from "@/components/PartnersBanner";
import Founder from "@/components/Founder";
import Events from "@/components/Events";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <PartnersBanner />
        <Founder />
        <AboutScaleApp />
        <CorePillars />
        <FeaturedPrograms />
        <Events />
        {/* <Podcast /> */}
        <BlogResources />
        <CommunityContact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
