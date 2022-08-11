
import React from "react";
import Main from "./Main";
import SideMenu from "./SideMenu";

const LayOut = () => {
  return (
    <div className="pt-[60px] flex w-full">
      <SideMenu />
      <Main/>
    </div>
  );
};

export default LayOut;
