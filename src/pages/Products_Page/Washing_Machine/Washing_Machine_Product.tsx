import Product_Page_Sidebar from "@/components/Product_Page_Sidebar/Product_Page_Sidebar";
import Washing_Machine_Sidebar from "./Washing_Machine_Sidebar";
import ShortBy from "../Television/ShortBy";
import ShowingProduct from "@/components/Home/ShowingProduct";

const Washing_Machine_Product = ({ products }: { products: any }) => {
  return (
    <div>
      <div className="flex items-center gap-4 bg-fourth w-full p-2">
        <Product_Page_Sidebar>
          <Washing_Machine_Sidebar isHidden={false} />
        </Product_Page_Sidebar>
        <ShortBy />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        {products?.map((product: any) => (
          <ShowingProduct key={product?._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Washing_Machine_Product;
