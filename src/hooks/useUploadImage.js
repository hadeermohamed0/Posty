import { useState } from "react";

const useUploadImage = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const uploadImage = async (file) => {
    setLoading(true);
    setError(null);

    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "unsigned_preset"); 
    data.append("cloud_name", "dwini84hx"); 

    try {
      const res = await fetch("https://api.cloudinary.com/v1_1/dwini84hx/image/upload", {
        method: "POST",
        body: data,
      });

      const result = await res.json();

      if (result.secure_url) {
        return result.secure_url;
      } else {
        throw new Error("Upload failed");
      }
    } catch (err) {
      setError(err.message || "Upload error");
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { uploadImage, loading, error };
};

export default useUploadImage;
