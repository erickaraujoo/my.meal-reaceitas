import React from "react";
import { uniqueId } from "lodash";
import filesize from "filesize";

import { DropContainer, UploadMessage } from "./styles";

import { useUpload } from "./../../../context/Recipes/Create";

import Dropzone from "react-dropzone";

export default function Upload() {
  const { setUploadedFiles } = useUpload();

  const handleUploadedFiles = files => {
    const uploadedFiles = files.map(file => ({
      file,
      id: uniqueId(),
      name: file.name,
      readableSize: filesize(file.size),
      preview: URL.createObjectURL(file),
      progress: 0,
      uploaded: false,
      error: false,
      url: null,
    }));

    setUploadedFiles(prevUpload => [ ...prevUpload, ...uploadedFiles ]);
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
