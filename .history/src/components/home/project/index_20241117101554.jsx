import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import uzumImg1 from "../../../assets/img/uzum market img1.png";

const Project = () => {
  const navigate = useNavigate();
  const [inHover, setInHover] = useState();
  return (
    <section className="grid gap-[10px] text-center m-auto">
      <h1 className="text-gold text-[36px] font-[600]">Project</h1>

      <div>
        <div className="border-[#c49b1d] border-[2px] p-[10px] rounded-lg w-[250px] grid gap-[5px]">
          <h1 className="text-[18px] font-medium">
            Copy of Uzum Market website
          </h1>
          <p>
            A copy of the Uzum Market website using React and Redux. The project
            includes product pages, cart and favorites, with dynamic data
            updating and routing through React Router.
          </p>

          <img src={} alt="" />

          <button
            className="text-gold hover:text-hover"
            onClick={() => navigate("/project")}
          >
            in detail
          </button>
        </div>
      </div>

      <button className="w-[120px] h-[40px] m-auto text-[16px] text-white bg-gold hover:bg-hover">
        see all project
      </button>
    </section>
  );
};

export default Project;