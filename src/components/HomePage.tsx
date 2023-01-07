import React from "react";
import "./HomePage.css";
import logo from "../images/w-findit.png";
import { Icon } from "@iconify/react";
import LoggedOut from "./LoggedOut";

const HomePage = () => {
  return (
    <div className="main">
      <div className="sub-main">
        <div>
          <div className="imgs">
            <img src={logo} alt="logo" className="logo" />
          </div>

          <LoggedOut />

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
