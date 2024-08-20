import React from "react";
import Product_Details_Image from "../Common/Product_Details_Image";
import Purchase_Options from "../Television_Details/Purchase_Options";
import Product_Details_Note from "../Common/Product_Details_Note";
import Home_appliance_SideDetails from "./Home_appliance_SideDetails";

const HomeAppianceDetails = ({ product }: { product: any }) => {
  return (
    <div>
      <div className="container pb-20">
        <div className="grid grid-cols-1 md:grid-cols-7 gap-10 pt-10">
          <div className=" md:col-span-3">
            <Product_Details_Image images={product.images} />
          </div>
          <div className="md:col-span-4">
            <Home_appliance_SideDetails product={product} />
            <div className="pt-3">
              <Purchase_Options />
            </div>
          </div>
        </div>

        <div className=" mx-auto pt-10">
          <h1 className="pb-5">Specification</h1>
          <ul className="flex flex-col  gap-2 text-[18px]">
            {product?.specifications?.features?.map(
              (feature: string, index: number) => (
                <li key={index} className="mb-2">
                  {feature}
                </li>
              )
            )}
          </ul>
          <Product_Details_Note />
        </div>
      </div>
    </div>
  );
};

export default HomeAppianceDetails;
