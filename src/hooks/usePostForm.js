import { useState, useEffect } from "react";
import { db, auth } from "../firebase/firebase";
import {
  addDoc,
  updateDoc,
  doc,
  collection,
  serverTimestamp,
} from "firebase/firestore";
import useUploadImage from "./useUploadImage";
import toast from "react-hot-toast";

const usePostForm = (editPost = null, clearEditPost = () => {}) => {
  const [text, setText] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  const {
    uploadImage,
    loading: uploading,
    error: uploadError,
  } = useUploadImage();

  useEffect(() => {
    if (editPost) {
      setText(editPost.text || "");
    }
  }, [editPost]);

  const handleSubmit = async () => {
    if (!text.trim() && !imageFile && !editPost?.imageUrl) {
      toast.error("Please write something or upload an image!");
      return;
    }

    const user = auth.currentUser;
    if (!user) {
      toast.error("You need to log in first!");
      return;
    }

    try {
      setSubmitting(true);
      let imageUrl = editPost?.imageUrl || "";

      if (imageFile) {
        imageUrl = await uploadImage(imageFile);
        if (!imageUrl) throw new Error("Image upload failed");
      }

      if (editPost) {
        const postRef = doc(db, "posts", editPost.id);
        await updateDoc(postRef, {
          text,
          imageUrl,
          updatedAt: serverTimestamp(),
        });
        toast.success("Post updated successfully");
    clearEditPost?.();

      } else {
        await addDoc(collection(db, "posts"), {
          text,
          imageUrl,
          userId: user.uid,
          userName: user.displayName || "Guest",
          createdAt: serverTimestamp(),
        });
        toast.success("Post published successfully");
      }

      setText("");
      setImageFile(null);
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong while submitting");
    } finally {
      setSubmitting(false);
    }
  };

  return {
    text,
    setText,
    imageFile,
    setImageFile,
    handleSubmit,
    submitting,
    uploading,
    uploadError,
  };
};

export default usePostForm;
