import React from 'react'
import classes from './Header.scss'

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="logo"><span className="firstWord">Буква</span> к <span className="secondWord">букве</span></div>
                <div className="links">
                    <a href="#">Администрирование</a>
                    <a href="#">Выход</a>
                </div>
            </div>
        </header>
    )
}

export default Header
