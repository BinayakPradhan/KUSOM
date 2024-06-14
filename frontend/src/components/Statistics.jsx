import {
  IoPlanet,
  IoArrowUndoSharp,
  BiRefresh,
  BsArrowReturnLeft,
  BsFileEarmark,
  AiOutlineThunderbolt,
} from "react-icons/io5";
export default function Statistics() {
  return (
    <>
      <div id="24h">
        <h1 className="font-bold py-4 uppercase">Last 24h Statistics</h1>
        <div
          id="stats"
          className="grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <div className="bg-black/60 to-white/5 p-6 rounded-lg">
            <div className="flex flex-row space-x-4 items-center">
              <div id="stats-1">
                <IoPlanet className="w-10 h-10 text-white" />
              </div>
              <div>
                <p className="text-indigo-300 text-sm font-medium uppercase leading-4">
                  Users
                </p>
                <p className="text-white font-bold text-2xl inline-flex items-center space-x-2">
                  <span>+28</span>
                  <span>
                    <IoArrowUndoSharp className="w-6 h-6" />
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="bg-black/60 p-6 rounded-lg">
            <div className="flex flex-row space-x-4 items-center">
              <div id="stats-1">
                <BiRefresh className="w-10 h-10 text-white" />
              </div>
              <div>
                <p className="text-green-500 text-sm font-medium uppercase leading-4">
                  Income
                </p>
                <p className="text-white font-bold text-2xl inline-flex items-center space-x-2">
                  <span>$2,873.88</span>
                  <span>
                    <BsArrowReturnLeft className="w-6 h-6" />
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="bg-black/60 p-6 rounded-lg">
            <div className="flex flex-row space-x-4 items-center">
              <div id="stats-1">
                <BsFileEarmark className="w-10 h-10 text-white" />
              </div>
              <div>
                <p className="text-blue-300 text-sm font-medium uppercase leading-4">
                  Invoices
                </p>
                <p className="text-white font-bold text-2xl inline-flex items-center space-x-2">
                  <span>+79</span>
                  <span>
                    <AiOutlineThunderbolt className="w-6 h-6" />
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
