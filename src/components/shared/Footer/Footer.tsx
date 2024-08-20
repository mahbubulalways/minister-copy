import logo from "@/assets/logo/Minister_logo.png";
import Image from "next/image";
import Link from "next/link";
import Bkash from "@/assets/footer/bkash.svg";
import Rocket from "@/assets/footer/rocket.svg";
import Nagad from "@/assets/footer/nagad.svg";
import Okwallet from "@/assets/footer/okwallet.svg";
import Upay from "@/assets/footer/upay.svg";
import Mcash from "@/assets/footer/mcash.svg";
import Visa from "@/assets/footer/visa.svg";
import Master from "@/assets/footer/master.svg";
import Amex from "@/assets/footer/amex.svg";
import Brac from "@/assets/footer/brac.svg";
import Dbbl from "@/assets/footer/dbbl.svg";
import Asia from "@/assets/footer/asia.svg";
import Islamibank from "@/assets/footer/islamibank.svg";
import Paypal from "@/assets/footer/paypal.svg";
import Payoneer from "@/assets/footer/payoneer.svg";
const Footer = () => {
  const images = [
    // { src: Payoneer, alt: "payoneer" },
    // { src: Paypal, alt: "paypal" },
    { src: Visa, alt: "visa" },
    { src: Master, alt: "mastercard" },
    { src: Amex, alt: "american express" },
    { src: Okwallet, alt: "okwallet" },
    { src: Mcash, alt: "mcash" },
    { src: Bkash, alt: "bKash" },
    { src: Rocket, alt: "rocket" },
    { src: Nagad, alt: "nogod" },
    { src: Upay, alt: "upay" },
    { src: Brac, alt: "brac" },
    { src: Dbbl, alt: "dbbl" },
    { src: Asia, alt: "asia" },
    { src: Islamibank, alt: "Islami Bank" },
  ];

  return (
    <div>
      <div className="bg-tertiary py-5">
        <div className="container grid grid-cols-1 md:grid-cols-3 gap-5 items-center">
          <h1 className="text-xl font-semibold text-primary">
            Sign Up to Newsletter
          </h1>
          <div>
            <p className=" text-primary">
              Get all the latest information on Events, Sales and Offers.
            </p>
            <h1 className=" font-semibold text-primary">
              Stay tuned with Minister!!!.
            </h1>
          </div>
          <div className="flex items-center">
            <input
              type="search"
              className="bg-primary w-full py-3 outline-none rounded-l-full px-5 placeholder:text-[14px]"
              placeholder="Email Address"
            />
            <button className="bg-tertiaryLite py-3 text-primary px-5 rounded-r-full">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>
      <div className="container grid grid-cols-2 md:grid-cols-5 gap-5 items-center py-16">
        <div>
          {" "}
          <Image src={logo} alt="Logo" />
          <div>
            <p className="text-[12px] font-semibold text-gray-500">
              CALL US NOW:
            </p>{" "}
            <p className="font-semibold">09606 700 700</p>{" "}
            <p className="font-semibold">02-41081751/52</p>
          </div>
          <div className="pt-8">
            <p className="text-[12px] font-semibold text-gray-500">FOLLOW US</p>
          </div>
        </div>
        <div>
          <h3 className="font-bold mb-2 text-[12px]">E-MAIL ADDRESS</h3>
          <ul>
            <li className="text-[14px] md:text-[16px] font-bold">
              info@ministerbd.com
            </li>
            <li className="text-[14px] md:text-[16px] font-bold">
              ministerbd.info@gmail.com
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-2">Categories</h3>
          <ul className="text-[15px] flex flex-col gap-1">
            <li>
              <Link href="/categories/television">Television</Link>
            </li>
            <li>
              <Link href="/categories/refrigerator">Refrigerator</Link>
            </li>
            <li>
              <Link href="/categories/air-conditioner">Air Conditioner</Link>
            </li>
            <li>
              <Link href="/categories/washing-machine">Washing Machine</Link>
            </li>
            <li>
              <Link href="/categories/home-appliances">Home Appliances</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-2">About</h3>
          <ul className="text-[15px] flex flex-col gap-1">
            <li>
              <Link href="/about/about-us">About us</Link>
            </li>
            <li>
              <Link href="/about/gallery">Gallery</Link>
            </li>
            <li>
              <Link href="/about/contact-us">Contact us</Link>
            </li>
            <li>
              <Link href="/about/privacy-policy">Privacy policy</Link>
            </li>
            <li>
              <Link href="/about/terms-and-conditions">Terms & Conditions</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-2">Customer Care</h3>
          <ul className="text-[15px] flex flex-col gap-1">
            <li>
              <Link href="/customer-care/membership-card">Membership Card</Link>
            </li>
            <li>
              <Link href="/customer-care/my-account">My Account</Link>
            </li>
            <li>
              <Link href="/customer-care/wishlist">Wishlist</Link>
            </li>
            <li>
              <Link href="/customer-care/shopping-cart">Shopping Cart</Link>
            </li>
            <li>
              <Link href="/customer-care/store-locator">Store Locator</Link>
            </li>
            <li>
              <Link href="/customer-care/faqs">FAQs</Link>
            </li>
          </ul>
        </div>
      </div>
      <hr className="container" />
      <div className="pt-8 pb-10 container flex flex-col-reverse md:flex-row gap-5 justify-between items-center">
        <p className="text-[13px]">
          © Minister Hi-Tech Park Limited 2023, All Rights Reserved. Developed
          by Trends Bird Limited
        </p>

        <div className="container flex gap-2 justify-center flex-wrap items-center justify-items-center my-5">
          {images.map((image, index) => (
            <Image
              key={index}
              loading="lazy"
              src={image.src}
              alt={image.alt}
              width={60}
              className="bg-white h-10 rounded border"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
