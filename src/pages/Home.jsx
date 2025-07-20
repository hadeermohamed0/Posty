import { XMarkIcon } from "@heroicons/react/24/outline";
import {
  HomeIcon,
  UserIcon,
  DocumentTextIcon,
  HeartIcon,
  ShareIcon,
  BookmarkIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";
import bg2Image from "../assets/body-bg.jpg";

import PostForm from "../components/PostForm";
import { usePost } from "../context/PostContext";
import { useFetchPosts } from "../hooks/useFetchPosts";
import { getAuth } from "firebase/auth";
import { Link, Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

function Home() {
  const { posts, loading, toggleForm, showForm, editPost } = usePost();

  const auth = getAuth();
  const currentUser = auth.currentUser;

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar></Sidebar>
      <div
        className="ml-0 md:ml-64 flex-1 overflow-y-auto p-4 md:p-12 relative top-10"
        style={{
          backgroundImage: `url(${bg2Image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div>
          <h1 className="text-3xl font-bold text-amber-400 mb-4 font-barriecito">
            Po<span className="text-pink-700">sts</span>
          </h1>

          <div className="text-gray-500 italic mb-4">
            {loading
              ? "Loading posts..."
              : posts.length === 0
              ? "No posts to display yet..."
              : ""}
          </div>
          <Outlet></Outlet>

          {currentUser && (
            <div className="fixed right-12 bottom-24 z-50">
              <button
                onClick={toggleForm}
                className="bg-pink-600 hover:bg-pink-700 p-3 rounded-full shadow-lg"
              >
                <PlusIcon className="w-6 h-6 text-white" />
              </button>
            </div>
          )}

          {showForm && (
            <div className="fixed inset-0 bg-white/70 flex items-center justify-center z-50">
              <div className="space-y-6 w-full max-w-2xl bg-white p-8 rounded-xl shadow-2xl animate-fade-in">
                <div className="relative">
                  <button
                    onClick={toggleForm}
                    className="absolute top-2 right-2 text-gray-500 hover:text-red-500 transition"
                  >
                    <XMarkIcon className="w-6 h-6" />
                  </button>
                </div>
                <PostForm />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
