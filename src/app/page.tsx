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
     {/* Product Section Header */}
     <div className="product">
        <h2 className="text-center p-4 font-bold text-3xl md:text-5xl">Our Products</h2>
      </div>
    <ProductSection/>
        {/* Show More Button */}
        <div className="flex items-center justify-center mt-8 mb-12">
        <button className="productBtn text-[#B88E2F] p-2 px-6 border-2 border-[#B88E2F] hover:bg-[#B88E2F] hover:text-white transition-all duration-300">
          Show More
        </button>
      </div>
     <ThirdSection/>
    </div>
    </>
  );
}
