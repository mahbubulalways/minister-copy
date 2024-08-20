"use server";
import { TQuery } from "@/types";
const getFreezerRefrigerator = async (query: TQuery) => {
  const res = await fetch(
    `${process.env.NEXT_BASE_API}/products/refrigerator/get-refrigerator/freezer-refrigerator?size=${query.size}&price=${query.priceRange}`,
    {
      cache: "no-store",
    }
  );
  const data = await res.json();
  return data;
};

export default getFreezerRefrigerator;
