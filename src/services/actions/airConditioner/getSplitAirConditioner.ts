"use server";
import { TQuery } from "@/types";

const getSplitAirConditioner = async (query: TQuery) => {
  const res = await fetch(
    `${process.env.NEXT_BASE_API}/products/air-conditioner/get-air-conditioner/split-ac?size=${query.size}&price=${query.priceRange}`,
    {
      cache: "no-store",
    }
  );
  const data = await res.json();
  return data;
};

export default getSplitAirConditioner;
