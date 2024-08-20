"use client";
import { getTokenFromStorage } from "@/components/utils/localStorage";
import Link from "next/link";
import { GoPerson } from "react-icons/go";

const PersonIcon = () => {
  const token = getTokenFromStorage();
  return (
    <div>
      <Link href={`${token ? "/my-account" : "/customer/account/sign-in"}`}>
        <GoPerson className="text-primary h-8 w-8" />
      </Link>
    </div>
  );
};

export default PersonIcon;
