import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import { MdCheckCircle, MdError, MdLink } from "react-icons/md";

import "react-circular-progressbar/dist/styles.css";

import { useUpload } from "./../../../context/Recipes/Create";

import { Container, FileInfo, Preview } from "./styles";

export default function FileList() {
  const { uploadedFiles } = useUpload();

  if (!uploadedFiles.length) return null;

  return (
    <Container>
      {uploadedFiles.map((uploadedFile) => (
        <li key={uploadedFile.id}>
          <FileInfo>
            <Preview src={uploadedFile.preview} />
            <div>
              <strong>{uploadedFile.name}</strong>
              <span>
                {uploadedFile.readableSize}
                {!!uploadedFile.url && (
                  <button onClick={() => {}}>Excluir</button>
                )}
              </span>
            </div>
          </FileInfo>

          <div className="options">
            {!uploadedFile.uploaded && !uploadedFile.error && (
              <CircularProgressbar
                styles={{
                  root: { width: 24 },
                  path: { stroke: "#7159c1" },
                }}
                strokeWidth={10}
                value={uploadedFile.progress}
                text={"66%"}
              />
            )}

            {uploadedFile.url && (
              <a
                href="https://blog.rocketseat.com.br/content/images/2019/05/profile.png"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MdLink style={{ marginRight: 8 }} size={24} color="#222" />
              </a>
            )}

            {uploadedFile.uploaded && (
              <MdCheckCircle size={24} color="#78e5d5" />
            )}
            {uploadedFile.error && <MdError size={24} color="e57878" />}
          </div>
        </li>
      ))}
    </Container>
  );
}
