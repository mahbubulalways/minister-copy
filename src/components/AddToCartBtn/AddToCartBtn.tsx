"use client";
import { RiHandbagLine } from "react-icons/ri";
import isAuthenticated from "../utils/isAuthenticated";
import { toast } from "sonner";
import { TProduct } from "@/types";
import { useAddToCartMutation } from "@/redux/api/features/cartSlice";

const AddToCartBtn = ({ product }: { product: TProduct }) => {
  const isLogin: any = isAuthenticated();
  const [addToCart] = useAddToCartMutation();
  const handleAddToCart = async (product: TProduct) => {
    if (!isLogin) {
      toast.warning("Login first.", { position: "top-center" });
    }
    try {
      const cartItem = {
        email: isLogin?.email,
        cart: [
          {
            productId: product?._id,
            name: product.name,
            image: product.image,
            price: Number(product.offerPrice),
            quantity: 1,
          },
        ],
      };
      const result = await addToCart(cartItem);
      if (result) {
        toast.success(result?.data?.message, { position: "top-center" });
      }
    } catch (error) {
      toast.error("Something went wrong", { position: "top-center" });
    }
  };
  return (
    <div>
      <button
        onClick={() => handleAddToCart(product)}
        className="mt-2 uppercase w-max mx-auto text-[15px] flex items-center gap-1  bg-tertiaryLite text-primary px-3 py-1.5 hover:bg-tertiary transition-all duration-300"
      >
        <RiHandbagLine className="h-5 w-5" /> Add to cart
      </button>
    </div>
  );
};

export default AddToCartBtn;
