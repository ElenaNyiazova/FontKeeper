import React from 'react';
import {ABC} from '../../constants/constants';
import PropTypes from 'prop-types';

const ContentView = props => {
    const {fontName, letter, setLetter, fontstyle, setFontStyle} = props;
    
    const onStyleSelectChange = (evt) => {
        const selectedStyle = evt.target.value;
        console.log(selectedStyle);

        setFontStyle(selectedStyle);
    };

    const onLetterClick = (evt) => {
        const selectedLetter = evt.target.id;

        setLetter(selectedLetter);
    };

    return (
        <div className="content">
        <section className="content_top">
                <h2 className="visually-hidden">Heading</h2>
                <div className="content-container">
                <ul className="content_abc-list">
                    {ABC.map((item) => 
                    <li className="content_abc-item" key={item[0]}>
                        <button style={{
                            fontWeight: `${fontstyle === 'bold' ? 'bold': 'normal'}`,
                            fontStyle: `${fontstyle}`
                        }} className="content_abc-letter apply-font" onClick={onLetterClick} id={item[0]}>{item[0]}</button>
                        <button style={{
                            fontWeight: `${fontstyle === 'bold' ? 'bold': 'normal'}`,
                            fontStyle: `${fontstyle}`
                        }} className="content_abc-letter apply-font" onClick={onLetterClick} id={item[1]}>{item[1]}</button></li>)}
                </ul>
                </div>
                <div className="content_rules">
                        <p style={{
                            fontWeight: `${fontstyle === 'bold' ? 'bold': 'normal'}`,
                            fontStyle: `${fontstyle}`
                        }} className="content_rules-letter apply-font">{letter}</p>
                        <p className="content_rules-font-name apply-font">{fontName}</p>
                        <select className="content_rules-select" defaultValue="bold" onChange={onStyleSelectChange}>
                            <option value="bold">Bold</option>
                            <option value="normal">Normal</option>
                            <option value="italic">Italic</option>
                        </select>
                </div>
            </section>
       </div>
      
    );
}

ContentView.propTypes = {
    fontName: PropTypes.string,
    letter:  PropTypes.string,
    setLetter: PropTypes.func
};

export default ContentView;