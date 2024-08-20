import { TProduct } from "../Television_Details/Television_Details";

type TProps = {
  product: TProduct;
  firstSixString: [string, string][];
};

const Product_Side_Details = ({ product, firstSixString }: TProps) => {
  return (
    <div>
      <div className="flex flex-col gap-3 pb-3">
        <h1 className="text-4xl font-bold text-tertiary">{product?.name}</h1>
        <p className="text-gray-600/75 font-semibold">
          <span className="text-[14px]">MRP:</span>{" "}
          <del className="text-lg">BDT {product?.price}</del>
        </p>
        <p className="text-2xl text-black/70 font-semibold">
          Offer Price BDT {product?.offerPrice}
        </p>
        <div className="flex items-center gap-3">
          <p>Availability</p>
          <p className="bg-green-600 text-primary text-[14px] w-max px-5 py-1">
            {product?.availability}
          </p>
        </div>
      </div>
      <div className="pt-5">
        <table className="min-w-full bg-white">
          <tbody>
            {firstSixString.map(([key, value], index) => (
              <tr key={index}>
                <td className="py-2 ">
                  {key
                    .replace(/([A-Z])/g, " $1")
                    .replace(/^./, (str) => str.toUpperCase())}
                </td>
                <td className="py-2 ">{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Product_Side_Details;
