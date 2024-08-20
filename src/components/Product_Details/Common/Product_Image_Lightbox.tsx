"use client";
import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useState } from "react";
import { HiOutlinePlus, HiOutlineMinus } from "react-icons/hi";
import { FaXmark } from "react-icons/fa6";

type TModal = {
  images: string[];
  closeModal: () => void;
  isModalOpen: boolean;
};
const Product_Image_Lightbox = ({
  images,
  closeModal,
  isModalOpen,
}: TModal) => {
  const [selectedImage, setSelectedImage] = useState<string>(images[0]);
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "free-snap",
    slides: {
      perView: 5,
      spacing: 2,
      origin: "auto",
    },
    breakpoints: {
      "(min-width: 640px)": {
        slides: {
          perView: 5,
          spacing: 2,
        },
      },
      "(min-width: 768px)": {
        slides: {
          perView: 8,
          spacing: 2,
        },
      },
      "(min-width: 1024px)": {
        slides: {
          perView: 10,
          spacing: 2,
        },
      },
    },
  });
  const [zoom, setZoom] = useState(1);

  const handleScroll = (event: any) => {
    event.preventDefault();
    const delta = Math.sign(event.deltaY);
    setZoom((prevZoom) => Math.min(Math.max(prevZoom - delta * 0.1, 0.5), 2.5));
  };

  const handleZoomIn = () => {
    setZoom((prevZoom) => Math.min(prevZoom + 0.1, 2.5));
  };

  const handleZoomOut = () => {
    setZoom((prevZoom) => Math.max(prevZoom - 0.1, 0.5));
  };
  return (
    <div className="">
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white   overflow-hidden  w-screen h-screen mx-auto z-50">
            <div className="flex justify-between items-center pt-2">
              <div className="flex pl-5 items-center w-max gap-3 bg-white z-40">
                <button className="ext-2xl" onClick={handleZoomIn}>
                  <HiOutlinePlus className="w-6 h-6" />
                </button>
                <button className="ext-2xl" onClick={handleZoomOut}>
                  <HiOutlineMinus className="w-6 h-6" />
                </button>
              </div>
              <button
                onClick={closeModal}
                className="text-gray-600 hover:text-gray-800 "
              >
                <FaXmark className="w-6 h-6" />
              </button>
            </div>
            <div>
              <div
                onWheel={handleScroll}
                className="overflow-clip md:overflow-visible"
              >
                <Image
                  src={selectedImage}
                  alt="image"
                  height={1024}
                  width={1024}
                  style={{ transform: `scale(${zoom})` }}
                  className="w-[500px] mx-auto transition-transform duration-300 ease-in-out"
                />
              </div>

              <div ref={sliderRef} className="keen-slider bg-white h-full">
                {images?.map((image, index) => (
                  <div
                    onClick={() => setSelectedImage(image)}
                    key={index}
                    className="keen-slider__slide cursor-pointer "
                  >
                    <Image
                      src={image}
                      alt="image"
                      height={1000}
                      width={1000}
                      className="w-full"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Product_Image_Lightbox;
