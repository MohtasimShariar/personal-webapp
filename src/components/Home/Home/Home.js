import React from "react";
import Navbar from "../../Shared/navbar/navbar";
import Carousal from "../carousal/carousal";
 import TitleMessage from "../title-message/title-message";
import FooterPanel from "../../Shared/footer/footer";
const Home = () => {
  return (
    <div className="App" style={{ position: "relative" }}>
  
        <Navbar></Navbar>
         <TitleMessage /> 
          <Carousal />
          <FooterPanel />
    </div>
  );
};

export default Home;