import Hero from "./_components/Hero";
import About from "./_components/About";
import PatientPositioning from "./_components/PatientPositioning";
import Products from "./_components/Products";
import PrecisionSection from "./_components/PrecisionSection";
import Applications from "./_components/Applications";
import News from "./_components/News";
import Footer from "./_components/Footer";
import Navbar from "./_components/Navbar";

export default function FissoMedicalHome() {
  return (
    <main className="w-full relative bg-[#FFFFFF] min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <PatientPositioning />
      <Products />
      <PrecisionSection />
      <Applications />
      <News />
      <Footer />
    </main>
  );
}
