"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Product_Details_Image from "../Common/Product_Details_Image";
import Purchase_Options from "./Purchase_Options";
import Product_Specifications from "../Common/Product_Specifications";
import Product_Side_Details from "../Common/Product_Side_Details";
import { getFirstStringSpecifications } from "@/components/utils/getFirstStringSpecifications";
export interface TVSpecifications {
  _id: string;
  Color: string;
  ScreenSize: string;
  Resolution: string;
  ViewingAngle: string;
  SoundSystem: string;
  Source: string[];
  SupportedVideoFormat: string[];
  BodyDesign: string;
  BanglaSupportLanguage: string;
  BacklightAdjustable: string;
  PictureMode: string[];
  PowerConsumption: string;
  TVSystem: string[];
  BacklightType: string;
  ColorDepth: string;
  AspectRatio: string[];
  ThunderProtective: string;
  Remote: string;
  WallMountBracket: string;
  ContrastRatio: string;
  Brightness: string;
  Speaker: string;
  ChannelProgram: string;
  Warranty: string;
  __v: string;
}
// const tvSpecifications: TVSpecifications = {
//   Color: "Full Black",
//   ScreenSize: "610 mm",
//   Resolution: "1366 x 768 (HD)",
//   ViewingAngle: "178°/178°",
//   SoundSystem: "Yes",
//   Source: ["ATV", "VGA", "HDMI", "USB"],
//   SupportedVideoFormat: ["3gp", "MP4"],
//   BodyDesign: "Slim",
//   BanglaSupportLanguage: "Yes",
//   BacklightAdjustable: "Yes",
//   PictureMode: [
//     "Standard",
//     "Soft Standard",
//     "Natural",
//     "Soft Natural",
//     "Cinema",
//     "Action",
//     "User",
//   ],
//   PowerConsumption: "35 Watt",
//   TVSystem: ["PAL", "NTSC", "BG", "DK", "I", "M"],
//   BacklightType: "D-LED",
//   ColorDepth: "16.7 M",
//   AspectRatio: ["16:9", "4:3", "Zoom1", "Zoom2"],
//   ThunderProtective: "Yes",
//   Remote: "1",
//   WallMountBracket: "Free",
//   ContrastRatio: "1000:1",
//   Brightness: "300 Cd/m2",
//   Speaker: "Two Integrated Speaker (Back) bottom Side",
//   ChannelProgram: "1~199 (tuner-199)",
//   Warranty:
//     "Panel: 1 Year, Parts: 1 Year, Free Service: 7 Years, Condition Apply: Yes",
// };

export type TProduct = {
  _id: string;
  name: string;
  images: string[];
  price: number;
  offerPrice: number;
  mainCategory: string;
  subCategory: string;
  availability: string;
  productType: string;
  sale: boolean;
  isDeleted: boolean;
  rating: number;
  selling: number;
};

// const product = {
//   _id: "1233234er1",
//   name: "Minister M-24 DELUXE LED TV (MI24DX16G)",
//   images: [
//     "https://i.ibb.co/TrXvdFd/minister-deluxe-led-tv-modelmi24dx16g-01.jpg",
//     "https://ministerbd.com/media/catalog/product/cache/c212918e99dbb8be7b8918ef8881d0e9/0/1/01-04_9.jpg",
//     "https://ministerbd.com/media/catalog/product/cache/c212918e99dbb8be7b8918ef8881d0e9/0/1/01-04_12.jpg",
//     "https://i.ibb.co/TrXvdFd/minister-deluxe-led-tv-modelmi24dx16g-01.jpg",
//     "https://i.ibb.co/TrXvdFd/minister-deluxe-led-tv-modelmi24dx16g-01.jpg",
//   ],
//   price: "49,452",
//   offerPrice: "40,990",
//   mainCategory: "television",
//   subCategory: "smart-led-tv",
//   availability: "In stock",
//   productType: "featured-product",
//   sale: false,
//   isDeleted: false,
//   rating: 3.6,
//   selling: 2,
// };

const Television_Details = ({ product }: { product: any }) => {
  const [firstSixString, setFirstSixString] = useState<[string, string][]>([]);
  useEffect(() => {
    setFirstSixString(getFirstStringSpecifications(product?.specifications, 6));
  }, [product?.specifications]);
  return (
    <div className="container pb-20">
      <div className="grid grid-cols-1 md:grid-cols-7 gap-10 pt-10">
        <div className=" md:col-span-3">
          <Product_Details_Image images={product.images} />
        </div>
        <div className="md:col-span-4">
          <Product_Side_Details
            product={product}
            firstSixString={firstSixString}
          />
          <div className="pt-3">
            <Purchase_Options />
          </div>
        </div>
      </div>

      <div className=" mx-auto pt-10">
        <h1 className="pb-5">Specification</h1>
        <Product_Specifications obj={product?.specifications} />

        <div className="pt-10 text-gray-700">
          <p>Note:</p>
          <ul className="list-disc list-inside text-xl flex pt-4 flex-col gap-2 font-bold">
            <li>
              Customer must pay 2.5% extra charge for using their credit or
              debit card.
            </li>
            <li>
              The above price, design, and specifications are subject to change
              without prior notice for product improvement.
            </li>
            <li>Offer price: Only for cash sales.</li>
            <li>Home Delivery Charge: Applicable.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Television_Details;
