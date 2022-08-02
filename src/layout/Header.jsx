import { useEffect, useState } from "react";
import logo from "../images/pomodoro-logo.png";

const Header = ({ handleClick }) => {
  return (
    <nav className="Header-nav py-4">
      <div className="container">
        <div className="row">
          <div className="col-3 d-flex align-content-center">
            <img className="Header-logo" src={logo} alt="Logo" />
            <span className="h1 ms-4">Timer</span>
          </div>
          <div className="col-4 col-sm-6"></div>
          <div className="col d-flex justify-content-center align-items-center">
            <button
              onClick={() => handleClick(2)}
              className="Header-btn px-2 py-1"
            >
              <i className="fa-solid fa-gear"></i> Setting
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
