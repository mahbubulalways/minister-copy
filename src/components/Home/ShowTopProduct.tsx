import Image from "next/image";
import { TProduct } from "./ShowingProduct";

const ShowTopProduct = ({ product }: TProduct) => {
  return (
    <div className="flex gap-4">
      <Image
        src={product?.image}
        alt="Image"
        width={1000}
        height={1000}
        className="mix-blend-multiply w-1/4"
      />

      <div className="flex flex-col gap-1 ">
        <h1 className="text-[15px] font-normal text-secondary/80">{`${product.name.substring(
          0,
          30
        )}...`}</h1>
        <p className="text-gray-600/75 font-semibold">
          <span className="text-[12px] ">MRP:</span>{" "}
          <del className="text-[14px]">BDT {product?.price}</del>
        </p>
        <p className="text-[18px] text-black/70 font-semibold">Offer Price</p>
        <p className="text-[16px] text-black/70 font-semibold">
          BDT {product?.offerPrice}
        </p>
      </div>
    </div>
  );
};

export default ShowTopProduct;
