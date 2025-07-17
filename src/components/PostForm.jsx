import { useEffect } from "react";
import usePostForm from "../hooks/usePostForm";
import { usePost } from "../context/PostContext";

const PostForm = () => {
  const { editPost, clearEditPost } = usePost();
  const {
    text,
    setText,
    imageFile,
    setImageFile,
    handleSubmit,
    submitting,
    uploading,
    uploadError,
  } = usePostForm(editPost, clearEditPost);

  useEffect(() => {
    if (editPost) {
      setText(editPost.text || "");
    }
  }, [editPost]);
  return (
    <>
      <div className="flex items-center justify-center gap-2 text-blue-900 font-bold text-xl">
        <span>{editPost ? "Edit Your Post" : "Write Your Post"}</span>
      </div>

      <textarea
        className="w-full p-4 rounded-xl border border-amber-300 focus:ring-2 focus:ring-amber-400 focus:outline-none text-gray-800 placeholder:text-gray-400 transition-all duration-200 min-h-[130px]"
        placeholder="Type your lovely thoughts here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      {editPost?.imageUrl && (
        <div className="mb-3">
          <p className="text-sm text-gray-500 mb-1">Current Image:</p>
          <img
            src={editPost.imageUrl}
            alt="preview"
            className="rounded-md w-full max-h-64 object-cover"
          />
        </div>
      )}

      <div>
        <label className="block text-sm font-medium text-blue-900 mb-1">
          Upload Image
        </label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImageFile(e.target.files[0])}
          className="block w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4
            file:rounded-xs file:border-0
            file:text-sm file:font-semibold
            file:bg-amber-200 file:text-amber-800
            hover:file:bg-amber-300 cursor-pointer transition-all"
        />
      </div>

      <button
        onClick={() => handleSubmit(editPost?.userId)}
        disabled={submitting || uploading}
        className={`w-full py-3 rounded-xs font-semibold text-white shadow-md transition-all duration-200
          ${
            submitting || uploading
              ? "bg-blue-950 opacity-60 cursor-not-allowed"
              : "bg-blue-900 hover:bg-blue-950"
          }`}
      >
        {submitting || uploading
          ? editPost
            ? "Updating..."
            : "Posting..."
          : editPost
          ? "Update Post"
          : "Post it Now"}
      </button>

      {uploadError && (
        <p className="text-red-500 text-sm mt-2 text-center">
          Upload error: {uploadError}
        </p>
      )}
    </>
  );
};

export default PostForm;
