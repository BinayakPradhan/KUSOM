import { useLocation, useNavigate } from "react-router-dom";
import { FiFolder } from "react-icons/fi";
import { useState } from "react";
import { IoEllipse } from "react-icons/io5";
import { CiShop } from "react-icons/ci";
import AddTask from "../components/AddTask";
import AddProduct from "../components/AddProduct";

export default function User() {
  const navigate = useNavigate();
  const location = useLocation();
  const { userId } = location.state;
  console.log(userId);
  const [rows, setRows] = useState([]);

  async function handleHistory(e) {
    e.preventDefault();
    try {
      const response = await fetch(
        `http://127.0.0.1:9000/users/post/${userId}`,
        {
          method: "GET",
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      const rows = data.data.rows;
      console.log(rows);
      setRows(rows);

      // Navigate to history and pass data as state
      localStorage.setItem("user_id", userId);
      navigate(`${location.pathname}/history`, { state: { rows, userId } });
    } catch (err) {
      console.error(err);
    }
  }

  function handleShop() {
    navigate(`${location.pathname}/shop`);
  }

  const [task, setTask] = useState({});

  function handleInput(e) {
    const { name, value } = e.target;
    setTask((prevTask) => ({
      ...prevTask,
      [name]: value,
      user_id: userId,
    }));
  }
  console.log(task);

  async function handleTask(e) {
    e.preventDefault();
    try {
      const response = await fetch(`http://127.0.0.1:9000/users/posttask`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(task),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log(data);
      setTask({ post: "" });
    } catch (err) {
      console.error(err);
    }
  }

  function handleProduct() {
    // Implement your product handling logic here
    navigate(`${location.pathname}/addproduct`);
  }

  return (
    <div className="antialiased bg-primary w-full min-h-screen text-textColor relative py-4">
      <div className="mx-auto gap-2 sm:gap-4 md:gap-6 lg:gap-10 xl:gap-14 my-10 px-2">
        <div id="menu" className="bg-yudhir col-span-3 rounded-lg p-4">
          <h1 className="font-bold text-lg lg:text-3xl bg-gradient-to-br from-white via-sworn to-transparent bg-clip-text text-transparent">
            Dashboard<span className="text-indigo-400">.</span>
          </h1>
          <p className="text-sworn text-sm mb-2">Welcome back,</p>
          <div className="flex flex-col space-y-2 md:space-y-0 md:flex-row mb-5 items-center md:space-x-2 hover:bg-white/10 group transition duration-150 ease-linear rounded-lg group w-full py-3 px-2">
            <div>
              <img
                className="rounded-full w-10 h-10 relative object-cover"
                src="https://img.freepik.com/free-photo/no-problem-concept-bearded-man-makes-okay-gesture-has-everything-control-all-fine-gesture-wears-spectacles-jumper-poses-against-pink-wall-says-i-got-this-guarantees-something_273609-42817.jpg?w=1800&t=st=1669749937~exp=1669750537~hmac=4c5ab249387d44d91df18065e1e33956daab805bee4638c7fdbf83c73d62f125"
                alt=""
              />
            </div>
            <div>
              <p className="font-medium text-sworn group-hover:text-indigo-400 leading-4">
                Tom Pradhan
              </p>
              <span className="text-xs text-sworn"></span>
            </div>
          </div>
          <hr className="my-2 border-sworn" />
          <div
            id="menu"
            className="flex flex-col space-y-2 my-5 cursor-pointer"
          >
            <div
              className="hover:bg-white/10 transition duration-150 ease-linear rounded-lg py-3 px-2 group"
              onClick={handleHistory}
            >
              <div className="relative flex flex-col space-y-2 md:flex-row md:space-y-0 space-x-2 items-center">
                <div>
                  <FiFolder className="text-sworn w-6 h-6" />
                </div>
                <div>
                  <p className="font-bold text-base lg:text-lg text-sworn leading-4 group-hover:text-indigo-400">
                    Posts
                  </p>
                  <p className="text-sworn text-sm hidden md:block">
                    Post History
                  </p>
                </div>
                <div className="absolute -top-3 -right-3 md:top-0 md:right-0 px-2 py-1.5 rounded-full bg-indigo-800 text-xs font-mono font-bold">
                  {rows.length}
                </div>
              </div>
            </div>

            <div
              onClick={handleShop}
              className="hover:bg-white/10 transition duration-150 ease-linear rounded-lg py-3 px-2 group"
            >
              <div className="flex flex-col space-y-2 md:flex-row md:space-y-0 space-x-2 items-center">
                <div>
                  <CiShop className="text-sworn w-8 h-8" />
                </div>
                <div>
                  <p className="font-bold text-base lg:text-lg text-sworn leading-4 group-hover:text-indigo-400">
                    Shop
                  </p>
                  <p className="text-sworn text-sm hidden md:block">
                    See Market
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="content"
          className="bg-white/10 flex flex-col justify-between mx-[20%] rounded-lg p-6"
        >
          <AddTask
            taskTitle="Add Tasks"
            handleTask={handleTask}
            task={task}
            setTask={setTask}
            handleInput={handleInput}
          />

          <AddProduct taskTitle="Add Product" handleProduct={handleProduct} />
        </div>
      </div>
    </div>
  );
}
