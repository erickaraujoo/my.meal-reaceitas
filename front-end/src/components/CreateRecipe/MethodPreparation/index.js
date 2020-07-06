import React, { useState, useMemo } from "react";
import { debounce } from "lodash";

import {
  useMethodPreparation,
  useLoading,
} from "./../../../context/Recipes/Create";

import ImageDelete from "./../../../assets/profile/close_red.png";
import ImageAddTopic from "./../../../assets/recipes/add.png";

import { Section, InsertTopic, FormMethodPreparation } from "./styles";

export default function MethodPreparation() {
  const [onView, setOnView] = useState(false);
  const [topics, setTopics] = useState([]);
  const [textTopic, setTextTopic] = useState("");

  const { setMethodPreparation } = useMethodPreparation();
  const { loading } = useLoading();

  const capitalizeFirstLetter = (string) =>
    string.charAt(0).toUpperCase() + string.slice(1);

  const handleTextTopic = (value) => setTextTopic(value);
  const handleView = (boolean) => setOnView(boolean);

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

      if (loading) handleMethodPreparation(topics);
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

      <InsertTopic view={onView} onClick={() => handleView(true)}>
        <p>Adicionar Tópico...</p>
        <img src={ImageAddTopic} alt="Add Topic" />
      </InsertTopic>

      <FormMethodPreparation view={onView}>
        <input
          type="text"
          placeholder="ex: Em um liquidificador, adicione os ovos e bata com a massa..."
          value={textTopic}
          onChange={(e) => handleTextTopic(e.target.value)}
        />
        <button className="add" onClick={() => handleInsertTopic(textTopic)}>
          Adicionar
        </button>
        <button className="cancel" onClick={() => handleView(false)}>
          Cancelar
        </button>
      </FormMethodPreparation>
    </Section>
  );
}
