import React from "react";
import "./RulesScreen.scss";
import Rule from "./Rule/Rule";
import AdminControls from "../../common/AdminControls/AdminControls";
import { RULES_MOCK } from "../../constants/constants";

const AdminScreen = () => {
  const handleDelete = () => {
    RULES_MOCK = RULES_MOCK.splice(1,1)
  }

  return (
    <div className="adminScreen">
      <div className="container">
        <AdminControls />

        <ul className="adminTable">
          <li className="adminTable-item table-header">
            <p className="mainLetter table-cell">Основные буквы </p>
            <p className="extraLetter table-cell">Дополнительные буквы</p>
            <p className="rule table-cell">Правило</p>
            <p className="category table-cell">Категория</p>
            <p className="importance table-cell">Важность</p>
            <p className="visibility table-cell">Видимость</p>
            <p className="actions table-cell">Действия</p>
          </li>
          
          {RULES_MOCK.map(rule => <Rule key={rule.extraLetters} handleDelete={handleDelete} rule={rule} />)}
        </ul>

        <button className="button">Добавить правило</button>
      </div>
    </div>
  );
};

export default AdminScreen;
