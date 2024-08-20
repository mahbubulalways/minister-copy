"use client";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import React from "react";

export default function PriceRange() {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const router = useRouter();

  const [value, setValue] = React.useState<number[]>([10000, 60000]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    const newValues = newValue as number[];
    setValue(newValues);
    const minPrice = newValues[0];
    const maxPrice = newValues[1];
    const params = new URLSearchParams(searchParams as any);

    if (minPrice && maxPrice) {
      params.set("price", `${minPrice}-${maxPrice}`);
    } else {
      params.delete("price");
    }

    router.replace(`${pathName}?${params.toString()}`);
  };

  return (
    <Box>
      <h1 className="text-[14px] font-semibold uppercase tracking-wider border-b pb-3">
        Price Range
      </h1>
      <Box sx={{ width: 300 }} className="pt-5 pl-5">
        <Slider
          getAriaLabel={() => "Price range"}
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          getAriaValueText={(value) => `${value} BDT`}
          min={10000}
          max={60000}
          sx={{
            color: "#F4631B",
            "& .MuiSlider-thumb": {
              color: "#F4631B",
            },
            "& .MuiSlider-track": {
              color: "#F4631B",
            },
            "& .MuiSlider-rail": {
              color: "#F4631B",
            },
          }}
        />
        <Box display="flex" justifyContent="space-between" mt={2}>
          <Typography className="text-gray-700 font-medium text-[14px]">{`BDT ${value[0]}.00 - BDT ${value[1]}.00`}</Typography>
        </Box>
      </Box>
    </Box>
  );
}
