import React from "react";
import AdminControls from "../../common/AdminControls/AdminControls";
import { USERS_MOCK } from "../../constants/constants";
import Suggestion from "./User/User";
import "./UsersScreen.scss";

const UsersScreen = () => {
  return (
    <div className="adminScreen">
      <div className="container">
        <AdminControls />

        <ul className="adminTable">
          <li className="adminTable-item table-header">
            <p className="userName table-cell wide">Обращение</p>
            <p className="email table-cell wide">E-mail</p>
            <p className="suggested table-cell wide">Предложено шрифтов</p>
            <p className="approved table-cell wide">Принято шрифтов</p>
            <p className="active table-cell">Активен</p>
          </li>
          
          {USERS_MOCK.map(user => {
              return <Suggestion user={user} />
          })}
        </ul>
      </div>
    </div>
  );
};

export default UsersScreen;
