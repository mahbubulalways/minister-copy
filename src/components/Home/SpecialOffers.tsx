"use client";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import React, { useEffect, useState } from "react";
import { products } from "./FeatureProducts";
import ShowingProduct from "./ShowingProduct";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import SpecialOfferBanner from "./SpecialOfferBanner";

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const SpecialOffers = () => {
  const categories = [
    { name: "Air Conditioner", path: "air-conditioner" },
    { name: "Home Appliances", path: "home-appliances" },
    { name: "Washing Machine", path: "washing-machine" },
    { name: "Microwave Oven", path: "microwave-oven" },
    { name: "Refrigerator", path: "refrigerator" },
  ];

  const [value, setValue] = useState(0);
  const [allData, setAllData] = useState<any>([]);
  const [categoryName, setCategoryName] = useState(categories[0].path);

  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "free-snap",
    slides: {
      perView: 2,
      spacing: 10,
    },
    breakpoints: {
      "(min-width: 640px)": {
        slides: {
          perView: 3,
          spacing: 10,
        },
      },
      "(min-width: 1024px)": {
        slides: {
          perView: 4,
          spacing: 10,
        },
      },
    },
  });

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    setCategoryName(categories[newValue].path);
  };

  useEffect(() => {
    fetch(`http://localhost:5000/api/v1/products/all-products`)
      .then((res) => res.json())
      .then((data) => setAllData(data));
  }, []);

  const filteringProduct = allData?.data?.filter(
    (product: any) => product.mainCategory === categoryName
  );

  if (!allData?.data?.length) {
    return "Loading";
  }

  return (
    <div className="bg-fourth py-8 mb-10 md:mb-20">
      <div className="container grid grid-cols-1 xl:grid-cols-3 gap-5 h-full">
        <div className="col-span-1">
          <h1 className="text-[18px] font-semibold pt-1 pb-4">Special Offer</h1>
          <hr />
          <SpecialOfferBanner />
        </div>
        <Box sx={{ width: "100%" }} className="col-span-2 pb-14">
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              variant="scrollable"
              scrollButtons="auto"
            >
              {categories.map((category, index) => (
                <Tab key={index} label={category.name} {...a11yProps(index)} />
              ))}
            </Tabs>
          </Box>
          <div
            ref={sliderRef}
            key={categoryName}
            className="keen-slider bg-primary p-3 w-full"
          >
            {filteringProduct?.map((product: any) => (
              <ShowingProduct key={product?._id} product={product} />
            ))}
          </div>
        </Box>
      </div>
    </div>
  );
};

export default SpecialOffers;
