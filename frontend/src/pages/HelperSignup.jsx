import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../context/auth";
const initialState = {
  handy_name: "",
  handy_user_name: "",
  phone_number: 0,
  h_email: "",
  h_bio: "",
  h_field: "",
  h_photo: "pis",
  h_password: "",
  h_fee: 0,
  h_citizenship_photo: "citizen",
  h_expertise: "",
};
export default function HelperSignup() {
  const { storeTokenInLS } = useAuth();
  const navigate = useNavigate();

  const [user, setUser] = useState(initialState);
  const handleInput = (e) => {
    const { name, value } = e.target;

    if (name === "h_fee" || name === "phone_number") {
      setUser({
        ...user,
        [name]: Number(value),
      });
    } else {
      setUser({
        ...user,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);

    try {
      const response = await fetch(`http://127.0.0.1:9000/handys/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(`response from server`, data);

        storeTokenInLS(data.jwt);

        setUser(initialState);
        alert("Signup Successful");
        navigate("/login");
      } else {
        const errorData = await response.json();
        console.log("Server response:", errorData);
        alert(`Signup failed: ${response.statusText}`);
      }
    } catch (error) {
      console.error("Error in fetch POST:", error);
    }
  };
  return (
    <div className="px-12">
      <div className="flex justify-center items-center lg:h-screen">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 bg-white">
            <div className="p-6">
              <h2 className="text-xl font-bold mb-4">Be a Handyman</h2>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label
                    htmlFor="handy_name"
                    className="block font-medium mb-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="handy_name"
                    name="handy_name"
                    className="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-indigo-200 border"
                    value={user.handy_name}
                    onChange={handleInput}
                  />
                </div>
                <div>
                  <label
                    htmlFor="handy_user_name"
                    className="block font-medium mb-1"
                  >
                    Username
                  </label>
                  <input
                    type="text"
                    id="handy_user_name"
                    name="handy_user_name"
                    className="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-indigo-200 border"
                    value={user.handy_user_name}
                    onChange={handleInput}
                  />
                </div>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="phone_number"
                  className="block font-medium mb-1"
                >
                  Phone Number
                </label>
                <input
                  type="text"
                  id="phone_number"
                  name="phone_number"
                  className="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-indigo-200 border"
                  value={user.phone_number}
                  onChange={handleInput}
                />
              </div>

              <div className="mb-4">
                <label htmlFor="h_email" className="block font-medium mb-1">
                  Email
                </label>
                <input
                  type="text"
                  id="h_email"
                  name="h_email"
                  className="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-indigo-200 border"
                  value={user.h_email}
                  onChange={handleInput}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="h_photo" className="block font-medium mb-1">
                  Photo
                </label>
                <input
                  type="file"
                  id="h_photo"
                  name="h_photo"
                  // accept="image/*"
                  className="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-indigo-200 border p-2"
                  onChange={handleInput}
                />
              </div>
              <div>
                <label htmlFor="h_password" className="block font-medium mb-1">
                  Password
                </label>
                <input
                  type="password"
                  id="h_password"
                  name="h_password"
                  className="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-indigo-200 border"
                  value={user.h_password}
                  onChange={handleInput}
                />
              </div>
            </div>
            <div className="bg-indigo-600 text-white p-6">
              <div className="mb-4">
                <label htmlFor="h_fee" className="block font-medium mb-1">
                  Hourly Rate
                </label>
                <input
                  type="text"
                  id="h_fee"
                  name="h_fee"
                  className="w-full bg-indigo-700 text-white rounded-md shadow-sm focus:bg-indigo-600 focus:ring focus:ring-indigo-200"
                  value={user.h_fee}
                  onChange={handleInput}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="h_expertise" className="block font-medium mb-1">
                  Field of Expertise
                </label>
                <select
                  id="h_expertise"
                  name="h_expertise"
                  className="w-full bg-indigo-700 text-white rounded-md shadow-sm focus:bg-indigo-600 focus:ring focus:ring-indigo-200"
                  value={user.h_expertise}
                  onChange={handleInput}
                >
                  <option value="">Select Field of Expertise</option>
                  <option value="Carpentry">Carpentry</option>
                  <option value="Cleaning">Cleaning</option>
                  <option value="Electrical">Electrical</option>
                  <option value="Painting">Painting</option>
                  <option value="Plumbing">Plumbing</option>
                </select>
              </div>
              <div className="gap-4 mb-4">
                <div>
                  <label htmlFor="h_bio" className="block font-medium mb-1">
                    Write a Bio
                  </label>
                  <input
                    type="text"
                    id="h_bio"
                    name="h_bio"
                    className="w-full bg-indigo-700 text-white rounded-md shadow-sm focus:bg-indigo-600 focus:ring focus:ring-indigo-200"
                    value={user.h_bio}
                    onChange={handleInput}
                  />
                </div>
              </div>

              <div className=" gap-4 mb-4">
                <div>
                  <label
                    htmlFor="h_citizenship_photo"
                    className="block font-medium mb-1"
                  >
                    Citizenship
                  </label>
                  <input
                    type="file"
                    id="h_citizenship_photo"
                    name="h_citizenship_photo"
                    // accept="image/*"
                    className="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-indigo-200 border p-2"
                    onChange={handleInput}
                  />
                </div>
              </div>
              <div className="mb-4">
                <label htmlFor="h_field" className="block font-medium mb-1">
                  Field
                </label>
                <input
                  type="text"
                  id="h_field"
                  name="h_field"
                  className="w-full bg-indigo-700 text-white rounded-md shadow-sm focus:bg-indigo-600 focus:ring focus:ring-indigo-200"
                  value={user.h_field}
                  onChange={handleInput}
                />
              </div>
              <button
                className="w-full bg-white text-indigo-600 py-2 px-4 rounded-md hover:bg-indigo-700 hover:text-white transition-colors"
                type="submit"
                onClick={handleSubmit}
              >
                Register as Handyman
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
