import React from "react";

const SkillsDetails = () => {
  return <div>
    <div className="grid grid-cols-1 w-[240px] m-auto sm:grid-cols-2 sm:w-[500px] mt-[20px] gap-[10px]">
        <div className="p-[20px] border-2 border-[#c49b1d] rounded-lg grid gap-[10px]">
          <div className="flex items-center justify-between gap-[10px]">
            <p className="w-[50px] text-left">Html</p>
            <div className="bg-gold w-[70px] h-[7px]">
              <div className="bg-hover w-[90%] h-full"></div>
            </div>
            <p>70%</p>
          </div>
          <div className="flex items-center justify-between">
            <p className="w-[50px] text-left">Css</p>
            <div className="bg-gold w-[70px] h-[7px]">
              <div className="bg-hover w-[90%] h-full"></div>
            </div>
            <p>90%</p>
          </div>
          <div className="flex items-center justify-between">
            <p className="w-[50px] text-left">Sass</p>
            <div className="bg-gold w-[70px] h-[7px]">
              <div className="bg-hover w-[90%] h-full"></div>
            </div>
            <p>90%</p>
          </div>
          <div className="flex items-center justify-between">
            <p className="w-[50px] text-left">Boot...</p>
            <div className="bg-gold w-[70px] h-[7px]">
              <div className="bg-hover w-[40%] h-full"></div>
            </div>
            <p>40%</p>
          </div>
        </div>
        <div className="p-[20px] border-2 border-[#c49b1d] rounded-lg grid gap-[10px]">
          <div className="flex items-center justify-between">
            <p className="w-[50px] text-left">JS</p>
            <div className="bg-gold w-[70px] h-[7px]">
              <div className="bg-hover w-[70%] h-full"></div>
            </div>
            <p>70%</p>
          </div>
          <div className="flex items-center justify-between">
            <p className="w-[50px] text-left">TS</p>
            <div className="bg-gold w-[70px] h-[7px]">
              <div className="bg-hover w-[50%] h-full"></div>
            </div>
            <p>50%</p>
          </div>
          <div className="flex items-center justify-between">
            <p className="w-[50px] text-left">React</p>
            <div className="bg-gold w-[70px] h-[7px]">
              <div className="bg-hover w-[80%] h-full"></div>
            </div>
            <p>80%</p>
          </div>
        </div>
      </div>
  </div>;
};

export default SkillsDetails;
