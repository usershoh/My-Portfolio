import React from "react";

const Title = () => {
  return (
    <>
      <section>
        <h1 className="text-[36px] text-gold font-semibold">About me</h1>
        <p className="text-[16px] text-dark">
          Frontend Developer with experience: React Redux
        </p>
      </section>
      <section>
        <h1 className="text-[24px] font-semibold text-gold">Goals</h1>
        <p className="text-dark text[16px]">
          My goals include becoming a middle programmer and opening my own
          company in the IT direction
        </p>
      </section>
      <section>
        <h1 className="text-[24px] font-bold text-gold">My skills</h1>
        <p className="text-[16px] text-darl">
          Html, Css, Sass, Scss, bootstrap, JS, TS, React: Redux-toolkit,
          Tailwind, Axios, React query, i18n
        </p>
      </section>
      <section>
        <h1 className="text-[24px] text-gold font-bold">
          Main achievements and experience
        </h1>
        <p>I made a portfolio website where my projects will be stored.</p>
      </section>
    </>
  );
};

export default Title;
