import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Client/pages/Login";
import Home from "./Client/pages/Home";
import Register from "./Client/pages/Register";
import Otp from "./Client/pages/Otp";
import About from "./Client/pages/About";
import Lms from "./Client/pages/Lms";
import EditUser from "./Client/pages/EditUser";
import Fillup from "./Client/pages/Fillup";
import DashBoard from "./Admin/pages/DashBoard";
import Section from "./Admin/pages/Section";
import Profile from "./Client/pages/Profile";
import ResetPassword from "./Client/pages/ResetPassword";
import ResetOtp from "./Client/pages/ResetOtp";
import ResetPasswordLast from "./Client/pages/ResetPasswordLast";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Client Routes*/}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/edituser" element={<EditUser />} />
          <Route path="/lms" element={<Lms />} />
          <Route path="/register" element={<Register />} />
          <Route path="/otpsignup" element={<Otp />} />
          <Route path="/fillup" element={<Fillup />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/resetpassword" element={<ResetPassword />} />
          <Route path="/resetotp" element={<ResetOtp />} />
          <Route path="/resetpasswordlast" element={<ResetPasswordLast />} />

          {/* Admin Routes*/}
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/section" element={<Section />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
