import React, { useState } from "react";

import { useSearch } from '../../../context/Recipes/Filters';

import { InputSearch } from './styles';

import ImageSearch from "./../../../assets/search.png";

export default function InputSearchRecipe({ ...props }) {
  const { width, height, type, placeholder } = props;

  const { setSearch } = useSearch();

  const [value, setValue] = useState('');

  const handleTextValue = value => {
    setValue(value);
  };

  const handleTextSearch = value => {
    setSearch(value);
    setValue('');
  };

  // const [textSearch, setTextSearch] = useState("");

  // const history = useHistory();

  // const handleSearchRecipes = () => {
  //   history.push(`?search=${textSearch}`);
  //   setTextSearch("");
  // }

  // const handleTextSearch = (value) => {
  //   setTextSearch(value);
  // };

  return (
    <InputSearch width={width} height={height} >
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={e => handleTextValue(e.target.value)}
        // onKeyPress={(e) => (e.which === 13 ? handleSearchRecipes() : "")}
      />
      <button onClick={() => handleTextSearch(value)}>
        <img src={ImageSearch} alt="Pesquisar" />
      </button>
    </InputSearch>
  );
};
