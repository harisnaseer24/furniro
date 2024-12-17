import Image from "next/image";
import bannerImg from "@/images/banner2.png";
import { IoIosArrowForward } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { TbPhoneFilled } from "react-icons/tb";
import { TbClockFilled } from "react-icons/tb";
import { Services } from "@/components/service";



export default function Contact () {
  return (
    <>
      <div className="relative">
        <Image src={bannerImg} alt="" />
        <div className="absolute top-[50%] left-[50%] flex justify-center flex-col items-center ">
          <h3 className="font-bold text-[1.5rem]">Contact</h3>
          <div className="flex items-center">
            <h3>Home</h3>
            <IoIosArrowForward />
            <h3>contact</h3>
          </div>
        </div>
        {/* <div> */}
        {/* </div> */}
      </div>
      <div className="text-center w-15 mt-3">
        <h2 className="font-extrabold text-[2rem]">Get In Touch With Us</h2>
        <p>
          For More Information About Our Product & Services. Please Feel Free To Drop Us<br /> An Email. Our Staff Always Be There To Help You Out. Do Not
          Hesitate!
        </p>
      </div>
      <div className="flex justify-evenly leading-8  ">
        <div className="w-[14rem] mt-6  ">
        <div className="flex  ">
                    <div>


                <FaLocationDot/> 
                    </div>
                    <div>

            <h2 className="font-bold">Address</h2>
            <p>236 5th SE Avenue, New York NY10000, United States</p>
                    </div>

        </div>
        <div className="flex">
            <div>

            <TbPhoneFilled/>
            </div>
            <div>

            <h2 className="font-bold">Phone</h2>
                <p>Mobile: +(84) 546-6789 </p>
                <p>Hotline: +(84) 456-6789</p>
            </div>
        </div>
        <div className="flex">
            <div>

            <TbClockFilled />
            </div>
            <div>

            <h2 className="font-bold">Working Time</h2>
            <p>Monday-Friday: 9:00 - 22:00 </p>
            <p>Saturday-Sunday: 9:00 - 21:00</p>
            </div>

        </div>

        </div>

        <div className="mt-6 ">
            <form className="flex  flex-col ... " action="" >
                <label htmlFor="">Name</label>
                <input type="text" className="border-gray-200 border-2 p-2 rounded-md w-[17rem]" placeholder="name" />
                <label htmlFor="">Email</label>
                <input type="text" className="border-gray-200 border-2 p-2 rounded-md w-[17rem]" placeholder="email" />
                <label htmlFor="">Subject</label>
                <input type="text" className="border-gray-200 border-2 p-2 rounded-md w-[17rem]" placeholder="optional" />
                <label htmlFor="">Message</label>
                <input type="text" className="border-gray-200 border-2 p-2 rounded-md w-[17rem]" placeholder="Hi! i’d like to ask about" />
                <button className="self-start bg-[#B88E2F] text-white mt-6 p-3 w-[7rem] rounded-md">Submit</button>
            </form>
        </div>
        
      </div>
     <Services/>
    </>
  );
}