import React from "react";
import Dropzone from "react-dropzone";

import { useUpload, usePreview } from "../../../../context/Recipes/Create";
import { uploadImagesRecipe } from "../../../../utils/upload/uploadImagesRecipe";
import { DropContainer, UploadMessage } from "./styles";

export default function Upload() {
  const { setUploadedFiles } = useUpload();
  const { setPreviewImages } = usePreview();

  const handleUploadedFiles = async (files) => {
    const { previewImages, uploadedFiles } = await uploadImagesRecipe(files);
    setUploadedFiles([...uploadedFiles]);
    setPreviewImages((prevImage) => [...prevImage, ...previewImages]);
  };

  const renderDragMessage = (isDragActive, isDragReject) => {
    if (!isDragActive) {
      return (
        <UploadMessage>
          Clique para selecionar ou arraste as imagens aqui
        </UploadMessage>
      );
    }

    if (isDragReject) {
      return <UploadMessage type="error">Arquivo não suportado</UploadMessage>;
    }

    return (
      <UploadMessage type="success">Solte os arquivos aqui!</UploadMessage>
    );
  };

  return (
    <Dropzone accept="image/*" onDropAccepted={handleUploadedFiles}>
      {({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
        <DropContainer
          {...getRootProps()}
          isDragActive={isDragActive}
          isDragReject={isDragReject}
        >
          <input {...getInputProps()} />

          {renderDragMessage(isDragActive, isDragReject)}
        </DropContainer>
      )}
    </Dropzone>
  );
}
