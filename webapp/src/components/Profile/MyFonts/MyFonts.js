import React from 'react'
import "./MyFonts.scss"

const MyFonts = () => {
    return (
        <main className="myFonts">
            <h3 className="h3">Мои шрифты</h3>

            <ul className="fontsList">
                {[1,2,3,4].map(elem => 
                    <li className="fontsList-item">
                        <p className="fontName">
                            <a href="#" className="fontName link">Obituary</a>
                        </p>
                        <p className="fontType">Без засечек, Моноширинный</p>
                        <p className="lang">Кирилица, Латиница</p>
                        <div className="about">
                            <p className="usage">Free For Personal Use</p>
                            <a href="#" className="fontLink link">https://pixelify.net...</a>
                        </div>                    
                        <div className="controls">
                            <button className="editBtn"></button>
                            <button className="deleteBtn"></button>
                        </div>
                    </li>
                )}
            </ul>

            <button className="button">Добавить свой шрифт</button>
        </main>
    )
}

export default MyFonts
