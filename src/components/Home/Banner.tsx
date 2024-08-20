"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import img1 from "@/assets/banners/Home-Slider-1903X532-B_1.jpg";
import img2 from "@/assets/banners/Home-Slider-1903X532-C_2.jpg";
import img3 from "@/assets/banners/kisti-website-banner.jpg";
import Image from "next/image";

const Banner = () => {
  const images = [img1, img2, img3];

  return (
    <div className="main-slider z-10">
      <Swiper
        slidesPerView={1}
        loop={true}
        navigation={true}
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

export default Banner;
