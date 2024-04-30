import scc from "../../assets/logo.jpg";
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
const ResetPassword = () => {
  const [email, setEmail] = useState<string>("");
  const navigate = useNavigate();
  const handleOtp = () => {
    axios
      .post("https://sccbackend.onrender.com/UserRoutes/resetotp", {
        email: email,
      })
      .then((response) => {
        Cookies.set("otpresetpassword", response.data.OTP, { expires: 1 });
        Cookies.set("otpemail", email, { expires: 1 });
        navigate("/resetotp");
      });
  };
  return (
    <div className="w-full h-screen flex items-center justify-center flex-col">
      <div>
        <img src={scc} />
      </div>
      <div>
        <h1 className="text-center text-3xl	 font-semibold">
          Reset Your Password
        </h1>
        <p className="text-lg	">
          {" "}
          Fear not. We'll email you instruction to reset password
        </p>
      </div>
      <div className="ml-8 w-2/6	mt-10	">
        <div>
          <h1 className="text-lg font-semibold">Email</h1>
        </div>
        <div className="mt-4">
          <input
            type="text"
            className="w-full border-[2px] border-[#808080] outline-none px-3 py-3 rounded	"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mt-5">
          <button
            className="text-xl font-medium bg-[#2d7594]	text-white py-3 px-7"
            onClick={handleOtp}
          >
            Reset Password
          </button>

          <Link to="/login">
            <button className="ml-5 text-[#2d7594] font-semibold border-b-[1px] border-[#a4a4a4]">
              Return to login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
