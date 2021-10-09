import React from "react";
import PropTypes from 'prop-types';

const Cards = props => {
    const {fontName} = props;
    return (
    <div className="content_rules-cards">
        <div className="content_about">
                    <h3 className="content_about-title">{fontName} из библиотеки Google fonts</h3>
                    <p className="content_about-text">
                        Roboto has a dual nature. It has a mechanical skeleton and the forms are largely geometric. At the same time, the font features friendly and open curves. While some grotesks distort their letterforms to force a rigid rhythm, Roboto doesn’t compromise, allowing letters to be settled into their natural width. This makes for a more natural reading rhythm more commonly found in humanist and serif types.
                        This is the regular family, which can be used alongside the Roboto Condensed family and the Roboto Slab family.
                        To contribute, see github.com/google/roboto
                    </p>
                    <a href="#">Перейти на страницу Google Fonts</a>
                    </div>
    </div>);
};

Cards.propTypes = {
    fontName: PropTypes.string,
};

export default Cards;
