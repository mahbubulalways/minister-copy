"use server";

import { TQuery } from "@/types";

const getSmartLedTelevisions = async (query: TQuery) => {
  const res = await fetch(
    `${process.env.NEXT_BASE_API}/products/television/get-television/smart-led-tv?size=${query.size}&price=${query.priceRange}`,
    {
      cache: "no-store",
    }
  );
  const data = await res.json();
  return data;
};

export default getSmartLedTelevisions;
