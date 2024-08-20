"use client";
import { getFirstStringSpecifications } from "@/components/utils/getFirstStringSpecifications";
import { TOvenSpecifications } from "@/types";
import { useEffect, useState } from "react";
import Product_Details_Image from "../Common/Product_Details_Image";
import Product_Side_Details from "../Common/Product_Side_Details";
import Purchase_Options from "../Television_Details/Purchase_Options";
import Product_Specifications from "../Common/Product_Specifications";
import Product_Details_Note from "../Common/Product_Details_Note";

const Micro_Oven_Details = ({ product }: { product: any }) => {
  const [firstSixString, setFirstSixString] = useState<[string, string][]>([]);
  useEffect(() => {
    setFirstSixString(
      getFirstStringSpecifications(
        product?.specifications as TOvenSpecifications,
        6
      )
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

export default Micro_Oven_Details;
