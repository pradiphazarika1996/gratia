import React from "react";
import Banner from "@/components/landing/banner";
// import ServicesCarousel from "@/components/landing/servicesCard";
import OurClients from "@/components/landing/ourclient";
import TechStackTabs from "@/components/landing/techstack";
import Support from "@/components/landing/support";
// import ServicesSection from "@/components/landing/service";
import ITCarousel from "@/components/landing/carouselService";
import ServiceCard from "@/components/landing/card";
// import Video from "@/components/landing/video";
const Home = () => {
  return (
    <div>
      <Banner />
      {/* <Video /> */}
      {/* <ServicesSection /> */}
      <ServiceCard />
      <Support />
      <OurClients />
      <TechStackTabs />
      <ITCarousel />

      {/* <ServicesCarousel /> */}
    </div>
  );
};

export default Home;
