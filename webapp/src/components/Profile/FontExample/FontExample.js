import React from "react";
import "./FontExample.scss";

import mockImg from "../../../images/mockFontImg.png";

const FontExample = () => (
  <div className="fontExample">
    <img src={mockImg} className="fontExampleImg" alt="Some meaningful text" />
    <p className="fontDescription regular">
      We make stunning and cool design font type which suitable for any project
      purpose for your business. Feel free to visit our store at
    </p>
  </div>
);

export default FontExample;
