/* eslint-disable react/prop-types */
import { IoIosAddCircleOutline } from "react-icons/io";

export default function AddTask({ taskTitle, handleProduct }) {
  return (
    <div id="last-incomes" className="max-w-8xl">
      <h1 className="font-bold py-4 uppercase">Add Products</h1>
      <div id="stats" className="grid gap-4">
        <div className="bg-yudhir to-sworn rounded-lg">
          <div className="flex flex-col items-center">
            <div className="text-3xl p-4">💰</div>
            <div className="p-2 text-center">
              <p className="text-xl text-white font-bold">{taskTitle}</p>
            </div>
          </div>
          <div className="border-t border-white/5 p-4 flex items-center justify-center">
            <button
              className="bg-sworn px-12 py-2 rounded-lg inline-flex items-center"
              onClick={handleProduct}
            >
              <IoIosAddCircleOutline className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
