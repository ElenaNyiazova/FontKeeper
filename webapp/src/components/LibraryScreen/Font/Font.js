import React from 'react'
import './Font.scss'

const Font = props => {
    const {fontName, license, source, type, lang} = props.font

    return <li className="adminTable-item">
        <p className="fontName table-cell">{fontName}</p>
        <p className="license table-cell">{license}</p>
        <p className="source table-cell">
            <a className="link" href={source}>{source}</a>
        </p>
        <p className="type table-cell">{type}</p>
        <p className="lang table-cell">{lang}</p>
        <p className="actions table-cell">
            <button className="seeBtn"></button>
            <button className="editBtn"></button>
            <button className="deleteBtn"></button>
        </p>
    </li>
}

export default Font
