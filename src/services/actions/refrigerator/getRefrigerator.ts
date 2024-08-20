"use server";
import { TQuery } from "@/types";
const getRefrigerator = async (query: TQuery) => {
  const res = await fetch(
    `${process.env.NEXT_BASE_API}/products/refrigerator/get-refrigerator?size=${query.size}&price=${query.priceRange}`,
    {
      cache: "no-store",
    }
  );
  const data = await res.json();
  return data;
};

export default getRefrigerator;
