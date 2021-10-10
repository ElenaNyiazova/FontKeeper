import React, { useState } from "react";
import ExampleFontPicker from '../font-picker/font-picker';
import {FotnTypes, FontAbcs, Sources, THROTTLE_TIMEOUT} from '../../constants/constants';
import {throttle} from '../../utils';
import Checkbox from "../../common/Checkbox/Checkbox";
import SearchBar from "../../common/SearchBar/SearchBar";

const FontSelector = props => {
  const {activeFontFamily, setActiveFontFamily} = props;
  const [searchValue, setSearchValue] = useState(null);
  const [categories, setCategories] = useState([]);

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
          <p className="formInput">
            {FotnTypes.map((type) => 
              <Checkbox id={type.categorie} name={type.categorie} onChange={updateCategories} key={type.categorie}>
                {type.name}
              </Checkbox>
            )}
          </p>
          <hr className="formDivider" />
          <p className="formInput">
              {FontAbcs.map((abc) => 
              <Checkbox id={abc.key} name={abc.key} key={abc.key}>
                {abc.name}
              </Checkbox>
            )}
          </p>
          <hr className="formDivider" />
          <p className="formInput">
          {Sources.map((source) => 
            <Checkbox type="checkbox" id={source.key} name={source.key} key={source.key}>
              {source.name}
            </Checkbox>
          )}
          </p>
          <p className="formInput">
              <SearchBar className="fontSearch" placeholder="Поиск по названию" onChange={searchFont} />

              <ExampleFontPicker activeFontFamily={activeFontFamily} setActiveFontFamily={setActiveFontFamily} />
          </p>
          <p className="formInput">
            <button className="upload-btn" type="button" name="upload">Загрузить свой шрифт</button>
            <span className="upload-hint">Требуется регистрация</span>
          </p>
        </form>
      </div>
    );
};

export default FontSelector;