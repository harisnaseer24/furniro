import Image from "next/image";
// import Logo from ".public/images/Logo.png";
import Link from "next/link";
import { MdPersonOutline } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { GoHeart } from "react-icons/go";
import { AiOutlineShoppingCart } from "react-icons/ai";

export default function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="logo flex items-center">


        <Image src="/images/Logo.png" width={50} height={32} alt="Picture of the author" />
        <h1 className="text-[32px]	font-[700]">Furniro</h1>
        </div>

        <div className="navbtns">
        <ul className="head">
          <Link href={"/"}>
            <li>Home</li>
          </Link>
          <Link href={"/shop"}>
            <li>Shop</li>
          </Link>
          <Link href={"/blog"}>
            <li>Blog</li>
          </Link>
          <Link href={"/contact"}>
            <li>Contact</li>
          </Link>
        </ul>
        </div>

        <div className="icons">
        <MdPersonOutline />
        <CiSearch />
        <GoHeart />
        <AiOutlineShoppingCart />

        </div>


      </div>
    </>
  );
}