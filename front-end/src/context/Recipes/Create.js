import React, { useState, useContext, createContext, useMemo } from "react";
import { useDispatch } from "react-redux";
import { debounce } from "lodash";

import { createNewRecipe } from "./../../store/modules/createRecipe/actions";

const CreateRecipeContext = createContext();

export default function CreateRecipeProvider({ children }) {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [generalData, setGeneralData] = useState([]);
  const [methodPreparation, setMethodPreparation] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  useMemo(
    debounce(() => {
      if (
        generalData.length &&
        methodPreparation.length &&
        ingredients.length
      )
        dispatch(
          createNewRecipe({
            generalData,
            ingredients,
            methodPreparation,
          })
        );
    }, 400),
    [generalData, ingredients, methodPreparation, uploadedFiles]
  );

  return (
    <CreateRecipeContext.Provider
      value={{
        ingredients,
        setIngredients,
        generalData,
        setGeneralData,
        methodPreparation,
        setMethodPreparation,
        uploadedFiles,
        setUploadedFiles,
        loading,
        setLoading,
      }}
    >
      {children}
    </CreateRecipeContext.Provider>
  );
}

export function useGeneralData() {
  const context = useContext(CreateRecipeContext);
  const { generalData, setGeneralData } = context;
  return { generalData, setGeneralData };
}

export function useMethodPreparation() {
  const context = useContext(CreateRecipeContext);
  const { methodPreparation, setMethodPreparation } = context;
  return { methodPreparation, setMethodPreparation };
}

export function useIngredients() {
  const context = useContext(CreateRecipeContext);
  const { ingredients, setIngredients } = context;
  return { ingredients, setIngredients };
}

export function useUpload() {
  const context = useContext(CreateRecipeContext);
  const { uploadedFiles, setUploadedFiles } = context;
  return { uploadedFiles, setUploadedFiles };
}

export function useLoading() {
  const context = useContext(CreateRecipeContext);
  const { loading, setLoading } = context;
  return { loading, setLoading };
}