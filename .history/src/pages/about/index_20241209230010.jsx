import React from "react";
// import Title from "../../components/About/Title";
import Goals from "../../components/about/goals";
// import Skills from "../../components/About/skills";
import Experience from "../../components/about/experience";
import SkillsDetails from "../../components/aboutt/skills detail";
import AboutTitle from "../../components/aboutt/title";

const AboutPage = () => {
  return (
    <div className="min-h-[71vh] flex flex-col px-[5%] gap-[20px]">
      <AboutTitle />
      <Goals />
      <Experience />
      {/* <Skills /> */}
      <SkillsDetails />
    </div>
  );
};

export default AboutPage;
