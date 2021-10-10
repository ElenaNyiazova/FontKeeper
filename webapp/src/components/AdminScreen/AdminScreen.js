import React from 'react'
// import Toggle from '../../common/Toggle'
import './AdminScreen.scss'

const AdminScreen = () => {
    return (
        <div className="adminScreen">
            <div className="container">
                <div className="adminControls">
                    <nav className="adminScreenNav">
                        <ul>
                            <li className="adminNavItem h3 active">
                                <a className="adminLink" href="#">Правила</a>
                            </li>
                            <li className="adminNavItem h3">
                                <a className="adminLink" href="#">Библиотека шрифтов</a>
                            </li>
                            <li className="adminNavItem h3">
                                <a className="adminLink" href="#">Предложения шрифтов</a>
                            </li>
                            <li className="adminNavItem h3">
                                <a className="adminLink" href="#">Пользователи</a>
                            </li>
                        </ul>
                    </nav>

                    <input type="text" />
                </div>

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
                    <li className="adminTable-item">
                        <p className="mainLetter table-cell">АНО</p>
                        <p className="extraLetter table-cell">АНАО</p>
                        <p className="rule table-cell">Соотношение ширин трех базовых форм треугольника, прямоугольника, овала</p>
                        <p className="category table-cell">Форма букв</p>
                        <p className="importance table-cell">10</p>
                        <p className="visibility table-cell">АНО</p>
                        <p className="actions table-cell">АНО</p>
                    </li>
                    <li className="adminTable-item">
                        <p className="mainLetter table-cell">АНО</p>
                        <p className="extraLetter table-cell">АНАО</p>
                        <p className="rule table-cell">Соотношение овала</p>
                        <p className="category table-cell">Формаfffffffffffff букв</p>
                        <p className="importance table-cell">10</p>
                        <p className="visibility table-cell">АНО</p>
                        <p className="actions table-cell">АНО</p>
                    </li>
                    <li className="adminTable-item">
                        <p className="mainLetter table-cell">АНО</p>
                        <p className="extraLetter table-cell">АНАО</p>
                        <p className="rule table-cell">Соотношение ширин трех базовых форм треугольника, прямоугольника, овала Соотношение ширин трех базовых форм треугольника, прямоугольника, овала</p>
                        <p className="category table-cell">Форма букв</p>
                        <p className="importance table-cell">10</p>
                        <p className="visibility table-cell">АНО</p>
                        <p className="actions table-cell">АНО</p>
                    </li>
                </ul>

                <button className="button">Добавить правило</button>
            </div>
        </div>
    )
}

export default AdminScreen
