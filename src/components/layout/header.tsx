// "use client";
// import React, { useState } from "react";
// import { ArrowRight, Menu, X } from "lucide-react";
// // import Image from "next/image";
// import Link from "next/link";
// // import Logo from "@/assets/images/logo.png";
// const Header = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const navigationItems = [
//     // {
//     //   //   label: "Home",
//     //   href: "/",
//     // },
//     {
//       label: "About Us",
//       href: "/about-us",
//     },
//     {
//       label: "Services",
//       href: "/services",
//     },
//     {
//       label: "Technology",
//       href: "/technology",
//     },
//     {
//       label: "Contact Us",
//       href: "/contact-us",
//     },
//   ];

//   return (
//     <header className="sticky top-0 z-50 bg-[#f0fdf9] shadow-sm">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-5">
//         <div className="flex items-center justify-between h-20">
//           {/* Logo */}
//           <Link
//             href="/"
//             className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
//           >
//             <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center">
//               <div className="w-6 h-6 bg-white rounded-full"></div>
//             </div>
//             <span className="text-2xl font-bold text-slate-800">
//               Gratia Technology
//               {/* Gratia Technology */}
//               {/* <Image
//                 src={Logo}
//                 alt="Technology Solutions Illustration"
//                 fill
//                 className="object-contain"
//                 priority
//               /> */}
//             </span>
//           </Link>

//           {/* Desktop Navigation */}
//           <nav className="hidden lg:flex items-center ml-12 gap-8">
//             {navigationItems.map((item) => (
//               <Link
//                 key={item.label}
//                 href={item.href}
//                 className="text-slate-600 hover:text-indigo-600 font-medium transition-colors text-[15px]"
//               >
//                 {item.label}
//               </Link>
//             ))}
//           </nav>

//           {/* Right Side Actions */}
//           <div className="hidden lg:flex items-center gap-4">
//             <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 transition-colors shadow-lg shadow-indigo-600/20">
//               Contact Us
//               <ArrowRight className="w-4 h-4" />
//             </button>
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             className="lg:hidden w-10 h-10 flex items-center justify-center"
//             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//             aria-label="Toggle menu"
//           >
//             {isMobileMenuOpen ? (
//               <X className="w-6 h-6 text-slate-600" />
//             ) : (
//               <Menu className="w-6 h-6 text-slate-600" />
//             )}
//           </button>
//         </div>

//         {/* Mobile Navigation */}
//         {isMobileMenuOpen && (
//           <div className="lg:hidden py-4 border-t border-slate-200">
//             <nav className="flex flex-col gap-4">
//               {navigationItems.map((item) => (
//                 <Link
//                   key={item.label}
//                   href={item.href}
//                   className="text-slate-600 hover:text-indigo-600 font-medium transition-colors text-[15px] py-2"
//                 >
//                   {item.label}
//                 </Link>
//               ))}
//               <div className="flex items-center gap-3 pt-4 border-t border-slate-200">
//                 <button className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors shadow-lg shadow-indigo-600/20">
//                   Get a Quote
//                   <ArrowRight className="w-4 h-4" />
//                 </button>
//               </div>
//             </nav>
//           </div>
//         )}
//       </div>
//     </header>
//   );
// };

// export default Header;
"use client";
import React, { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/images/logo.png";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    {
      label: "About Us",
      href: "/about-us",
    },
    {
      label: "Services",
      href: "/services",
    },
    {
      label: "Technology",
      href: "/technology",
    },
    {
      label: "Contact Us",
      href: "/contact-us",
    },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#f0fdf9] shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-5">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity"
          >
            <div className="relative w-24 h-24">
              {" "}
              {/* Increased size from 12 to 16 */}
              <Image
                src={Logo}
                alt="Gratia Technology Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            {/* <span className="text-2xl font-bold text-slate-800 leading-none">
              Gratia Technology
            </span> */}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center ml-12 gap-8">
            {navigationItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-slate-600 hover:text-indigo-600 font-medium transition-colors text-[15px]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 transition-colors shadow-lg shadow-indigo-600/20">
              Contact Us
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden w-10 h-10 flex items-center justify-center"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-slate-600" />
            ) : (
              <Menu className="w-6 h-6 text-slate-600" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-slate-200">
            <nav className="flex flex-col gap-4">
              {navigationItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-slate-600 hover:text-indigo-600 font-medium transition-colors text-[15px] py-2"
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-200">
                <button className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors shadow-lg shadow-indigo-600/20">
                  Get a Quote
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
