"use server";

import { TQuery } from "@/types";

const getTelevisions = async (query: TQuery) => {
  const res = await fetch(
    `${process.env.NEXT_BASE_API}/products/television/get-television?size=${query.size}&price=${query.priceRange}`,
    { cache: "no-store" }
  );
  const data = await res.json();
  return data;
};

export default getTelevisions;
