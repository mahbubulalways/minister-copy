import Loader from "@/components/Loader/Loader";
import Refrigerator_Product from "@/pages/Products_Page/Refrigerator/Refrigerator_Product";
import Refrigerator_Sidebar from "@/pages/Products_Page/Refrigerator/Refrigerator_Sidebar";
import getRefrigerator from "@/services/actions/refrigerator/getRefrigerator";
import { TSearchParams } from "@/types";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa";

const RefrigeratorPage = async ({ searchParams }: TSearchParams) => {
  const query = {
    size: searchParams?.size,
    priceRange: searchParams?.price,
  };
  const products = await getRefrigerator(query);
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
          <Link href={"/refrigerator"} className="uppercase">
            Refrigerator
          </Link>
        </div>
      </div>
      <div className="container grid grid-cols-1 md:grid-cols-4 gap-10 pt-10 pb-20 ">
        <div className="md:col-span-1  ">
          <Refrigerator_Sidebar isHidden={true} />
        </div>
        <div className="col-span-3">
          <Refrigerator_Product products={products?.data} />
        </div>
      </div>
    </div>
  );
};

export default RefrigeratorPage;
