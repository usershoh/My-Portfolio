import React from "react";

const PortfolioProject = () => {
  return (
    <div className="border-[2px] p-6 border-[#FFC107] bg-[#FFF7E0] shadow-lg max-w-[800px] mx-auto rounded-lg grid gap-[10px]">
      <h1 className="text-[24px] text-dark font-semibold mb-4">
        My Portfolio site
      </h1>
      <div className="grid gap-4">
        <p className="text-[16px] text-dark">
          <strong>Name: </strong> Shokhjakhon's Portfolio
        </p>
        <p className="text-[16px] text-dark">
          <strong>Discription: </strong> Portfolio site with more detailed
          information about me and my projects
        </p>
        <p className="text-[16px] text-dark">
          <strong>Technologies: </strong> HTML, CSS, JS, REACT: TAILWIND,
          REACT-ROUTER-DOM, JSON-SERVER
        </p>
        <p className="text-[16px] text-dark">
          <strong>Working with: </strong>The main page presents my projects,
          photos and contact methods. A document page with detailed information
          about the projects and about me is also available.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 items-center gap-[10px] mt-6 lg:w-[700px]">
        <div className="border border-[#FFC107] rounded"></div>
      </div>
    </div>
  );
};

export default PortfolioProject;
