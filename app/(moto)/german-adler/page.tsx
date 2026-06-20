"use client";

import Banner from "./_components/Banner";
import Header from "./_components/Header";
import About from "./_components/About";
import EngineOils from "./_components/EngineOils";
import Customers from "./_components/Customers";
import ProductCategories from "./_components/ProductCategories";
import Performance from "./_components/Performance";
import LatestNews from "./_components/LatestNews";
import Footer from "./_components/Footer";


export default function GermanAdlerHome() {
  return (
    <main className="relative min-h-screen overflow-y-hidden overflow-x-hidden bg-white">
      <Header />
      <Banner />
      <About />
      <EngineOils />
      <Customers />
      <ProductCategories />
      <Performance />
      <LatestNews />
      <Footer />
    </main>
  );
}
