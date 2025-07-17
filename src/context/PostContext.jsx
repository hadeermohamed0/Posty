import { createContext, useContext, useState } from "react";
import { useFetchPosts } from "../hooks/useFetchPosts";

const PostContext = createContext();

export const PostProvider = ({ children }) => {
  const [showForm, setShowForm] = useState(false);
  const [editPost, setEditPost] = useState(null);
  const { fetchPosts } = useFetchPosts();
  const clearEditPost = () => {
    setEditPost(null);
    setShowForm(null);
  };

  const toggleForm = () => setShowForm((prev) => !prev);

  const handleEdit = (post) => {
    setShowForm(true);
    setEditPost(post);
  };

  return (
    <PostContext.Provider
      value={{
        showForm,
        toggleForm,
        handleEdit,
        clearEditPost,
        editPost,
        refetch: fetchPosts,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};

export const usePost = () => useContext(PostContext);
