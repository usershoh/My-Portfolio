import React from "react";
import UzumMarketProject from "../../components/project/uzum-market";
import OnlineStoreProject from "../../components/project/online-store";

const ProjectPage = () => {
  return (
    <div className="px-[5%] pt-[20px] gap-[20px] flex flex-col min-h-[71vh]">
      <UzumMarketProject />
      <OnlineStoreProject />
    </div>
  );
};

export default ProjectPage;
