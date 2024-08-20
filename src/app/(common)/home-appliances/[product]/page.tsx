type TParams = {
  params: {
    product: string;
  };
};

const products = [
  {
    name: "Minister Rice Cooker- MI-RC- 2.8 LITER",
    image:
      "https://ministerbd.com/media/catalog/product/cache/c212918e99dbb8be7b8918ef8881d0e9/r/i/rice_cooker_green_1-600x600.jpg",
    images: [
      "https://ministerbd.com/media/catalog/product/cache/c212918e99dbb8be7b8918ef8881d0e9/r/i/rice_cooker_green_1-600x600.jpg",
      "https://ministerbd.com/media/catalog/product/cache/c212918e99dbb8be7b8918ef8881d0e9/r/i/rice_cooker_green_1-600x600.jpg",
      "https://ministerbd.com/media/catalog/product/cache/c212918e99dbb8be7b8918ef8881d0e9/r/i/rice_cooker_green_1-600x600.jpg",
    ],
    price: 499,
    discount: 10,
    offerPrice: 199,
    mainCategory: "home-appliance",
    subCategory: "rice-cooker",
    availability: "In Stock",
    size: "7kg",
    productType: "care",
    sale: "no",
    isDeleted: "no",
    rating: 4.5,
    selling: 120,
  },
];

const HomeApplianceProduct = ({ params }: TParams) => {
  return <div></div>;
};

export default HomeApplianceProduct;
