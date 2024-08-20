import React from "react";
import Product_Details_Image from "../Common/Product_Details_Image";
import Purchase_Options from "../Television_Details/Purchase_Options";

const Human_Care_Details = ({ product }: { product: any }) => {
  return (
    <div className="container pb-20">
      <div className="grid grid-cols-1 md:grid-cols-7 gap-10 pt-10">
        <div className=" md:col-span-3">
          <Product_Details_Image images={product?.images} />
        </div>
        <div className="md:col-span-4">
          <div className="flex flex-col gap-3 pb-3">
            <h1 className="text-4xl font-bold text-tertiary">
              {product?.name}
            </h1>
            <p className="text-gray-600/75 font-semibold">
              <span className="text-[14px]">MRP:</span>{" "}
              <del className="text-lg">BDT {product?.price}</del>
            </p>
            <p className="text-2xl text-black/70 font-semibold">
              Offer Price BDT {product?.offerPrice}
            </p>
            <div className="flex items-center gap-3">
              <p>Availability</p>
              <p className="bg-green-600 text-primary text-[14px] w-max px-5 py-1">
                {product?.availability}
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <p>Note</p>
              <p className=" text-gray-600/75 ">
                Customer must pay 2.5 % extra charge for using their credit or
                debit card, bKash, Rocket, m cash. The above price, design and
                specifications are subject to change without prior notice for
                product improvement
              </p>
            </div>
            <p className="text-gray-600/75  text-lg font-semibold">
              Home Delivery Charge: Applicable
            </p>
            <p className="text-[13px] font-semibold">
              <span className="text-gray-600/75 ">SKU:</span>
              <span>{product?.name}</span>
            </p>
            <div className="pt-3">
              <Purchase_Options />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Human_Care_Details;
