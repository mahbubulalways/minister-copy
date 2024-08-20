"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import PriceRange from "../Television/PriceRange";

const Washing_Machine_Sidebar = ({ isHidden }: { isHidden: boolean }) => {
  const path = usePathname();
  const showRefrigeratorOptions =
    path === "/washing-machine/automatic-top-load" ||
    path === "/washing-machine/automatic-front-load";
  return (
    <div className={`${isHidden ? "hidden" : "block"} md:block sticky top-10`}>
      {!showRefrigeratorOptions && (
        <div>
          <h1 className=" text-[14px] font-semibold uppercase tracking-wider border-b pb-3">
            washing machine
          </h1>
          <div className="flex flex-col gap-2 pl-5 py-5">
            <Link
              href={"/washing-machine/automatic-top-load"}
              className="text-[13px] text-gray-700 uppercase"
            >
              Automatic top Load
            </Link>
            <Link
              href={"/washing-machine/automatic-front-load"}
              className="text-[13px] text-gray-700 uppercase"
            >
              Automatic front Load
            </Link>
          </div>
        </div>
      )}
      <PriceRange />
    </div>
  );
};

export default Washing_Machine_Sidebar;
