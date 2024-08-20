import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ChangeEvent } from "react";
const items = [
  { size: "1", quantity: 2 },
  { size: "1.5", quantity: 5 },
  { size: "2", quantity: 6 },
  { size: "3", quantity: 2 },
  { size: "4", quantity: 2 },
];
const Air_Conditioner_Capacity = () => {
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
            Air Conditioner Capacity
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
                  {item.size} Ton
                </span>
              </label>
            ))}
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Air_Conditioner_Capacity;
