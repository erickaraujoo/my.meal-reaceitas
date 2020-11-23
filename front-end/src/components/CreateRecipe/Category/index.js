import React, { useState } from "react";
import StatefulMultiSelect from "@khanacademy/react-multi-select";

import { Section } from "./styles";
import { useCategory } from "../../../context/Recipes/Create";

export default function Category() {
  const { category, setCategory } = useCategory();
  const handleSelected = (value) => setCategory(value);

  const options = [
    { label: "Bolos", value: 1 },
    { label: "Tortas", value: 2 },
    { label: "Doces", value: 3 },
    { label: "Carnes", value: 4 },
    { label: "Peixes", value: 5 },
    { label: "Aves", value: 6 },
    { label: "Frutos do Mar", value: 7 },
    { label: "Saladas", value: 8 },
    { label: "Sopas", value: 9 },
    { label: "Massas", value: 10 },
    { label: "Sobremesas", value: 11 },
    { label: "Lanches", value: 12 },
    { label: "Light", value: 13 },
    { label: "Grãos", value: 14 },
  ];

  const selectedCategory = category.map((id) =>
    options.filter(({ value }) => value === id)
  );

  return (
    <Section>
      <div className="title">
        <h3>Categorias da sua receita</h3>
      </div>

      <div className="category">
        <div className="select_category">
          <StatefulMultiSelect
            options={options}
            selected={category}
            onSelectedChanged={(value) => handleSelected(value)}
            overrideStrings={{
              selectSomeItems: "Selecione uma ou mais categoria...",
              allItemsAreSelected: "Todas as categorias foram seleciondas",
              selectAll: "Selecionar todas",
              search: "Pesquisar...",
            }}
          />
        </div>
        <div className="list_category">
          <p className="title">Categorias que sua receita pertence:</p>
          <ul>
            {selectedCategory.map((category) => (
              <li>
                <p>{category[0].label}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
