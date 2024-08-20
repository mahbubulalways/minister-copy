export const products = [
  {
    _id: "1233",
    name: "Minister 1 TON NON INVERTER (12K410P-WHT)",
    images: [
      "https://i.ibb.co/ZfGnrkM/minister-1-ton-non-inverter-12k410p-wht-1.png",
    ],
    image:
      "https://i.ibb.co/ZfGnrkM/minister-1-ton-non-inverter-12k410p-wht-1.png",
    price: "49,452",
    offerPrice: "40,990",
    mainCategory: "air-conditioner",
    subCategory: "split-ac",
    productType: "featured-product",
    sale: false,
    isDeleted: false,
  },
  {
    _id: "123321",
    name: "Minister MIXER GRINDER MI-MG600Y",
    image: "https://i.ibb.co/LCCtbq6/mi-mg600y.jpg",
    images: ["https://i.ibb.co/LCCtbq6/mi-mg600y.jpg"],
    price: "49,452",
    offerPrice: "40,990",
    mainCategory: "kitchen-appliances",
    subCategory: "mixer-grinder",
    productType: "featured-product",
    sale: false,
    isDeleted: false,
  },
  {
    _id: "1233234er1",
    name: "Minister M-24 DELUXE LED TV (MI24DX16G)",
    image:
      "https://i.ibb.co/TrXvdFd/minister-deluxe-led-tv-modelmi24dx16g-01.jpg",
    images: [
      "https://i.ibb.co/TrXvdFd/minister-deluxe-led-tv-modelmi24dx16g-01.jpg",
    ],
    price: "49,452",
    offerPrice: "40,990",
    mainCategory: "television",
    subCategory: "smart-led-tv",
    productType: "featured-product",
    sale: false,
    isDeleted: false,
  },
  {
    _id: "1233234er132",
    name: "MINISTER M-165N DEEP BLUE",
    image: "https://i.ibb.co/0tFwc7p/m-165-deep-blue-1-600x600.jpg",
    images: ["https://i.ibb.co/0tFwc7p/m-165-deep-blue-1-600x600.jpg"],
    price: "49,452",
    offerPrice: "40,990",
    mainCategory: "refrigerator",
    subCategory: "direct-cool-refrigerator",
    productType: "featured-product",
    sale: true,
    isDeleted: false,
  },
  {
    _id: "1233234er132",
    name: "MINISTER M-165N DEEP BLUE",
    image: "https://i.ibb.co/0tFwc7p/m-165-deep-blue-1-600x600.jpg",
    images: ["https://i.ibb.co/0tFwc7p/m-165-deep-blue-1-600x600.jpg"],
    price: "49,452",
    offerPrice: "40,990",
    mainCategory: "refrigerator",
    subCategory: "direct-cool-refrigerator",
    productType: "featured-product",
    sale: true,
    isDeleted: false,
  },
  {
    _id: "1233234er132",
    name: "MINISTER M-165N DEEP BLUE",
    images: ["https://i.ibb.co/0tFwc7p/m-165-deep-blue-1-600x600.jpg"],
    image: "https://i.ibb.co/0tFwc7p/m-165-deep-blue-1-600x600.jpg",
    price: "49,452",
    offerPrice: "40,990",
    mainCategory: "refrigerator",
    subCategory: "direct-cool-refrigerator",
    productType: "featured-product",
    sale: true,
    isDeleted: false,
  },
  {
    _id: "1233234er1",
    name: "Minister M-24 DELUXE LED TV (MI24DX16G)",
    image:
      "https://i.ibb.co/TrXvdFd/minister-deluxe-led-tv-modelmi24dx16g-01.jpg",
    images: [
      "https://i.ibb.co/TrXvdFd/minister-deluxe-led-tv-modelmi24dx16g-01.jpg",
    ],
    price: "49,452",
    offerPrice: "40,990",
    mainCategory: "television",
    subCategory: "smart-led-tv",
    productType: "featured-product",
    sale: false,
    isDeleted: false,
  },
  {
    _id: "123321",
    name: "Minister MIXER GRINDER MI-MG600Y",
    image: "https://i.ibb.co/LCCtbq6/mi-mg600y.jpg",
    images: ["https://i.ibb.co/LCCtbq6/mi-mg600y.jpg"],
    price: "49,452",
    offerPrice: "40,990",
    mainCategory: "kitchen-appliances",
    subCategory: "mixer-grinder",
    productType: "featured-product",
    sale: false,
    isDeleted: false,
  },
];
import { TProduct } from "@/types";
import ShowingHomeProduct from "./ShowingHomeProduct";
const FeatureProducts = ({ products }: { products: TProduct }) => {
  return (
    <div className="container py-10 md:py-20">
      <h1 className="text-2xl font-bold pb-4 border-b-2">Featured Products</h1>
      <hr />

      <ShowingHomeProduct products={products} />
    </div>
  );
};

export default FeatureProducts;
