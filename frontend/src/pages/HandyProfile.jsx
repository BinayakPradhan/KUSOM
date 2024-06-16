import React from "react";
import "./HandyProfile.css";

function HandyProfile() {
  // Sample data
  const profileData = {
    name: "Subed Shah",
    profileImageUrl: "src/assets/subed.png",
    phone: "123-456-7890",
    address: "123 Main St, Anytown, USA",
    field: "Master Carpenter",
    pastWorks: [
      {
        id: 1,
        title: "Project Treehouse",
        description: "Lorem ipsum...",
      },
      {
        id: 2,
        title: "House",
        description: "Lorem ipsum...",
      },
      // Add more projects as needed
    ],
  };

  return (
    <div className="App">
      <div className="profile">
        <div className="profile-header">
          <img
            src={profileData.profileImageUrl}
            alt="Profile"
            className="profile-image"
          />
          <h1>{profileData.name}</h1>
        </div>
        <div className="personal-info">
          <h2>Personal Information</h2>
          <p>
            <strong>Phone:</strong> {profileData.phone}
          </p>
          <p>
            <strong>Address:</strong> {profileData.address}
          </p>
          <p>
            <strong>Field:</strong> {profileData.field}
          </p>
        </div>
        <div className="past-works">
          <h2>Past Works</h2>
          <ul>
            {profileData.pastWorks.map((work) => (
              <li key={work.id}>
                <h3>{work.title}</h3>
                <p>{work.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default HandyProfile;
