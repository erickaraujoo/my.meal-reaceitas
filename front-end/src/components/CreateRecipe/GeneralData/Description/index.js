import React, { useState, useMemo } from "react";
import { debounce } from 'lodash';

import { useGeneralData, useLoading } from "./../../../../context/Recipes/Create";

export default function Description() {
  const [description, setDescription] = useState("");
  const handleDescription = (value) => setDescription(value);

  const { setGeneralData } = useGeneralData();
  const { loading } = useLoading();

  useMemo(
    debounce(() => {
      const handleGeneralData = (description) =>
        setGeneralData(prev => [ ...prev, { description }]);

      if (loading) handleGeneralData(description);
    }, 100),
    [description, loading, setGeneralData]
  );

  return (
    <textarea
      placeholder="Digite uma descrição"
      value={description}
      onChange={(e) => handleDescription(e.target.value)}
    ></textarea>
  );
}
