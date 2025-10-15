import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
} from "lucide-react";

const TopHeader: React.FC = () => {
  return (
    <div className="relative hidden md:block bg-[#c4f82a] overflow-hidden">
      {/* Purple diagonal background on right */}
      <div className="absolute right-0 top-0 h-full w-[600px] bg-[#6c4de6] transform skew-x-[-25deg] translate-x-[200px]"></div>

      {/* Content container */}
      <div className="relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center h-[50px]">
            {/* Left section - 60% - Contact information */}
            <div className="flex-[0.6] flex items-center gap-8">
              <div className="flex items-center gap-2">
                <Phone
                  className="w-[14px] h-[14px] text-gray-800"
                  strokeWidth={2.5}
                />
                <span className="text-[14px] font-normal text-gray-800">
                  987-098-098
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Mail
                  className="w-[14px] h-[14px] text-gray-800"
                  strokeWidth={2.5}
                />
                <span className="text-[14px] font-normal text-gray-800">
                  gratia.info@example.com
                </span>
              </div>

              <div className="flex items-center gap-2">
                <MapPin
                  className="w-[14px] h-[14px] text-gray-800"
                  strokeWidth={2.5}
                />
                <span className="text-[14px] font-normal text-gray-800">
                  ABC, Guwahati, Assam
                </span>
              </div>
            </div>

            {/* Right section - 40% - Social media icons */}
            <div className="flex-[0.4] flex items-center justify-end gap-4 relative z-10">
              <a
                href="#"
                className="text-white hover:opacity-80 transition-opacity"
              >
                <Facebook
                  className="w-[16px] h-[16px]"
                  fill="white"
                  strokeWidth={0}
                />
              </a>
              <a
                href="#"
                className="text-white hover:opacity-80 transition-opacity"
              >
                <Twitter
                  className="w-[16px] h-[16px]"
                  fill="white"
                  strokeWidth={0}
                />
              </a>
              <a
                href="#"
                className="text-white hover:opacity-80 transition-opacity"
              >
                <Linkedin
                  className="w-[16px] h-[16px]"
                  fill="white"
                  strokeWidth={0}
                />
              </a>
              <a
                href="#"
                className="text-white hover:opacity-80 transition-opacity"
              >
                <Youtube
                  className="w-[16px] h-[16px]"
                  fill="white"
                  strokeWidth={0}
                />
              </a>
              <a
                href="#"
                className="text-white hover:opacity-80 transition-opacity"
              >
                <svg
                  className="w-[16px] h-[16px]"
                  viewBox="0 0 24 24"
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12.5 4.5C8.91 4.5 6 7.41 6 11c0 2.36 1.67 4.33 3.88 4.85.29.05.39-.13.39-.28v-1.01c-1.63.35-1.97-.79-1.97-.79-.27-.67-.65-.85-.65-.85-.53-.36.04-.35.04-.35.59.04.9.6.9.6.52.89 1.37.63 1.7.48.05-.38.2-.63.37-.78-1.3-.15-2.67-.65-2.67-2.88 0-.64.23-1.16.6-1.57-.06-.15-.26-.74.06-1.54 0 0 .49-.16 1.61.6a5.5 5.5 0 0 1 2.94 0c1.12-.76 1.61-.6 1.61-.6.32.8.12 1.39.06 1.54.37.41.6.93.6 1.57 0 2.24-1.37 2.73-2.67 2.87.21.18.4.54.4 1.09v1.61c0 .16.1.34.4.28A5.01 5.01 0 0 0 17.5 11c0-3.59-2.91-6.5-6.5-6.5z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
