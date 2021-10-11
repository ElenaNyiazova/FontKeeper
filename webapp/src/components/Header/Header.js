import React, {useState} from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  const [auth, setAuth] = useState(false)

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
        {auth ? 
          <p className="user-nav">
            <Link className="link" to="/FontKeeper/admin/rules">
              Администрирование
            </Link>
            <Link className="link" to="/FontKeeper/profile">
              Профиль
            </Link>
            <Link className="link" to="/" onClick={() => setAuth(!auth)}>
              Выход
            </Link>
          </p>
          : <p className="user-nav">
              <Link className="link" to="/FontKeeper" onClick={() => setAuth(!auth)}>
                Войти
              </Link>
            </p>  
        }
      </div>
    </header>
  );
};

export default Header;
