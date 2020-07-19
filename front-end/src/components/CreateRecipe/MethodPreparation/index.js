import React, { useState } from "react";

import { useMethodPreparation } from "./../../../context/Recipes/Create";
import { Section, FormMethodPreparation } from "./styles";

import ImageDelete from "./../../../assets/profile/close_red.png";

export default function MethodPreparation() {
  const [textTopic, setTextTopic] = useState("");
  const { methodPreparation, setMethodPreparation } = useMethodPreparation();

  const capitalizeFirstLetter = (string) =>
    string.charAt(0).toUpperCase() + string.slice(1);

  const handleTextTopic = (value) => setTextTopic(value);

  const handleInsertTopic = (value) => {
    setTextTopic("");
    const text = capitalizeFirstLetter(value);
    setMethodPreparation((prevMethod) => [...prevMethod, { text }]);
  };

  const handleDeleteTopic = (id) => {
    setMethodPreparation(methodPreparation.filter((method, index) => id !== index));
  };
  
  return (
    <Section>
      <div className="title">
        <h3>Modo de Preparo</h3>
      </div>

      <ul>
        {methodPreparation.map(({ text }, index) => (
          <li key={index}>
            <div className="text_method">
              <p>
                <strong>{index + 1}. </strong>
                {text}
              </p>
            </div>
            <div className="options">
              <img
                src={ImageDelete}
                alt="delete"
                onClick={() => handleDeleteTopic(index)}
                title="Deletar"
              />
            </div>
          </li>
        ))}
      </ul>
      <FormMethodPreparation>
        <input
          type="text"
          placeholder="ex: Em um liquidificador, adicione os ovos e bata com a massa..."
          value={textTopic}
          onChange={(e) => handleTextTopic(e.target.value)}
          onKeyPress={(e) =>
            e.which === 13 && textTopic
              ? handleInsertTopic(e.target.value)
              : null
          }
        />
        <button className="add" onClick={() => textTopic && handleInsertTopic(textTopic)}>
          Adicionar
        </button>
      </FormMethodPreparation>
    </Section>
  );
}
