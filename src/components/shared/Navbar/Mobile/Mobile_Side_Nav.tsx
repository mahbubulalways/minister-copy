"use client";
import Link from "next/link";
import { useState } from "react";
import { RiMenu2Line } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { navItems } from "../Dasktop/DeskBottomNav";
import {
  IoIosArrowDown,
  IoIosArrowDropright,
  IoIosArrowForward,
} from "react-icons/io";

const Mobile_Side_Nav = () => {
  const [isOpenSideNav, setIsOpenSideNav] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState<number | null>(null);

  const toggleSubMenu = (index: number) => {
    setOpenSubMenu(openSubMenu === index ? null : index);
  };

  return (
    <div>
      <button onClick={() => setIsOpenSideNav(!isOpenSideNav)}>
        <RiMenu2Line className="h-8 w-8 text-gray-100" />
      </button>

      {isOpenSideNav && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20"
          onClick={() => setIsOpenSideNav(false)}
        ></div>
      )}

      <div
        className={`fixed w-[80%] z-30 top-0 h-screen duration-700 ${
          isOpenSideNav ? "left-0" : "-left-full"
        }`}
      >
        <div className="bg-primary  px-8 py-3 flex flex-col gap-1 h-full text-gray-800">
          <button
            onClick={() => setIsOpenSideNav(!isOpenSideNav)}
            className="pt-2 flex justify-end"
          >
            <p className="border p-1.5">
              <RxCross2 className="h-7 w-7" />
            </p>
          </button>

          <div className="flex flex-col w-full gap-3 pt-5">
            {navItems.map((item, index) => (
              <div key={index} className="relative">
                <div
                  className="flex items-center justify-between py-2 border-b border-gray-400/50"
                  // onClick={() => item.subMenu && toggleSubMenu(index)}
                >
                  <Link
                    href={item.path}
                    className=" text-black/80 text-[13px] font-medium"
                  >
                    {item.name}
                  </Link>
                  {item.subMenu && (
                    <IoIosArrowDown
                      className={`cursor-pointer ${
                        openSubMenu === index && "rotate-180 "
                      } duration-300`}
                      onClick={() => toggleSubMenu(index)}
                    />
                  )}
                </div>
                <div
                  className={`transition-all duration-300 ease-in ${
                    openSubMenu === index
                      ? "max-h-[500px] opacity-100"
                      : "max-h-0 opacity-0 overflow-hidden"
                  }`}
                >
                  {item.subMenu && openSubMenu === index && (
                    <ul className=" pl-4 pt-2">
                      {item.subMenu.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          <Link
                            href={subItem.path}
                            className=" py-1 text-gray-700 flex items-center gap-2 text-black/80 text-[13px] font-medium"
                          >
                            <IoIosArrowForward />
                            {subItem.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mobile_Side_Nav;
