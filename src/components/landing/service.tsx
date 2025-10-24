"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  Monitor,
  Layers,
  Megaphone,
  Code,
  Smartphone,
  Lightbulb,
} from "lucide-react";

const services = [
  {
    icon: <Monitor className="w-10 h-10 text-white" />,
    title: "Web Design",
    desc: "Proin Pulvinar Eu Sem Eu Vehicula and, Integer Urna Libero, Semper mes.",
  },
  {
    icon: <Layers className="w-10 h-10 text-white" />,
    title: "Motion Design",
    desc: "Proin Pulvinar Eu Sem Eu Vehicula and, Integer Urna Libero, Semper mes.",
  },
  {
    icon: <Megaphone className="w-10 h-10 text-white" />,
    title: "Digital Marketing",
    desc: "Proin Pulvinar Eu Sem Eu Vehicula and, Integer Urna Libero, Semper mes.",
  },
  {
    icon: <Code className="w-10 h-10 text-white" />,
    title: "Web Development",
    desc: "Proin Pulvinar Eu Sem Eu Vehicula and, Integer Urna Libero, Semper mes.",
  },
  {
    icon: <Smartphone className="w-10 h-10 text-white" />,
    title: "App Development",
    desc: "Proin Pulvinar Eu Sem Eu Vehicula and, Integer Urna Libero, Semper mes.",
  },
  {
    icon: <Lightbulb className="w-10 h-10 text-white" />,
    title: "Creative Solution",
    desc: "Proin Pulvinar Eu Sem Eu Vehicula and, Integer Urna Libero, Semper mes.",
  },
];

const ServiceSection = () => {
  return (
    <section
      className="relative z-10 py-20 px-5 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/your-background-image.jpg')", // Replace with your transparent bg image
      }}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>

      <div className="relative z-10 max-w-7xl mx-auto text-center text-white mb-12">
        <p className="text-blue-400 font-semibold uppercase tracking-wide text-sm mb-2">
          Service We Provide
        </p>
        <h2 className="text-3xl md:text-4xl font-bold">
          All Professional We’re Offering Best <br />
          IT Solutions & <span className="text-blue-400">Services</span>
        </h2>
      </div>

      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <div key={index} className="group perspective">
            <motion.div
              whileHover={{ rotateY: 180 }}
              transition={{ duration: 0.6 }}
              className="relative w-full h-full transform-style-preserve-3d"
            >
              {/* Front & Back (identical) */}
              <Card
                className={`absolute inset-0 flex flex-col justify-center items-center text-center bg-white/10 border border-gray-600 backdrop-blur-md p-6 rounded-xl transform transition-transform duration-700 group-hover:rotateY-180`}
              >
                <CardContent className="flex flex-col items-center space-y-4">
                  <div>{service.icon}</div>
                  <h3 className="text-lg font-semibold text-white">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {service.desc}
                  </p>
                  <Button
                    variant="ghost"
                    className="text-white border border-white/40 hover:bg-white hover:text-black mt-3"
                  >
                    READ MORE
                  </Button>
                </CardContent>
              </Card>

              <Card
                className={`absolute inset-0 flex flex-col justify-center items-center text-center bg-blue-600 border border-blue-400 p-6 rounded-xl backface-hidden`}
              >
                <CardContent className="flex flex-col items-center space-y-4">
                  <div>{service.icon}</div>
                  <h3 className="text-lg font-semibold text-white">
                    {service.title}
                  </h3>
                  <p className="text-white text-sm leading-relaxed">
                    {service.desc}
                  </p>
                  <Button
                    variant="ghost"
                    className="text-white border border-white/40 hover:bg-white hover:text-blue-600 mt-3"
                  >
                    READ MORE
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceSection;
