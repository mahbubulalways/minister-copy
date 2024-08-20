"use client";
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";
const products = [
  {
    _id: "1233234er132",
    name: "MINISTER M-165N DEEP BLUE",
    images: "https://i.ibb.co/0tFwc7p/m-165-deep-blue-1-600x600.jpg",
    price: "49,452",
    offerPrice: "40,990",
    mainCategory: "refrigerator",
    subCategory: "direct-cool-refrigerator",
    productType: "featured-product",
    sale: true,
    isDeleted: false,
  },
  {
    _id: "1233234er132",
    name: "MINISTER M-165N DEEP BLUE",
    images: "https://i.ibb.co/0tFwc7p/m-165-deep-blue-1-600x600.jpg",
    price: "49,452",
    offerPrice: "40,990",
    mainCategory: "refrigerator",
    subCategory: "direct-cool-refrigerator",
    productType: "featured-product",
    sale: true,
    isDeleted: false,
  },
  {
    _id: "1233234er132",
    name: "MINISTER M-165N DEEP BLUE",
    images: "https://i.ibb.co/0tFwc7p/m-165-deep-blue-1-600x600.jpg",
    price: "49,452",
    offerPrice: "40,990",
    mainCategory: "refrigerator",
    subCategory: "direct-cool-refrigerator",
    productType: "featured-product",
    sale: true,
    isDeleted: false,
  },
  {
    _id: "1233234er132",
    name: "MINISTER M-165N DEEP BLUE",
    images: "https://i.ibb.co/0tFwc7p/m-165-deep-blue-1-600x600.jpg",
    price: "49,452",
    offerPrice: "40,990",
    mainCategory: "refrigerator",
    subCategory: "direct-cool-refrigerator",
    productType: "featured-product",
    sale: true,
    isDeleted: false,
  },
  {
    _id: "1233234er132",
    name: "MINISTER M-165N DEEP BLUE",
    images: "https://i.ibb.co/0tFwc7p/m-165-deep-blue-1-600x600.jpg",
    price: "49,452",
    offerPrice: "40,990",
    mainCategory: "refrigerator",
    subCategory: "direct-cool-refrigerator",
    productType: "featured-product",
    sale: true,
    isDeleted: false,
  },
  {
    _id: "1233234er132",
    name: "MINISTER M-165N DEEP BLUE",
    images: "https://i.ibb.co/0tFwc7p/m-165-deep-blue-1-600x600.jpg",
    price: "49,452",
    offerPrice: "40,990",
    mainCategory: "refrigerator",
    subCategory: "direct-cool-refrigerator",
    productType: "featured-product",
    sale: true,
    isDeleted: false,
  },
  {
    _id: "1233234er132",
    name: "MINISTER M-165N DEEP BLUE",
    images: "https://i.ibb.co/0tFwc7p/m-165-deep-blue-1-600x600.jpg",
    price: "49,452",
    offerPrice: "40,990",
    mainCategory: "refrigerator",
    subCategory: "direct-cool-refrigerator",
    productType: "featured-product",
    sale: true,
    isDeleted: false,
  },
  {
    _id: "1233234er132",
    name: "MINISTER M-165N DEEP BLUE",
    images: "https://i.ibb.co/0tFwc7p/m-165-deep-blue-1-600x600.jpg",
    price: "49,452",
    offerPrice: "40,990",
    mainCategory: "refrigerator",
    subCategory: "direct-cool-refrigerator",
    productType: "featured-product",
    sale: true,
    isDeleted: false,
  },
];
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import ShowingProduct from "./ShowingProduct";
import ShowNewArrivals from "./ShowNewArrivals";
const NewArrivals = () => {
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "free-snap",
    slides: {
      perView: 2,
      spacing: 10,
      origin: "auto",
    },
    breakpoints: {
      "(min-width: 640px)": {
        slides: {
          perView: 3,
          spacing: 10,
        },
      },
      "(min-width: 768px)": {
        slides: {
          perView: 4,
          spacing: 10,
        },
      },
      "(min-width: 1024px)": {
        slides: {
          perView: 5,
          spacing: 10,
        },
      },
    },
  });
  return (
    <div className="container pb-10 md:pb-20">
      <h1 className="text-2xl font-bold pb-4 border-b-2"> New Arrivals</h1>
      <hr />

      <div className="flex items-center gap-5 justify-end pt-5">
        <button
          onClick={() => slider.current?.prev()}
          className="bg-tertiary text-white p-1 rounded-full"
        >
          <IoIosArrowRoundBack className="w-12 h-12" />
        </button>
        <button
          onClick={() => slider.current?.next()}
          className="border border-tertiary rounded-full p-1"
        >
          <IoIosArrowRoundForward className="w-12 h-12" />
        </button>
      </div>
      <div
        // className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-3 "
        ref={sliderRef}
        className="keen-slider h-full py-5"
      >
        {products.map((product) => (
          <ShowNewArrivals key={product?._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default NewArrivals;
