import React, { useState } from "react";
import ExampleFontPicker from '../font-picker/font-picker';
import {FotnTypes, FontAbcs, Sources, THROTTLE_TIMEOUT} from '../../constants';
import {throttle} from '../../utils';

const FontSelector = () => {
  const [searchValue, setSearchValue] = useState(null);
  const [categories, setCategories] = useState([]);
  const [] = useState();
  const [] = useState();

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
        <form action="#" method="post">
          <p>
            {FotnTypes.map((type) => 
            <label key={type.categorie}>
                <input type="checkbox" id={type.categorie} name={type.categorie} onChange={updateCategories} />
                 {type.name}
            </label>)}
          </p>
          <p>
              {FontAbcs.map((abc) => 
              <label key={abc.key}>
                <input type="checkbox" id={abc.key} name={abc.key} />
                {abc.name}
              </label>
            )}
          </p>
          <p>
          {Sources.map((source) => 
              <label key={source.key}>
                <input type="checkbox" id={source.key} name={source.key} />
                {source.name}
              </label>
            )}
          </p>
          <p>
              <input type="search" placeholder="Поиск по названию" onChange={searchFont} />
              <ExampleFontPicker searchValue={searchValue} categories={categories} />
          </p>
          <p>
            <button type="button" name="upload">Загрузить свой шрифт</button>
            <span>Требуется регистрация</span>
          </p>
        </form>
      </div>
    );
};

export default FontSelector;