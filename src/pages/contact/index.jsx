import React from "react";
import Title from "../../components/contact/title";
import Details from "../../components/contact/details";
import Location from "../../components/contact/location";
import Cta from "../../components/contact/cta";

const ContactPage = () => {
  return (
    <div className="flex flex-col min-h-[71vh] px-[5%] gap-[20px]">
      <Title />
      <Details />
      <Location />
      <Cta />
    </div>
  );
};

export default ContactPage;
