import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useAuth } from "../context/AuthContext";

const NavBar = () => {
  const { currentUser } = useAuth();
  return (
    <div className="fixed top-0 left-0 w-full z-50">
      <div className="navbar bg-blue-950">
        <div className="flex-1">
          <div className="flex gap-1.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#FFBF00"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#FFBF00"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
              />
            </svg>

            <Link to="/" className="text-4xl text-amber-400 font-barriecito">
              Po<span className="text-pink-700">sty</span>
            </Link>
          </div>
        </div>

        {!currentUser && (
          <div className="space-x-4">
            <Link
              to="/login"
              className="text-white hover:text-amber-500 font-medium"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="bg-amber-400 text-white px-4 py-2 rounded hover:bg-amber-500"
            >
              Sign Up
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
