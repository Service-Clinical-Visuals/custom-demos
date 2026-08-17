import React from 'react';
import Header from './_components/Header';
import Banner from './_components/Banner';
import About from './_components/About';
import Products from './_components/Products';
import Technology from './_components/Technology';
import Wellness from './_components/Wellness';
import BetterCare from './_components/BetterCare';
import Authenticity from './_components/Authenticity';
import FutureHealthcare from './_components/FutureHealthcare';
import Testimonials from './_components/Testimonials';
import Questions from './_components/Questions';
import Footer from './_components/Footer';

export default function TuningElementHomePage() {
  return (
    <main className="w-full min-h-screen bg-black">
      <Header />
      <Banner />
      <About />
      <Products />      
      <Technology />      
      <Wellness />
      <Questions />
      <BetterCare />
      <Authenticity />
      <FutureHealthcare />
      <Testimonials />
      <Footer />
    </main>
  );
}
