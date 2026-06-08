
import AboutSection from "./_components/AboutUs";
import FluorescenceSection from "./_components/Fluotescene";
import Footer from "./_components/Footer";
import Header from "./_components/Header";
import HeroBanner from "./_components/HeroSection";
import HighPerformanceSection from "./_components/HighPerformance";
import ProductCategorySection from "./_components/ProductCategory";
import QualityAssuranceSection from "./_components/QualityAssurance";
import TrustedClientsSection from "./_components/TrustedClients";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col relative">
      <Header />

      <HeroBanner />

      <AboutSection />

      <HighPerformanceSection />

      <QualityAssuranceSection />

      <FluorescenceSection />

      <TrustedClientsSection />

      <ProductCategorySection />

      <Footer />
    </main>
  );
}
