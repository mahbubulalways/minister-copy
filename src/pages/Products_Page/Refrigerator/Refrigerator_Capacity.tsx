import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ChangeEvent } from "react";
const items = [
  { size: "165" },
  { size: "170" },
  { size: "175" },
  { size: "195" },
  { size: "222" },
  { size: "224" },
  { size: "225" },
  { size: "235" },
  { size: "242" },
  { size: "252" },
  { size: "254" },
  { size: "255" },
  { size: "256" },
  { size: "266" },
  { size: "285" },
  { size: "300" },
  { size: "305" },
  { size: "306" },
  { size: "330" },
  { size: "350" },
  { size: "355" },
  { size: "500" },
  { size: "507" },
  { size: "537" },
  { size: "545" },
  { size: "573" },
  { size: "600" },
];
const Refrigerator_Capacity = () => {
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
    <div className="py-8">
      <Accordion className="w-full">
        <AccordionSummary
          expandIcon={<MdOutlineKeyboardArrowDown />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <h2 className=" text-[14px] font-semibold uppercase tracking-wider border-b pb-3">
            Refrigerator Capacity
          </h2>
        </AccordionSummary>
        <AccordionDetails>
          <div className="flex flex-col gap-2 pt-5 pl-5">
            {items.map((item, index) => (
              <label key={index} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  onChange={(e) => handleChangeScreenSize(e, item.size)}
                  className="form-checkbox h-4 w-4 text-primary border-gray-300 rounded"
                />
                <span className="text-gray-700 font-medium text-[14px]">
                  {item.size} Ltr
                </span>
              </label>
            ))}
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Refrigerator_Capacity;
