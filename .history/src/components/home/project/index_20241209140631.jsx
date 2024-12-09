import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import uzumImg1 from "../../../assets/img/uzum market img1.png";
import ProjectItem1 from "./project-item1";
import ProjectItem2 from "./project-item2";

const Project = () => {
  const navigate = useNavigate();
  const [inHover, setInHover] = useState();
  return (
    <section className="grid gap-[10px] text-center m-auto">
      <h1 className="text-gold text-[36px] font-[600]">Project</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-[10px]">
        <ProjectItem1 />
        <ProjectItem2 />
      </div>

      <button
        onClick={() => navigate("/project")}
        className="w-[120px] h-[40px] m-auto text-[16px] text-white bg-gold hover:bg-hover"
      >
        see all project
      </button>
    </section>
  );
};

export default Project;
