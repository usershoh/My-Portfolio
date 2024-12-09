import React from "react";

const ProjectItem2 = () => {
  return (
    <div className="border-[#c49b1d] border-[2px] p-[10px] rounded-lg md:w-[250px] grid gap-[5px]">
      <h1 className="text-[18px] font-medium">Online store (without React)</h1>
      <p>
        The project is a basic online store with registration and a shopping
        cart, where data is stored in Local Storage. All features are
        implemented using pure HTML, CSS and JavaScript.
        <span className="text-gold">project completed</span>
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

export default ProjectItem2;
