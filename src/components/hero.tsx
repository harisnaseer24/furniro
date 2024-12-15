import Image from "next/image";

export default function Hero() {
  return (
    <>
    {/* Hero Section */}
    <div className="relative w-full h-[63rem]">
      <Image
        src="/images/home/BannerHome.png"
        width={1440}
        height={100}
        alt="Hero Banner"
        className=""
      />
      <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#FFF3E3] rounded-lg p-8 lg:p-16 w-[45%] max-w-3xl text-center lg:text-left lg:top-[10%] lg:left-[50%] lg:transform-none">
        <h6 className="text-lg font-bold uppercase">New Arrival</h6>      
        <h3 className="text-3xl lg:text-5xl font-extrabold text-[#b88e2f] leading-snug mt-4">
          Discover Our <br /> New Collection
        </h3>
        <p className="text-base lg:text-lg text-gray-700 mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque dolore
        </p>
        <button className="mt-6 bg-[#b88e2f] text-white py-2 px-8 rounded-lg hover:bg-[#a67b27] transition-all">
          BUY NOW
        </button>
      </div>
    </div>
  </>
  
  );
}