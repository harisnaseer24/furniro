import Hero from "@/components/hero";
import ProductSection from "@/components/ProductSection";
import SecondHero from "@/components/SecondHeroSection";
import ThirdSection from "@/components/ThirdHeroSection";


export default function Home() {
  return (
    <>
    <div className="mx-4">

    <Hero/>
    <SecondHero/>
    <ProductSection/>
     <ThirdSection/>
    </div>
    </>
  );
}
