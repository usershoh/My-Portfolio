import React from "react";
import uzumImg1 from "../../../assets/img/uzum-img1.png";
import uzumImg2 from "../../../assets/img/uzum-img2.png";
import uzumImg3 from "../../../assets/img/uzum-img3.png";

const UzumMarketProject = () => {
  return (
    <div className="border-[2px] p-6 border-[#FFC107] bg-[#FFF7E0] shadow-lg max-w-[800px] mx-auto rounded-lg grid gap-[10px]">
      <h1 className="text-[24px] text-dark font-semibold mb-4">Uzum market copy</h1>
      <div className="grid gap-4">
        <p className="text-[16px] text-dark">
          <strong>Name:</strong> Copy of Uzum Market: An analogue of a popular
          service with React 
        </p>
        <p className="text-[16px] text-dark">
          <strong>Discription:</strong> Online store with data saved in Local
          Storage and a shopping cart.
        </p>
        <p className="text-[16px] text-dark">
          <strong>Technologies:</strong> HTML, CSS, JS, REACT: AXIOS, TAILWIND,
          I18N, JSON-SERVER, REACT QUERY, REACT-ROUTER-DOM, ANT-DESIGN,
          REDUX-TOOLKIT
        </p>
        <p className="text-[16px] text-dark">
          <strong>Working with:</strong> local storeage, complex shop page
          logic, separate pages for each product, working with json-server, like
          and cart functionality and like page Dynamic interface update.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 items-center gap-[10px] mt-6 lg:w-[700px]">
        <div className="border border-[#FFC107] rounded-lg overflow-hidden">
          <img src={uzumImg1} alt="" />
        </div>
        <div className="border border-[#FFC107] rounded-lg overflow-hidden">
          <img src={uzumImg2} alt="" />
        </div>
        <div className="border border-[#FFC107] rounded-lg overflow-hidden">
          <img src={uzumImg3} alt="" />
        </div>
      </div>
      <div className="mt-[10px] text-center">
        <a
          className="inline-block font-semibold rounded-lg shadow hover:bg-[#FFB300] px-6 py-3 bg-[#FFC107] text-[#333]"
          href="https://github.com/usershoh/Uzum-market-copy"
        >
          GitHub Link
        </a>
      </div>
    </div>
  );
};

export default UzumMarketProject;
