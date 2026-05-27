import Header from "./_components/Header";
import HeroVideo from "./_components/HeroVideo";
import AboutUs from "./_components/AboutUs";
import VascularGraft from "./_components/VascularGraft";
import MedicalServices from "./_components/MedicalServices";
import GrowWithUs from "./_components/GrowWithUs";
import CardiovascularSolutions from "./_components/CardiovascularSolutions";
import MeetOurTeam from "./_components/MeetOurTeam";
import News from "./_components/News";
import Footer from "./_components/Footer";

export default function VascularFlowPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Header />
      <HeroVideo />
      <AboutUs />
      <VascularGraft />
      <MedicalServices />
      <GrowWithUs />
      <CardiovascularSolutions />
      <MeetOurTeam />
      <News />
      <Footer />
    </main>
  );
}
