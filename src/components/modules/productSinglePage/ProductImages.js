"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const ProductImages = ({ images = [] }) => {
  const [selectedImg, setSelectedImg] = useState(0);
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
  const [showZoom, setShowZoom] = useState(false);
  const imageContainerRef = useRef(null);
  const zoomRef = useRef(null);

  // Handle thumbnail click
  const handleThumbnailClick = (index) => {
    setSelectedImg(index);
  };

  // Handle next/previous image
  const handleNext = () => {
    setSelectedImg((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setSelectedImg((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  // Zoom effect on mouse move
  const handleMouseMove = (e) => {
    if (!imageContainerRef.current) return;

    const container = imageContainerRef.current;
    const { left, top, width, height } = container.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;

    // Limit the zoom area to stay within image bounds
    const boundedX = Math.min(Math.max(x, 0), 100);
    const boundedY = Math.min(Math.max(y, 0), 100);

    setZoomPosition({ x: boundedX, y: boundedY });
  };

  // Hide zoom when changing images
  useEffect(() => {
    setShowZoom(false);
  }, [selectedImg]);

  // Return loading state if no images
  if (images.length === 0) {
    return (
      <div className="max-w-lg mx-auto">
        <div className="w-full aspect-square bg-gray-100 animate-pulse" />
        <div className="flex items-center mt-4 gap-2">
          <div className="w-16 h-16 bg-gray-100 animate-pulse rounded" />
        </div>
      </div>
    );
  }

  return (
    <div className="w-full grid grid-cols-12 gap-6">
      {/* Thumbnails on the left */}
      <div className="flex flex-col items-center gap-4 overflow-y-auto col-span-3">
        {images.map((img, index) => (
          <Image
            key={index}
            src={img}
            width={400}
            height={400}
            alt={`Thumbnail ${index}`}
            className={`w-full h-full object-cover cursor-pointer border-2 rounded-2xl transition-all duration-200 ${
              selectedImg === index ? "border-primary" : "border-transparent"
            }`}
            onClick={() => handleThumbnailClick(index)}
            onError={(e) => {
              console.error("Failed to load thumbnail:", img);
              e.currentTarget.src = "/placeholder-thumbnail.jpg";
            }}
          />
        ))}

        <div className="flex items-center gap-4">
          <button
            onClick={handleNext}
            className="bg-primary text-white w-10 h-10 rounded-md flex items-center justify-center"
            aria-label="Next image"
          >
            <ChevronLeft className="text-xl" />
          </button>

          <button
            onClick={handlePrev}
            className="bg-primary text-white w-10 h-10 rounded-md flex items-center justify-center"
            aria-label="Previous image"
          >
            <ChevronRight className="text-xl" />
          </button>
        </div>
      </div>

      {/* Main image with zoom */}
      <div
        ref={imageContainerRef}
        className="relative overflow-hidden flex-1 col-span-9"
        onMouseEnter={() => setShowZoom(true)}
        onMouseLeave={() => setShowZoom(false)}
        onMouseMove={handleMouseMove}
      >
        <Image
          src={images[selectedImg]}
          width={800}
          height={800}
          alt="Product"
          className="w-full h-auto object-cover rounded-xl cursor-zoom-in"
          priority
        />

        {/* Zoomed preview */}
        <div
          style={
            showZoom
              ? {
                  backgroundImage: `url(${images[selectedImg]})`,
                  backgroundPosition: `${zoomPosition.x}% ${zoomPosition.y}%`,
                  backgroundSize: "300%",
                  opacity: 1,
                }
              : {}
          }
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-300 pointer-events-none rounded-xl ${
            showZoom ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden="true"
        />
      </div>
    </div>
  );
};

export default ProductImages;
