"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Air_Conditioner_Capacity from "./Air_Conditioner_Capacity";
import PriceRange from "../Television/PriceRange";

const Air_Conditioner_Sidebar = ({ isHidden }: { isHidden: boolean }) => {
  const path = usePathname();
  const showACOptions =
    path === "/air-conditioners/split-ac" ||
    path === "/air-conditioners/ceiling-ac";

  return (
    <div className={`${isHidden ? "hidden" : "block"} md:block sticky top-10`}>
      {!showACOptions && (
        <div>
          <h1 className=" text-[14px] font-semibold uppercase tracking-wider border-b pb-3">
            AIR CONDITIONER
          </h1>
          <div className="flex flex-col gap-2 pl-5 pt-5">
            <Link
              href={"/air-conditioners/split-ac"}
              className="text-[13px] text-gray-700"
            >
              SPLIT AC
            </Link>
            <Link
              href={"/air-conditioners/ceiling-ac"}
              className="text-[13px] text-gray-700"
            >
              CASSETTE / CEILING AC
            </Link>
          </div>
        </div>
      )}
      <Air_Conditioner_Capacity />
      <PriceRange />
    </div>
  );
};

export default Air_Conditioner_Sidebar;
