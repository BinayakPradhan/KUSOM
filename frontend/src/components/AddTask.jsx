import { IoIosAddCircleOutline } from "react-icons/io";
export default function AddTask() {
  return (
    <div id="last-incomes">
      <h1 className="font-bold py-4 uppercase">Assign Tasks</h1>
      <div
        id="stats"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
      >
        <div className="bg-black/60 to-white/5 rounded-lg">
          <div className="flex flex-row items-center">
            <div className="text-3xl p-4">💰</div>
            <div className="p-2">
              <p className="text-xl text-green-500 font-bold">Amount</p>
              <p className="text-white font-medium">Task</p>
              <p className="text-white text-sm">Due Date</p>
            </div>
          </div>
          <div className="border-t border-white/5 p-4 flex items-center justify-center">
            <a
              href="#"
              className="inline-flex space-x-2 items-center text-center"
            >
              <button className="bg-indigo-500 px-8 py-2 rounded-lg">
                <IoIosAddCircleOutline className="w-6 h-6 text-white" />
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
