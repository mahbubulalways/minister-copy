import ShowingHomeProduct from "./ShowingHomeProduct";
import { TProduct } from "@/types";

const RefrigeratorProducts = async ({ products }: { products: TProduct }) => {
  return (
    <div className="container py-10 md:py-20">
      <h1 className="text-2xl font-bold pb-4 border-b-2">Refrigerator</h1>
      <ShowingHomeProduct products={products} />
    </div>
  );
};

export default RefrigeratorProducts;
