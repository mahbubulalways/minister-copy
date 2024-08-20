"use server";

import { TQuery } from "@/types";

const getWashingMachine = async (query: TQuery) => {
  const res = await fetch(
    `${process.env.NEXT_BASE_API}/products/washing-machine/get-washing-machine?size=${query.size}&price=${query.priceRange}`,
    { cache: "no-store" }
  );
  const data = await res.json();
  return data;
};

export default getWashingMachine;
