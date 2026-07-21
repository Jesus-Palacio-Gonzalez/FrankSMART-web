import Hero from "./Hero";
import AboutSection from "./AboutSection";
import ProjectsSection from "./ProjectsSection";
import OffersSection from "./OffersSection";
import SupportSection from "./SupportSection";
import Footer from "./Footer";

function App() {
  return (
    <div className="bg-background">
      <Hero />
      <AboutSection />
      <ProjectsSection />
      <OffersSection />
      <SupportSection />
      <Footer />
    </div>
  );
}

export default App;
