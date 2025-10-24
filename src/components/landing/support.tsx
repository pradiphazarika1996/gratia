"use client";
import React from "react";
import Image from "next/image";
import { Handshake, PhoneCall, ShieldCheck } from "lucide-react";
import { motion, Variants } from "framer-motion";
import Support from "../../assets/images/support.jpg";

export default function WhyChooseUs() {
  const cards = [
    {
      icon: <Handshake className="w-10 h-10 text-blue-600" />,
      title: "Industry Experience",
      desc: "The wise man therefore always doing holding these matters to this business principles sunt offer data technology or system settings to ensure.",
    },
    {
      icon: <PhoneCall className="w-10 h-10 text-blue-600" />,
      title: "24/7 Customer Support",
      desc: "The wise man therefore always doing holding these matters to this business principles sunt offer data technology or system settings to ensure.",
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-blue-600" />,
      title: "Trust & Reliability",
      desc: "The wise man therefore always doing holding these matters to this business principles sunt offer data technology or system settings to ensure.",
    },
  ];

  const rightSectionVariants: Variants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1.2,
        ease: "easeOut",
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="bg-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Section */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <h2 className="text-md text-blue-600 font-semibold mb-2 text-center md:text-left">
              Why Choose Us
            </h2>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-700 leading-tight mb-6 text-center md:text-left">
              25+ Years of Delivering Custom IT Solutions Services
            </h1>
            <p className="text-gray-600 mb-8 text-center md:text-left">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at layout the point.
            </p>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
              className="rounded-2xl overflow-hidden shadow-lg"
            >
              <Image
                src={Support}
                alt="IT Solutions Team"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </motion.div>
          </motion.div>

          {/* Right Section */}
          <motion.div
            variants={rightSectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-6 md:space-y-8"
          >
            {cards.map((item, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="flex items-start gap-4 p-5 sm:p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 bg-gray-50 hover:bg-white"
              >
                <div className="flex-shrink-0">{item.icon}</div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-700 hover:text-blue-600 cursor-pointer transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mt-2 text-sm sm:text-base">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
