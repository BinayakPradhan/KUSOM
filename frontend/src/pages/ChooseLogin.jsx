import { FaUser, FaUserCog } from "react-icons/fa";
import User from "../assets/user.png";
import Handyman from "../assets/handyman.png";
import NewUser from "../assets/new.png";
import { useNavigate } from "react-router-dom";
const ChooseLogin = () => {
  const navigate = useNavigate();
  return (
    <div className="p-24 gap-40 flex flex-wrap items-center justify-center">
      <div
        className="flex-shrink-0 m-6 relative overflow-hidden cursor-pointer bg-secondary hover:bg-green-600 rounded-lg max-w-xs shadow-lg"
        onClick={() => navigate("/login?text=user")}
      >
        <FaUser
          className="absolute bottom-0 left-0 mb-8"
          style={{ transform: "scale(1.05)", opacity: 0.1 }}
          size={375}
        />
        <div className="relative pt-10 px-10 flex items-center justify-center">
          <div
            className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
            style={{
              background: "radial-gradient(black, transparent 60%)",
              transform: "rotate3d(0, 0, 1, 40deg) scale3d(0.5, 0.6, 0.5)",
              opacity: 0.2,
            }}
          ></div>
          <img className="relative w-40 scale-150" src={NewUser} alt="User" />
        </div>
        <div className="relative text-white px-6 pb-6 mt-6">
          <span className="block opacity-75 -mb-1">Login as</span>
          <div className="flex justify-between">
            <span className="block font-semibold text-xl">User</span>
            <span className=" rounded-full text-teal-500 text-xs font-bold px-3 py-2 leading-none flex items-center"></span>
          </div>
        </div>
      </div>

      <div
        className="flex-shrink-0 m-6 relative overflow-hidden cursor-pointer bg-tertiary hover:bg-green-600 rounded-lg max-w-xs shadow-lg"
        onClick={() => navigate("/login?text=handyman")}
      >
        <FaUserCog
          className="absolute bottom-0 left-0 mb-8"
          style={{ transform: "scale(1.05)", opacity: 0.1 }}
          size={375}
        />
        <div className="relative pt-10 px-10 flex items-center justify-center">
          <div
            className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
            style={{
              background: "radial-gradient(black, transparent 60%)",
              transform: "rotate3d(0, 0, 1, 40deg) scale3d(1, 0.6, 1)",
              opacity: 0.2,
            }}
          ></div>
          <img className="relative w-40" src={Handyman} alt="Handyman" />
        </div>
        <div className="relative text-white px-6 pb-6 mt-6">
          <span className="block opacity-75 -mb-1">Login as</span>
          <div className="flex justify-between">
            <span className="block font-semibold text-xl">Handyman</span>
            <span className=" rounded-full text-purple-500 text-xs font-bold px-3 py-2 leading-none flex items-center"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseLogin;
