import React from "react";
import ProfileCard from "../components/ProfileCard";
import Post from "../components/Post";
import { Link } from "react-router-dom";
import HandyList from "../components/HandyList";
import { useLocation } from "react-router-dom";
const Handyman = () => {
  // Sample data for multiple posts
  const posts = [
    {
      id: 1,
      imageUrl:
        "https://i.pinimg.com/564x/21/59/2a/21592a433a2767e9bfea4b8acbeb1b28.jpg",
      category: "Tom Pradhan",
      description: "I am planning to build a bed for my kid.",
      buttonLabel: "Interested",
    },
    {
      id: 2,
      imageUrl:
        "https://i.pinimg.com/564x/21/59/2a/21592a433a2767e9bfea4b8acbeb1b28.jpg",
      category: "Zendaya Shrestha",
      description: "Finding someone who can build me a kitchen rack.",
      buttonLabel: "Interested",
    },
    // Add more posts as needed
  ];

  const location = useLocation();
  const { handyId } = location.state || {};

  // Dummy values for HandyList
  const handyListTitle = "Handy List";
  const handyListItems = ["Task 1", "Task 2", "Task 3"];
  let url = `http://127.0.0.1:9000/handys/${handyId}`;
  const getProducts = async (url) => {
    try {
      const response = await fetch(url, {
        method: "GET",
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      throw error;
    }
  };
  const handleClick = () => {};

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4">
      <div className="md:col-span-1 flex flex-col space-y-4">
        <div className="flex-grow">
          <Link onClick={handleClick()} to="/handyProfile">
            <ProfileCard />
          </Link>
        </div>
      </div>
      <div className="md:col-span-3">
        <div className="space-y-4">
          {posts.map((post) => (
            <Post
              key={post.id}
              imageUrl={post.imageUrl}
              category={post.category}
              description={post.description}
              buttonLabel={post.buttonLabel}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Handyman;
