import React from "react";
import { useNavigate } from "react-router-dom";
import instagramLogo from "../../../assets/icon/instagram.svg";
import telegramLogo from "../../../assets/icon/telegram.svg";
import githubLogo from "../../../assets/icon/github.svg";

const Contact = () => {
  const navigate = useNavigate();
  return (
    <section className="grid gap-[10px] text-center m-auto">
      <h1 className="text-[36px] text-gold font-[600]">Contact me</h1>
      <p className="text-dark text-[16px] font-[500]">
        Ready for new projects and cooperation
      </p>
      <div className="w-[160px] flex items-center justify-between m-auto">
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
      <button
        className="w-[100px] h-[40px] text-white text-[16px] bg-gold hover:bg-hover m-auto"
        onClick={() => navigate("/contact")}
      >
        Contact
      </button>
    </section>
  );
};

export default Contact;
