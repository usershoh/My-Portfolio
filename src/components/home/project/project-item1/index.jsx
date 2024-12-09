import React from "react";

const ProjectItem1 = () => {
  return (
    <div className="border-[#c49b1d] border-[2px] p-[10px] rounded-lg md:w-[250px] grid gap-[5px]">
      <h1 className="text-[18px] font-medium">Copy of Uzum Market website</h1>
      <p>
        A copy of the Uzum Market website using React and Redux. The project
        includes product pages, cart and favorites, with dynamic data updating
        and routing through React Router. <span className="text-gold">project completed</span>
      </p>

      {/* <div className="flex items-center justify-between gap-[5px]">
            <img className="w-40px" src={uzumImg1} alt="" />
            <img className="w-40px" src={uzumImg1} alt="" />
            <img className="w-40px" src={uzumImg1} alt="" />
            <img className="w-40px" src={uzumImg1} alt="" />
          </div> */}

      <button
        className="text-gold hover:text-hover"
        onClick={() => navigate("/project")}
      >
        in detail
      </button>
    </div>
  );
};

export default ProjectItem1;
