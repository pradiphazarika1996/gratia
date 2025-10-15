"use client";
import React from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const services = [
    {
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none">
          <rect
            x="8"
            y="8"
            width="32"
            height="32"
            rx="4"
            stroke="white"
            strokeWidth="2"
          />
          <path
            d="M16 20h16M16 24h16M16 28h12"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="20" cy="16" r="2" fill="white" />
        </svg>
      ),
      title: "Business Analysis",
      description:
        "Continually engage customized infomediarie and quality growth strategies. Appropriately.",
    },
    {
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none">
          <rect
            x="10"
            y="8"
            width="28"
            height="32"
            rx="2"
            stroke="white"
            strokeWidth="2"
          />
          <path
            d="M16 16h16M16 22h16M16 28h10"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <rect x="18" y="4" width="4" height="6" rx="1" fill="white" />
          <rect x="26" y="4" width="4" height="6" rx="1" fill="white" />
        </svg>
      ),
      title: "Software Services",
      description:
        "Continually engage customized infomediarie and quality growth strategies. Appropriately.",
    },
    {
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none">
          <rect
            x="8"
            y="12"
            width="32"
            height="24"
            rx="2"
            stroke="white"
            strokeWidth="2"
          />
          <path
            d="M14 18L20 24L14 30M24 28h10"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Web Development",
      description:
        "Continually engage customized infomediarie and quality growth strategies. Appropriately.",
    },
    {
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none">
          <rect
            x="8"
            y="12"
            width="32"
            height="24"
            rx="2"
            stroke="white"
            strokeWidth="2"
          />
          <path
            d="M14 18L20 24L14 30M24 28h10"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Software Services",
      description:
        "Continually engage customized infomediarie and quality growth strategies. Appropriately.",
    },
    {
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none">
          <rect
            x="8"
            y="12"
            width="32"
            height="24"
            rx="2"
            stroke="white"
            strokeWidth="2"
          />
          <path
            d="M14 18L20 24L14 30M24 28h10"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Web Development",
      description:
        "Continually engage customized infomediarie and quality growth strategies. Appropriately.",
    },
    {
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none">
          <rect
            x="8"
            y="12"
            width="32"
            height="24"
            rx="2"
            stroke="white"
            strokeWidth="2"
          />
          <path
            d="M14 18L20 24L14 30M24 28h10"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Web Development",
      description:
        "Continually engage customized infomediarie and quality growth strategies. Appropriately.",
    },
    {
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none">
          <rect
            x="8"
            y="12"
            width="32"
            height="24"
            rx="2"
            stroke="white"
            strokeWidth="2"
          />
          <path
            d="M14 18L20 24L14 30M24 28h10"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Web Development",
      description:
        "Continually engage customized infomediarie and quality growth strategies. Appropriately.",
    },
    {
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none">
          <circle cx="24" cy="24" r="16" stroke="white" strokeWidth="2" />
          <path
            d="M24 14v20M14 24h20"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="24" cy="24" r="3" fill="white" />
        </svg>
      ),
      title: "UI/UX Design",
      description:
        "Continually engage customized infomediarie and quality growth strategies. Appropriately.",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length);
  };

  const getVisibleCards = () => {
    const cards = [];
    for (let i = 0; i < 4; i++) {
      const index = (currentSlide + i) % services.length;
      cards.push(services[index]);
    }
    return cards;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br  py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Hero Content */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#0ca6ed] to-[#7aabe8] p-12 md:p-16">
          {/* Background Decorative Elements */}
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-20">
            <div className="absolute top-20 right-20 w-64 h-64 border-2 border-blue-500 rounded-full"></div>
            <div className="absolute top-40 right-40 w-32 h-32 border-2 border-purple-500 rounded-full"></div>
            <div className="absolute bottom-20 right-32 w-48 h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
          </div>
          {/* Latest Project Badge */}
          <div className="flex items-center gap-2 mb-8 relative z-10">
            {/* <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <svg
                className="w-6 h-6 text-white"
                viewBox="0 0 24 24"
                fill="none"
              >
                <rect
                  x="3"
                  y="3"
                  width="18"
                  height="18"
                  rx="2"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M9 9l6 6M15 9l-6 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div> */}
            {/* <span className="text-blue-400 font-semibold text-sm tracking-wider uppercase">
              Latest Project
            </span> */}
          </div>
          {/* Main Heading */}
          <div className="mb-16 relative z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              We Provide Exclusive Service
              <br />
              For{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
                Your Business
              </span>
            </h1>
          </div>
          <span className="text-white">View All Services Button</span>
          {/* <div className="absolute top-12 md:top-16 right-12 md:right-16 z-10"> */}
          {/* <button className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl">
              VIEW ALL SERVICES
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button> */}
          {/* </div> */}
          {/* Service Cards Carousel */}
          <div className="relative z-10 mt-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {getVisibleCards().map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
                >
                  {/* Icon Circle */}
                  <div className="flex justify-center mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                        {service.icon}
                      </div>
                    </div>
                  </div>

                  {/* Card Content */}
                  <h3 className="text-xl font-bold text-slate-800 mb-4 text-center">
                    {service.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Read More Button */}
                  <button className="group/btn bg-gradient-to-r justify-center mx-auto from-blue-600 to-purple-600 text-white px-6 py-2.5 rounded-lg font-semibold text-sm flex items-center gap-2 hover:gap-3 transition-all duration-300 shadow-md hover:shadow-lg ">
                    Read More
                    <ArrowRight className="w-4 h-4 transition-all" />
                  </button>
                </div>
              ))}
            </div>

            {/* Carousel Navigation */}
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={prevSlide}
                className="w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextSlide}
                className="w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Carousel Indicators */}
            <div className="flex justify-center gap-2 mt-6">
              {services.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentSlide === index
                      ? "bg-gradient-to-r from-blue-500 to-purple-600 w-8"
                      : "bg-white/30 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
