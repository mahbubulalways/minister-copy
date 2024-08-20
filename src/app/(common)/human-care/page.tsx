import ShowingProduct from "@/components/Home/ShowingProduct";
import Loader from "@/components/Loader/Loader";
import getHumanCare from "@/services/actions/humanProduct/getHumanProduct";
const HumanCarePage = async () => {
  const products = await getHumanCare();
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

export default HumanCarePage;
