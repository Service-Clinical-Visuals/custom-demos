"use client";

import Banner from "./_components/Banner";
import BenefitsSection from "./_components/carepumpbenefits";
import CarePumpMovePro from "./_components/carepumpmovepro";
import CarePumpNavbar from "./_components/CarePumpNavbar";
import Footer from "./_components/footer";
import LymphaticDrainageDevice from "./_components/lymphaticdrainagedevice";
import MoveProFeatures from "./_components/movepro";
import TherapyGuideSection from "./_components/pneumaticcompressio";
import ProductInnovation from "./_components/productinnovation";
import TestimonialSection from "./_components/testimonials";

export default function Home() {
  return (
    <main className=" text-white">
       <Banner />
       <LymphaticDrainageDevice/>
       <CarePumpMovePro/>
       <ProductInnovation/>
       <MoveProFeatures/>
       <BenefitsSection/>
       <TherapyGuideSection/>
       <TestimonialSection/>
       <Footer/>
    </main>
  );
}
