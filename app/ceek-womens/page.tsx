import Image from "next/image";
import Banner from "./_components/Banner";
import About from "./_components/About";
import Vision from "./_components/Vision";
import Product from "./_components/Product";
import BottomVision from "./_components/BottomVision";
import Technology from "./_components/Technology";
import Innovation from "./_components/Innovation";
import Newsletter from "./_components/Newletter";
import Footer from "./_components/Footer";

export default function Home() {
  return (
    <>
      <Banner />
      <About />
      <Vision />
      <Product />
      <BottomVision />
      <Technology />
      <Innovation />
      <Newsletter />
      <Footer />
    </>
  );
}
