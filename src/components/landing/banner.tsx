"use client";
import React from "react";
import Image from "next/image";
import BannerImg from "@/assets/images/bannerimg.svg";

export default function Banner() {
  return (
    <section className="bg-[#f0fdf9] flex items-center min-h-screen pt-4 pb-16 lg:pt-6 lg:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-16 items-start lg:items-center">
          {/* Left Content */}
          <div className="space-y-6 lg:space-y-8 order-1">
            {/* Animated Heading */}
            <div className="pb-3 overflow-hidden">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#0666bf] leading-[1.3] tracking-tight">
                <span
                  className="inline-block animate-slideWord opacity-0"
                  style={{ animationDelay: "0.2s" }}
                >
                  Empowering
                </span>{" "}
                <span
                  className="inline-block animate-slideWord opacity-0"
                  style={{ animationDelay: "0.5s" }}
                >
                  Innovation
                </span>{" "}
                <span
                  className="inline-block animate-slideWord opacity-0"
                  style={{ animationDelay: "0.8s" }}
                >
                  with
                </span>{" "}
                <span
                  className="inline-block animate-slideWord opacity-0"
                  style={{ animationDelay: "1.1s" }}
                >
                  Smart
                </span>{" "}
                <span
                  className="inline-block animate-slideWord opacity-0"
                  style={{ animationDelay: "1.4s" }}
                >
                  IT
                </span>{" "}
                <span
                  className="inline-block animate-slideWord opacity-0"
                  style={{ animationDelay: "1.7s" }}
                >
                  Solutions
                </span>
              </h1>
            </div>

            {/* Description */}
            <p
              className="text-slate-700 text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl animate-fadeInUp opacity-0"
              style={{ animationDelay: "2.2s" }}
            >
              Gratia Technology provides end-to-end IT services designed to
              enhance performance and simplify technology management. We turn
              your ideas into powerful digital experiences.
            </p>

            {/* Button - Desktop Only */}
            <div
              className="hidden lg:flex items-center gap-4 pt-4 animate-fadeInUp opacity-0"
              style={{ animationDelay: "2.6s" }}
            >
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 sm:px-10 py-4 rounded-full font-semibold text-base sm:text-lg transition-all duration-300 shadow-lg shadow-indigo-600/30 hover:shadow-xl hover:scale-105">
                Join Our Team
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative w-full h-80 sm:h-96 lg:h-[520px] xl:h-[560px] order-2 animate-fadeIn opacity-0">
            <Image
              src={BannerImg}
              alt="Technology Solutions Illustration"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Button - Mobile Only (Centered) */}
          <div
            className="flex lg:hidden justify-center order-3 pt-0 animate-fadeInUp opacity-0"
            style={{ animationDelay: "2.6s" }}
          >
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 sm:px-10 py-4 rounded-full font-semibold text-base sm:text-lg transition-all duration-300 shadow-lg shadow-indigo-600/30 hover:shadow-xl hover:scale-105">
              Join Our Team
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideWord {
          from {
            opacity: 0;
            transform: translateX(60px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-slideWord {
          animation: slideWord 0.8s ease-out forwards;
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-fadeIn {
          animation: fadeIn 1.2s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
