import React from "react";
import AdminControls from "../../common/AdminControls/AdminControls";
import { SUGGESTIONS_MOCK } from "../../constants/constants";
import Suggestion from "./Suggestion/Suggestion";
import "./SuggestionsScreen.scss";


const SuggestionsScreen = () => {
  return (
    <div className="adminScreen">
      <div className="container">
        <AdminControls />

        <ul className="adminTable">
          <li className="adminTable-item table-header">
            <p className="fontName table-cell">Название</p>
            <p className="license table-cell">Лицензия</p>
            <p className="source table-cell">Источник</p>
            <p className="user table-cell">Пользователь</p>
            <p className="type table-cell">Тип</p>
            <p className="lang table-cell">Язык</p>
            <p className="actions table-cell semi-wide">Действия</p>
          </li>
          
          {SUGGESTIONS_MOCK.map(suggestion => <Suggestion key={suggestion.fontName} suggestion={suggestion} />)}
        </ul>
      </div>
    </div>
  );
};

export default SuggestionsScreen;
