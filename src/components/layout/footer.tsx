"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Dribbble, Linkedin } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0A0F38] text-white py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">
        {/* Logo and Description */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center">
              <span className="text-blue-600 font-bold text-lg cursor-pointer">
                G
              </span>
            </div>
            <h2 className="text-2xl font-semibold cursor-pointer">
              Gratia Technology
            </h2>
          </div>
          <p className="text-gray-300 mb-6 text-sm leading-relaxed">
            Provide world wide survival strategies to ensure proactive
            domination at the day fueling digital transformation.
          </p>
          <Button className="bg-[#2563EB] hover:bg-[#1d4ed8] rounded-md px-6 py-2 text-white font-semibold">
            Discover More →
          </Button>
        </div>

        {/* Company Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-gray-300">
            <li className="cursor-pointer">About</li>
            <li className="cursor-pointer">Work Process</li>
            <li className="cursor-pointer">Our Team</li>
            <li className="cursor-pointer">Contact</li>
            <li className="cursor-pointer">Careers</li>
          </ul>
        </div>

        {/* Industries Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Industries</h3>
          <ul className="space-y-2 text-gray-300">
            <li className="cursor-pointer">Automotive</li>
            <li className="cursor-pointer">Education</li>
            <li className="cursor-pointer">Financial Services</li>
            <li className="cursor-pointer">Healthcare</li>
            <li className="cursor-pointer">Logistics</li>
          </ul>
        </div>

        {/* Subscribe Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Subscribe Newsletter</h3>
          <div className="flex flex-col gap-4">
            <Input
              type="email"
              placeholder="Email Address"
              className="bg-[#0E144A] border-none text-gray-300 placeholder:text-gray-400 focus-visible:ring-0"
            />
            <Button className="bg-[#2563EB] hover:bg-[#1d4ed8] rounded-md px-6 py-2 text-white font-semibold">
              SUBSCRIBE NOW
            </Button>
          </div>

          <div className="flex items-center gap-4 mt-6 text-gray-300">
            <span className="font-medium">Social Share:</span>
            <div className="flex gap-3 text-white text-lg">
              <Facebook className="hover:text-blue-500 cursor-pointer w-5 h-5" />
              <Twitter className="hover:text-sky-400 cursor-pointer w-5 h-5" />
              <Dribbble className="hover:text-pink-500 cursor-pointer w-5 h-5" />
              <Linkedin className="hover:text-blue-600 cursor-pointer w-5 h-5" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#1E266D] mt-16 pt-6 text-gray-400 text-sm flex flex-col md:flex-row justify-between items-center">
        <p>
          Copyright © 2025. Designed by{" "}
          <span className="text-white font-medium cursor-pointer">
            Gratia Technology
          </span>
          .
        </p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <span>Pricing</span>
          <span>Technologies</span>
          <span>Appointment</span>
        </div>
      </div>

      {/* Scroll to Top */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-[#2563EB] w-12 h-12 rounded-full flex items-center justify-center cursor-pointer hover:bg-[#1d4ed8] transition"
        aria-label="Scroll to top"
      >
        <span className="text-white text-xl">↑</span>
      </button>
    </footer>
  );
}
