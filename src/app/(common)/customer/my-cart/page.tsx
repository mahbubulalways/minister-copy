"use client";
import Loader from "@/components/Loader/Loader";
import isAuthenticated from "@/components/utils/isAuthenticated";
import { useGetAddToCartProductQuery } from "@/redux/api/features/cartSlice";
import Image from "next/image";

const MyCart = () => {
  const user: any = isAuthenticated();
  const { data: products, isLoading } = useGetAddToCartProductQuery(
    user?.email
  );
  console.log(user);
  if (isLoading) {
    return <Loader />;
  }
  if (user === false) {
    return (
      <p className="h-screen flex justify-center items-center ">Login First</p>
    );
  }
  if (!products?.data?.message) {
    return (
      <p className="h-screen flex justify-center items-center ">
        Your cart is empty{" "}
      </p>
    );
  }
  return (
    <div className="container py-10 overflow-x-auto">
      <table className="min-w-full text-left border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="py-2 px-4 border-b">Product Image</th>
            <th className="py-2 px-4 border-b">Product Name</th>
            <th className="py-2 px-4 border-b">Quantity</th>
            <th className="py-2 px-4 border-b">Price</th>
            <th className="py-2 px-4 border-b">Total</th>
          </tr>
        </thead>
        <tbody>
          {products?.data?.cart?.map((product: any, index: number) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="py-2 px-4 border-b">
                <Image
                  height={1000}
                  width={1000}
                  src={product.image}
                  alt={product.name}
                  className="w-16 h-16 object-cover"
                />
              </td>
              <td className="py-2 px-4 border-b">{product.name}</td>
              <td className="py-2 px-4 border-b">{product.quantity}</td>
              <td className="py-2 px-4 border-b">${product.price}</td>
              <td className="py-2 px-4 border-b">
                ${(product.price * product.quantity).toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyCart;
