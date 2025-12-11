import React from "react";
import HeroCarousel from "../components/HeroCarousel";
import ServicesOverview from "../components/ServicesOverview";
import AboutIntro from "../components/AboutIntro";
import Offerings from "../components/Offerings";
import Expertise from "../components/Expertise";
import Clients from "../components/Clients";
import VisionMission from "../components/VisionMission";
import WhyChooseUs from "../components/WhyChooseUs";

export default function Home() {
  return (
    <>
      <HeroCarousel />
      <ServicesOverview />
      <AboutIntro />
      <Offerings />
      <Expertise />
      <Clients />
      <VisionMission />
      <WhyChooseUs />
    </>
  );
}
