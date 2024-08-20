"use client";

import { getFirstStringSpecifications } from "@/components/utils/getFirstStringSpecifications";
import { TWashingMachineSpecification } from "@/types";
import { useEffect, useState } from "react";
import Product_Specifications from "../Common/Product_Specifications";
import Purchase_Options from "../Television_Details/Purchase_Options";
import Product_Side_Details from "../Common/Product_Side_Details";
import Product_Details_Image from "../Common/Product_Details_Image";

const Washing_Machine_Details = ({ product }: { product: any }) => {
  const [firstSixString, setFirstSixString] = useState<[string, string][]>([]);

  useEffect(() => {
    setFirstSixString(
      getFirstStringSpecifications(
        product?.specifications as TWashingMachineSpecification,
        6
      )
    );
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

export default Washing_Machine_Details;
