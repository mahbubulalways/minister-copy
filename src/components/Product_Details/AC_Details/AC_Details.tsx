"use client";
import React, { useEffect, useState } from "react";
import Product_Specifications from "../Common/Product_Specifications";
import Product_Side_Details from "../Common/Product_Side_Details";
import Purchase_Options from "../Television_Details/Purchase_Options";
import { getFirstStringSpecifications } from "@/components/utils/getFirstStringSpecifications";
import Product_Details_Image from "../Common/Product_Details_Image";
import { ACTechnicalSpecifications } from "@/types";

const acSpecifications = {
  technicalSpecifications: {
    model: "12K410P-GRN",
    type: "Split AC",
    tonnage: "1 Ton",
    function: "Cooling",
    btu_hr: "12000",
    voltage: "220V~240V~50HZ",
    ratedInputPowerW: "1150",
    ratedCurrentA: "5.9",
    coolingCapacityW: "3500",
    eer_cop: "2.8",
    airFlowM3h: "680",
    compressorType: "Rotary (Fixed Speed)",
    refrigerantType: "R410A",
    refrigerantAmountKg: "0.63",
    operatingRange: "20˚C to 43˚C",
    maximumPipeLength: "10 Meter",
    roomSize: "100-120SFT (For Residential)",
    iFeelTechnology: "Yes",
    antiBacterialAirFilter: "Yes",
    allCopperTube: "Yes",
    compressorGuaranty: "7 Years",
  },
  operations: {
    smartMode: "Yes",
    turboCoolingMode: "YES",
    ecoMode: "Yes",
    sleepMode: "Yes",
    clockTimerMode: "Yes",
    dimmerMode: "Yes",
    quietMode: "Yes",
    fanMode: "YES (AUTO-LOW-MEDIUM-HIGH)",
    dryMode: "Yes",
    coolMode: "Yes",
    autoRestart: "Yes",
    temperatureUnitChange: "Yes (16​°C to 30°C)",
    fullCopperTube: "Yes",
  },
};

const product = {
  _id: "1233",
  name: "Minister 1 TON NON INVERTER (12K410P-WHT)",
  images: [
    "https://i.ibb.co/ZfGnrkM/minister-1-ton-non-inverter-12k410p-wht-1.png",
  ],
  price: "49,452",
  offerPrice: "40,990",
  mainCategory: "air-conditioner",
  subCategory: "split-ac",
  productType: "featured-product",
  availability: "In stock",
  sale: false,
  isDeleted: false,
  rating: 3.6,
  selling: 2,
};
const AC_Details = ({ product }: { product: any }) => {
  const [firstSixString, setFirstSixString] = useState<[string, string][]>([]);

  useEffect(() => {
    setFirstSixString(
      getFirstStringSpecifications(
        product?.specifications
          .technicalSpecifications as ACTechnicalSpecifications,
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
        <h1 className="pb-5  text-xl font-semibold">Specification</h1>
        <Product_Specifications
          obj={product?.specifications?.technicalSpecifications}
        />
        <div className="pt-5">
          <h1 className="pb-5 text-xl font-semibold">Operations</h1>
          <Product_Specifications obj={product?.specifications?.operations} />
        </div>

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

export default AC_Details;
