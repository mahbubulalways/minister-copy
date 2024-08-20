"use client";
import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useState } from "react";
import Product_Image_Lightbox from "./Product_Image_Lightbox";
type TImages = {
  images: string[];
};

const Product_Details_Image = ({ images }: TImages) => {
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "free-snap",
    slides: {
      perView: 4,
      spacing: 2,
      origin: "auto",
    },
  });
  const [selectedImage, setSelectedImage] = useState<string>(images[0]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const handleMouseMove = (e: any) => {
    const x = e.clientX - e.target.offsetLeft;
    const y = e.clientY - e.target.offsetTop;
    const img = document.getElementById("img") as HTMLBodyElement;
    img.style.transformOrigin = `${x}px ${y}px`;
    img.style.transform = "scale(1.6)";
    img.style.overflow = "hidden";
  };
  const handleMouseLeave = (e: any) => {
    const img = document.getElementById("img") as HTMLBodyElement;
    img.style.transformOrigin = "center";
    img.style.transform = "scale(1)";
  };
  return (
    <div>
      <div className="overflow-hidden">
        <Image
          src={selectedImage}
          alt="image"
          height={1024}
          width={1024}
          className="w-full h-auto border shadow "
          id="img"
          onMouseMove={(e) => handleMouseMove(e)}
          onMouseLeave={(e) => handleMouseLeave(e)}
          onClick={openModal}
        />
      </div>

      <div ref={sliderRef} className="keen-slider">
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
      <Product_Image_Lightbox
        closeModal={closeModal}
        isModalOpen={isModalOpen}
        images={images}
      />
    </div>
  );
};

export default Product_Details_Image;
