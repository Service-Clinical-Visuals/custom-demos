
import AboutSection from "./_components/AboutUs";
import ChooseApplicationSection from "./_components/ChooseApplication";
import FluorescenceSection from "./_components/Fluotescene";
import Footer from "./_components/Footer";
import Header from "./_components/Header";
import HeroBanner from "./_components/HeroSection";
import HighPerformanceSection from "./_components/HighPerformance";
import ProductCategorySection from "./_components/ProductCategory";
import ProductsSection from "./_components/Products";
import QualityAssuranceSection from "./_components/QualityAssurance";
import TrustedClientsSection from "./_components/TrustedClients";
import WhyChooseUsSection from "./_components/WhyChooseUs";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col relative">
      <Header />

      <HeroBanner />

      <AboutSection />

      <HighPerformanceSection />

      <QualityAssuranceSection />

      <ChooseApplicationSection />

      <FluorescenceSection />

      <ProductsSection />

      <ProductCategorySection />

      <WhyChooseUsSection />

      <TrustedClientsSection />

      <Footer />
    </main>
  );
}