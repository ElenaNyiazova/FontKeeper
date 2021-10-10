import React, { useState } from "react";
import FontPicker from "font-picker-react";
import {API_KEY} from '../../constants/constants';
import './font-picker.scss';

const ExampleFontPicker = props => {
  const [activeFontFamily, setActiveFontFamily] = useState("Open Sans");

  return (
    <div className="example-font-picker">
      <FontPicker
        apiKey={API_KEY}
        activeFontFamily={activeFontFamily}
        onChange={(nextFont) => setActiveFontFamily(nextFont.family)}
      />
    </div>
  );
};

export default ExampleFontPicker;
 
