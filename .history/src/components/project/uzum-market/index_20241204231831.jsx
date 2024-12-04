import React from "react";
import uzumImg1 from "../../../assets/img/uzum-img1.png";
import uzumImg2 from "../../../assets/img/uzum-img2.png";
import uzumImg3 from "../../../assets/img/uzum-img3.png";

const UzumMarketProject = () => {
  return (
    <div className="border-[2px] border-[#c49b1d] p-[10px] rounded-lg grid gap-[10px]">
      <h1 className="text-[20px] text-dark font-semibold">Uzum market copy</h1>
      <div className="grid gap-[5px]">
        <p className="text-[14px] text-dark">
          <strong>Name:</strong> Copy of Uzum Market: An analogue of a popular
          service with React
        </p>
        <p className="text-[14px] text-dark">
          <strong>Discription:</strong> Online store with data saved in Local
          Storage and a shopping cart.
        </p>
        <p className="text-[14px] text-dark">
          <strong>Technologies:</strong> HTML, CSS, JS, REACT: AXIOS, TAILWIND,
          I18N, JSON-SERVER, REACT QUERY, REACT-ROUTER-DOM, ANT-DESIGN,
          REDUX-TOOLKIT
        </p>
        <p className="text-[14px] text-dark">
          <strong>Working with:</strong> local storeage, complex shop page
          logic, separate pages for each product, working with json-server, like
          and cart functionality and like page Dynamic interface update.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 items-center gap-[10px] lg:w-[700px]">
        <div className=" border border-dark">
          <img src={uzumImg1} alt="" />
        </div>
        <div className=" border border-dark">
          <img src={uzumImg2} alt="" />
        </div>
        <div className=" border border-dark">
          <img src={uzumImg3} alt="" />
        </div>
      </div>
      <div className="mt-[10px] text">
        <a href="https://github.com/usershoh/Uzum-market-copy">GitHub Link</a>
      </div>
    </div>
  );
};

export default UzumMarketProject;