import React, {useState} from 'react';
import {ABC} from '../../constants/constants';
import PropTypes from 'prop-types';

const ContentView = props => {
    const {fontName, letter, setLetter} = props;
    const [fontstyle, setFontStyle] = useState('bold');

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
                    <li style={{
                        fontFamily: `${fontName}, serif`,
                        fontstyle: `${fontstyle}`,
                        fontSize: "30px",
                        lineHeight: '1.5'
                    }} className="content_abc-item" key={item[0]}>
                        <button className="content_abc-letter apply-font" onClick={onLetterClick} id={item[0]}>{item[0]}</button>
                        <button className="content_abc-letter apply-font" onClick={onLetterClick} id={item[1]}>{item[1]}</button></li>)}
                </ul>
                </div>
                <div className="content_rules">
                        <p className="content_rules-letter apply-font">{letter}</p>
                        <p style={{
                            fontSize: '4rem',
                            color: 'white',
                            marginRight: '10px'
                        }}>{fontName}</p>
                        <select className="content_rules-select" defaultValue="bold" onChange={onStyleSelectChange}>
                            <option>Bold</option>
                            <option>Normal</option>
                            <option>Italic</option>
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