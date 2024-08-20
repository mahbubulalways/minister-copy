import Product_Page_Sidebar from "@/components/Product_Page_Sidebar/Product_Page_Sidebar";
import Air_Conditioner_Sidebar from "./Air_Conditioner_Sidebar";
import ShortBy from "../Television/ShortBy";
import ShowingProduct from "@/components/Home/ShowingProduct";

const Air_Conditioner_Product = ({ products }: { products: any }) => {
  return (
    <div>
      <div className="flex items-center gap-4 bg-fourth w-full p-2">
        <Product_Page_Sidebar>
          <Air_Conditioner_Sidebar isHidden={false} />
        </Product_Page_Sidebar>
        <ShortBy />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 pt-10 gap-5">
        {products?.map((product: any) => (
          <ShowingProduct key={product?._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Air_Conditioner_Product;
