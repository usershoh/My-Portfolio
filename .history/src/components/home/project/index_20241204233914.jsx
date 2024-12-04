import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import uzumImg1 from "../../../assets/img/uzum market img1.png";

const Project = () => {
  const navigate = useNavigate();
  const [inHover, setInHover] = useState();
  return (
    <section className="grid gap-[10px] text-center m-auto">
      <h1 className="text-gold text-[36px] font-[600]">Project</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-[10px]">
        <div className="border-[#c49b1d] border-[2px] p-[10px] rounded-lg md:w-[250px] grid gap-[5px]">
          <h1 className="text-[18px] font-medium">
            Copy of Uzum Market website
          </h1>
          <p>
            A copy of the Uzum Market website using React and Redux. The project
            includes product pages, cart and favorites, with dynamic data
            updating and routing through React Router.
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
        <div className="border-[#c49b1d] border-[2px] p-[10px] rounded-lg md:w-[250px] grid gap-[5px]">
          <h1 className="text-[18px] font-medium">
            Online store (without React)
          </h1>
          <p>
            The project is a basic online store with registration and a shopping
            cart, where data is stored in Local Storage. All features are
            implemented using pure HTML, CSS and JavaScript.
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
      </div>

      <button onClick={()=> navigate} className="w-[120px] h-[40px] m-auto text-[16px] text-white bg-gold hover:bg-hover">
        see all project
      </button>
    </section>
  );
};

export default Project;
