import React from "react";

function PostCard() {
  return (
    <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden m-5">
      <div className="p-4">
        {/* User Info */}
        <div className="flex items-center mb-4">
          <img
            src="https://i.pinimg.com/736x/d7/0f/66/d70f66c3b339309044440e8be59f218e.jpg"
            alt="user"
            className="w-10 h-10 rounded-full mr-3"
          />
          <div>
            <h2 className="text-gray-800 font-semibold">Hadeer Mohamed</h2>
            <p className="text-gray-500 text-sm">5 mins ago</p>
          </div>
        </div>

        {/* Post Title & Description */}
        <h3 className="text-lg font-bold text-blue-950 mb-2">
          رحلة جميلة في أحضان الطبيعة 🌿
        </h3>
        <p className="text-gray-600 text-sm line-clamp-3">
          استمتعت بأجمل الأوقات وسط الجبال والأنهار... لازم تجربوا المكان ده!
        </p>
      </div>
      <div className="w-full  ">
        <img
          src="https://i.pinimg.com/736x/93/58/05/9358050159250dec058e8fb41c2bffb9.jpg"
          alt="post"
          className="w-full  h-96 object-cover"
        />
      </div>

      {/* Actions */}
      <div className="flex justify-between items-center mt-4 text-gray-500 text-sm p-6">
        <button className="hover:text-blue-600">❤️ Like</button>
        <button className="hover:text-blue-600">💬 Comment</button>
        <button className="hover:text-blue-600">🔁 Share</button>
      </div>
    </div>
  );
}

export default PostCard;
