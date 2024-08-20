import { TProduct } from "@/types";
import React from "react";

const Home_appliance_SideDetails = ({ product }: { product: any }) => {
  return (
    <div>
      <div className="flex flex-col gap-3 pb-3">
        <h1 className="text-4xl font-bold text-tertiary">{product?.name}</h1>
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
      </div>
      <div className="pt-5">
        <ul className="">
          {product?.specifications?.features
            ?.slice(0, 6)
            .map((feature: string, index: number) => (
              <li key={index} className="py-2 ">
                {feature}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Home_appliance_SideDetails;
