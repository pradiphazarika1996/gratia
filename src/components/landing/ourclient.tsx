"use client";
import React from "react";
import Image from "next/image";
import Image1 from "../../assets/images/toshiba.svg";
import Image2 from "../../assets/images/adorn.svg";
import Image3 from "../../assets/images/localeclean.svg";
import Image4 from "../../assets/images/upwork.svg";

const clients = [
  {
    name: "Toshiba",
    logo: Image1,
  },
  {
    name: "Adorn",
    logo: Image2,
  },
  {
    name: "LocaleClean",
    logo: Image3,
  },
  {
    name: "Upwork",
    logo: Image4,
  },
  {
    name: "adorn",
    logo: Image3,
  },
  {
    name: "SmartSolutions",
    logo: Image1,
  },
];

// Duplicate for seamless loop
const allClients = [...clients, ...clients, ...clients, ...clients];

const OurClients: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h3 className="text-indigo-600 font-semibold text-sm uppercase tracking-wide mb-4">
            OUR CLIENTELE
          </h3>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Trusted by Businesses Across the Globe
          </h2>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto">
            We ve had the privilege of working with visionary startups,{" "}
            <span className="text-indigo-600 font-semibold">
              growing enterprises
            </span>
            , and{" "}
            <span className="text-purple-600 font-semibold">global brands</span>{" "}
            across diverse industries.{" "}
            <span className="text-indigo-600 font-semibold">
              Their trust drives us to deliver excellence, every time.
            </span>
          </p>
        </div>

        {/* Scrolling Logos Container */}
        <div className="relative overflow-hidden">
          {/* Top border */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-300 to-transparent"></div>

          {/* Scrolling animation container */}
          <div className="flex py-12">
            <div className="flex animate-scroll items-center">
              {allClients.map((client, index) => (
                <React.Fragment key={`${client.name}-${index}`}>
                  <div className="flex-shrink-0 px-8 md:px-12">
                    <Image
                      src={client.logo}
                      alt={client.name}
                      className="h-12 md:h-16 w-auto"
                    />
                  </div>
                  <div className="h-12 md:h-16 w-px bg-indigo-200 flex-shrink-0"></div>
                </React.Fragment>
              ))}
            </div>
            {/* Duplicate for seamless loop */}
            <div
              className="flex animate-scroll items-center"
              aria-hidden="true"
            >
              {allClients.map((client, index) => (
                <React.Fragment key={`${client.name}-duplicate-${index}`}>
                  <div className="flex-shrink-0 px-8 md:px-12">
                    <Image
                      src={client.logo}
                      alt={client.name}
                      className="h-12 md:h-16 w-auto"
                    />
                  </div>
                  <div className="h-12 md:h-16 w-px bg-indigo-200 flex-shrink-0"></div>
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Bottom border */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-300 to-transparent"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default OurClients;
