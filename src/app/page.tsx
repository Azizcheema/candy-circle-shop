import { Header } from "@/components/three-wishes/Header";
import { HeroSection } from "@/components/three-wishes/HeroSection";
import { TaglineSection } from "@/components/three-wishes/TaglineSection";
import { ProductCategories } from "@/components/three-wishes/ProductCategories";
import { KinderTreatsBanner } from "@/components/three-wishes/KinderTreatsBanner";
import { WhereToBuy } from "@/components/three-wishes/WhereToBuy";
import { BetterForYou } from "@/components/three-wishes/BetterForYou";
import { Newsletter } from "@/components/three-wishes/Newsletter";
import { Footer } from "@/components/three-wishes/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <HeroSection />
        <TaglineSection />
        <ProductCategories />
        <KinderTreatsBanner />
        <WhereToBuy />
        <BetterForYou />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
