"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import ProductCard from "../cardGroup/ProductCard";
// custom styles for the button
const customButtonStyles =
  "w-12 h-12 flex items-center justify-center rounded-md shadow-md cursor-pointer";

const ArrowSlider = ({
  sliderData = [],
  compoName = "closet-icons",
  isOverlaySlider,
}) => {
  const swiperRef = useRef(null);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

  const handleSlideChange = (swiper) => {
    setIsAtStart(swiper.isBeginning);
    setIsAtEnd(swiper.isEnd);
  };

  return (
    <section className="w-full relative">
      {/* Left Arrow */}
      <button
        className={`absolute top-1/2 -left-4 transform -translate-y-1/2 z-10 custom-${compoName}-button-prev 
            ${
              isAtStart
                ? "bg-[#CAC8CA] text-primary-foreground"
                : "bg-primary text-primary-foreground"
            } 
            ${customButtonStyles}`}
      >
        <ChevronLeft size={24} />
      </button>

      <Swiper
        ref={swiperRef}
        modules={[Navigation, Autoplay]}
        spaceBetween={24}
        slidesPerView={1.3}
        speed={1200}
        autoplay={{
          delay: 20000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 2.5 },
          1024: { slidesPerView: 2 },
          1280: { slidesPerView: 3 },
        }}
        navigation={{
          nextEl: `.custom-${compoName}-button-next`,
          prevEl: `.custom-${compoName}-button-prev`,
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          setIsAtStart(swiper.isBeginning);
          setIsAtEnd(swiper.isEnd);
        }}
        onSlideChange={handleSlideChange}
      >
        {sliderData.map((product, index) => (
          <SwiperSlide key={index}>
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Right Arrow */}
      <button
        className={`absolute top-1/2 -right-4 transform -translate-y-1/2 z-10 custom-${compoName}-button-next 
            ${
              isAtEnd
                ? "bg-[#CAC8CA] text-primary-foreground"
                : "bg-primary text-primary-foreground"
            } 
            ${customButtonStyles}`}
      >
        <ChevronRight size={24} />
      </button>
    </section>
  );
};

export default ArrowSlider;
