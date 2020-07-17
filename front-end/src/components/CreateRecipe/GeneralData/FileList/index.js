import React from "react";
import { useSelector } from "react-redux";
import { MdCheckCircle, MdError, MdLink } from "react-icons/md";
import { PulseSpinner } from "react-spinners-kit";
import { usePreview, useCreatedImages } from "../../../../context/Recipes/Create";
import { Container, FileInfo } from "./styles";

import "react-circular-progressbar/dist/styles.css";

export default function FileList() {
  const { previewImages } = usePreview();
  const { createdImages } = useCreatedImages();

  previewImages.forEach((previewImage) => {
    if (createdImages.success && !previewImage.uploaded) previewImage.uploaded = true;
  });

  return (
    <Container>
      {previewImages.map((uploadedFile) => (
        <li key={uploadedFile.id}>
          <FileInfo>
            <img src={uploadedFile.preview} alt="preview" />
            {/* <Preview background={uploadedFile.preview} /> */}
            <div>
              <strong>{uploadedFile.name}</strong>
              <span>
                {uploadedFile.readableSize}
                {uploadedFile.uploaded && (
                  <button onClick={() => {}}>Excluir</button>
                )}
              </span>
            </div>
          </FileInfo>

          <div className="options">
            {createdImages.loading && !uploadedFile.uploaded && (
              <PulseSpinner size={25} color={"#254B6E"} loading={true} />
            )}

            {uploadedFile.uploaded && (
              <a
                href={uploadedFile.preview}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MdLink style={{ marginRight: 8 }} size={24} color="#222" />
              </a>
            )}

            {uploadedFile.uploaded && (
              <MdCheckCircle size={24} color="#78e5d5" />
            )}
            {createdImages.error && !uploadedFile.uploaded && (
              <MdError size={24} color="e57878" />
            )}
          </div>
        </li>
      ))}
    </Container>
  );
}
