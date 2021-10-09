import React from 'react'
import './Footer.scss'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="logo"><span className="firstWord">Буква</span> к <span className="secondWord">букве</span></div>
                <div className="links">
                    <a href="#">Написать разработчикам</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
