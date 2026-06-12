import Header from "./_components/Header";
import Hero from "./_components/Hero";
import SystemSolutions from "./_components/SystemSolutions";
import AboutEndoscopy from "./_components/AboutEndoscopy";
import ProductShowcase from "./_components/ProductShowcase";
import ProductCollections from "./_components/ProductCollections";
import SystemSolutionsCentric from "./_components/SystemSolutionsCentric";
import SystemSolutionsSplit from "./_components/SystemSolutionsSplit";
import ManufacturingFacility from "./_components/ManufacturingFacility";
import Endoscopy3D from "./_components/Endoscopy3D";
import ContactCta from "./_components/ContactCta";
import NewsEvents from "./_components/NewsEvents";
import Footer from "./_components/Footer";
import { theme } from "./_components/theme";

export default function XionMedicalPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      
      {/* Newly implemented sections */}
      <SystemSolutions />
      <AboutEndoscopy />
      <ProductShowcase />
      <ProductCollections />
      <SystemSolutionsCentric />
      <SystemSolutionsSplit />
      <ManufacturingFacility />
      <Endoscopy3D />
      <ContactCta />
      <NewsEvents />
      
      <Footer />
    </main>
  );
}
