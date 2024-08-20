"use client";
import { ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import isAuthenticated from "../utils/isAuthenticated";
import Loader from "../Loader/Loader";
import { toast } from "sonner";

const ClientSideRedirect = ({ children }: { children: ReactNode }) => {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const token = isAuthenticated();
    if (!token) {
      router.push("/customer/account/sign-in");
      toast.error("You must login first", { position: "top-center" });
    } else {
      setLoading(false);
    }
  }, [router]);

  if (loading) {
    return <Loader />;
  }

  return <>{children}</>;
};

export default ClientSideRedirect;
