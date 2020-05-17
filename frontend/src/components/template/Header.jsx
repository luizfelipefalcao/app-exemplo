import "./Header.css";
import React from "react";

export default (props) => (
  <nav className="navbar navbar-expand-lg">
    <div className="navbar-header">
      <a className="navbar-brand" href="#/home">
        EasyAdd
      </a>
      <button
        type="button"
        className="navbar-toggle collapsed"
        data-toggle="collapse"
        data-target="#navbar"
        aria-expanded="false"
        aria-controls="navbar"
      >
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
    </div>

    <div id="navbar" className="navbar-collapse collapse">
      <ul className="nav navbar-nav">
        <li>
          <a href="#/home">home</a>
        </li>
        <li>
          <a href="#/about">about</a>
        </li>
      </ul>
    </div>
  </nav>
);
