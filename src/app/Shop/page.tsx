import Image from "next/image";
import bannerImg from "@/images/banner2.png";
import { IoIosArrowForward } from "react-icons/io";
import ProductSection from "@/components/ProductSection";

export default function Shop() {
  return (
    <>
      <div className="relative">
        <Image src={bannerImg} alt="" />
        <div className="absolute top-[50%] left-[50%] flex justify-center flex-col items-center ">
          <h3 className="font-bold text-[1.5rem]">Shop</h3>
          <div className="flex items-center">
            <h3>Home</h3>
            <IoIosArrowForward />
            <h3>Shop</h3>
          </div>
        </div>
        </div>
        <div className="my-[50px]"></div>
        <ProductSection/>
        <ProductSection/>
            {/* Show More Button */}
      <div className="flex items-center justify-center mt-8 mb-12">
        <button className="productBtn text-[#fff] p-2 px-6 border-2  rounded-sm mx-1 border-[#B88E2F] bg-[#B88E2F]">
       1
        </button>
        <button className="productBtn text-[#B88E2F] p-2 px-6 border-2 rounded-sm mx-1 border-[#B88E2F] hover:bg-[#B88E2F] hover:text-white transition-all duration-300">
       2
        </button>
        <button className="productBtn text-[#B88E2F] p-2 px-6 border-2  rounded-sm mx-1 border-[#B88E2F] hover:bg-[#B88E2F] hover:text-white transition-all duration-300">
       3
        </button>
        <button className="productBtn text-[#B88E2F] p-2 px-6 border-2  mx-1  rounded-sm border-[#B88E2F] hover:bg-[#B88E2F] hover:text-white transition-all duration-300">
       next
        </button>
      </div>

       <div className=" mt-5 mb-5 flex justify-evenly items-center p-2 w-[100%] h-[8rem] bg-[#F9F1E7]">
              
              < div className="">
          
              <Image src="/images/trophy.png" width={40} height={40} alt="High Quality" />
              
                <h4 className="font-bold">High Quality</h4>
                <p>crafted from top materials</p>
              </div>
              <div>
              <Image src="/images/sure.png" width={40} height={40} alt="Warranty" />
                <h4 className="font-bold">Warranty Protection</h4>
                <p>Over 2 years</p>
              </div>
              <div>
              <Image src="/images/support.png" width={40} height={40} alt="support" />
                <h4 className="font-bold">Free Shipping</h4>
                <p>Order over 150 $</p>
              </div>
              <div>
              <Image src="/images/customer-support.png" width={40} height={40} alt="customer-support" />
                <h4 className="font-bold">24 / 7 Support</h4>
                <p>Dedicated support</p>
              </div>
            </div>
          
    </>
  );
}