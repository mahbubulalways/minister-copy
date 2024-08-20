"use server";

const getAllCarts = async (email: string) => {
  const res = await fetch(
    `${process.env.NEXT_BASE_API}/cart/get-cart/${email}`,
    { cache: "no-store" }
  );
  const data = await res.json();
  return data;
};

export default getAllCarts;
