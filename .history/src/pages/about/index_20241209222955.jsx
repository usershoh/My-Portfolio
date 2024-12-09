import React from "react";
import Title from "../../components/About/Title";
import Goals from "../../components/About/goals";
import Skills from "../../components/About/skills";
import Experience from "../../components/About/experience";
import SkillsDetails from "../../components/About/skills detail";

const AboutPage = () => {
  return (
    <div className="min-h-[71vh] flex flex-col px-[5%] gap-[20px]">
      <Title />
      <Goals />
      <Experience />
      {/* <Skills /> */}
      <SkillsDetails />
    </div>
  );
};

export default AboutPage;