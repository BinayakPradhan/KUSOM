import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { HiUser, HiMail, HiLockClosed, HiUpload } from "react-icons/hi";
import { FaPhoneAlt, FaRegAddressBook, FaCity } from "react-icons/fa";
import { BsBuildings } from "react-icons/bs";
import { useAuth } from "../context/auth";
const initialState = {
  name: "",
  user_name: "",
  password: "",
  email: "",
  phone_number: 0,
  address: "",
  ward_no: 0,
  city: "",
  profile_pic: "pic",
};
export default function Signup() {
  const { storeTokenInLS } = useAuth();
  const navigate = useNavigate();
  const [confirmpassword, setConfirmPassword] = useState("");
  const [user, setUser] = useState(initialState);

  const handleInput = (e) => {
    const { name, value } = e.target;

    // if (type === "file") {
    //   setUser({
    //     ...user,
    //     // [name]: files[0].name, // Store file name directly
    //     [name]
    //   });
    // } else
    if (name === "phone_number" || name === "ward_no") {
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
    if (user.password === confirmpassword) {
      try {
        //   const formData = new FormData();
        //   formData.append("name", user.name);
        //   formData.append("user_name", user.user_name);
        //   formData.append("password", user.password);
        //   formData.append("email", user.email);
        //   formData.append("phone_number", user.phone_number);
        //   formData.append("address", user.address);
        //   formData.append("ward_no", user.ward_no);
        //   formData.append("city", user.city);
        //   formData.append("profile_pic", user.profile_pic);

        const response = await fetch(`http://127.0.0.1:9000/users/register`, {
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
    } else {
      alert("Passwords do not match");
    }
  };
  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="container flex items-center justify-center min-h-screen px-6 mx-auto">
          <form className="w-full max-w-md" onSubmit={handleSubmit}>
            <div className="flex items-center justify-center mt-6">
              <h1 className="w-1/3 pb-4 font-medium text-center text-gray-800 capitalize border-b-2 border-blue-500 dark:border-blue-400 dark:text-white">
                sign up
              </h1>
            </div>

            <div className="relative flex items-center mt-8">
              <span className="absolute">
                <HiUser className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" />
              </span>
              <input
                type="text"
                className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Username"
                name="user_name"
                id="user_name"
                required
                autoComplete="off"
                value={user.user_name}
                onChange={handleInput}
              />
            </div>

            <label
              htmlFor="dropzone-file"
              className="flex items-center px-3 py-3 mx-auto mt-6 text-center bg-white border-2 border-dashed rounded-lg cursor-pointer dark:border-gray-600 dark:bg-gray-900"
            >
              <HiUpload className="w-6 h-6 text-gray-300 dark:text-gray-500" />
              <h2 className="mx-3 text-gray-400">Profile Photo</h2>
              <input
                id="dropzone-file"
                type="file"
                className="hidden"
                name="profile_pic"
                onChange={handleInput}
              />
            </label>

            <div className="relative flex items-center mt-6">
              <span className="absolute">
                <HiMail className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" />
              </span>
              <input
                type="email"
                className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Email address"
                name="email"
                id="email"
                required
                autoComplete="off"
                value={user.email}
                onChange={handleInput}
              />
            </div>

            <div className="relative flex items-center mt-4">
              <span className="absolute">
                <HiUser className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" />
              </span>
              <input
                type="text"
                className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Name"
                name="name"
                id="name"
                required
                autoComplete="off"
                value={user.name}
                onChange={handleInput}
              />
            </div>

            <div className="relative flex items-center mt-4">
              <span className="absolute">
                <FaPhoneAlt className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" />
              </span>
              <input
                type="text"
                className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Phone Number"
                name="phone_number"
                id="phone_number"
                required
                autoComplete="off"
                value={user.phone_number}
                onChange={handleInput}
              />
            </div>

            <div className="relative flex items-center mt-4">
              <span className="absolute">
                <FaRegAddressBook className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" />
              </span>
              <input
                type="text"
                className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Address"
                name="address"
                id="address"
                required
                autoComplete="off"
                value={user.address}
                onChange={handleInput}
              />
            </div>

            <div className="relative flex items-center mt-4">
              <span className="absolute">
                <BsBuildings className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" />
              </span>
              <input
                type="text"
                className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Ward No."
                name="ward_no"
                id="ward_no"
                required
                autoComplete="off"
                value={user.ward_no}
                onChange={handleInput}
              />
            </div>

            <div className="relative flex items-center mt-4">
              <span className="absolute">
                <FaCity className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" />
              </span>
              <input
                type="text"
                className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="City"
                name="city"
                id="city"
                required
                autoComplete="off"
                value={user.city}
                onChange={handleInput}
              />
            </div>

            <div className="relative flex items-center mt-4">
              <span className="absolute">
                <HiLockClosed className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" />
              </span>
              <input
                type="password"
                className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Password"
                name="password"
                id="password"
                required
                autoComplete="off"
                value={user.password}
                onChange={handleInput}
              />
            </div>

            <div className="relative flex items-center mt-4">
              <span className="absolute">
                <HiLockClosed className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" />
              </span>
              <input
                type="password"
                className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Confirm Password"
                name="confirmpassword"
                id="confirmpassword"
                required
                autoComplete="off"
                value={confirmpassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>

            <div className="mt-6">
              <button
                className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                onClick={handleSubmit}
              >
                Sign Up
              </button>

              <div className="my-6 text-center ">
                <NavLink
                  to="/login"
                  className="text-sm text-blue-500 hover:underline dark:text-blue-400"
                >
                  Already have an account?
                </NavLink>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
