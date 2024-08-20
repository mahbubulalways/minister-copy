"use server";

const getAllHomeAppliance = async () => {
  const res = await fetch(
    `${process.env.NEXT_BASE_API}/products/home-appliance/get-home-appliance`,
    {
      cache: "no-store",
    }
  );
  const data = await res.json();

  return data;
};

export default getAllHomeAppliance;
