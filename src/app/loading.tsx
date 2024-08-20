import Loader from "@/components/Loader/Loader";
import React from "react";

const loading = () => {
  return (
    <div className="h-[100vh] flex flex-col justify-center items-center bg-gray-50">
      <Loader />
    </div>
  );
};

export default loading;
