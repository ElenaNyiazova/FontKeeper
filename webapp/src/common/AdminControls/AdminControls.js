import React from 'react'
import { NavLink } from 'react-router-dom'
import SearchBar from '../SearchBar/SearchBar'

const AdminControls = () => 
    <div className="adminControls">
        <nav className="adminScreenNav">
            <ul>
                <li className="adminNavItem h3">
                    <NavLink className="adminLink" to="/FontKeeper/admin/rules">
                        Правила
                    </NavLink>
                </li>
                <li className="adminNavItem h3">
                    <NavLink className="adminLink" to="/FontKeeper/admin/library">
                        Библиотека шрифтов
                    </NavLink>
                </li>
                <li className="adminNavItem h3">
                    <NavLink className="adminLink" to="/FontKeeper/admin/suggestions">
                        Предложения шрифтов
                    </NavLink>
                </li>
                <li className="adminNavItem h3">
                    <NavLink className="adminLink" to="/FontKeeper/admin/users">
                        Пользователи
                    </NavLink>
                </li>
            </ul>
        </nav>

        <SearchBar placeholder="Поиск правила по букве, названию или тексту" />
    </div>

export default AdminControls
