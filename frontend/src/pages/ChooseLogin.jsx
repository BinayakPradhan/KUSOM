import Handyman from "../assets/handyman.png";
import NewUser from "../assets/new.png";
import Business from "../assets/business.png";
import { useNavigate } from "react-router-dom";

const ChooseLogin = () => {
  const navigate = useNavigate();
  return (
    <div className="p-24 gap-10 flex flex-wrap items-center justify-center">
      <div
        className="flex-shrink-0 m-6 relative overflow-hidden cursor-pointer bg-secondary hover:bg-green-600 rounded-lg max-w-xs shadow-lg h-96 flex flex-col justify-between"
        onClick={() => navigate("/login")}
      >
        <div className="relative pt-10 px-10 flex items-center justify-center">
          <div
            className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
            style={{
              background: "radial-gradient(black, transparent 60%)",
              transform: "rotate3d(0, 0, 1, 40deg) scale3d(0.5, 0.6, 0.5)",
              opacity: 0.2,
            }}
          ></div>
          <img
            className="relative w-40 scale-150"
            src="src/assets/PngItem_367727.png"
            alt="User"
          />
        </div>
        <div className="relative text-white px-6 pb-6">
          <span className="block opacity-75 mb-1">Login as</span>
          <div className="flex justify-between">
            <span className="block font-semibold text-xl">User</span>
          </div>
        </div>
      </div>

      <div
        className="flex-shrink-0 m-6 relative overflow-hidden cursor-pointer bg-tertiary hover:bg-green-600 rounded-lg max-w-xs shadow-lg h-96 flex flex-col justify-between"
        onClick={() => navigate("/login/handyman")}
      >
        <div className="relative pt-10 px-10 flex items-center justify-center">
          <div
            className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
            style={{
              background: "radial-gradient(black, transparent 60%)",
              transform: "rotate3d(0, 0, 1, 40deg) scale3d(1, 0.6, 1)",
              opacity: 0.2,
            }}
          ></div>
          <img
            className="relative h-60"
            src="src/assets/PngItem_1596254.png"
            alt="Handyman"
          />
        </div>
        <div className="relative text-white px-6 pb-6">
          <span className="block opacity-75 mb-1">Login as</span>
          <div className="flex justify-between">
            <span className="block font-semibold text-xl">Handyman</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseLogin;
