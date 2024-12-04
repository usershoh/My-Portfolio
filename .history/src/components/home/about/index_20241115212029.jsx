import React from "react";
import htmlLogo from "../../../assets/img/htmlLogo.webp";
import cssLogo from "../../../assets/img/cssLogo.webp";
import jsLogo from "../../../assets/img/jsLogo.png";
import reactLogo from "../../../assets/img/reactLogo.png";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1 className="text-[36px] font-[600] text-gold">About me</h1>
      <p className="text-[16px] text-dard">
        I am passionate about web development and have a solid foundation in
        HTML, CSS, JavaScript, and React. I am constantly learning and expanding
        my skills, currently diving deeper into TypeScript, SASS, and exploring
        various React libraries
      </p>

      {/* <div className="flex items-center justify-between w-[80%] sm:w-[40%] pt-[30px]">
        <div className="w-[20%]">
          <img src={htmlLogo} alt="" />
        </div>
        <div className="w-[20%]">
          <img src={cssLogo} alt="" />
        </div>
        <div className="w-[20%]">
          <img src={jsLogo} alt="" />
        </div>
        <div className="w-[20%]">
          <img src={reactLogo} alt="" />
        </div>
      </div> */}

      <div className="grid grid-cols-2 mt-[20px] w-[400px] gap-[10px]">
        <div className="p-[20px] border-2 border-[#c49b1d] rounded-lg grid gap-[10px]">
          <div className="flex items-center">
            <p className="w-[50px] text-[16px]">Html</p>
            <div className="bg-gold w-[70px] h-[7px]">
              <div className="bg-hover w-[90%] h-full"></div>
            </div>
            <p>70%</p>
          </div>
          <div className="flex items-center">
            <p className="w-[50px]">Css</p>
            <div className="bg-gold w-[70px] h-[7px]">
              <div className="bg-hover w-[90%] h-full"></div>
            </div>
            <p>90%</p>
          </div>
          <div className="flex items-center">
            <p className="w-[50px]">Sass</p>
            <div className="bg-gold w-[70px] h-[7px]">
              <div className="bg-hover w-[90%] h-full"></div>
            </div>
            <p></p>
          </div>
          <div className="flex items-center">
            <p className="w-[50px]">Boot...</p>
            <div className="bg-gold w-[70px] h-[7px]">
              <div className="bg-hover w-[40%] h-full"></div>
            </div>
          </div>
        </div>
        <div className="p-[20px] border-2 border-[#c49b1d] rounded-lg grid gap-[10px]">
          <div className="flex items-center">
            <p className="w-[50px] text-[16px]">JS</p>
            <div className="bg-gold w-[70px] h-[7px]">
              <div className="bg-hover w-[70%] h-full"></div>
            </div>
          </div>
          <div className="flex items-center">
            <p className="w-[50px]">TS</p>
            <div className="bg-gold w-[70px] h-[7px]">
              <div className="bg-hover w-[50%] h-full"></div>
            </div>
          </div>
          <div className="flex items-center">
            <p className="w-[50px]">React</p>
            <div className="bg-gold w-[70px] h-[7px]">
              <div className="bg-hover w-[80%] h-full"></div>
            </div>
          </div>
        </div>
      </div>

      <button
        className="w-[100px] h-[40px] bg-gold text-white text-[16px] hover:bg-hover mt-[20px]"
        onClick={() => navigate("/about")}
      >
        see more
      </button>
    </div>
  );
};

export default About;
