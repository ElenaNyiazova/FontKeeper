import React from "react";
import { Link } from "react-router-dom";
// import './Footer.scss';

const Footer = () => {
  return (
    <footer className="main-footer">
      <h2 className="main-title">
        <span className="main-title_bg">Б</span>уква к{" "}
        <span className="main-title_sm">б</span>укве
      </h2>
      <Link className="main-link" to="/">
        Написать разработчикам
      </Link>
    </footer>
  );
};

export default Footer;
