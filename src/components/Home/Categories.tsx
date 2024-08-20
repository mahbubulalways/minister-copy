import refrigerator from "@/assets/icons/refrigerator.png";
import ac from "@/assets/icons/ac.png";
import television from "@/assets/icons/television.png";
import ricecooker from "@/assets/icons/ricecooker.png";
import blender from "@/assets/icons/blender.png";
import fan from "@/assets/icons/fan.png";
import Image from "next/image";
import Link from "next/link";

const Categories = () => {
  const category = [
    { icon: refrigerator, name: "Refrigerator", path: "refrigerator" },
    { icon: ac, name: "Air Conditioner", path: "air-conditioners" },
    { icon: television, name: "Television", path: "television" },
    { icon: ricecooker, name: "Rice Cooker", path: "rice-cooker" },
    { icon: blender, name: "Blender", path: "blender" },
    { icon: fan, name: "Fan", path: "fan" },
  ];
  return (
    <div className="bg-fourth py-14 mb-10 md:mb-20">
      <div className="container grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-5 ">
        {category.map((item, index) => (
          <Link
            href={`/${item?.path}`}
            key={index + 1}
            className="bg-tertiaryLite py-10"
          >
            <Image src={item.icon} alt="Icon" className="mx-auto" />
            <h1 className="text-xl font-bold text-primary text-center pt-4">
              {item.name}
            </h1>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
