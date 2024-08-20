import AC_Details from "@/components/Product_Details/AC_Details/AC_Details";
import HomeAppianceDetails from "@/components/Product_Details/Home_Appiance/Home_Appiance_Details";
import Human_Care_Details from "@/components/Product_Details/Human_Care_Details/Human_Care_Details";
import Micro_Oven_Details from "@/components/Product_Details/Micro_Oven_Details/Micro_Oven_Details";
import Refrigerator_Details from "@/components/Product_Details/Refrigerator_Details/Refrigerator_Details";
import Television_Details from "@/components/Product_Details/Television_Details/Television_Details";
import Washing_Machine_Details from "@/components/Product_Details/Washing_Machine_Details/Washing_Machine_Details";
import getSingleProduct from "@/services/actions/common/getSingleProduct";

type TParams = {
  params: {
    category: string;
    productId: string;
  };
};
const page = async ({ params }: TParams) => {
  const category = params?.category;
  const productId = params?.productId;
  const product = await getSingleProduct(productId);
  if (category === "television") {
    return <Television_Details product={product?.data} />;
  }
  if (category === "air-conditioner") {
    return <AC_Details product={product?.data} />;
  }
  if (category === "refrigerator") {
    return <Refrigerator_Details product={product?.data} />;
  }
  if (category === "washing-machine") {
    return <Washing_Machine_Details product={product?.data} />;
  }

  if (category === "micro-oven") {
    return <Micro_Oven_Details product={product?.data} />;
  }
  if (category === "human-care") {
    return <Human_Care_Details product={product?.data} />;
  }
  if (category === "home-appliance") {
    return <HomeAppianceDetails product={product?.data} />;
  }
  return <div></div>;
};

export default page;
