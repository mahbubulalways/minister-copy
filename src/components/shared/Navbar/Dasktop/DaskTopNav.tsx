import Image from "next/image";
import logo from "@/assets/logo/Minister_logo.png";
import SearchBar from "./SearchBar";
import { GoPerson } from "react-icons/go";
import { FaRegHeart } from "react-icons/fa";
import { IoBagOutline } from "react-icons/io5";
import Link from "next/link";
import { AiOutlineSearch } from "react-icons/ai";
import Mobile_Side_Nav from "../Mobile/Mobile_Side_Nav";
import PersonIcon from "./PersonIcon";
import CartIcon from "./CartIcon";
import dynamic from "next/dynamic";

const DeskTopNav = () => {
  const PersonIcon = dynamic(() => import("./PersonIcon"), { ssr: false });
  return (
    <>
      <div className="bg-tertiary py-3 text-primary/90 text-[11px] ">
        <div className="container flex items-center justify-end gap-5">
          <h1 className="text-center font-semibold tracking-wide hidden md:block">
            WELCOME TO MINISTER HI-TECH PARK LIMITED
          </h1>
          <div className="hidden md:block">
            <div className=" font-semibold flex items-center gap-5">
              <p>Showrooms</p> <p>Sign In</p> <p>Contact Us</p>
              <p>Create an Account</p>
              <div className="border-l-[1px] mx-auto h-5 border-tertiaryLite"></div>
            </div>
          </div>
          <div className="font-semibold flex items-center gap-5">
            <p>Membership Card</p>
            <p> About us</p> <p>Gallery</p>
          </div>
        </div>
      </div>
      <div className="bg-tertiary">
        <div className="container w-full  h-[1px] bg-[#1fd2db] "></div>
      </div>
      <div className=" bg-secondary py-1">
        <div className="container flex items-center justify-between  gap-6">
          <div className="md:hidden block">
            <Mobile_Side_Nav />
          </div>
          <Link href={"/"} className="w-[150px] md:w-[250px]">
            <Image src={logo} alt="logo" className="w-full" />
          </Link>
          <button className="md:hidden block">
            <AiOutlineSearch className="text-primary h-8 w-8" />
          </button>
          <div className="w-full hidden md:block">
            <SearchBar />
          </div>
          <div className="flex items-center  gap-6">
            <PersonIcon />
            <FaRegHeart className="text-primary h-8 w-8" />
            <CartIcon />
          </div>
        </div>
      </div>
    </>
  );
};

export default DeskTopNav;
