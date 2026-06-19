"use client";

import Header from "./_components/Header";
import About from "./_components/About";
import Banner from "./_components/Banner";
import Product from "./_components/Product";
import OurProducts from "./_components/OurProducts";
import Ambassadors from "./_components/Ambassadors";
import InsideProduct from "./_components/InsideProduct";
import Testimonials from "./_components/Testimonials";
import Footer from "./_components/Footer";

export default function LucasOilPage() {
  return (
    <main className="flex min-h-screen overflow-y-hidden overflow-x-hidden flex-col w-full">
      <Header />
      <Banner />
      <About />
      <Product />
      <OurProducts />
      <Ambassadors />
      <InsideProduct />
      <Testimonials />
      <Footer />
    </main>
  );
}
