import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <Link
          style={{
            textDecoration: "none",
          }}
          to="/FontKeeper"
        >
          <h1 className="main-title">
            <span className="main-title_bg">Б</span>уква к{" "}
            <span className="main-title_sm">б</span>укве
          </h1>
        </Link>
        <p className="user-nav">
          <Link className="main-link" to="/FontKeeper/admin">
            Администрирование
          </Link>
          <Link className="main-link" to="/FontKeeper/profile">
            Профиль
          </Link>
          <Link className="main-link" to="/">
            Выход
          </Link>
        </p>
      </div>
    </header>
  );
};

export default Header;
