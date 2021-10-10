import React, { useState } from "react";
import {FotnTypes, FontAbcs, Sources, THROTTLE_TIMEOUT} from '../../constants/constants';
import {throttle} from '../../utils';

const FontSelector = () => {
  const [searchValue, setSearchValue] = useState(null);
  const [categories, setCategories] = useState([]);
//   const [] = useState();
//   const [] = useState();

  const updateCategories = (event) => {
    if (event.currentTarget.checked) {
      setCategories([...categories, event.currentTarget.id]);
    } else {
      setCategories(categories.filter((item) => item !== event.currentTarget.id))
    }
  };

  const updateSearchValue = value => {
    setSearchValue(value);
  };

  const filterFonts = throttle(updateSearchValue, THROTTLE_TIMEOUT);

  const searchFont = event => {
		const { value } = event.target;
		return filterFonts(value);
	};

    return (
        <div className="font-selector">
        <form action={searchValue} method="post">
          <p className="form-item">
            {FotnTypes.map((type) => 
            <label key={type.categorie}>
                <input type="checkbox" id={type.categorie} name={type.categorie} onChange={updateCategories} />
                 {type.name}
            </label>)}
          </p>
          <hr />
          <p className="form-item">
              {FontAbcs.map((abc) => 
              <label key={abc.key}>
                <input type="checkbox" id={abc.key} name={abc.key} />
                {abc.name}
              </label>
            )}
          </p>
          <hr />
          <p className="form-item">
          {Sources.map((source) => 
              <label key={source.key}>
                <input type="checkbox" id={source.key} name={source.key} />
                {source.name}
              </label>
            )}
          </p>
          <p className="form-item">
              <input className="search-input" type="search" placeholder="Поиск по названию" onChange={searchFont} />
          </p>
          <p className="form-item">
            <button className="upload-btn" type="button" name="upload">Загрузить свой шрифт</button>
            <span className="upload-hint">Требуется регистрация</span>
          </p>
        </form>
      </div>
    );
};

export default FontSelector;