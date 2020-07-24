import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteRecipe } from '../../../store/modules/recipes/actions';
import { CircleSpinner } from 'react-spinners-kit';

import { Section, SectionModalIngredients, DivModal, ContainerFlexButtons } from "./styles";
import { useIngredients } from "../../../context/Recipes/Filters";
import { useDisplay } from "../../../context/Modal/ModalRecipes";
import { useLoading } from "../../../context/Recipes/Create";

import ImageClose from "../../../assets/recipes/close.png";

export const ModalIngredients = () => {
  const { onScreen, setOnScreen } = useDisplay();
  const [totalIngredients, setTotalIngredients] = useState([]);
  const [ingredient, setIngredient] = useState("");
  const { setIngredients } = useIngredients();

  const handleIngredients = (name) => {
    setTotalIngredients((prevIngredient) => [...prevIngredient, { name }]);
    setIngredient("");
  };

  const handleIngredient = (value) => setIngredient(value);

  const handleScreen = (value) => setOnScreen(value);

  const filterIngredients = (value, id) => {
    return setTotalIngredients(
      totalIngredients.filter(({ name }, index) => index !== id)
    );
  };

  const handleContextIngredients = (ingredients) => {
    setIngredients(ingredients);
    handleScreen(false);
  };

  if (onScreen)
    return (
      <SectionModalIngredients>
        <div className="modal_ingredients">
          <div className="title">
            <h2>Ingredientes</h2>
            <img src={ImageClose} alt="" onClick={() => handleScreen(false)} />
          </div>
          <div className="insert_ingredient">
            <p>Nome do Ingrediente</p>
            <div className="form">
              <input
                type="text"
                placeholder="Exemplo: 200g de farinha de trigo"
                value={ingredient}
                onChange={(e) => handleIngredient(e.target.value)}
                onKeyPress={(e) =>
                  e.which === 13 && ingredient
                    ? handleIngredients(e.target.value)
                    : null
                }
              />
              <button
                onClick={() =>
                  ingredient ? handleIngredients(ingredient) : null
                }
              >
                Adicionar
              </button>
            </div>
          </div>
          <div className="ingredients">
            {totalIngredients.map(({ name }, index) => (
              <div key={index}>
                <p>{name}</p>
                <img
                  src={ImageClose}
                  alt="Del"
                  title="Deletar ingrediente"
                  onClick={() => filterIngredients(name, index)}
                />
              </div>
            ))}
          </div>
          <div className="send_recipes">
            <button onClick={() => handleContextIngredients(totalIngredients)}>
              Procurar
            </button>
          </div>
        </div>
      </SectionModalIngredients>
    );
  else return null;
};

export const ModalNewRegister = ({ success, onClick, ...props }) => {
  if (success)
    return (
      <Section>
        <DivModal {...props}>
          <h2>{props.titleModal}</h2>
          <p>{props.textModal}</p>
          <button onClick={onClick}>{props.textButton}</button>
        </DivModal>
      </Section>
    );

  return null;
};

export const ModalSuccess = ({ success, ...props }) => {
  const { id } = useParams();
  if (success)
    return (
      <Section>
        <DivModal {...props}>
          <h2>{props.titleModal}</h2>
          <p>{props.textModal}</p>
          <Link to={{ pathname: `/perfil/${id}` }}>
            <button>{props.textButton}</button>
          </Link>
        </DivModal>
      </Section>
    );

  return null;
};

export const ModalError = ({ createRecipe, error, ...props }) => {
  const [hasError, setHasError] = useState(error);
  const { setLoading } = useLoading();

  useEffect(() => setHasError(error), [error]);

  const handleModal = (boolean) => {
    if (createRecipe) handleLoading(false);
    setHasError(boolean);
  };
  const handleLoading = (boolean) => setLoading(boolean);

  if (hasError)
    return (
      <Section>
        <DivModal {...props}>
          <h2 className="title_error">{props.titleModal}</h2>
          <p>{props.textModal}</p>
          <button className="close_modal" onClick={() => handleModal(false)}>
            {props.textButton}
          </button>
        </DivModal>
      </Section>
    );

  return null;
};

export const ModalDeleteRecipe = ({ visible, id, ...props }) => {
  const dispatch = useDispatch();
  const recipe = useSelector((state) => state.recipes);
  console.log(recipe);
  const handleRecipe = () => {
    dispatch(
      deleteRecipe({
        id,
      })
    );

    if(recipe.success) props.onClick()
  };

  if (visible)
    return (
      <Section>
        <DivModal {...props} onClick={() => {}}>
          <h2 className="title_error">{props.titleModal}</h2>
          <p>{props.textModal}</p>
          <ContainerFlexButtons>
            <button className="cancel" onClick={props.onClick}>
              Cancelar
            </button>
            <button className="warning loading" onClick={() => handleRecipe()}>
              {props.textButton}
              {recipe.loading && (
                <CircleSpinner size={20} color={"#fff"} loading={true} />
              )}
            </button>
          </ContainerFlexButtons>
        </DivModal>
      </Section>
    );

  return null;
};
