import React from "react";

const Post = ({ imageUrl, category, description, buttonLabel }) => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col md:flex-row items-center p-4 shadow-md border border-gray-300 rounded-md mb-4 w-full max-w-4xl">
        {/* Left Section: Image */}
        <img
          src={imageUrl}
          alt="Post Image"
          className="h-[200px] w-auto rounded-md mb-4 md:mb-0"
        />

        {/* Middle Section: Job Category and Description */}
        <div className="flex-1 md:ml-4">
          <div className="mb-4">
            <h2 className="font-bold text-xl">{category}</h2>
            <p className="text-lg">{description}</p>
          </div>
        </div>

        {/* Right Section: Button */}
        <button className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-lg text-lg hover:bg-green-500">
          {buttonLabel}
        </button>
      </div>
    </div>
  );
};

export default Post;
