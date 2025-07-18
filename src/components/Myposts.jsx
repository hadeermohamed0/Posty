import React from "react";
import { XMarkIcon, PlusIcon } from "@heroicons/react/24/outline";
import PostCard from "../components/PostCard";
import PostForm from "../components/PostForm";
import { usePost } from "../context/PostContext";
import { useFetchPosts } from "../hooks/useFetchPosts";
import { getAuth } from "firebase/auth";
import { useAuth } from "../context/AuthContext";

function MyPosts() {
  const { posts, handleDelete, fetchPosts } = useFetchPosts(null, () => {});

  const { currentUser } = useAuth();
  const myPosts = posts.filter((post) => post.userId === currentUser.uid);

  return (
    <>
      {myPosts.map((post) => (
        <PostCard
          key={post.id}
          post={post}
          onDelete={() => handleDelete(post.id)}
        />
      ))}
    </>
  );
}

export default MyPosts;
