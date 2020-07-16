import React, { useState, useContext, createContext, useMemo } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import { createRecipe } from "./../../store/modules/createRecipe/actions";
import { createImage } from "./../../store/modules/createImages/actions";

const CreateRecipeContext = createContext();

export default function CreateRecipeProvider({ children }) {
  const { id } = useParams();
  const [userId] = useState(id);
  const [previewImages, setPreviewImages] = useState([]);
  const [uploadedFiles, setUploadedFiles] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [observation, setObservation] = useState("");
  const [revenue, setRevenue] = useState("");
  const [preparationTime, setPreparationTime] = useState("");
  const [methodPreparation, setMethodPreparation] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [loading, setLoading] = useState("");

  const dispatch = useDispatch();

  useMemo(() => {
    if (uploadedFiles)
      dispatch(
        createImage({
          uploadedFiles,
        })
      );
  }, [dispatch, uploadedFiles]);

  useMemo(() => {
    if (loading) {
      let creationData = new Date();
      dispatch(
        createRecipe({
          name,
          description,
          observation,
          preparationTime,
          revenue,
          methodPreparation,
          ingredients,
          creationData,
          userId,
        })
      );
    }
  }, [
    userId,
    description,
    observation,
    preparationTime,
    revenue,
    dispatch,
    ingredients,
    loading,
    methodPreparation,
    name,
  ]);

  return (
    <CreateRecipeContext.Provider
      value={{
        userId,
        ingredients,
        setIngredients,
        name,
        setName,
        description,
        setDescription,
        revenue,
        setRevenue,
        preparationTime,
        setPreparationTime,
        observation,
        setObservation,
        methodPreparation,
        setMethodPreparation,
        uploadedFiles,
        setUploadedFiles,
        loading,
        setLoading,
        previewImages,
        setPreviewImages,
      }}
    >
      {children}
    </CreateRecipeContext.Provider>
  );
}

export function useCreate() {
  const context = useContext(CreateRecipeContext);
  const {
    setLoading,
    previewImages,
    preparationTime,
    revenue,
    ingredients,
    methodPreparation,
    name,
    description,
  } = context;
  return {
    setLoading,
    previewImages,
    ingredients,
    preparationTime,
    revenue,
    methodPreparation,
    name,
    description,
  };
}

export function useLoading() {
  const context = useContext(CreateRecipeContext);
  const { loading, setLoading } = context;
  return { loading, setLoading };
}

export function useName() {
  const context = useContext(CreateRecipeContext);
  const { name, setName } = context;
  return { name, setName };
}

export function useDescription() {
  const context = useContext(CreateRecipeContext);
  const { description, setDescription } = context;
  return { description, setDescription };
}

export function useRevenue() {
  const context = useContext(CreateRecipeContext);
  const { revenue, setRevenue } = context;
  return { revenue, setRevenue };
}

export function usePreparationTime() {
  const context = useContext(CreateRecipeContext);
  const { preparationTime, setPreparationTime } = context;
  return { preparationTime, setPreparationTime };
}

export function useObservation() {
  const context = useContext(CreateRecipeContext);
  const { observation, setObservation } = context;
  return { observation, setObservation };
}

export function usePreview() {
  const context = useContext(CreateRecipeContext);
  const { previewImages, setPreviewImages } = context;
  return { previewImages, setPreviewImages };
}

export function useUpload() {
  const context = useContext(CreateRecipeContext);
  const { uploadedFiles, setUploadedFiles } = context;
  return { uploadedFiles, setUploadedFiles };
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
