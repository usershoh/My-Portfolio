import React from "react";

import onlineStoreImg1 from "../../../assets/img/onlineStore-img1.png";
import onlineStoreImg2 from "../../../assets/img/onlineStore-img2.png";
import onlineStoreImg3 from "../../../assets/img/onlineStore-img3.png";
import onlineStoreImg4 from "../../../assets/img/onlineStore-img4.png";
import onlineStoreImg5 from "../../../assets/img/onlineStore-img5.png";

const OnlineStoreProject = () => {
  return (
    <div className="border-[2px] border-[#FFC107] bg-[#FFF7E0] p-6 shadow-lg max-w-[800px] mx-auto rounded-lg grid gap-[10px]">
      <h1 className="text-[24px] text-dark font-semibold mb-4">
        Onsline Store Market
      </h1>
      <div className="grid gap-4">
        <p className="text-[16px] text-dark">
          <strong>Name:</strong> Online store
        </p>
        <p className="text-[16px] text-dark">
          <strong>Discription:</strong> Online store with the ability to
          register in JS
        </p>
        <p className="text-[16px] text-dark">
          <strong>TEchnologies: </strong> HTML, CSS, SASS, JS
        </p>
        <p>    <p className="text-[16px] text-dark">       <strong>Working with: </strong> working with local storage, for each,
          sass style, location
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:w-[700px] items-center gap-[10px]">
        <div className="border border-dark">
          <img src={onlineStoreImg1} alt="" />
        </div>
        <div className="border border-dark">
          <img src={onlineStoreImg2} alt="" />
        </div>
        <div className="border border-dark">
          <img src={onlineStoreImg3} alt="" />
        </div>
        <div className="border border-dark">
          <img src={onlineStoreImg4} alt="" />
        </div>
        <div className="border border-dark">
          <img src={onlineStoreImg5} alt="" />
        </div>
      </div>
      <a href="https://github.com/usershoh/Login">GitHub Link</a>
    </div>
  );
};

export default OnlineStoreProject;