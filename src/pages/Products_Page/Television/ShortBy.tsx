"use client";
import { useRouter } from "next/navigation";
import { usePathname, useSearchParams } from "next/navigation";
import React, { useState } from "react";

const ShortBy = () => {
  const [sortOption, setSortOption] = useState("");
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const router = useRouter();
  const handleSortChange = (e: any) => {
    setSortOption(e.target.value);
    const params = new URLSearchParams(searchParams as any);
    if (e.target.value) {
      params.set("sort", `${e.target.value}`);
    } else {
      params.delete("sort");
    }
    router.replace(`${pathName}?${params.toString()}`);
  };
  return (
    <div className="flex gap-3 items-center">
      <label htmlFor="sort" className="text-gray-700 font-medium text-[14px]">
        Sort By:
      </label>
      <select
        id="sort"
        value={sortOption}
        onChange={handleSortChange}
        className="outline-none border p-2 w-44 text-[14px]"
      >
        <option value="1">Low to High</option>
        <option value="-1">High to Low</option>
        <option value="price">Name</option>
      </select>
    </div>
  );
};

export default ShortBy;
