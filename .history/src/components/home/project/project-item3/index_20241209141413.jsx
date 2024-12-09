import React from "react";

const ProjectItem3 = () => {
  return (
    <div className="border-[#c49b1d] p-[10px] border-[2px] rounded-md md:w-[250px] grid gap-[5px]">
      <h1 className="text-[18px] font-medium">My Portfolio site</h1>
      <p>
        The main page presents my projects, photos and contact methods. A
        document page with detailed information about the projects and about me
        is also available.
      </p>

      <button
        className="text-gold hover:text-hover"
        onClick={() => navigate("/project")}
      >
        in detail
      </button>
      <p className="text-[6px] ">project completed</p>
    </div>
  );
};

export default ProjectItem3;
