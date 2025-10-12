import React from "react";
import Banner from "@/components/landing/banner";
import ServicesCarousel from "@/components/landing/servicesCard";
import OurClients from "@/components/landing/ourclient";
const Home = () => {
  return (
    <div>
      <Banner />
      <OurClients />
      <ServicesCarousel />
    </div>
  );
};

export default Home;
