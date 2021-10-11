import React, {useCallback} from "react";
import PropTypes from 'prop-types';
import {mockRules, mainRules} from '../../constants/constants';
import './Rules.scss';
import { Link } from "react-router-dom";


const Rules = props => {
    const {letter, setLetter, fontName} = props;

    const onBackClick = () => {
        setLetter(null);
    };

    // TODO: implement API request
    const getRules = useCallback(
        () => {
            return letter ? mockRules : mainRules;
        },
        [letter],
      );
  
    
    const rulesToRender = getRules();

    return (
    <div className="content_rules-cards">
        {letter ? (<button onClick={onBackClick} className="link">Вернуться к основным правилам</button>):(<Link className="link" to="/FontKeeper">Правила для каждой буквы</Link>)}
        <ul className="content_rules-cardlist masonry-layout">
            {rulesToRender.map((rule, i) => <li key={i} className="content_rules-cardItem masonry-layout__panel">
                <h3 className="content_rules-letters apply-font">{rule.letters}</h3>
                <p className="content_rules-text-sm">{rule.text}</p>
            </li>)}
            <li className="content_rules-cardItem masonry-layout__panel">
                <h3 className="content_rules-sourcetitle">{fontName} из библиотеки Google fonts</h3>
                <p className="content_rules-text-sm">{fontName} has a dual nature. It has a mechanical skeleton and the forms are largely geometric. At the same time, the font features friendly and open curves. While some grotesks distort their letterforms to force a rigid rhythm, {fontName} doesn’t compromise, allowing letters to be settled into their natural width. This makes for a more natural reading rhythm more commonly found in humanist and serif types.
                   This is the regular family, which can be used alongside the {fontName} Condensed family and the {fontName} Slab family.
                   To contribute, see github.com/google/{fontName}</p>
                   <a href="https://fonts.google.com/" className="content_rules-sourcelink">Перейти на страницу Google Fonts</a>
            </li>
        </ul>
    </div>);
};

Rules.propTypes = {
    fontName: PropTypes.string,
    letter: PropTypes.string,
};

export default Rules;
