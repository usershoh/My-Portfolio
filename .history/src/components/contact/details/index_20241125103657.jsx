import React from "react";
import { useNavigate } from "react-router-dom";
import instagramLogo from "../../../assets/icon/instagram.svg";
import telegramLogo from "../../../assets/icon/telegram.svg";
import githubLogo from "../../../assets/icon/github.svg";

const Details = () => {
  return (
    <div className="grid gap-[5px]">
      <div> bumsakalaka66@gmail.com</div>
      <div className="w-[160px] flex items-center justify-between">
        <a href="https://www.instagram.com/shohjahon_777.official/">
          <img className="w-[40px] h-[40px]" src={instagramLogo} alt="" />
        </a>
        <a href="https://t.me/usershox">
          <img className="w-[40px] h-[40px]" src={telegramLogo} alt="" />
        </a>
        <a href="https://github.com/usershoh">
          <img className="w-[40px] h-[40px]" src={githubLogo} alt="" />
        </a>
      </div>
    </div>
  );
};

export default Details;
