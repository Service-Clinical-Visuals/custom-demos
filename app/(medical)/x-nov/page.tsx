import Header from "./_components/Header";
import HeroVideo from "./_components/HeroVideo";
import AboutUs from "./_components/AboutUs";
import MercuryHipImplant from "./_components/MercuryHipImplant";
import ProductRange from "./_components/ProductRange";
import Manufacturer from "./_components/Manufacturer";
import OurValues from "./_components/OurValues";
import OurEvents from "./_components/OurEvents";
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

      {/* Mercury Hip Implant Section */}
      <MercuryHipImplant />

      {/* Product Range Carousel Section */}
      <ProductRange />

      {/* Manufacturer Video Section */}
      <Manufacturer />

      {/* Our Values Section */}
      <OurValues />

      {/* Our Events Section */}
      <OurEvents />

      {/* Footer Section */}
      <Footer />

    </main>
  );
}
