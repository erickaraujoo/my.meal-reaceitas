export const toBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      let fileToBase64 = reader.result;
      fileToBase64 = fileToBase64.replace("data:image/jpeg;base64,", "");
      fileToBase64 = fileToBase64.replace("data:image/jpg;base64,", "");
      fileToBase64 = fileToBase64.replace("data:image/png;base64,", "");
      resolve(fileToBase64);
    };
    reader.onerror = (error) => reject(error);
  });
