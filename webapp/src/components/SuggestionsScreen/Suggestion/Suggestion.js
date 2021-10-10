import React from 'react'
import './Suggestion.scss'

const Suggestion = props => {
    const {fontName, license, source, user, type, lang} = props.suggestion

    return <li className="adminTable-item">
        <p className="fontName table-cell">{fontName}</p>
        <p className="license table-cell">{license}</p>
        <p className="source table-cell">
            <a className="link" href={source}>{source}</a>
        </p>
        <p className="user table-cell">{user}</p>
        <p className="type table-cell">{type}</p>
        <p className="lang table-cell">{lang}</p>
        <p className="actions table-cell semi-wide">
            <button className="seeBtn"></button>
            <button className="editBtn"></button>
            <button className="approveBtn"></button>
            <button className="deleteBtn"></button>
        </p>
    </li>
}

export default Suggestion
