import React from "react";
import uzumImg1 from "../../../assets/img/uzum-img1.png";
import uzumImg2 from "../../../assets/img/uzum-img2.png";
import uzumImg3 from "../../../assets/img/uzum-img3.png";

const UzumMarketProject = () => {
  return (
    <div className="border-2 border-[#FFC107] bg-[#FFF7E0] p-6 rounded-xl shadow-lg max-w-4xl mx-auto">
      <h1 className="text-[24px] font-bold text-[#333] mb-4 text-center">Uzum Market Copy</h1>
      
      <div className="grid gap-4">
        <p className="text-[16px] text-[#555]">
          <strong>Name:</strong> Copy of Uzum Market: An analogue of a popular service built with React.
        </p>
        <p className="text-[16px] text-[#555]">
          <strong>Description:</strong> An online store featuring data storage in Local Storage and a shopping cart.
        </p>
        <p className="text-[16px] text-[#555]">
          <strong>Technologies:</strong> HTML, CSS, JS, React (Axios, Tailwind CSS, i18n, JSON-Server, React Query, React Router, Ant Design, Redux Toolkit)
        </p>
        <p className="text-[16px] text-[#555]">
          <strong>Key Features:</strong> Local Storage integration, advanced shop page logic, individual product pages, JSON-Server for backend simulation, like and cart functionality, and dynamic UI updates.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
        <div className="border border-[#FFC107] rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
          <img src={uzumImg1} alt="Screenshot 1" className="w-full h-auto" />
        </div>
        <div className="border border-[#FFC107] rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
          <img src={uzumImg2} alt="Screenshot 2" className="w-full h-auto" />
        </div>
        <div className="border border-[#FFC107] rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
          <img src={uzumImg3} alt="Screenshot 3" className="w-full h-auto" />
        </div>
      </div>

      <div className="mt-6 text-center">
        <a
          href="https://github.com/usershoh/Uzum-market-copy"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-[#FFC107] text-[#333] font-semibold rounded-lg shadow hover:bg-[#FFB300] transition-all"
        >
          View on GitHub
        </a>
      </div>
    </div>
  );
};

export default UzumMarketProject;
