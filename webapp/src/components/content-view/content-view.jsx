import React from 'react';
import {ABC} from '../../constants/constants';
import PropTypes from 'prop-types';

const ContentView = props => {
    const {fontName} = props;

    return (
        <div className="content">
        <section className="content_top">
                <h2 className="visually-hidden">Heading</h2>
                <div className="content-container">
                <ul className="content_abc-list">
                    {ABC.map((item) => 
                    <li style={{
                        fontFamily: `${fontName}, serif`,
                        fontSize: "30px",
                        lineHeight: '1.5'
                    }} className="content_abc-item" key={item[0]}>
                        <button className="content_abc-letter" onClick={() => console.log('oops!')} id={item[0]}>{item[0]}</button>
                        <button className="content_abc-letter" onClick={() => console.log('oops!')} id={item[1]}>{item[1]}</button></li>)}
                </ul>
                </div>
                <div className="content_rules">
                        <p style={{
                            fontSize: '6rem',
                            color: 'white',
                            marginRight: '20px'
                        }}>A</p>
                        <p style={{
                            fontSize: '4rem',
                            color: 'white',
                            marginRight: '10px'
                        }}>{fontName}</p>
                        <select className="content_rules-select" defaultValue="Bold">
                            <option>Bold</option>
                            <option>Normal</option>
                            <option>Italic</option>
                        </select>
                </div>
            </section>
            <section className="content_bottom"></section>
       </div>
      
    );
}

ContentView.propTypes = {
    fontName: PropTypes.string,
};

export default ContentView;