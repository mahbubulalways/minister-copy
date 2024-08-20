import Loader from "@/components/Loader/Loader";
import Microwave_Oven_Sidebar from "@/pages/Products_Page/Microwave_Oven/Microwave_Oven_Sidebar";
import MicrowaveOvenProduct from "@/pages/Products_Page/Microwave_Oven/MicrowaveOvenProduct";
import getMicroOven from "@/services/actions/oven/getMicroOven";
import { TSearchParams } from "@/types";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa6";
const MicrowaveOvenPage = async ({ searchParams }: TSearchParams) => {
  const query = {
    size: searchParams?.size,
    priceRange: searchParams?.price,
  };
  let products = await getMicroOven(query);
  if (!products) {
    return <Loader />;
  }
  //   if (searchParams?.sort === "1") {
  //     products?.data?.sort((a: any, b: any) => a.offerPrice - b.offerPrice);
  //   } else {
  //     products?.data?.sort((a: any, b: any) => b.offerPrice - a.offerPrice);
  //   }
  return (
    <div>
      <div className=" py-5 border-b">
        <div className="container flex items-center gap-2 text-[13px] font-semibold">
          <Link href={"/"}>HOME</Link>
          <FaAngleRight />
          <Link href={"/microwave-oven"}>MICROWAVE OVEN</Link>
        </div>
      </div>
      <div className="container grid grid-cols-1 md:grid-cols-4 gap-10 pt-10 pb-20 ">
        <div className="col-span-1  hidden md:block">
          <Microwave_Oven_Sidebar isHidden={true} />
        </div>
        <div className="col-span-3">
          <MicrowaveOvenProduct products={products} />
        </div>
      </div>
    </div>
  );
};

export default MicrowaveOvenPage;
