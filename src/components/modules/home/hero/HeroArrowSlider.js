"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

function HeroArrowSlider({ categoryData }) {
  const swiperRef = useRef(null);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

  const handleSlideChange = (swiper) => {
    setIsAtStart(swiper.isBeginning);
    setIsAtEnd(swiper.isEnd);
  };

  return (
    <div className="relative group">
      <Swiper
        ref={swiperRef}
        modules={[Autoplay, Navigation]}
        slidesPerView={1}
        autoplay={{
          delay: 12000,
          disableOnInteraction: false,
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          setIsAtStart(swiper.isBeginning);
          setIsAtEnd(swiper.isEnd);
        }}
        onSlideChange={handleSlideChange}
        navigation={{
          nextEl: ".hero-button-next",
          prevEl: ".hero-button-prev",
        }}
      >
        {categoryData?.map((data) => (
          <SwiperSlide key={data?.id}>
            <Image
              src={data?.image}
              width={1800}
              height={1600}
              alt=""
              className="w-full h-full"
              priority
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Arrows */}
      <button
        className={`hero-button-prev opacity-0 group-hover:opacity-100 transition-all duration-300 absolute left-3 top-1/2 -translate-y-1/2 w-12 h-12 ${
          isAtStart ? "bg-[#CAC8CA]" : "bg-primary"
        } text-primary-foreground rounded-md flex items-center justify-center cursor-pointer z-10 shadow-md hover:scale-105 transform transition-transform`}
        disabled={isAtStart}
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        className={`hero-button-next opacity-0 group-hover:opacity-100 transition-all duration-300 absolute right-3 top-1/2 -translate-y-1/2 w-12 h-12 ${
          isAtEnd ? "bg-[#CAC8CA]" : "bg-primary"
        } text-primary-foreground rounded-md flex items-center justify-center cursor-pointer z-10 shadow-md hover:scale-105 transform transition-transform`}
        disabled={isAtEnd}
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
}

export default HeroArrowSlider;
