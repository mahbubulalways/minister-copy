import Loader from "@/components/Loader/Loader";
import Television_Product from "@/pages/Products_Page/Television/Television_Product";
import Television_Sidebar from "@/pages/Products_Page/Television/Television_Sidebar";
import getTelevisions from "@/services/actions/television/getTelevisions";
import { TSearchParams } from "@/types";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa6";

const TelevisionPage = async ({ searchParams }: TSearchParams) => {
  const query = {
    size: searchParams?.size,
    priceRange: searchParams?.price,
  };
  let products = await getTelevisions(query);
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
          <Link href={"/television"}>TELEVISION</Link>
        </div>
      </div>
      <div className="container grid grid-cols-1 md:grid-cols-4 gap-10 pt-10 pb-20 ">
        <div className="md:col-span-1  ">
          <Television_Sidebar isHidden={true} />
        </div>
        <div className="col-span-3">
          {products?.data?.length ? (
            <Television_Product products={products?.data} />
          ) : (
            "No products found"
          )}
        </div>
      </div>
    </div>
  );
};

export default TelevisionPage;
