import Image from "next/image";
export function Services (){
    return(
      
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
    

    );
}