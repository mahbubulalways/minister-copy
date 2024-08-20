import React from "react";
import Banner from "./Banner";
import FeatureProducts from "./FeatureProducts";
import Categories from "./Categories";
import NewArrivals from "./NewArrivals";
import SpecialOffers from "./SpecialOffers";
import ExtraCategory from "./ExtraCategory";
import Stategy from "./Stategy";
import TopProducts from "./TopProducts";
import TelevisionProducts from "./TelevisionProducts";
import RefrigeratorProducts from "./RefrigeratorProducts";
import AirConditionerProducts from "./AirConditionerProducts";
import getAllProducts from "@/services/actions/common/getAllProducts";
import Loader from "../Loader/Loader";
import DefaultModal from "./DefaultModal";

const Home = async () => {
  const products = await getAllProducts();
  if (!products?.data?.length) {
    return <Loader />;
  }
  const refrigerator = products?.data?.filter(
    (product: any) => product.mainCategory === "refrigerator"
  );
  const television = products?.data?.filter(
    (product: any) => product.mainCategory === "television"
  );
  const airConditioner = products?.data?.filter(
    (product: any) => product.mainCategory === "air-conditioner"
  );
  const featureProducts = products?.data?.filter(
    (product: any) => product.productType === "featured-product"
  );
  return (
    <div>
      <Banner />
      <DefaultModal />
      <RefrigeratorProducts products={refrigerator} />
      <TelevisionProducts products={television} />
      <AirConditionerProducts products={airConditioner} />
      <FeatureProducts products={featureProducts} />
      <Categories />
      <NewArrivals />
      {/* <SpecialOffers /> */}
      <ExtraCategory />
      <Stategy />
      <TopProducts />
    </div>
  );
};

export default Home;
