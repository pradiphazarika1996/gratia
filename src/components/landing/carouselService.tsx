"use client";
import React, { useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import { Eye } from "lucide-react";

// Import images from src/assets/images
import carousel1 from "@/assets/images/carousel1.jpg";
import carousel2 from "@/assets/images/carousel2.jpg";
import carousel3 from "@/assets/images/carousel3.jpg";

interface CarouselSlide {
  id: number;
  image: StaticImageData;
  category: string;
  title: string;
}

const slides: CarouselSlide[] = [
  {
    id: 1,
    image: carousel1,
    category: "DEVELOPMENT",
    title: "IT Consultancy",
  },
  {
    id: 2,
    image: carousel2,
    category: "DEVELOPMENT",
    title: "IT Consultancy",
  },
  {
    id: 3,
    image: carousel3,
    category: "DEVELOPMENT",
    title: "IT Consultancy",
  },
];

const ITCarousel: React.FC = () => {
  const [hoveredSlide, setHoveredSlide] = useState<number | null>(null);
  const [translateX, setTranslateX] = useState(0);

  useEffect(() => {
    const slideWidth = 450 + 32; // card width (430px) + gap (32px) = 462px
    const duration = 9000; // 5 seconds per slide in milliseconds
    const pixelsPerFrame = slideWidth / (duration / 12.67); // ~60fps

    const interval = setInterval(() => {
      setTranslateX((prev) => {
        const newTranslate = prev + pixelsPerFrame;
        // Seamlessly reset when one slide has scrolled
        if (newTranslate >= slideWidth) {
          return newTranslate - slideWidth;
        }
        return newTranslate;
      });
    }, 16.67); // ~60fps for smooth animation

    return () => clearInterval(interval);
  }, []);

  // Triple the slides for seamless infinite loop
  const extendedSlides = [...slides, ...slides, ...slides];
  const baseOffset = (430 + 32) * slides.length; // Start at middle set

  return (
    <div className="w-full bg-[#e8e8e8] py-16 px-6">
      <div className="mb-16 relative z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray mb-4 leading-tight">
          We Provide Exclusive Service
          <br />
          For{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-purple-800">
            Your Business
          </span>
        </h1>
      </div>
      <div className="max-w-[1400px] mx-auto">
        {/* Carousel Container */}
        <div className="relative h-[450px] mb-12 overflow-hidden">
          <div
            className="flex gap-8"
            style={{
              transform: `translateX(-${baseOffset + translateX}px)`,
              width: "max-content",
            }}
          >
            {extendedSlides.map((slide, index) => (
              <div
                key={`${slide.id}-${index}`}
                className="relative flex-shrink-0 h-[450px] rounded-[32px] overflow-hidden shadow-xl cursor-pointer"
                style={{
                  width: "430px",
                }}
                onMouseEnter={() => setHoveredSlide(index)}
                onMouseLeave={() => setHoveredSlide(null)}
              >
                {/* Background Image */}
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-cover"
                  priority={index < 3}
                />

                {/* Hover Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br from-[#1e3a8a] via-[#2563eb] to-[#3b82f6] transition-opacity duration-500 flex flex-col items-center justify-center ${
                    hoveredSlide === index ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {/* Hexagonal Icons Pattern */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-40">
                    {/* Top Row */}
                    <div className="absolute top-16 left-1/2 -translate-x-1/2 flex gap-16">
                      <HexIcon>
                        <svg
                          className="w-10 h-10 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </HexIcon>
                      <HexIcon>
                        <svg
                          className="w-10 h-10 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                          />
                        </svg>
                      </HexIcon>
                    </div>

                    {/* Middle Row */}
                    <div className="flex items-center gap-8">
                      <HexIcon>
                        <svg
                          className="w-10 h-10 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                          />
                        </svg>
                      </HexIcon>

                      {/* Center IT Hexagon */}
                      <div className="relative w-32 h-32 flex items-center justify-center">
                        <div
                          className="absolute inset-0 border-[3px] border-white/50"
                          style={{
                            clipPath:
                              "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
                          }}
                        />
                        <span className="text-white text-6xl font-bold relative z-10">
                          IT
                        </span>
                        {/* Connecting lines */}
                        <div
                          className="absolute w-full h-[2px] bg-white/30 top-1/2 left-full"
                          style={{ width: "60px" }}
                        />
                        <div
                          className="absolute w-full h-[2px] bg-white/30 top-1/2 right-full"
                          style={{ width: "60px" }}
                        />
                        <div
                          className="absolute w-[2px] h-full bg-white/30 left-1/2 top-full"
                          style={{ height: "60px" }}
                        />
                        <div
                          className="absolute w-[2px] h-full bg-white/30 left-1/2 bottom-full"
                          style={{ height: "60px" }}
                        />
                      </div>

                      <HexIcon>
                        <svg
                          className="w-10 h-10 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                      </HexIcon>
                    </div>

                    {/* Bottom Row */}
                    <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex gap-16">
                      <HexIcon>
                        <svg
                          className="w-10 h-10 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                          />
                        </svg>
                      </HexIcon>
                      <HexIcon>
                        <svg
                          className="w-10 h-10 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                          />
                        </svg>
                      </HexIcon>
                      <HexIcon>
                        <svg
                          className="w-10 h-10 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                          />
                        </svg>
                      </HexIcon>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10 text-center">
                    <div className="inline-block bg-white px-8 py-2.5 rounded-full mb-8">
                      <span className="text-[13px] font-bold text-gray-900 tracking-wider uppercase">
                        {slide.category}
                      </span>
                    </div>
                    <h3 className="text-white text-5xl font-bold tracking-tight">
                      {slide.title}
                    </h3>
                  </div>

                  {/* Eye Icon Button */}
                  <div className="absolute bottom-10 right-10 w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300">
                    <Eye className="w-10 h-10 text-blue-600 stroke-[2.5]" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center items-center gap-2.5">
          {slides.map((_, index) => {
            const slideWidth = 430 + 32;
            const currentSlideIndex =
              Math.floor(translateX / slideWidth) % slides.length;
            return (
              <button
                key={index}
                className={`rounded-full transition-all duration-300 ${
                  currentSlideIndex === index
                    ? "bg-blue-600 w-10 h-3"
                    : "bg-gray-400 w-3 h-3"
                }`}
                aria-label={`Slide ${index + 1}`}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

// Hexagonal Icon Component
const HexIcon: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div
      className="w-24 h-24 bg-transparent border-[2.5px] border-white/40 flex items-center justify-center"
      style={{
        clipPath:
          "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
      }}
    >
      {children}
    </div>
  );
};

export default ITCarousel;
