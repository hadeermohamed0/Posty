import React from "react";
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
import PostCard from "./PostCard";

function Home() {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <div className="w-64 h-screen bg-[#1b3860] text-white flex flex-col justify-between py-6 fixed top-16 left-0 z-50">
        <ul className="space-y-4 px-6">
          <li className="flex items-center gap-3 hover:text-amber-400 cursor-pointer">
            <HomeIcon className="w-5 h-5" />
            Home
          </li>
          <li className="flex items-center gap-3 hover:text-amber-400 cursor-pointer">
            <UserIcon className="w-5 h-5" />
            Profile
          </li>
          <li className="flex items-center gap-3 hover:text-amber-400 cursor-pointer">
            <DocumentTextIcon className="w-5 h-5" />
            My Posts
          </li>
          <li className="flex items-center gap-3 hover:text-amber-400 cursor-pointer">
            <HeartIcon className="w-5 h-5" />
            My Likes
          </li>
          <li className="flex items-center gap-3 hover:text-amber-400 cursor-pointer">
            <ShareIcon className="w-5 h-5" />
            My Shares
          </li>
          <li className="flex items-center gap-3 hover:text-amber-400 cursor-pointer">
            <BookmarkIcon className="w-5 h-5" />
            My Bookmarks
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div
        className="ml-64 flex-1 overflow-y-auto p-12 relative top-10"
        style={{
          backgroundImage: `url(${bg2Image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="text-3xl font-bold text-amber-400 mb-4 font-barriecito">
          Po<span className="text-pink-700">sts</span>
        </h1>

        <div className="text-gray-500 italic mb-4">
          No posts to display yet...
        </div>

        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />

        {/* Floating Add Button */}
        <div className="fixed right-8 bottom-32 z-50">
          <button className="bg-pink-600 hover:bg-pink-700 p-3 rounded-full shadow-lg">
            <PlusIcon className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
