import Loader from "@/components/Loader/Loader";
import Washing_Machine_Product from "@/pages/Products_Page/Washing_Machine/Washing_Machine_Product";
import Washing_Machine_Sidebar from "@/pages/Products_Page/Washing_Machine/Washing_Machine_Sidebar";
import getWashingMachine from "@/services/actions/washingMachine/getWashingMachine";
import { TSearchParams } from "@/types";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa6";
const WashingMachinePage = async ({ searchParams }: TSearchParams) => {
  const query = {
    size: searchParams?.size,
    priceRange: searchParams?.price,
  };
  let products = await getWashingMachine(query);
  if (!products) {
    return <Loader />;
  }
  if (searchParams?.sort === "1") {
    products?.data?.sort((a: any, b: any) => a.offerPrice - b.offerPrice);
  } else {
    products?.data?.sort((a: any, b: any) => b.offerPrice - a.offerPrice);
  }
  return (
    <div>
      <div className=" py-5 border-b">
        <div className="container flex items-center gap-2 text-[13px] font-semibold">
          <Link href={"/"}>HOME</Link>
          <FaAngleRight />
          <Link href={"/washing-machine"}>WASHING MACHINE</Link>
        </div>
      </div>
      <div className="container grid grid-cols-1 md:grid-cols-4 gap-10 pt-10 pb-20 ">
        <div className="md:col-span-1  ">
          <Washing_Machine_Sidebar isHidden={true} />
        </div>
        <div className="col-span-3">
          <Washing_Machine_Product products={products?.data} />
        </div>
      </div>
    </div>
  );
};

export default WashingMachinePage;
