import React from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import './Rules.scss';

const mockRules = [{
    letters: 'АДЛ',
    text: 'Если д и л треугоьные — верхний угол должен быть одинаковым'
}, {
    letters: 'АН',
    text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
}, {
    letters: 'АУМИ',
    text: 'Cмотрим на угод наклонных штрихов'
},
{
    letters: 'ес еобр еа еэ',
    text: 'Cмотрим на угод наклонных штрихов'
},
{
    letters: 'АУМИ',
    text: 'Cмотрим на угод наклонных штрихов'
},
{
    letters: 'ес еобр еа еэ',
    text: 'Cмотрим на угод наклонных штрихов'
}];

const Rules = props => {
    return (
    <div className="content_rules-cards">
        <Link className="content_rules-link" to="/">Вернуться к основным правилам</Link>
        <ul className="content_rules-cardlist masonry-layout">
            {mockRules.map((rule) => <li className="content_rules-cardItem masonry-layout__panel">
                <h3 className="content_rules-letters apply-font">{rule.letters}</h3>
                <p className="content_rules-text-sm">{rule.text}</p>
            </li>)}
            <li className="content_rules-cardItem masonry-layout__panel">
                <h3 className="content_rules-sourcetitle">Roboto из библиотеки Google fonts</h3>
                <p className="content_rules-text-sm">Roboto has a dual nature. It has a mechanical skeleton and the forms are largely geometric. At the same time, the font features friendly and open curves. While some grotesks distort their letterforms to force a rigid rhythm, Roboto doesn’t compromise, allowing letters to be settled into their natural width. This makes for a more natural reading rhythm more commonly found in humanist and serif types.
                   This is the regular family, which can be used alongside the Roboto Condensed family and the Roboto Slab family.
                   To contribute, see github.com/google/roboto</p>
                <Link className="content_rules-sourcelink" to="/">Перейти на страницу Google Fonts</Link>
            </li>
        </ul>
    </div>);
};

Rules.propTypes = {
    fontName: PropTypes.string,
};

export default Rules;
