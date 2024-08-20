import ShowingProduct from "@/components/Home/ShowingProduct";
import Loader from "@/components/Loader/Loader";
import getAllHomeAppliance from "@/services/actions/homeAppliance/getAllHomeAppliance";

const HomeAppliancePage = async () => {
  const products = await getAllHomeAppliance();

  if (!products?.data?.length) {
    return <Loader />;
  }
  return (
    <div>
      <div className="container grid grid-cols-2 md:grid-cols-5 gap-5 pt-10 pb-20 ">
        {products?.data?.map((product: any) => (
          <ShowingProduct key={product?._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default HomeAppliancePage;
