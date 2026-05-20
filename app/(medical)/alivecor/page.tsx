import Header from "./_components/Header";
import HeroVideo from "./_components/HeroVideo";
import AboutUs from "./_components/AboutUs";
import Kardia12L from "./_components/Kardia12L";
import OneCableDesign from "./_components/OneCableDesign";
import ComparisonVideo from "./_components/ComparisonVideo";
import OurCustomers from "./_components/OurCustomers";
import Newsroom from "./_components/Newsroom";
import Footer from "./_components/Footer";

export default function AlivecorPage() {
  return (
    <main className="min-h-screen flex flex-col relative">
      {/* 
        The Header component is configured to appear only after scrolling,
        allowing the HeroVideo to display in full screen initially.
      */}
      <Header />
      
      {/* Full screen video + overlay content (Transform Your Practice + Image space) */}
      <HeroVideo />
      
      {/* About Us and Our Solutions Section */}
      <AboutUs />

      {/* Kardia 12L Section */}
      <Kardia12L />

      {/* One Cable Design & Workflow Section */}
      <OneCableDesign />

      {/* Comparison to Conventional 12-lead Results Section */}
      <ComparisonVideo />

      {/* Our Customers Section */}
      <OurCustomers />

      {/* Newsroom Section */}
      <Newsroom />

      {/* Footer Section */}
      <Footer />
      
    </main>
  );
}
