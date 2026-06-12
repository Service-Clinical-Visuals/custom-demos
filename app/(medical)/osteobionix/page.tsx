import Header from "./_components/Header";
import HeroVideo from "./_components/HeroVideo";
import AboutUs from "./_components/AboutUs";
import WhyOsteobionix from "./_components/WhyOsteobionix";
import CmfImplants from "./_components/CmfImplants";
import ClinicalCases from "./_components/ClinicalCases";
import Technology from "./_components/Technology";
import CmfSolutions from "./_components/CmfSolutions";
import HelpSection from "./_components/HelpSection";
import Products from "./_components/Products";
import News from "./_components/News";
import SupportedBy from "./_components/SupportedBy";
import Footer from "./_components/Footer";

export default function OsteobionixPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col relative">
      <Header />
      <HeroVideo />
      <AboutUs />
      <WhyOsteobionix />
      <CmfImplants />
      <ClinicalCases />
      <Technology />
      <CmfSolutions />
      <HelpSection />
      <Products />
      <News />
      <SupportedBy />
      <Footer />
    </main>
  );
}
