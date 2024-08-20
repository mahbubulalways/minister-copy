"use server";
import { TQuery } from "@/types";

const getCeilingAirConditioner = async (query: TQuery) => {
  const res = await fetch(
    `${process.env.NEXT_BASE_API}/products/air-conditioner/get-air-conditioner/ceiling-ac?size=${query.size}&price=${query.priceRange}`,
    {
      cache: "no-store",
    }
  );
  const data = await res.json();
  return data;
};

export default getCeilingAirConditioner;
