/* eslint-disable react/prop-types */
import { IoIosAddCircleOutline } from "react-icons/io";

export default function AddTask({ handleTask, task, handleInput }) {
  return (
    <div id="last-incomes">
      <h1 className="font-bold py-4 uppercase">Add Tasks</h1>
      <div id="stats" className="grid gap-4">
        <div className="bg-yudhir to-sworn rounded-lg">
          <div className="flex p-2 justify-around">
            <div className="text-3xl text-white p-4">Post</div>
            <div className="p-4 text-center flex justify-center">
              <input
                type="text"
                name="post"
                className="text-xl rounded-lg text-textColor font-bold"
                value={task.value}
                onChange={handleInput}
              />
            </div>

            <button
              className="bg-sworn px-8  rounded-lg inline-flex items-center"
              onClick={handleTask}
            >
              <IoIosAddCircleOutline className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
