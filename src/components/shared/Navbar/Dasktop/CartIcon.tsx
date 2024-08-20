"use client";
import isAuthenticated from "@/components/utils/isAuthenticated";
import { IoBagOutline } from "react-icons/io5";
import { useGetAddToCartProductQuery } from "@/redux/api/features/cartSlice";
import Link from "next/link";

const CartIcon = () => {
  const user: any = isAuthenticated();
  const email = user.email;
  const { data: cart, isLoading } = useGetAddToCartProductQuery(email);
  if (isLoading) {
    return;
  }
  return (
    <Link href={"/customer/my-cart"}>
      <div className="relative">
        <IoBagOutline className="text-primary h-8 w-8" />
        {cart?.data?.cart?.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs">
            {cart?.data?.cart?.length}
          </span>
        )}
      </div>
    </Link>
  );
};

export default CartIcon;
