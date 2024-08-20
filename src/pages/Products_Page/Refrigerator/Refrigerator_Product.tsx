import ShowingProduct from "@/components/Home/ShowingProduct";
import Product_Page_Sidebar from "@/components/Product_Page_Sidebar/Product_Page_Sidebar";
import Refrigerator_Sidebar from "./Refrigerator_Sidebar";
import ShortBy from "../Television/ShortBy";

const refrigerators = [
  {
    _id: "1233234er132",
    name: "MINISTER M-165N DEEP BLUE",
    images: "https://i.ibb.co/0tFwc7p/m-165-deep-blue-1-600x600.jpg",
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
    images: "https://i.ibb.co/0tFwc7p/m-165-deep-blue-1-600x600.jpg",
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
    images: "https://i.ibb.co/0tFwc7p/m-165-deep-blue-1-600x600.jpg",
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
    images: "https://i.ibb.co/0tFwc7p/m-165-deep-blue-1-600x600.jpg",
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
    images: "https://i.ibb.co/0tFwc7p/m-165-deep-blue-1-600x600.jpg",
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
    images: "https://i.ibb.co/0tFwc7p/m-165-deep-blue-1-600x600.jpg",
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
    images: "https://i.ibb.co/0tFwc7p/m-165-deep-blue-1-600x600.jpg",
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
    images: "https://i.ibb.co/0tFwc7p/m-165-deep-blue-1-600x600.jpg",
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
    images: "https://i.ibb.co/0tFwc7p/m-165-deep-blue-1-600x600.jpg",
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
    images: "https://i.ibb.co/0tFwc7p/m-165-deep-blue-1-600x600.jpg",
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
    images: "https://i.ibb.co/0tFwc7p/m-165-deep-blue-1-600x600.jpg",
    price: "49,452",
    offerPrice: "40,990",
    mainCategory: "refrigerator",
    subCategory: "direct-cool-refrigerator",
    productType: "featured-product",
    sale: true,
    isDeleted: false,
  },
];

const Refrigerator_Product = ({ products }: { products: any }) => {
  return (
    <div>
      <div className="flex items-center gap-4 bg-fourth w-full p-2">
        <Product_Page_Sidebar>
          <Refrigerator_Sidebar isHidden={false} />
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

export default Refrigerator_Product;
