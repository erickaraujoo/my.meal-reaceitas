import React from "react";
import { uniqueId } from "lodash";
import filesize from "filesize";

import { DropContainer, UploadMessage } from "./styles";

import { useUpload, usePreview } from "../../../../context/Recipes/Create";

import Dropzone from "react-dropzone";

export default function Upload() {
  const { setUploadedFiles } = useUpload();
  const { setPreviewImages } = usePreview();

  const handleUploadedFiles = async files => {
    const toBase64 = file => new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
  });
    const uploadedFiles = files.map(file => ({
      id: uniqueId(),
      name: file.name,
      readableSize: filesize(file.size),
      preview: URL.createObjectURL(file),
      progress: 0,
      uploaded: false,
      error: false,
      url: null,
    }));

    const fileToBase64 = await toBase64(files[files.length - 1]).catch(e => Error(e));

    const newFile = {
      filename: files[files.length - 1].name,
      mimetype: files[files.length - 1].type,
      base64: fileToBase64,
    }   

    setUploadedFiles({ ...newFile });
    setPreviewImages(prevImage => [ ...prevImage, ...uploadedFiles ]);
  }

  const renderDragMessage = (isDragActive, isDragReject) => {
    if (!isDragActive) {
      return <UploadMessage>Clique para selecionar ou arraste as imagens aqui</UploadMessage>;
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
