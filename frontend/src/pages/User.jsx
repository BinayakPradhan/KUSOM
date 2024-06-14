import {
  FiArrowUp,
  FiFolder,
  FiEdit,
  FiLock,
  FiUserMinus,
  FiUserX,
  FiInfo,
} from "react-icons/fi";
import { RiUserLocationLine } from "react-icons/ri";
import {
  IoEllipse,
  IoPlanet,
  IoArrowUndoSharp,
  IoAlertCircleOutline,
} from "react-icons/io5";
import { BiRefresh } from "react-icons/bi";
import { BsFileEarmark, BsArrowReturnLeft } from "react-icons/bs";
import { AiOutlineThunderbolt } from "react-icons/ai";

export default function User() {
  return (
    <>
      <div className="antialiased bg-black w-full min-h-screen text-slate-300 relative py-4">
        <div className="grid grid-cols-12 mx-auto gap-2 sm:gap-4 md:gap-6 lg:gap-10 xl:gap-14 max-w-7xl my-10 px-2">
          <div id="menu" className="bg-white/10 col-span-3 rounded-lg p-4 ">
            <h1 className="font-bold text-lg lg:text-3xl bg-gradient-to-br from-white via-white/50 to-transparent bg-clip-text text-transparent">
              Dashboard<span className="text-indigo-400">.</span>
            </h1>
            <p className="text-slate-400 text-sm mb-2">Welcome back,</p>
            <a
              href="#"
              className="flex flex-col space-y-2 md:space-y-0 md:flex-row mb-5 items-center md:space-x-2 hover:bg-white/10 group transition duration-150 ease-linear rounded-lg group w-full py-3 px-2"
            >
              <div>
                <img
                  className="rounded-full w-10 h-10 relative object-cover"
                  src="https://img.freepik.com/free-photo/no-problem-concept-bearded-man-makes-okay-gesture-has-everything-control-all-fine-gesture-wears-spectacles-jumper-poses-against-pink-wall-says-i-got-this-guarantees-something_273609-42817.jpg?w=1800&t=st=1669749937~exp=1669750537~hmac=4c5ab249387d44d91df18065e1e33956daab805bee4638c7fdbf83c73d62f125"
                  alt=""
                />
              </div>
              <div>
                <p className="font-medium group-hover:text-indigo-400 leading-4">
                  Jim Smith
                </p>
                <span className="text-xs text-slate-400">Pantazi LLC</span>
              </div>
            </a>
            <hr className="my-2 border-slate-700" />
            <div id="menu" className="flex flex-col space-y-2 my-5">
              <a
                href="#"
                className="hover:bg-white/10 transition duration-150 ease-linear rounded-lg py-3 px-2 group"
              >
                <div className="flex flex-col space-y-2 md:flex-row md:space-y-0 space-x-2 items-center">
                  <div>
                    <FiArrowUp className="text-indigo-400 w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-bold text-base lg:text-lg text-slate-200 leading-4 group-hover:text-indigo-400">
                      Dashboard
                    </p>
                    <p className="text-slate-400 text-sm hidden md:block">
                      Data overview
                    </p>
                  </div>
                </div>
              </a>
              <a
                href="#"
                className="hover:bg-white/10 transition duration-150 ease-linear rounded-lg py-3 px-2 group"
              >
                <div className="relative flex flex-col space-y-2 md:flex-row md:space-y-0 space-x-2 items-center">
                  <div>
                    <FiFolder className="text-indigo-400 w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-bold text-base lg:text-lg text-slate-200 leading-4 group-hover:text-indigo-400">
                      Invoices
                    </p>
                    <p className="text-slate-400 text-sm hidden md:block">
                      Manage invoices
                    </p>
                  </div>
                  <div className="absolute -top-3 -right-3 md:top-0 md:right-0 px-2 py-1.5 rounded-full bg-indigo-800 text-xs font-mono font-bold">
                    23
                  </div>
                </div>
              </a>
              <a
                href="#"
                className="hover:bg-white/10 transition duration-150 ease-linear rounded-lg py-3 px-2 group"
              >
                <div className="flex flex-col space-y-2 md:flex-row md:space-y-0 space-x-2 items-center">
                  <div>
                    <RiUserLocationLine className="text-indigo-400 w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-bold text-base lg:text-lg text-slate-200 leading-4 group-hover:text-indigo-400">
                      Users
                    </p>
                    <p className="text-slate-400 text-sm hidden md:block">
                      Manage users
                    </p>
                  </div>
                </div>
              </a>
              <a
                href="#"
                className="hover:bg-white/10 transition duration-150 ease-linear rounded-lg py-3 px-2 group"
              >
                <div className="flex flex-col space-y-2 md:flex-row md:space-y-0 space-x-2 items-center">
                  <div>
                    <IoEllipse className="text-indigo-400 w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-bold text-base lg:text-lg text-slate-200 leading-4 group-hover:text-indigo-400">
                      Settings
                    </p>
                    <p className="text-slate-400 text-sm hidden md:block">
                      Edit settings
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <p className="text-sm text-center text-gray-600">
              v2.0.0.3 | &copy; 2022 Pantazi Soft
            </p>
          </div>
          <div id="content" className="bg-white/10 col-span-9 rounded-lg p-6">
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
                      <p className="text-teal-300 text-sm font-medium uppercase leading-4">
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
            <div id="last-incomes">
              <h1 className="font-bold py-4 uppercase">Last 24h incomes</h1>
              <div
                id="stats"
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
              >
                <div className="bg-black/60 to-white/5 rounded-lg">
                  <div className="flex flex-row items-center">
                    <div className="text-3xl p-4">💰</div>
                    <div className="p-2">
                      <p className="text-xl font-bold">348$</p>
                      <p className="text-gray-500 font-medium">Amber Gates</p>
                      <p className="text-gray-500 text-sm">24 Nov 2022</p>
                    </div>
                  </div>
                  <div className="border-t border-white/5 p-4">
                    <a
                      href="#"
                      className="inline-flex space-x-2 items-center text-center"
                    >
                      <IoAlertCircleOutline className="w-6 h-6" />
                      <span>Info</span>
                    </a>
                  </div>
                </div>
                <div className="bg-black/60 to-white/5 rounded-lg">
                  <div className="flex flex-row items-center">
                    <div className="text-3xl p-4">💰</div>
                    <div className="p-2">
                      <p className="text-xl font-bold">68$</p>
                      <p className="text-gray-500 font-medium">Maia Kipper</p>
                      <p className="text-gray-500 text-sm">23 Nov 2022</p>
                    </div>
                  </div>
                  <div className="border-t border-white/5 p-4">
                    <a
                      href="#"
                      className="inline-flex space-x-2 items-center text-center"
                    >
                      <span>Info</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-black/60 to-white/5 rounded-lg">
            <div className="flex flex-row items-center">
              <div className="text-3xl p-4">💰</div>
              <div className="p-2">
                <p className="text-xl font-bold">28$</p>
                <p className="text-gray-500 font-medium">Tony Ankel</p>
                <p className="text-gray-500 text-sm">22 Nov 2022</p>
              </div>
            </div>
            <div className="border-t border-white/5 p-4">
              <a
                href="#"
                className="inline-flex space-x-2 items-center text-center"
              >
                <FiInfo className="w-6 h-6" />
                <span>Info</span>
              </a>
            </div>
          </div>
          <div id="last-users">
            <h1 className="font-bold py-4 uppercase">Last 24h users</h1>
            <div className="overflow-x-scroll">
              <table className="w-full whitespace-nowrap">
                <thead className="bg-black/60">
                  <tr>
                    <th className="text-left py-3 px-2 rounded-l-lg">Name</th>
                    <th className="text-left py-3 px-2">Email</th>
                    <th className="text-left py-3 px-2">Group</th>
                    <th className="text-left py-3 px-2">Status</th>
                    <th className="text-left py-3 px-2 rounded-r-lg">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-700">
                    <td className="py-3 px-2 font-bold">
                      <div className="inline-flex space-x-3 items-center">
                        <span>
                          <img
                            className="rounded-full w-8 h-8"
                            src="https://images.generated.photos/tGiLEDiAbS6NdHAXAjCfpKoW05x2nq70NGmxjxzT5aU/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/OTM4ODM1LmpwZw.jpg"
                            alt=""
                          />
                        </span>
                        <span>Thai Mei</span>
                      </div>
                    </td>
                    <td className="py-3 px-2">thai.mei@abc.com</td>
                    <td className="py-3 px-2">User</td>
                    <td className="py-3 px-2">Approved</td>
                    <td className="py-3 px-2">
                      <div className="inline-flex items-center space-x-3">
                        <a href="" title="Edit" className="hover:text-white">
                          <FiEdit className="w-5 h-5" />
                        </a>
                        <a
                          href=""
                          title="Edit password"
                          className="hover:text-white"
                        >
                          <FiLock className="w-5 h-5" />
                        </a>
                        <a
                          href=""
                          title="Suspend user"
                          className="hover:text-white"
                        >
                          <FiUserMinus className="w-5 h-5" />
                        </a>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-700">
                    <td className="py-3 px-2 font-bold">
                      <div className="inline-flex space-x-3 items-center">
                        <span>
                          <img
                            className="rounded-full w-8 h-8"
                            src="https://images.generated.photos/tGiLEDiAbS6NdHAXAjCfpKoW05x2nq70NGmxjxzT5aU/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/OTM4ODM1LmpwZw.jpg"
                            alt=""
                          />
                        </span>
                        <span>Thai Mei</span>
                      </div>
                    </td>
                    <td className="py-3 px-2">thai.mei@abc.com</td>
                    <td className="py-3 px-2">User</td>
                    <td className="py-3 px-2">Approved</td>
                    <td className="py-3 px-2">
                      <div className="inline-flex items-center space-x-3">
                        <a href="" title="Edit" className="hover:text-white">
                          <FiEdit className="w-5 h-5" />
                        </a>
                        <a
                          href=""
                          title="Edit password"
                          className="hover:text-white"
                        >
                          <FiLock className="w-5 h-5" />
                        </a>
                        <a
                          href=""
                          title="Suspend user"
                          className="hover:text-white"
                        >
                          <FiUserX className="w-5 h-5" />
                        </a>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-700">
                    <td className="py-3 px-2 font-bold">
                      <div className="inline-flex space-x-3 items-center">
                        <span>
                          <img
                            className="rounded-full w-8 h-8"
                            src="https://images.generated.photos/niCVbIBAm4hahzwS83HoEtcVEIactkKohOzgXWYY4lM/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NTk4ODczLmpwZw.jpg"
                            alt=""
                          />
                        </span>
                        <span>Marquez Spineli</span>
                      </div>
                    </td>
                    <td className="py-3 px-2">marquez.spineli@cba.com</td>
                    <td className="py-3 px-2">User</td>
                    <td className="py-3 px-2">Approved</td>
                    <td className="py-3 px-2">
                      <div className="inline-flex items-center space-x-3">
                        <a href="" title="Edit" className="hover:text-white">
                          <FiEdit className="w-5 h-5" />
                        </a>
                        <a
                          href=""
                          title="Edit password"
                          className="hover:text-white"
                        >
                          <FiLock className="w-5 h-5" />
                        </a>
                        <a
                          href=""
                          title="Suspend user"
                          className="hover:text-white"
                        >
                          <FiUserX className="w-5 h-5" />
                        </a>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="py-3 px-2 font-bold">
                      <div className="inline-flex space-x-3 items-center">
                        <span>
                          <img
                            className="rounded-full w-8 h-8"
                            src="https://images.generated.photos/f_xU7q780YXiKG7IwKVV05eU6Sj2nIodEkN1S8GyM2M/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NDk2MTc4LmpwZw.jpg"
                            alt=""
                          />
                        </span>
                        <span>Mark Spike</span>
                      </div>
                    </td>
                    <td className="py-3 px-2">mark.spike@abc.com</td>
                    <td className="py-3 px-2">Administrator</td>
                    <td className="py-3 px-2">Approved</td>
                    <td className="py-3 px-2">
                      <div className="inline-flex items-center space-x-3">
                        <a href="" title="Edit" className="hover:text-white">
                          <FiEdit className="w-5 h-5" />
                        </a>
                        <a
                          href=""
                          title="Edit password"
                          className="hover:text-white"
                        >
                          <FiLock className="w-5 h-5" />
                        </a>
                        <a
                          href=""
                          title="Suspend user"
                          className="hover:text-white"
                        >
                          <FiUserX className="w-5 h-5" />
                        </a>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
