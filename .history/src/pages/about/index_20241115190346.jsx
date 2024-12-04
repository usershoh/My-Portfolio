import React from "react";
import Title from "../../components/About/Title";
import Goals from "../../components/About/goals";
import Skills from "../../components/About/skills";
import Experience from "../../components/About/experience";

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col gap-[20px] px-[5%]">
      <div className="flex-grow">
        <Title />
        <Goals />
        <Skills />
        <Experience />
      </div>
    </div>
  );
};

export default AboutPage;