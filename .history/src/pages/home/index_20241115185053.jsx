import React from "react";
import Hero from "../../components/home/hero";
import About from "../../components/home/about";
import Project from "../../components/home/project";
import Contact from "../../components/home/contact";

const HomePage = () => {
  return (
    <div className="px-[5%] pt-[20px] grid gap-[]">
      <Hero />
      <About />
      <Project />
      <Contact />
    </div>
  );
};

export default HomePage;
