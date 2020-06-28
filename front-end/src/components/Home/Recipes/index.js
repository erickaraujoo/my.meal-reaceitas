import React from 'react';

import { Recipes } from './styles';

export default function ListRecipes() {
  return(
    <Recipes>
      <h1>Nossas receitas</h1>

      <div className="buttons">
        <button>Todas as Receitas</button>
        <button>Lanches</button>
        <button>Bebidas</button>
        <button>Bolos</button>
        <button>Massas</button>
        <button>Light</button>
      </div>
    </Recipes>
  );
};