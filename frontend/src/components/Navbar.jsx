// import { useEffect, useState } from "react";
// import { NavLink } from "react-router-dom";
// import { HiMenu } from "react-icons/hi";
// import { useAuth } from "../context/auth";
// import logo from "../assets/svg/logo-no-background.svg";
// import Button from "./Button";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const { isLoggedIn, LogoutUser } = useAuth();

//   const handleLogout = () => {
//     LogoutUser(); // Assuming useAuth provides a logout function
//   };

//   return (
//     <header className="bg-slate-600">
//       <div className="max-w-screen py-4 px-6 md:py-8 md:px-6 flex justify-between items-center">
//         {/* Logo */}
//         <NavLink to="/">
//           <img src={logo} alt="HomeHelp Logo" className="w-32 h-auto" />
//         </NavLink>

//         {/* Menu Icon for Small Screens */}
//         <div className="md:hidden">
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className="text-white focus:outline-none"
//           >
//             <HiMenu className="w-8 h-8" />
//           </button>
//         </div>

//         {/* Nav Links */}
//         <nav className="md:flex md:items-center md:justify-end hidden">
//           <ul className="flex gap-8 text-white items-center">
//             {isLoggedIn ? (
//               <li>
//                 <button onClick={handleLogout} className="text-white">
//                   Logout
//                 </button>
//               </li>
//             ) : (
//               <>
//                 <li>
//                   <NavLink to="/signup">Sign Up</NavLink>
//                 </li>
//                 <li>
//                   <NavLink to="/chooselogin">Login</NavLink>
//                 </li>
//                 <li>
//                   <NavLink to="/helpersignup">
//                     <Button topic={"Become a Handyman"} />
//                   </NavLink>
//                 </li>
//               </>
//             )}
//           </ul>
//         </nav>
//       </div>

//       {/* Dropdown Menu for Small Screens */}
//       {isOpen && (
//         <div className="md:hidden bg-white shadow-lg">
//           <div className="py-1">
//             {isLoggedIn ? (
//               <button
//                 onClick={handleLogout}
//                 className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
//               >
//                 Logout
//               </button>
//             ) : (
//               <>
//                 <NavLink
//                   to="/signup"
//                   className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
//                 >
//                   Sign Up
//                 </NavLink>
//                 <NavLink
//                   to="/chooselogin"
//                   className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
//                 >
//                   Login
//                 </NavLink>
//                 <NavLink
//                   to="/helpersignup"
//                   className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
//                 >
//                   Become a Handyman
//                 </NavLink>
//               </>
//             )}
//           </div>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Navbar;
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import { useAuth } from "../context/auth";
import logo from "../assets/png/logo.png";
import Button from "./Button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isLoggedIn, LogoutUser } = useAuth();

  const handleLogout = () => {
    LogoutUser(); // Assuming useAuth provides a logout function
  };

  return (
    <header className="bg-[#e98e72]">
      <div className="max-w-screen px-6 py-2 flex justify-between items-center">
        {/* Logo */}
        <NavLink to="/">
          <img src={logo} alt="HomeHelp Logo" className="w-64 h-auto" />
        </NavLink>

        {/* Menu Icon for Small Screens */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <HiMenu className="w-8 h-8" />
          </button>
        </div>

        {/* Nav Links */}
        <nav className="md:flex md:items-center md:justify-end hidden">
          <ul className="flex gap-8 text-white items-center">
            {isLoggedIn ? (
              <li>
                <button onClick={handleLogout} className="text-white">
                  Logout
                </button>
              </li>
            ) : (
              <>
                <li>
                  <NavLink to="/signup">Sign Up</NavLink>
                </li>
                <li>
                  <NavLink to="/chooselogin">Login</NavLink>
                </li>
                <li>
                  <NavLink to="/helpersignup">
                    <Button topic={"Become a Handyman"} />
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>

      {/* Dropdown Menu for Small Screens */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="py-1">
            {isLoggedIn ? (
              <button
                onClick={handleLogout}
                className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
              >
                Logout
              </button>
            ) : (
              <>
                <NavLink
                  to="/signup"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
                >
                  Sign Up
                </NavLink>
                <NavLink
                  to="/chooselogin"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
                >
                  Login
                </NavLink>
                <NavLink
                  to="/helpersignup"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
                >
                  Become a Handyman
                </NavLink>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
