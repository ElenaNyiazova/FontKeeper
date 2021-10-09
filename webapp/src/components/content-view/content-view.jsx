import React from 'react';
import PropTypes from 'prop-types';

const ABC = "Аа Бб Вв Гг Дд Ее Ёё Жж Зз Ии Йй Кк Лл Мм Нн Оо Пп Рр Сс Тт Уу Фф Хх Цц Чч Шш Щщ Ъъ Ыы Ьь Ээ Юю Яя".split(" ");

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
                        // fontFamily: `${fontName}, serif`,
                        fontSize: "30px",
                        lineHeight: '1.5'
                    }} className="content_abc-item" key={item[0]}>
                        <button className="content_abc-letter apply-font" onClick={() => console.log('oops!')} id={item[0]}>{item[0]}</button>
                        <button className="content_abc-letter apply-font" onClick={() => console.log('oops!')} id={item[1]}>{item[1]}</button></li>)}
                </ul>
                </div>
                <div className="content_rules">
                    <div className="content_rules-title">
                        <p className="letter apply-font">A</p>
                        <p className="font-name">{fontName}</p>
                        <select defaultValue="Bold">
                            <option>Bold</option>
                            <option>Normal</option>
                            <option>Italic</option>
                        </select>
                    </div>
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