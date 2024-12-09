import React from "react";

const PortfolioProject = () => {
  return (
    <div className="border-[2px] p-6 border-[#FFC107] bg-[#FFF7E0] shadow-lg max-w-[800px] mx-auto rounded-lg grid gap-[10px]">
      <h1 className="text-[24px] text-dark font-semibold mb-4">
        My Portfolio site
      </h1>
      <div className="grid gap-4">
        <p className="text-[16px] text-dark">
          <strong>Name: </strong> Shokhj
        </p>
        <p className="text-[16px] text-dark">
          <strong>Discription: </strong>
        </p>
        <p className="text-[16px] text-dark">
          <strong>Technologies: </strong>
        </p>
        <p className="text-[16px] text-dark">
          <strong>Working with: </strong>
        </p>
      </div>
    </div>
  );
};

export default PortfolioProject;
