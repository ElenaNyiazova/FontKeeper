import React from "react";
import {Link} from "react-router-dom";
import '../../App.scss';
import './Page-not-found.scss';

import mockImg from '../../images/not-fond.png';

const PageNotFound = () => {
  return (
    <div className="container not-found">
      <div className="not-found__bg-image">
        <img
            src={mockImg}
            alt="Page not found"
            width="600"
            height="400"
        />
      </div>
      <Link className="not-found__link" to="/FontKeeper">
        Back home
      </Link>
    </div>
  );
};

export default PageNotFound;