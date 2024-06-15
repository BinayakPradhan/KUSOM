import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HiMail, HiLockClosed } from "react-icons/hi";
import { FcGoogle } from "react-icons/fc";
import { useAuth } from "../context/auth";

import axios from "axios";
const initialState = {
  h_email: "",
  h_password: "",
};

export default function Login() {
  const { storeTokenInLS } = useAuth();
  const navigate = useNavigate();
  const [handy, setHandy] = useState(initialState);

  function handleInput(e) {
    const { name, value } = e.target;
    setHandy({
      ...handy,
      [name]: value,
    });
  }
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await fetch(`http://127.0.0.1:9000/handys/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(handy),
      });
      if (response.ok) {
        const data = await response.json();
        console.log("response from login", data);
        storeTokenInLS(data.jwt);
        // Retrieve token from cookies
        // const token = Cookies.get("token");
        // console.log(token);

        // Store the token in localStorage or in your auth context
        // storeTokenInLS(token);
        setHandy(initialState);

        navigate("/handyman");

        axios.defaults.headers.common["Authorization"] = `Bearer ${data.jwt}`;
      } else {
        alert("Invalid credentials");
      }
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container flex items-center justify-center min-h-screen px-6 mx-auto">
        <form className="w-full max-w-md" onSubmit={handleSubmit}>
          <div className="flex items-center justify-center mt-6">
            <h1 className="w-1/3 pb-4 font-medium text-center text-gray-800 capitalize border-b-2 border-blue-500 dark:border-blue-400 dark:text-white">
              Login
            </h1>
          </div>

          <div className="relative flex items-center mt-8">
            <span className="absolute">
              <HiMail className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" />
            </span>

            <input
              type="email"
              className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="Email address"
              autoComplete="off"
              required
              name="h_email"
              id="h_email"
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
              autoComplete="off"
              required
              name="h_password"
              id="h_password"
              onChange={handleInput}
            />
          </div>

          <div className="mt-6">
            <button
              className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
              onClick={handleSubmit}
            >
              Login
            </button>

            <p className="mt-4 text-center text-gray-600 dark:text-gray-400">
              or login with
            </p>

            <a
              href="#"
              className="flex items-center justify-center px-6 py-3 mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <FcGoogle className="w-6 h-6 mx-2" />
              <span className="mx-2">Login with Google</span>
            </a>

            <div className="mt-6 text-center">
              <a className="text-sm text-blue-500 hover:underline dark:text-blue-400">
                Don’t have an account yet? Sign up
              </a>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
