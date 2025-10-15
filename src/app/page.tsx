import React from "react";
import Banner from "@/components/landing/banner";
import ServicesCarousel from "@/components/landing/servicesCard";
import OurClients from "@/components/landing/ourclient";
import TechStackTabs from "@/components/landing/techstack";
const Home = () => {
  return (
    <div>
      <Banner />
      <OurClients />
      <TechStackTabs />
      <ServicesCarousel />
    </div>
  );
};

export default Home;
