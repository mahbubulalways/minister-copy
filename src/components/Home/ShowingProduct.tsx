import Image from "next/image";
import sale from "@/assets/logo/sale.png";
import Link from "next/link";
import AddToCartBtn from "../AddToCartBtn/AddToCartBtn";
export type TProduct = {
  product: {
    _id: string;
    name: string;
    image: string;
    images: string[];
    price: string;
    offerPrice: string | number;
    mainCategory: string;
    subCategory: string;
    productType: string;
    sale: boolean;
    isDeleted: boolean;
  };
};
const ShowingProduct = ({ product }: TProduct) => {
  return (
    <div className="group flex flex-col justify-between gap-y-4 h-full hover:shadow-xl shadow-[#EFEFEF] border shadow-sm keen-slider__slide overflow-hidden">
      <div className="group-hover:scale-105 duration-300 bg-primary p-1 relative">
        <Link href={`/products/${product?.mainCategory}/${product?._id}`}>
          <Image
            src={product?.image}
            alt="Image"
            width={1000}
            height={1000}
            className="mix-blend-multiply"
          />
          {product?.sale && (
            <Image src={sale} alt="logo" className="w-1/4 absolute inset-0" />
          )}
        </Link>
      </div>

      <div className="flex flex-col gap-1 text-center pb-5">
        <h1 className="text-[15px] font-normal text-secondary/80">{`${product?.name?.substring(
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
        <AddToCartBtn product={product} />
      </div>
    </div>
  );
};

export default ShowingProduct;
