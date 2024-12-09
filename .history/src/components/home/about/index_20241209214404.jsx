import React from "react";
// import htmlLogo from "../../../assets/img/htmlLogo.webp";
// import cssLogo from "../../../assets/img/cssLogo.webp";
// import jsLogo from "../../../assets/img/jsLogo.png";
// import reactLogo from "../../../assets/img/reactLogo.png";
import { useNavigate } from "react-router-dom";
import SkillsDetails from "../../About/skills detail";

const About = () => {
  const navigate = useNavigate();
  return (
    <section className="w-[100%] lg:w-[50%] m-auto text-center gap-[10px]">
      <h1 className="text-[36px] font-[600] text-gold">About me</h1>
      <p className="text-[16px] text-dard">
        I am passionate about web development and have a solid foundation in
        HTML, CSS, JavaScript, and React. I am constantly learning and expanding
        my skills, currently diving deeper into TypeScript, and exploring
        various React libraries
      </p>

      
      <SkillsDetails />

      <button
        className="w-[100px] h-[40px] bg-gold text-white text-[16px] hover:bg-hover mt-[20px]"
        onClick={() => navigate("/about")}
      >
        see more
      </button>
    </section>
  );
};

export default About;
