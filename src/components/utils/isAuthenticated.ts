"use client";
import { jwtDecode } from "jwt-decode";
import { getTokenFromStorage } from "./localStorage";

const isAuthenticated = () => {
  if (typeof window !== "undefined") {
    const token = getTokenFromStorage();
    if (token) {
      const decoded = jwtDecode(token!);
      return decoded;
    } // Returns true if the token exists and is valid
  }
  return false; // Fallback if run on the server
};

export default isAuthenticated;
