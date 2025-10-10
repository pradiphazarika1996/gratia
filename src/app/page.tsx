import React from "react";
import { Play } from "lucide-react";
import Image from "next/image";
import BannerImg from "@/assets/images/banner.png";
export default function Home() {
  return (
    <section className="bg-[#f0fdf9] min-h-screen flex items-center py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            {/* Small Header */}
            <h3 className="text-indigo-600 font-semibold text-sm tracking-wider uppercase">
              TECHNOLOGY SOLUTIONS
            </h3>

            {/* Main Heading */}
            <h1 className="text-5xl lg:text-6xl font-bold text-slate-800 leading-tight">
              Digital Technology
              <br />
              IT Solution Services
              <br />
              Around the World
            </h1>

            {/* Description */}
            <p className="text-slate-600 text-lg leading-relaxed max-w-lg">
              Our process that relies on methods and techniques to taking raw
              data - mining for insights and years of experience will help you
              become the industry leader.
            </p>

            {/* Buttons */}
            <div className="flex items-center gap-4 pt-4">
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-full font-semibold transition-all shadow-lg shadow-indigo-600/30 hover:shadow-xl">
                Start Free Trial
              </button>

              <button className="w-16 h-16 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full flex items-center justify-center transition-all shadow-lg shadow-indigo-600/30 hover:shadow-xl group">
                <Play className="w-6 h-6 fill-white group-hover:scale-110 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative w-full h-[600px]">
              <Image
                src={BannerImg}
                alt="Technology Solutions Illustration"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
