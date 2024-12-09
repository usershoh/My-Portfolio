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
    <section className="w-full lg:w-1/2 mx-auto text-center space-y-4">
      <h1 className="text-3xl font-semibold text-gold">About Me</h1>
      <p className="text-base text-dard">
        I'm passionate about web development with a solid foundation in HTML,
        CSS, JavaScript, and React. I continuously expand my skills, currently
        delving into TypeScript and exploring various React libraries to enhance
        my expertise.
      </p>

      <SkillsDetails />

      <button
        className="w-24 h-10 bg-gold text-white text-base font-medium hover:bg-hover transition-colors mt-5"
        onClick={() => navigate("/about")}
      >
        See More
      </button>
    </section>
  );
};

export default About;
