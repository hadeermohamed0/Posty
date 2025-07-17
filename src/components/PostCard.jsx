import React, { useState } from "react";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import { usePost } from "../context/PostContext";
import { useAuth } from "../context/AuthContext";

function PostCard({ post, onDelete }) {

  const { text, imageUrl, userName, createdAt, id } = post;
  const { handleEdit } = usePost();
  const [showMenu, setShowMenu] = useState(false);
  const { currentUser } = useAuth();
  const isOwner = currentUser && currentUser.uid === post.userId;

  return (
    <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden m-5">
      {isOwner && (
        <div className="relative">
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="absolute top-2 right-2 p-2 text-gray-400 hover:text-gray-600 z-10"
          >
            ⋮
          </button>

          {showMenu && (
            <div className="absolute right-2 top-12 bg-white shadow-lg border rounded-md z-50 p-2 flex gap-2">
              <button
                onClick={() => {
                  handleEdit(post);
                  setShowMenu(false);
                }}
                className="p-2 rounded hover:bg-gray-100"
                title="Edit"
              >
                <PencilIcon className="w-5 h-5 text-blue-600" />
              </button>
              <button
                onClick={() => {
                  onDelete(); 
                  setShowMenu(false);
                }}
                className="p-2 rounded hover:bg-red-100"
                title="Delete"
              >
                <TrashIcon className="w-5 h-5 text-red-600" />
              </button>
            </div>
          )}
        </div>
      )}

      <div className="bg-white rounded-lg p-4 pt-10">
        <div className="font-semibold text-pink-600">{userName}</div>
        {createdAt && (
          <div className="text-xs text-gray-400 mt-2">
            {new Date(createdAt.seconds * 1000).toLocaleString()}
          </div>
        )}
        <p className="text-gray-800 my-2">{text}</p>

        <div className="max-h-[500px] overflow-hidden rounded-lg shadow-md">
          {imageUrl && (
            <img
              src={imageUrl}
              alt="Post"
              className="w-full h-auto object-cover"
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default PostCard;
