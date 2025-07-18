import { createContext, useContext, useState, useEffect } from "react";
import { getDocs, collection, query, orderBy } from "firebase/firestore";
import { db } from "../firebase/firebase";

const PostContext = createContext();

export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editPost, setEditPost] = useState(null);

  const toggleForm = () => {
    setShowForm((prev) => !prev);
    setEditPost(null);
  };

  const fetchPosts = async () => {
    setLoading(true);
    try {
      const postsRef = collection(db, "posts");
      const q = query(postsRef, orderBy("createdAt", "desc"));
      const snapshot = await getDocs(q);
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setPosts(data);
    } catch (error) {
      console.error("Fetch posts error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);
  const clearEditPost = () => setEditPost(null);
  const handleEdit = (post) => {
    toggleForm();
    setEditPost(post);
  };

  return (
    <PostContext.Provider
      value={{
        posts,
        loading,
        fetchPosts,
        showForm,
        toggleForm,
        editPost,
        setEditPost,
        clearEditPost,
        handleEdit,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};

export const usePost = () => useContext(PostContext);
