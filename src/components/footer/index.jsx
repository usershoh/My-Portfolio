import React from "react";
import { useNavigate } from "react-router-dom";
import instagramLogo from "../../assets/icon/instagram.svg";
import telegramLogo from "../../assets/icon/telegram.svg";
import githubLogo from "../../assets/icon/github.svg";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="bg-dark mt-[20px] pl-[5%] pr-[5%]">
      <div className="grid gap-[10px] text-white pt-[20px] pb-[20px] grid-cols-2 md:grid-cols-4 max-[480px]:grid-cols-1">
        {/* <button className="text-[18px] pb-[5px]">Pages</button>
        <button className="text-[16px]" onClick={() => navigate("/")}>
          Home
        </button>
        <button className="text-[16px]" onClick={() => navigate("/about")}>
          About
        </button>
        <button className="text-[16px]" onClick={() => navigate("/project")}>
          Project
        </button>
        <button className="text-[16px]" onClick={() => navigate("/contact")}>
          Contact
        </button>
        <button className="text-[16px]" onClick={() => navigate("/blog")}>
          Blog
        </button> */}
        <div>
          <h2 className="font-[500]">Shokhjakhon Portfolio</h2>
          <p>I am 16 years old and live in Uzbekistan</p>
        </div>

        <div>
          <h2 className="font-[500]">About me</h2>
          <button onClick={() => navigate("/about")}>Link page</button>
        </div>

        <div>
          <h2 className="font-[500]">Contact</h2>
          <a href="email:bumsakalaka66@gmail.com">Email</a>
          <p>Phone number: +998 97 878 22 27</p>
        </div>

        <div>
          <h2 className="font-[500]">Social media</h2>
          <div className="w-[130px] flex items-center justify-between">
            <a href="https://www.instagram.com/shohjahon_777.official/">
              <img className="w-[30px] h-[30px]" src={instagramLogo} alt="" />
            </a>
            <a href="https://t.me/usershox">
              <img className="w-[30px] h-[30px]" src={telegramLogo} alt="" />
            </a>
            <a href="https://github.com/usershoh">
              <img className="w-[30px] h-[30px]" src={githubLogo} alt="" />
            </a>
          </div>
        </div>
      </div>
      <div className="bg-dark text-white text-center">
        © 2024 Shoxjaxon Jamshidov. Все права защищены.
      </div>
    </footer>
  );
};

export default Footer;
