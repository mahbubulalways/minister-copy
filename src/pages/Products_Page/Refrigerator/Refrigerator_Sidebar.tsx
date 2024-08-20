"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Refrigerator_Capacity from "./Refrigerator_Capacity";
import PriceRange from "../Television/PriceRange";

const Refrigerator_Sidebar = ({ isHidden }: { isHidden: boolean }) => {
  const path = usePathname();
  const showRefrigeratorOptions =
    path === "/refrigerator/direct-cool-refrigerator" ||
    path === "/refrigerator/non-frost-refrigerator" ||
    path === "/refrigerator/freezer";
  return (
    <div className={`${isHidden ? "hidden" : "block"} md:block sticky top-10`}>
      {!showRefrigeratorOptions && (
        <div>
          <h1 className=" text-[14px] font-semibold uppercase tracking-wider border-b pb-3">
            Refrigerator
          </h1>
          <div className="flex flex-col gap-2 pl-5 pt-5">
            <Link
              href={"/refrigerator/direct-cool-refrigerator"}
              className="text-[13px] text-gray-700"
            >
              DIRECT COOL REFRIGERATOR
            </Link>
            <Link
              href={"/refrigerator/non-frost-refrigerator"}
              className="text-[13px] text-gray-700"
            >
              NON-FROST REFRIGERATOR
            </Link>
            <Link
              href={"/refrigerator/freezer"}
              className="text-[13px] text-gray-700"
            >
              FREEZER
            </Link>
          </div>
        </div>
      )}
      <Refrigerator_Capacity />
      <PriceRange />
    </div>
  );
};

export default Refrigerator_Sidebar;
