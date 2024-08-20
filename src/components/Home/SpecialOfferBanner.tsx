"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import img1 from "@/assets/banners/small_banner.jpeg";
import img2 from "@/assets/banners/small_banner2.jpg";
import Image from "next/image";
const SpecialOfferBanner = () => {
  const images = [img1, img2];

  return (
    <div className="main-slider pt-8">
      <Swiper
        slidesPerView={1}
        loop={true}
        effect="fade"
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        modules={[Navigation, EffectFade, Autoplay]}
      >
        {images.map((slider, index) => (
          <SwiperSlide key={index}>
            <div className="image-layer">
              <Image src={slider} alt="banner" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SpecialOfferBanner;
