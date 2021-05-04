import React from "react";
import "./index.css";
export const NavBar = () => {
  return (
    <div className="navDiv">
      <nav className="nav">
        <div>
          {" "}
          <a>Home</a>
          <a>Main</a>
          <a>About us</a>
          <a>Contacts</a>
        </div>
        <div>
          <a className="nav__btn-log">Log out</a>
        </div>
      </nav>
    </div>
  );
};
