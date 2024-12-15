import Image from "next/image";

export default function 
ThirdSection () {
  return (
    <>
      <div className="slideSection bg-[#FCF8F3]">
        <div className="slideText pt-9">

        <h4 className=" font-extrabold text-[2rem] ">50+ Beautiful rooms inspiration</h4>
        <p>
          Our designer already made a lot of beautiful prototipe of rooms that
          inspire you
        </p>
        <button className="bg-[#B88E2F] p-2">Exlore More</button>
        </div>
        <div className="slideImages">
        <Image src="/images/home/Rectangle 24.png" width={250} height={482}  alt="Picture of the author" />

        </div>
        <div className="slideImages">
        <Image src="/images/home/Rectangle 25.png"  width={250} height={482} alt="Picture of the author" />

        </div>
      </div>
    </>
  );
}