import React from "react";
import "./LoggedOut.css";
import { Icon } from "@iconify/react";

const LoggedOut = () => {
  return (
    <div className="login-button">
      <a href="https://google.ca">
        <button>Login</button>
      </a>
    </div>
  );
};

export default LoggedOut;
