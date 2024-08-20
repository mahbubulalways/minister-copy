"use server";
import { ILogin } from "@/types";
export const loginUser = async (payload: ILogin) => {
  const res = await fetch(`${process.env.NEXT_BASE_API}/auth/login-user`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
    cache: "no-store",
  });
  const data = await res.json();
  return data;
};
