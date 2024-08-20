"use client";
import { products } from "./FeatureProducts";
import ShowTopProduct from "./ShowTopProduct";

const TopProducts = () => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 container mb-10 md:pb-20">
      <div>
        <h1 className="text-[18px] font-semibold border-b pb-2 border-gray-600/50">
          Top Rated Products
        </h1>
        <div className="flex flex-col gap-5 pt-5">
          {products.slice(0, 3).map((product) => (
            <ShowTopProduct product={product} key={product?._id} />
          ))}
        </div>
      </div>
      <div>
        <h1 className="text-[18px] font-semibold border-b pb-2 border-gray-600/50">
          Top Selling Products
        </h1>
        <div className="flex flex-col gap-5 pt-5">
          {products.slice(0, 3).map((product) => (
            <ShowTopProduct product={product} key={product?._id} />
          ))}
        </div>
      </div>
      <div>
        <h1 className="text-[18px] font-semibold border-b pb-2 border-gray-600/50">
          On Sale Products
        </h1>
        <div className="flex flex-col gap-5 pt-5">
          {products.slice(0, 3).map((product) => (
            <ShowTopProduct product={product} key={product?._id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopProducts;
