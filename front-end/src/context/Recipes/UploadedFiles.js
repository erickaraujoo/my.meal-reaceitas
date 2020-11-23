import React, { useState, useContext, createContext } from "react";

const UploadedFilesContext = createContext();

export default function UploadedFilesProvider({ children }) {
  const [uploadedFiles, setUploadedFiles] = useState([]);

  return (
    <UploadedFilesContext.Provider
      value={{
        uploadedFiles,
        setUploadedFiles,
      }}
    >
      {children}
    </UploadedFilesContext.Provider>
  );
}

export const useUpload = () => {
  const context = useContext(UploadedFilesContext);
  const { uploadedFiles, setUploadedFiles } = context;
  return { uploadedFiles, setUploadedFiles };
};
