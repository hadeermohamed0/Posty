import { DocumentTextIcon, HomeIcon } from "@heroicons/react/24/outline";

import React from "react";
import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuth } from "../context/AuthContext";

export default function Sidebar() {
  const { currentUser } = useAuth();
  const { handleLogout } = useLogout();

  return (
    <div className="w-64 h-screen bg-[#1b3860] text-white flex flex-col justify-between py-6 fixed top-16 left-0 z-50">
        
      {currentUser ? (
        <ul className="space-y-4 px-6">
          <li className="flex items-center gap-3 hover:text-amber-400 cursor-pointer">
            <HomeIcon className="w-5 h-5" />
            <Link to={"/"}>Home</Link>
          </li>
          <li className="flex items-center gap-3 hover:text-amber-400 cursor-pointer">
            <DocumentTextIcon className="w-5 h-5" />
            <Link to={"/Myposts"}>My Posts</Link>
          </li>
          <li>
            <button
              onClick={handleLogout}
              className="bg-pink-800 hover:bg-pink-950 text-white px-3 py-2 rounded w-full"
            >
              Logout
            </button>
          </li>
        </ul>
      ) : (
        <div className="px-6 text-sm italic text-gray-300">
          <p className="flex items-center gap-3">
            Please login to edit or delete your posts....
          </p>
        </div>
      )}
    </div>
  );
}
