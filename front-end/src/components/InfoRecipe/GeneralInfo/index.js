import React from 'react'

import { Section } from './styles';
import { useSelector } from 'react-redux';

import ImageTime from "./../../../assets/info_recipe/time.png";
import ImagePortion from "./../../../assets/info_recipe/portion.png";
import ImageViews from "./../../../assets/info_recipe/views.png";

export default function GeneralInfo() {
  // const recipe = useSelector(state => console.log(state));
  // console.log(recipe);
  return(
    <Section>
      <h2>Strogonoff de Carne</h2>
      <div className="info_recipe">
        <div className="time">
          <img src={ImageTime} alt=""/>
          <p>40 mins</p>
        </div>
        <div className="portion">
          <img src={ImagePortion} alt=""/>
          <p>12 Porções</p>
        </div>
        <div className="views">
          <img src={ImageViews} alt=""/>
          <p>654 acessos</p>
        </div>
      </div>
    </Section>
  );
}