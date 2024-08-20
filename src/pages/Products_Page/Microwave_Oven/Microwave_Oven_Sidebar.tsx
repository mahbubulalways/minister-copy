import dynamic from "next/dynamic";
const Microwave_Oven_Sidebar = ({ isHidden }: { isHidden: boolean }) => {
  const PriceRange = dynamic(() => import("../Television/PriceRange"), {
    ssr: false,
  });
  return (
    <div className={`${isHidden ? "hidden" : "block"} md:block sticky top-10`}>
      <h1 className=" text-[14px] font-semibold uppercase tracking-wider  pb-5">
        Microwave oven
      </h1>

      <PriceRange />
    </div>
  );
};

export default Microwave_Oven_Sidebar;
