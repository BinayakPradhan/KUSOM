import { NavLink } from "react-router-dom";
import logo from "../assets/svg/logo-no-background.svg";
import { useAuth } from "../context/auth";
export default function Navbar() {
  const { isLoggedIn } = useAuth();
  return (
    <>
      <header className="bg-slate-600">
        <div className="max-w-7xl py-8 px-6 flex  justify-between">
          <div>
            <NavLink to="/">
              <img src={logo} alt="HomeHelp Logo" className="w-48" />
            </NavLink>
          </div>
          <nav>
            <ul className="flex  gap-32 text-white">
              {isLoggedIn ? (
                <li>
                  <NavLink to="/logout">Logout</NavLink>
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
                    <NavLink to="/helpersignup">Become a Handyman</NavLink>
                  </li>
                </>
              )}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
