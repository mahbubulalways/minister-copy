"use client";
import { ReactNode, useState } from "react";
import { IoOptionsOutline } from "react-icons/io5";
import { RiMenu2Line } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";

const Product_Page_Sidebar = ({ children }: { children: ReactNode }) => {
  const [openProductSidebar, setOpenProductSidebar] = useState<boolean>(false);

  const handleToggleSidebar = () => {
    setOpenProductSidebar((prev) => !prev);
  };

  return (
    <div className="block md:hidden">
      <button
        onClick={handleToggleSidebar}
        className="bg-primary font-semibold text-[12px] flex items-center px-3 py-1 gap-2"
      >
        <IoOptionsOutline className="h-6 w-6" />
        FILTER
      </button>

      {openProductSidebar && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20"
          onClick={handleToggleSidebar}
        ></div>
      )}

      <div
        className={`fixed w-[80%] bg-primary z-30 top-0 h-full max-h-max overflow-y-scroll transition-all duration-700 ${
          openProductSidebar ? "left-0" : "-left-full"
        }`}
      >
        <div className="bg-primary px-8 py-3 flex flex-col gap-1 h-full text-gray-800">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Product_Page_Sidebar;
