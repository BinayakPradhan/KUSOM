import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import HelperSignup from "./pages/HelperSignup";
import Error from "./pages/Error";
import Logout from "./pages/Logout";
import User from "./pages/User";

import Navbar from "./components/Navbar";
import ChooseLogin from "./pages/ChooseLogin";
import Handyman from "./pages/Handyman";
import Business from "./pages/Business";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/helpersignup" element={<HelperSignup />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/chooselogin" element={<ChooseLogin />} />
          <Route path="/user" element={<User />} />
          <Route path="/handyman" element={<Handyman />} />
          <Route path="/business" element={<Business />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
