import React from "react";
import ProfileCard from "../components/ProfileCard";
import Post from "../components/Post";
import { Link } from "react-router-dom";
import HandyList from "../components/HandyList";

const HandyDash = () => {
  // Sample data for multiple posts
  const posts = [
    {
      id: 1,
      imageUrl:
        "https://i.pinimg.com/564x/21/59/2a/21592a433a2767e9bfea4b8acbeb1b28.jpg",
      category: "The perfect latte",
      description:
        "Caffè latte is a coffee beverage of Italian origin made with espresso and steamed milk.",
      buttonLabel: "Interested",
    },
    {
      id: 2,
      imageUrl:
        "https://i.pinimg.com/564x/21/59/2a/21592a433a2767e9bfea4b8acbeb1b28.jpg",
      category: "Coffee time",
      description:
        "Enjoy your coffee break with our freshly brewed coffee.",
      buttonLabel: "Interested",
    },
    // Add more posts as needed
  ];

  // Dummy values for HandyList
  const handyListTitle = "Handy List";
  const handyListItems = ["Task 1", "Task 2", "Task 3"];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4">
      <div className="md:col-span-1 flex flex-col space-y-4">
        <div className="flex-grow">
          <Link to="/handyProfile">
            <ProfileCard />
          </Link>
        </div>
        <div className="flex-grow">
          <HandyList
            title={handyListTitle}
            initialItems={handyListItems}
          />
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

export default HandyDash;
