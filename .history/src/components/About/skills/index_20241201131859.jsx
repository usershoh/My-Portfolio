import React from "react";
import About from "../../home/about";

const Skills = () => {
  return (
    <section className="text-center m-a">
      <div>
        <h1 className="text-[24px] font-bold text-gold">My Skills</h1>
        <p className="text-[16px] text-dark">
          I have skills in HTML, CSS, Sass, SCSS, Bootstrap, JavaScript,
          TypeScript, React (including Redux Toolkit), Tailwind, Axios, React
          Query, and i18n.
        </p>
      </div>
      <div>
        <About />
      </div>
    </section>
  );
};

export default Skills;
