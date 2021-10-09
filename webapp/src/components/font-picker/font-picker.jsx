import React, { useState, useEffect } from "react";
// import FontPicker from "font-picker-react";
import {API_KEY} from '../../constants/constants';
import PropTypes from 'prop-types';
import './font-picker.css';

const ExampleFontPicker = props => {
  const {searchValue, categories } = props;  
  console.log(categories);
  const [activeFontFamily, setActiveFontFamily] = useState("Open Sans");

  useEffect(() => {
      if(searchValue) {
        filterFontsList();
      }
  },[searchValue]);

  const filterFontsList = (font) => {
    if(font) {
        return font.family.toLowerCase().startsWith('m');
    }
  }

  return (
    <div className="example-font-picker">
      {/* <FontPicker
        apiKey={API_KEY}
        activeFontFamily={activeFontFamily}
        onChange={(nextFont) => setActiveFontFamily(nextFont.family)}
        categories={categories}
        // filter={() => filterFontsList()}
      /> */}
    </div>
  );
};

ExampleFontPicker.propTypes = {
    searchValue: PropTypes.string,
    categories: PropTypes.arrayOf(PropTypes.string),
};

export default ExampleFontPicker;
 
