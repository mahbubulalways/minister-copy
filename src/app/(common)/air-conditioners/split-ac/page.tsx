import Loader from "@/components/Loader/Loader";
import Air_Conditioner_Product from "@/pages/Products_Page/Air_Conditioner/Air_Conditioner_Product";
import Air_Conditioner_Sidebar from "@/pages/Products_Page/Air_Conditioner/Air_Conditioner_Sidebar";
import getSplitAirConditioner from "@/services/actions/airConditioner/getSplitAirConditioner";
import { TSearchParams } from "@/types";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa";

const SplitAcPage = async ({ searchParams }: TSearchParams) => {
  const query = {
    size: searchParams?.size,
    priceRange: searchParams?.price,
  };
  let products = await getSplitAirConditioner(query);
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
          <Link href={"/air-conditioners"} className="uppercase">
            Air conditioner
          </Link>
          <FaAngleRight />
          <Link href={"/air-conditioners/split-ac"} className="uppercase">
            split ac
          </Link>
        </div>
      </div>
      <div className="container grid grid-cols-1 md:grid-cols-4 gap-10 pt-10 pb-20 ">
        <div className="md:col-span-1  ">
          <Air_Conditioner_Sidebar isHidden={true} />
        </div>
        <div className="col-span-3">
          <Air_Conditioner_Product products={products?.data} />
        </div>
      </div>
    </div>
  );
};

export default SplitAcPage;
