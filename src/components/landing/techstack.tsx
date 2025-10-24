"use client";
import React, { useState } from "react";
// Import all images
import angular from "../../assets/images/html5.svg";
import Image from "next/image";
import reactjs from "../../assets/images/reactjs.svg";
import nextjs from "../../assets/images/nextjs.svg";
import vuejs from "../../assets/images/vuejs.svg";
import javascript from "../../assets/images/javascript.svg";
import typescript from "../../assets/images/typescript.svg";
import tailwind from "../../assets/images/tailwindcss.svg";
import html5 from "../../assets/images/html5.svg";
import css3 from "../../assets/images/css3.svg";
import jquery from "../../assets/images/jquery.svg";
import bootstrap from "../../assets/images/boostrap5.svg";
import nodejs from "../../assets/images/nodejs.svg";
import laravel from "../../assets/images/laravel.svg";
import nest from "../../assets/images/nest-js.svg";
import php from "../../assets/images/php.svg";
import java from "../../assets/images/java.svg";
import python from "../../assets/images/python.svg";
import ionic from "../../assets/images/ionic1.svg";
import kotlin from "../../assets/images/kotlin.svg";
import ios from "../../assets/images/ios.svg";
import swift from "../../assets/images/swift.svg";
import android from "../../assets/images/android1.svg";
import reactnative from "../../assets/images/react_native1.svg";
import mongodb from "../../assets/images/mongodb.svg";
import postgresql from "../../assets/images/postgresql.svg";
import mysql from "../../assets/images/mysql.svg";
import wordpress from "../../assets/images/wordpress.svg";
import figma from "../../assets/images/figma.svg";
import adobexd from "../../assets/images/adove_xd.svg";
import sketch from "../../assets/images/sketch.svg";
import invision from "../../assets/images/adobe_photoshop.svg";
import photoshop from "../../assets/images/adobe_illustrator.svg";

type TabKey =
  | "FRONTEND"
  | "BACKEND"
  | "MOBILE"
  | "DATABASE"
  | "CMS"
  | "DESIGN TOOLS";

const TechStackTabs = () => {
  const [activeTab, setActiveTab] = useState<TabKey>("FRONTEND");

  const tabs: TabKey[] = [
    "FRONTEND",
    "BACKEND",
    "MOBILE",
    "DATABASE",
    "CMS",
    "DESIGN TOOLS",
  ];

  const technologies: Record<
    TabKey,
    { name: string; image: import("next/image").StaticImageData }[]
  > = {
    FRONTEND: [
      { name: "Angular", image: angular },
      { name: "ReactJS", image: reactjs },
      { name: "Next.js", image: nextjs },
      { name: "Vue.js", image: vuejs },
      { name: "Javascript", image: javascript },
      { name: "Typescript", image: typescript },
      { name: "Tailwind CSS", image: tailwind },
      { name: "HTML5", image: html5 },
      { name: "CSS3", image: css3 },
      { name: "jQuery", image: jquery },
      { name: "Bootstrap", image: bootstrap },
    ],
    BACKEND: [
      { name: "Node.js", image: nodejs },
      { name: "Laravel", image: laravel },
      { name: "Nest", image: nest },
      { name: "PHP", image: php },
      { name: "Java", image: java },
      { name: "Python", image: python },
    ],
    MOBILE: [
      { name: "React Native", image: reactnative },
      { name: "IOS", image: ios },
      { name: "Ionic", image: ionic },
      { name: "Swift", image: swift },
      { name: "Kotlin", image: kotlin },
      { name: "Android", image: android },
    ],
    DATABASE: [
      { name: "MongoDB", image: mongodb },
      { name: "PostgreSQL", image: postgresql },
      { name: "MySQL", image: mysql },
    ],
    CMS: [{ name: "WordPress", image: wordpress }],
    "DESIGN TOOLS": [
      { name: "Figma", image: figma },
      { name: "Adobe XD", image: adobexd },
      { name: "Sketch", image: sketch },
      { name: "InVision", image: invision },
      { name: "Photoshop", image: photoshop },
    ],
  };

  interface TechCardProps {
    name: string;
    image: import("next/image").StaticImageData;
  }

  const TechCard: React.FC<TechCardProps> = ({ name, image }) => {
    return (
      <div className="bg-white rounded-lg p-6 flex flex-col items-center justify-center gap-4 hover:shadow-lg transition-shadow duration-300">
        <div className="w-20 h-20 flex items-center justify-center">
          <Image
            src={image}
            alt={`${name} logo`}
            className="w-full h-full object-contain"
          />
        </div>
        <p className="text-gray-800 font-medium text-center text-sm">{name}</p>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-pink-50 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <p className="text-orange-500 font-semibold text-sm tracking-wider mb-4">
            TECHNOLOGY STACK WE WORK WITH
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Future-Ready Tech Stack That Delivers Results
          </h1>
          <p className="text-gray-600 text-lg">
            We use a carefully selected mix of modern{" "}
            <span className="font-semibold text-gray-900">
              frameworks, tools, and platforms
            </span>{" "}
            to ensure our solutions{" "}
            <span className="text-red-500 font-semibold">
              are secure, scalable, and performance-driven.
            </span>
          </p>
        </div>

        {/* Tabs */}
        <div className="bg-orange-50 rounded-lg p-2 mb-8">
          <div className="flex gap-2 overflow-x-auto scrollbar-hide py-1 px-1">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-shrink-0 px-4 sm:px-6 py-2 rounded-lg font-medium text-sm transition-all duration-300 whitespace-nowrap ${
                  activeTab === tab
                    ? "bg-white text-orange-500 shadow-md"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Technology Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {technologies[activeTab].map((tech, index) => (
            <TechCard key={index} name={tech.name} image={tech.image} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStackTabs;
