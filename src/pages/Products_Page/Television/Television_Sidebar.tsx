"use client";

import { usePathname } from "next/navigation";
import PriceRange from "./PriceRange";
import ScreenSize from "./Screen_Sizes";
import Link from "next/link";

const Television_Sidebar = ({ isHidden }: { isHidden: boolean }) => {
  const path = usePathname();
  const showTelevisionOptions =
    path === "/television/led-tv" || path === "/television/smart-led-tv";

  return (
    <div className={`${isHidden ? "hidden" : "block"} md:block sticky top-10`}>
      {!showTelevisionOptions && (
        <div>
          <h1 className=" text-[14px] font-semibold uppercase tracking-wider border-b pb-3">
            Television
          </h1>
          <div className="flex flex-col gap-2 pl-5 pt-5">
            <Link
              href={"/television/led-tv"}
              className="text-[13px] text-gray-700"
            >
              LED TV
            </Link>
            <Link
              href={"/television/smart-led-tv"}
              className="text-[13px] text-gray-700"
            >
              SMART LED TV
            </Link>
          </div>
        </div>
      )}
      <ScreenSize />
      <PriceRange />
    </div>
  );
};

export default Television_Sidebar;
