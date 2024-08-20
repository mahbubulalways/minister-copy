import ShowingHomeProduct from "./ShowingHomeProduct";
import { TProduct } from "@/types";

const AirConditionerProducts = async ({ products }: { products: TProduct }) => {
  return (
    <div className="container py-10 md:py-20">
      <h1 className="text-2xl font-bold pb-4 border-b-2">Air Conditioner</h1>
      <ShowingHomeProduct products={products} />
    </div>
  );
};

export default AirConditionerProducts;
