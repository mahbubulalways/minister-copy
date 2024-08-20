"use server";

import { TQuery } from "@/types";

const getMicroOven = async (query: TQuery) => {
  const res = await fetch(
    `${process.env.NEXT_BASE_API}/products/micro-oven/get-micro-oven?size=${query.size}&price=${query.priceRange}`,
    {
      cache: "no-store",
    }
  );
  const data = await res.json();

  return data;
};

export default getMicroOven;
