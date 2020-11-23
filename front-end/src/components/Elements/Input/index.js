import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { InputSearch, InputBorderLeft } from "./styles";

import ImageSearch from "./../../../assets/search.png";

export const InputSearchRecipe = ({ ...props }) => {
  const { width, height, type, placeholder } = props;

  const [textSearch, setTextSearch] = useState("");

  const history = useHistory();

  const handleSearchRecipes = () => {
    history.push(`?search=${textSearch}`);
    setTextSearch("");
  };

  const handleTextSearch = (value) => {
    setTextSearch(value);
  };

  return (
    <InputSearch width={width} height={height}>
      <input
        type={type}
        placeholder={placeholder}
        value={textSearch}
        onChange={(e) => handleTextSearch(e.target.value)}
        onKeyPress={(e) => (e.which === 13 ? handleSearchRecipes() : "")}
      />
      <button onClick={() => handleSearchRecipes()}>
        <img src={ImageSearch} alt="Pesquisar" />
      </button>
    </InputSearch>
  );
};

export const InputWithBorderLeft = ({ ...props }) => {
  return (
    <InputBorderLeft
      type={props.type}
      name={props.name}
      autoComplete={props.autoComplete}
      width={props.width}
      height={props.height}
      background={props.background}
      borderLeft={props.borderLeft}
      placeholder={props.placeholder}
      ref={props.forwardRef}
      defaultValue={''}
      onChange={props.onChange}
    />
  );
};
