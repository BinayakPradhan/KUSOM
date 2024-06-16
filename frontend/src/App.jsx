// import { BrowserRouter, Route, Routes } from "react-router-dom";

// import Home from "./pages/Home";
// import Signup from "./pages/Signup";
// import Login from "./pages/Login";
// import HelperSignup from "./pages/HelperSignup";
// import Error from "./pages/Error";
// import Logout from "./pages/Logout";
// import User from "./pages/User";
// import LoginHandy from "./pages/LoginHandy";

// import Navbar from "./components/Navbar";
// import ChooseLogin from "./pages/ChooseLogin";
// import Handyman from "./pages/Handyman";

// import History from "./pages/History";
// import Shop from "./pages/Shop";
// import Product from "./pages/Product";

// import UserProduct from "./pages/UserProduct";
// import HistoryDetail from "./pages/HistoryDetail";

// const App = () => {
//   return (
//     <>
//       <BrowserRouter>
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/login/handyman" element={<LoginHandy />} />

//           <Route path="/signup" element={<Signup />} />
//           <Route path="/helpersignup" element={<HelperSignup />} />
//           <Route path="/chooselogin" element={<ChooseLogin />} />

//           <Route path="/logout" element={<Logout />} />
//           <Route path="/user" element={<User />} />
//           <Route path="/handyman" element={<Handyman />} />
//           <Route path="/user/addproduct" element={<UserProduct />} />

//           <Route path="/user/history" element={<History />} />
//           <Route path="/user/history/detail" element={<HistoryDetail />} />
//           <Route path="/user/shop" element={<Shop />} />
//           <Route path="/user/shop/product/:id" element={<Product />} />
//           <Route path="*" element={<Error />} />
//         </Routes>
//       </BrowserRouter>
//     </>
//   );
// };

// export default App;
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HandyProfile from "./pages/HandyProfile";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import HelperSignup from "./pages/HelperSignup";
import Error from "./pages/Error";
import Logout from "./pages/Logout";
import User from "./pages/User";
import LoginHandy from "./pages/LoginHandy";
import HistoryDetailss from "./pages/HistoryDetailss";
import Navbar from "./components/Navbar";
import ChooseLogin from "./pages/ChooseLogin";
import Handyman from "./pages/Handyman";

import History from "./pages/History";
import Shop from "./pages/Shop";
import Product from "./pages/Product";
import Footer from "./components/Footer";
import UserProduct from "./pages/UserProduct";
import HistoryDetail from "./pages/HistoryDetail";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/login/handyman" element={<LoginHandy />} />

          <Route path="/signup" element={<Signup />} />
          <Route path="/helpersignup" element={<HelperSignup />} />
          <Route path="/chooselogin" element={<ChooseLogin />} />

          <Route path="/logout" element={<Logout />} />
          <Route path="/handyProfile" element={<HandyProfile />} />
          <Route path="/user" element={<User />} />
          <Route path="/handyman" element={<Handyman />} />
          <Route path="/user/addproduct" element={<UserProduct />} />

          <Route path="/user/history" element={<History />} />
          <Route path="/user/history/detail" element={<HistoryDetail />} />
          <Route path="/user/history/details" element={<HistoryDetailss />} />
          <Route path="/user/shop" element={<Shop />} />
          <Route path="/user/shop/product/:idd" element={<Product />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
