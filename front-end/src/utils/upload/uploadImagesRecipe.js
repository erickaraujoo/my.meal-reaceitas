import { useParams } from "react-router-dom";
import { uniqueId } from "lodash";
import filesize from "filesize";
import { toBase64 } from "../base64";

export const uploadImagesRecipe = async (files, userId) => {
  const preview = files.map((file) => ({
    id: uniqueId(),
    name: file.name,
    filename:
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15),
    readableSize: filesize(file.size),
    preview: URL.createObjectURL(file),
    uploaded: false,
    url: null,
  }));

  // let fileToBase64 = await toBase64(files[files.length - 1]).catch((e) =>
  //   Error(e)
  // );
  // fileToBase64 = fileToBase64.replace("data:image/jpeg;base64,", "");
  // fileToBase64 = fileToBase64.replace("data:image/jpg;base64,", "");
  // fileToBase64 = fileToBase64.replace("data:image/png;base64,", "");

  // const newFile = {
  //   filename:
  //     Math.random().toString(36).substring(2, 15) +
  //     Math.random().toString(36).substring(2, 15),
  //   mimetype: files[files.length - 1].type,
  //   base64: fileToBase64,
  // };

  const previewImages = await Promise.all(preview);

  const upload = files.map(async (file) => ({
    filename:
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15),
    mimetype: file.type,
    base64: await toBase64(file),
    idUsuario: userId,
  }));

  const uploadedFiles = await Promise.all(upload);

  return { previewImages, uploadedFiles };
};
