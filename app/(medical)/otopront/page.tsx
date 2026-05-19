import Header from "./_components/Header";
import HeroVideo from "./_components/HeroVideo";
import OurIdentity from "./_components/OurIdentity";
import PracticePlanning from "./_components/PracticePlanning";
import FlexibleEndoscopes from "./_components/FlexibleEndoscopes";
import PerformanceEndoscopes from "./_components/PerformanceEndoscopes";
import History from "./_components/History";
import AdvancedDiagnostics from "./_components/AdvancedDiagnostics";
import LatestNews from "./_components/LatestNews";
import Footer from "./_components/Footer";
import { theme } from "./_components/theme";

export default function OtoprontPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      {/* 
        The Header component is configured to appear only after scrolling,
        allowing the HeroVideo to display in full screen initially.
      */}
      <Header />
      
      {/* Full screen video placeholder */}
      <HeroVideo />
      
      {/* Our Identity section */}
      <OurIdentity />
      
      {/* Practice Planning Section */}
      <PracticePlanning />
      
      {/* Flexible Endoscopes Section */}
      <FlexibleEndoscopes />
      
      {/* Performance Endoscopes Section */}
      <PerformanceEndoscopes />
      
      {/* History Section */}
      <History />

      {/* Advanced Diagnostics Section */}
      <AdvancedDiagnostics />
      
      {/* Latest News Section */}
      <LatestNews />
      
      {/* Footer Section */}
      <Footer />
    </main>
  );
}
