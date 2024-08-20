import oven from "@/assets/images/oven.png";
import ketli from "@/assets/images/ketli.png";
import blender from "@/assets/images/blender.png";
import fan from "@/assets/images/fan.png";
import Image from "next/image";
import Link from "next/link";
const category = [
  {
    _id: "ihrfh",
    name: "Top Baking Microwave Oven",
    icon: oven,
    path: "micro-oven",
  },
  {
    _id: "ihrfh",
    name: "Fast Boiled Electric Kettle",
    icon: ketli,
    path: "electric-kettle",
  },
  {
    _id: "ihrfh",
    name: "Mixer Grinder & Blender",
    icon: blender,
    path: "mixer-grinder",
  },
  {
    _id: "ihrfh",
    name: "Ceiling Fan",
    icon: fan,
    path: "ceiling-fan",
  },
];

const ExtraCategory = () => {
  return (
    <div className="container grid grid-cols-1 md:grid-cols-4 gap-6 pb-10 md:pb-20">
      {category.map((item) => (
        <div
          key={item?._id}
          className="flex items-center gap-4 border px-4 py-10"
        >
          <Image src={item?.icon} alt="image" />
          <div>
            <h1 className="font-bold text-[18px]">{item?.name}</h1>
            <Link href={`/${item?.path}`}>
              <button className="bg-secondary mt-2 text-sm font-semibold text-primary px-4 py-2">
                SHOP NOW
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExtraCategory;
