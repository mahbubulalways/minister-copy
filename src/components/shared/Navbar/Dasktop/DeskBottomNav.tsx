"use client";
import Link from "next/link";
import React from "react";
import { IoIosArrowDown } from "react-icons/io";

export const navItems = [
  { name: "HOME", path: "/" },
  {
    name: "TELEVISION",
    path: "/television",
    subMenu: [
      { name: "LED TV", path: "/television/led-tv" },
      { name: "SMART-LED TV", path: "/television/smart-led-tv" },
    ],
  },
  { name: "REFRIGERATOR", path: "/refrigerator" },
  { name: "AIR CONDITIONER", path: "/air-conditioners" },
  { name: "WASHING MACHINE", path: "/washing-machine" },
  {
    name: "HOME APPLIANCES",
    path: "/home-appliances",
    subMenu: [
      { name: "Rice Cooker", path: "/home-appliance/rice-cooker" },
      { name: "Mixer Grinder", path: "/home-appliance/mixer-grinder" },
      { name: "Toaster", path: "/home-appliance/toaster" },
      { name: "Electric Kettle", path: "/home-appliance/electric-kettle" },
      { name: "Ceiling Fan", path: "/home-appliance/ceiling-fan" },
      { name: "Frypan", path: "/home-appliance/frypan" },
      { name: "Iron", path: "/home-appliance/iron" },
      { name: "Sandwich Maker", path: "/home-appliance/sandwich-maker" },
    ],
  },
  { name: "MICROWAVE OVEN", path: "/microwave-oven" },
  { name: "HUMAN CARE", path: "/human-care" },
  { name: "OFFER", path: "/offer" },
];

const DeskBottomNav = () => {
  return (
    <div className="border-b hidden md:block sticky top-0 z-50">
      {" "}
      {/* Increased z-index */}
      <nav className="container relative">
        <div className="flex items-center gap-8 bg-primary py-5 text-[13px] font-semibold">
          {navItems.map((item, index) => (
            <ul key={index} className="relative group">
              <li className="flex items-center gap-2">
                <Link
                  href={item.path}
                  className="block rounded hover:text-fifth"
                >
                  {item.name}
                </Link>{" "}
                {item.subMenu && <IoIosArrowDown />}
              </li>
              {item.subMenu && (
                <ul className="absolute bg-primary left-0 w-44 pt-5 shadow-lg rounded hidden group-hover:block z-50 text-black/60 ">
                  {item.subMenu.map((subItem, subIndex) => (
                    <li key={subIndex}>
                      <a
                        href={subItem.path}
                        className="block px-4 py-2 rounded hover:bg-slate-200 uppercase"
                      >
                        {subItem.name}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </ul>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default DeskBottomNav;
