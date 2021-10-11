import React, {useEffect, useState} from "react";
import AdminControls from "../../common/AdminControls/AdminControls";
import { LIBRARY_MOCK } from "../../constants/constants";
import Font from "./Font/Font";
import "./LibraryScreen.scss";


const LibraryScreen = () => {
  useEffect(() => {
    fetch('https://calm-fortress-83458.herokuapp.com/api/v1/fonts')
      .then(res => res.json())
      .then(result => console.log(result))
      .catch(err => console.log(err))
  }, [])

  return (
    <div className="adminScreen">
      <div className="container">
        <AdminControls />

        <ul className="adminTable">
          <li className="adminTable-item table-header">
            <p className="fontName table-cell">Название</p>
            <p className="license table-cell">Лицензия</p>
            <p className="source table-cell">Источник</p>
            <p className="type table-cell">Тип</p>
            <p className="lang table-cell">Язык</p>
            <p className="actions table-cell">Действия</p>
          </li>
          
          {LIBRARY_MOCK.map(font => <Font key={font.fontName} font={font} />)}
        </ul>

        <button className="button">Добавить шрифт</button>
      </div>
    </div>
  );
};

export default LibraryScreen;
