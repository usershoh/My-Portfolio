import React from "react";
import PortretFoto from "../../../assets/img/photo_2024-05-25_15-15-50-round.png";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className="grid sm:flex justify-between  gap-[20px]">
      <div className="w-[70%] m-auto sm:w-[45%]">
        <img src={PortretFoto} alt="portretfoto" />
      </div>
      <div className="p-[30px] md:pt-[100px]">
        <h1 className="text-[24px] lg:text-[48px] font-[600] text-dark">
          Hello, I'm Shokhjakhon, a passionate Frontend Developer.
        </h1>
        <div className="hidden sm:flex items-center gap-[10px] text-[20px] pt-[20px]">
          <button
            onClick={() => navigate("/project")}
            className="text-gold hover:text-hover"
          >
            See project
          </button>
          <button
            onClick={() => navigate("/about")}
            className="text-gold hover:text-hover"
          >
            About me
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
