import { XMarkIcon, PlusIcon } from "@heroicons/react/24/outline";
import { useEffect, useRef } from "react";
import PostCard from "../components/PostCard";
import PostForm from "../components/PostForm";
import { usePost } from "../context/PostContext";
import { useFetchPosts } from "../hooks/useFetchPosts";
import { getAuth } from "firebase/auth";

export default function Allpost() {

  const { posts,  handleDelete } = useFetchPosts();
  
  return (
    <>
      {posts.map((post) => (
        <PostCard
          key={post.id}
          post={post}
          onDelete={() => handleDelete(post.id)}
        />
      ))}
    </>
  );
}
