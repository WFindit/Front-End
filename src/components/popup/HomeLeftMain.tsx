import React from "react";
import "./HomeLeftMain.css";
import logo from "../../images/w-findit.png";
import { Icon } from "@iconify/react";

const HomeLeftMain = () => {
  return (
    <div className="main">
      <div className="sub-main">
        <div>
          <div className="imgs">
            <img src={logo} alt="logo" className="logo" />
          </div>

          <div className="login-button">
            <a href="https://google.ca">
              <button>Login</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeLeftMain;
