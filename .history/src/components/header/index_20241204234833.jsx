import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const [isOpenMenu, setIsOpentMenu] = useState(false);
  const toggleMenu = () => {
    setIsOpentMenu(!isOpenMenu);
  };

  // const navigateGmail = () => {
  //   window.location.href = "mailto:bumsakalaka66@gmail.com";
  // };

  return (
    <div className="px-[5%] py-[10px] flex items-center justify-between bg-white">
      <Link to={"/"}>
        <h1 className="text-[24px] text-[#997f31] font-[600]">Shokhjakhon</h1>
      </Link>
      <div className="hidden md:flex items-center gap-[40px] text-[16px] text-gold font-[500]">
        <button className="hover:text-hover" onClick={() => navigate("/about")}>
          About
        </button>
        <button
          className="hover:text-hover"
          onClick={() => navigate("/project")}
        >
          Project
        </button>
        <button
          className="hover:text-hover"
          onClick={() => navigate("/contact")}
        >
          Contact
        </button>
        {/* <button className="hover:text-hover" onClick={() => navigate("/blog")}>
          Blog
        </button> */}

        <button
          onClick={navigateGmail}
          className="border w-[120px] h-[40px] bg-gold text-white text-[16px] hover:bg-hover"
        >
          Massage me
        </button>
      </div>

      <button onClick={toggleMenu} className="md:hidden focus:outline-none">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </button>

      {isOpenMenu && (
        <div className="absolute top-[60px] right-[10px] w-[260px] h-[200px] grid gap-[5px] rounded-[10px] p-4 md:hidden bg-white">
          <button onClick={() => navigate("/about")}>About</button>
          <button onClick={() => navigate("/project")}>Project</button>
          <button onClick={() => navigate("/contact")}>Contact</button>
          <button onClick={() => navigate("/blog")}>Blog</button>
          <button className="border w-[100%] h-[40px] bg-gold text-white text-[16px]">
            Here me
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
