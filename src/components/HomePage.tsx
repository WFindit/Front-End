import React from "react";
import "./HomePage.css";
import logo from "../images/w-findit.png";
import { Icon } from "@iconify/react";
import HomeLeftMain from "./popup/HomeLeftMain";

const HomePage = () => {
  return (
    <div className="main">
      <div className="sub-main">
        <div>
          <div className="imgs">
            <img src={logo} alt="logo" className="logo" />
          </div>

          <HomeLeftMain />

          <div>
            <Icon icon="material-symbols:search" color="#ccc" className="search" />
            <input
              type="text"
              placeholder="Search for lost item"
              className="name"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
