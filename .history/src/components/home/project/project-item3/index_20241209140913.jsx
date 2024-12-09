import React from "react";

const ProjectItem3 = () => {
  return (
    <div className="border-[#c49b1d] border-[2px] rounded-md md:w-[250px] grid gap-[5px]">
      <h1 className="text-[18px] font-medium"></h1>
      <button
        className="text-gold hover:text-hover"
        onClick={() => navigate("/project")}
      >
        in detail
      </button>
    </div>
  );
};

export default ProjectItem3;
