import Banner from "./_components/Banner";
import About from "./_components/About";
import ProductView from "./_components/ProductView";
import OurParts from "./_components/OurParts";
import QualityStandard from "./_components/QualityStandard";
import DpfTechnologies from "./_components/DpfTechnologies";
import OurSites from "./_components/OurSites";
import LargestRange from "./_components/LargestRange";
import LatestNews from "./_components/LatestNews";
import Footer from "./_components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col w-full min-h-screen bg-[#f8f9fd]">
      <Banner />
      <About />
      <ProductView />
      <OurParts />
      <QualityStandard />
      <DpfTechnologies />
      <OurSites />
      <LargestRange />
      <LatestNews />
      <Footer />
    </main>
  );
}
