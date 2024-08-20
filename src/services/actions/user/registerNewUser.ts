"use server";

import { TUser } from "@/types";

export const registerNewUser = async (payload: TUser) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_BASE_API}/user/create-account`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
        cache: "no-store",
      }
    );

    if (!res.ok) {
      // Handle the case where the server returns a 4xx or 5xx response
      throw new Error(`Failed to register user: ${res.statusText}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    return { error: "User registration failed. Please try again later." };
  }
};
