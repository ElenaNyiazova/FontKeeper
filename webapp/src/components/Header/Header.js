import React from "react";
import { Link } from "react-router-dom";
// import classes from './Header.scss'

const Header = () => {
  return (
    <header className="main-header">
      <h1 className="main-title">
        <span className="main-title_bg">Б</span>уква к{" "}
        <span className="main-title_sm">б</span>укве
      </h1>
      <p className="user-nav">
        <Link className="main-link" to="/">
          Вход на сайт
        </Link>
      </p>
    </header>
  );
};

export default Header;
