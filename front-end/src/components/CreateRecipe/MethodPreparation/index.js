import React, { useState, useMemo } from "react";
import { debounce } from "lodash";

import {
  useMethodPreparation,
  useLoading,
} from "./../../../context/Recipes/Create";

import ImageDelete from "./../../../assets/profile/close_red.png";
import { Section, FormMethodPreparation } from "./styles";

export default function MethodPreparation() {
  const [topics, setTopics] = useState([]);
  const [textTopic, setTextTopic] = useState("");

  const { setMethodPreparation } = useMethodPreparation();
  const { loading } = useLoading();

  const capitalizeFirstLetter = (string) =>
    string.charAt(0).toUpperCase() + string.slice(1);

  const handleTextTopic = (value) => setTextTopic(value);

  const handleInsertTopic = (value) => {
    setTextTopic("");
    const text = capitalizeFirstLetter(value);
    setTopics((prevMethod) => [...prevMethod, { text }]);
  };

  const handleDeleteTopic = (id) => {
    setTopics(topics.filter((method, index) => id !== index));
  };

  useMemo(
    debounce(() => {
      const handleMethodPreparation = (topics) => setMethodPreparation(topics);

      if (loading && topics) handleMethodPreparation(topics);
    }, 200),
    [loading]
  );

  return (
    <Section>
      <div className="title">
        <h3>Modo de Preparo</h3>
      </div>

      <ul>
        {topics.map(({ text }, index) => (
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
