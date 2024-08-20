"use client";
import { getFirstStringSpecifications } from "@/components/utils/getFirstStringSpecifications";
import { TRefrigerator } from "@/types";
import { useEffect, useState } from "react";
import Product_Details_Image from "../Common/Product_Details_Image";
import Product_Side_Details from "../Common/Product_Side_Details";
import Purchase_Options from "../Television_Details/Purchase_Options";
import Product_Specifications from "../Common/Product_Specifications";
import Product_Details_Note from "../Common/Product_Details_Note";

// const refrigeratorData: TRefrigerator = {
//   freezerCapacity: "40%",
//   refrigeratorCapacity: "60%",
//   coolingType: "Frost",
//   doorQuantity: "2",
//   freezerType: "Top Freezer",
//   doorLock: "Yes",
//   refrigerant: "R-600a",
//   refrigerantCharge: "38g", // in grams
//   blowingAgentOfPUFoam: "Cyclopentane",
//   innerLiner: "HIPS",
//   doorPlate: "Glass",
//   sidePanel: "PCM",
//   backPanel: "Aluzinc",
//   power: "63W", // in watts
//   compressorVoltageRange: "160V-260V",
//   ratedVoltage: "220~240V (AC)",
//   ratedCurrent: "0.27A", // in amperes
//   ratedFrequency: "50Hz", // in hertz
//   builtInStabilizer: "YES",
//   dimensions: "1295 x 600 x 590 mm",
//   grossCapacity: "165 Liters", // in liters
//   CFT: "10", // overall dimension in cubic feet
//   netWeight: "37.4 Kg", // in kg
// };

// const product = {
//   _id: "1233234er132",
//   name: "MINISTER M-165N DEEP BLUE",
//   images: ["https://i.ibb.co/0tFwc7p/m-165-deep-blue-1-600x600.jpg"],
//   price: "49,452",
//   offerPrice: "40,990",
//   mainCategory: "refrigerator",
//   subCategory: "direct-cool-refrigerator",
//   productType: "featured-product",
//   sale: true,
//   isDeleted: false,
//   availability: "In stock",
//   rating: 3.6,
//   selling: 2,
// };

// const features: [
//   "Maintain Proper Temperature in Freezer and Refrigerator Competent to Protect Vitamin and Long Storage Time of Frozen Food",
//   "Using Energy Saving Compressor, Maintain Foaming Density 36kg/m3 (German Chemical), Using Energy Saving Refrigerant (R600a)",
//   "Using Food Grade Korean Resin to Make Plastic Items",
//   "Anti-Fungal Door Gasket & Easy Removal for Cleaning",
//   "High Tempered Door Glass to Absorb the Shock"
// ];

const Refrigerator_Details = ({ product }: { product: any }) => {
  const [firstSixString, setFirstSixString] = useState<[string, string][]>([]);
  useEffect(() => {
    setFirstSixString(
      getFirstStringSpecifications(product?.specifications as TRefrigerator, 6)
    );
  }, [product?.specifications]);
  return (
    <div className="container pb-20">
      <div className="grid grid-cols-1 md:grid-cols-7 gap-10 pt-10">
        <div className=" md:col-span-3">
          <Product_Details_Image images={product?.images} />
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
        <h1 className=" text-xl font-semibold">Specification</h1>
        <Product_Specifications obj={product?.specifications} />

        <div className=" pt-8">
          <ul className="list-disc list-inside text-lg">
            <li className="mb-2">
              Maintain Proper Temperature in Freezer and Refrigerator Competent
              to Protect Vitamin and Long Storage Time of Frozen Food
            </li>
            <li className="mb-2">
              Using Energy Saving Compressor, Maintain Foaming Density 36kg/m3
              (German Chemical), Using Energy Saving Refrigerant (R600a)
            </li>
            <li className="mb-2">
              Using Food Grade Korean Resin to Make Plastic Items
            </li>
            <li className="mb-2">
              Anti-Fungal Door Gasket & Easy Removal for Cleaning
            </li>
            <li className="mb-2">
              High Tempered Door Glass to Absorb the Shock
            </li>
          </ul>
        </div>

        {/* Note */}

        <Product_Details_Note />
      </div>
    </div>
  );
};

export default Refrigerator_Details;
