"use client";
import ShowingProduct from "./ShowingProduct";
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useEffect, useState } from "react";

const ShowingHomeProduct = ({ products }: { products: any }) => {
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "free-snap",
    slides: {
      perView: 2,
      spacing: 10,
      origin: "auto",
    },
    breakpoints: {
      "(min-width: 640px)": {
        slides: {
          perView: 3,
          spacing: 10,
        },
      },
      "(min-width: 768px)": {
        slides: {
          perView: 4,
          spacing: 10,
        },
      },
      "(min-width: 1024px)": {
        slides: {
          perView: 5,
          spacing: 10,
        },
      },
    },
  });

  // Use a state to trigger a re-render after slider initialization
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    if (slider.current) {
      // Set a timeout to trigger layout recalculation after initialization
      setTimeout(() => {
        setIsInitialized(true);
      }, 100);
    }
  }, [slider]);

  return (
    <div>
      <div className="flex items-center gap-5 justify-end pt-5">
        <button
          onClick={() => slider.current?.prev()}
          className="bg-tertiary text-white p-1 rounded-full"
        >
          <IoIosArrowRoundBack className="w-12 h-12" />
        </button>
        <button
          onClick={() => slider.current?.next()}
          className="border border-tertiary rounded-full p-1"
        >
          <IoIosArrowRoundForward className="w-12 h-12" />
        </button>
      </div>
      <div
        ref={sliderRef}
        className={`keen-slider h-full py-5 ${
          isInitialized ? "transition-all" : "opacity-0"
        }`}
      >
        {products?.map((product: any) => (
          <ShowingProduct key={product?._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ShowingHomeProduct;
