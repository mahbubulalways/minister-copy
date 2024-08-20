import Image from "next/image";
import { RiHandbagLine } from "react-icons/ri";
import upcomming from "@/assets/logo/upcomming.png";
type TProduct = {
  product: {
    _id: string;
    name: string;
    images: string;
    price: string;
    offerPrice: string;
    mainCategory: string;
    subCategory: string;
    productType: string;
    sale: boolean;
    isDeleted: boolean;
  };
};

const ShowNewArrivals = ({ product }: TProduct) => {
  return (
    <div className="group flex flex-col justify-between gap-y-4 h-full hover:shadow-xl py-5 shadow-[#EFEFEF] keen-slider__slide">
      <div className=" bg-primary  relative">
        <Image
          src={product?.images}
          alt="Image"
          width={1000}
          height={1000}
          className="mix-blend-multiply"
        />
        {product?.sale && (
          <Image
            src={upcomming}
            alt="logo"
            className="w-1/3 absolute inset-0"
          />
        )}
      </div>

      <div className="flex flex-col gap-1 text-center">
        <h1 className="text-[15px] font-normal text-secondary/80">{`${product.name.substring(
          0,
          20
        )}...`}</h1>
        <p className="text-gray-600/75 font-semibold">
          <span className="text-[12px] ">MRP:</span>{" "}
          <del className="text-[14px]">BDT {product?.price}</del>
        </p>
        <p className="text-[18px] text-black/70 font-semibold">
          Offer Price BDT {product?.offerPrice}
        </p>
        {/* <button className="mt-2 uppercase w-max mx-auto text-[15px] flex items-center gap-1  bg-tertiaryLite text-primary px-3 py-1.5 hover:bg-tertiary transition-all duration-300">
          <RiHandbagLine className="h-5 w-5" /> Add to cart
        </button> */}
      </div>
    </div>
  );
};

export default ShowNewArrivals;
