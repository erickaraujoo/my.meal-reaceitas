import { uniqueId } from "lodash";
import filesize from "filesize";
import { toBase64 } from "../base64";

export const uploadImagesRecipe = async (files) => {
  const uploadedFiles = files.map((file) => ({
    id: uniqueId(),
    name: file.name,
    filename:
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15),
    readableSize: filesize(file.size),
    preview: URL.createObjectURL(file),
    progress: 0,
    uploaded: false,
    error: false,
    url: null,
  }));

  let fileToBase64 = await toBase64(files[files.length - 1]).catch((e) =>
    Error(e)
  );
  fileToBase64 = fileToBase64.replace("data:image/jpeg;base64,", "");
  fileToBase64 = fileToBase64.replace("data:image/jpg;base64,", "");
  fileToBase64 = fileToBase64.replace("data:image/png;base64,", "");

  const newFile = {
    filename:
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15),
    mimetype: files[files.length - 1].type,
    base64: fileToBase64,
  };

  return { uploadedFiles, newFile };
};
