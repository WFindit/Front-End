import React from "react";
import logo from "./images/w-findit.png";
import "./App.css";
import { Icon } from "@iconify/react";

function App() {
  return (
    <div className="main">
      <div className="sub-main">
        <div>
          <div className="imgs">
            <img src={logo} alt="logo" className="logo" />
          </div>

          <div>
            <div>
              <Icon icon="ic:outline-email" color="#ccc" className="email" />
              <input
                type="text"
                placeholder="UWaterloo Email"
                className="name"
              />
            </div>
            <div className="second-input">
              <Icon icon="carbon:password" color="#ccc" className="email" />
              <input type="password" placeholder="Password" className="name" />
            </div>
            <div className="login-button">
              <button>Login</button>
            </div>
            <p className="link">
              <a href="#">Forgot password?</a> or <a href="#">Sign up</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
