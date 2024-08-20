"use client";
const screenSizes = [
  { size: "24", items: 5 },
  { size: "32", items: 9 },
  { size: "40", items: 0 },
  { size: "43", items: 6 },
  { size: "50", items: 1 },
  { size: "55", items: 2 },
  { size: "58", items: 1 },
  { size: "65", items: 0 },
  { size: "75", items: 0 },
];
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { ChangeEvent } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const ScreenSize = () => {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const { replace } = useRouter();
  const params = new URLSearchParams(searchParams as any);
  const handleChangeScreenSize = (
    e: ChangeEvent<HTMLInputElement>,
    size: string
  ) => {
    if (e.target.checked) {
      params.set("size", size);
    } else {
      params.delete("size");
    }
    replace(`${pathName}?${params.toString()} `);
  };

  return (
    <div className=" py-8">
      <Accordion className="w-full">
        <AccordionSummary
          expandIcon={<MdOutlineKeyboardArrowDown />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <h2 className=" text-[14px] font-semibold uppercase tracking-wider border-b pb-3">
            SCREEN SIZE
          </h2>
        </AccordionSummary>
        <AccordionDetails>
          <div className="flex flex-col gap-2 pt-5 pl-5">
            {screenSizes.map((screen, index) => (
              <label key={index} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-primary border-gray-300 rounded"
                  onChange={(e) => handleChangeScreenSize(e, screen.size)}
                />
                <span className="text-gray-700 font-medium text-[14px]">
                  {screen.size} ({screen.items}{" "}
                  {screen.items === 1 ? "item" : "items"})
                </span>
              </label>
            ))}
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default ScreenSize;
