"use client";
import { removeTokenFromLocal } from "@/components/utils/localStorage";
import { useRouter } from "next/navigation";

const UserLogOut = () => {
  const router = useRouter();
  const handleLogout = () => {
    removeTokenFromLocal();
    router.replace("/");
    router.refresh();
  };
  return (
    <div className="w-full">
      {" "}
      <button
        onClick={handleLogout}
        className="bg-tertiary w-full text-primary py-2 font-medium"
      >
        Log out
      </button>
    </div>
  );
};

export default UserLogOut;
