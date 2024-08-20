// "use server";
// import { ICart } from "@/types";
// export const addToCart = async (payload: ICart) => {
//   const res = await fetch(`${process.env.NEXT_BASE_API}/cart/add-to-cart`, {
//     method: "POST",
//     headers: {
//       "content-type": "application/json",
//     },
//     body: JSON.stringify(payload),
//     cache: "no-store",
//   });
//   const data = await res.json();
//   return data;
// };
