import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  query,
  orderBy,
  doc,
  deleteDoc,
  addDoc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import toast from "react-hot-toast";

import { db } from "../firebase/firebase";
import useUploadImage from "./useUploadImage";
import { usePost } from "../context/PostContext"; 
import { getAuth } from "firebase/auth";

const useFetchPosts = () => {
  const { editPost, clearEditPost, toggleForm, fetchPosts, posts } = usePost();  

  const [loading, setLoading] = useState(true);
  const [text, setText] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [userName, setuserName] = useState(false);



  const {
    uploadImage,
    loading: uploading,
    error: uploadError,
  } = useUploadImage();

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "posts", id));
      await fetchPosts();
      toast.success("Post deleted successfully");
    } catch (err) {
      toast.error("Failed to delete post");
      console.error("Error deleting post:", err);
    }
  };

  const handleSubmit = async (userId,userName) => {
   
    setSubmitting(true);
    try {
      let imageUrl = "";

      if (imageFile) {
        const uploadedUrl = await uploadImage(imageFile);
        if (!uploadedUrl) throw new Error("Image upload failed");
        imageUrl = uploadedUrl;
      }

      if (editPost) {
        const postRef = doc(db, "posts", editPost.id);
        await updateDoc(postRef, {
          text,
          imageUrl: imageUrl || editPost.imageUrl || "",
          updatedAt: serverTimestamp(),
        });
        toast.success("Post updated successfully");
        toggleForm();
        await fetchPosts();
        clearEditPost();
      } else {
        if (!userId) throw new Error("Missing userId");
        await addDoc(collection(db, "posts"), {
          text,
          imageUrl,
          createdAt: serverTimestamp(),
          userId,
          userName,
        });
        toggleForm();
        await fetchPosts();
        clearEditPost();
        toast.success("Post added successfully");
      }

      setText("");
      setImageFile(null);
    } catch (err) {
      console.error("Submit Error:", err);
      toast.error("Failed to submit post");
    } finally {
      setSubmitting(false);
    }
  };
    
  

  useEffect(() => {
    fetchPosts();
  }, []);

  return {
    posts,
    loading,
    handleDelete,
    fetchPosts,
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

export { useFetchPosts };
