import React from 'react'
import Toggle from "../../../common/Toggle/Toggle";
import './Rule.scss'

const Rule = props => {
    const {mainLetters, extraLetters, rule, category, importance, visibility} = props.rule

    return <li className="adminTable-item">
        <p className="mainLetter table-cell">{mainLetters}</p>
        <p className="extraLetter table-cell">{extraLetters}</p>
        <p className="rule table-cell">{rule}</p>
        <p className="category table-cell">{category}</p>
        <p className="importance table-cell">{importance}</p>
        <p className="visibility table-cell"><Toggle checked={visibility} /></p>
        <p className="actions table-cell">
            <button className="editBtn"></button>
            <button className="deleteBtn"></button>
        </p>
    </li>
}

export default Rule
