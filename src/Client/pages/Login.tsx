import { useState } from "react";
import sccpicture from "../../assets/sccpicture.jpg";
import logoscc from "../../assets/logo.jpg";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

const Login = () => {
  const [viewPassword, setViewPassword] = useState(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const navigate = useNavigate();
  const handleViewPassword = () => {
    setViewPassword(!viewPassword);
  };

  const handleFetch = (decode: any) => {
    axios
      .post(`https://sccbackend-lxvu.onrender.com/UserRoutes/googlefindUser`, {
        email: decode?.email,
        name: decode?.name,
        images: decode?.picture,
      })
      .then((res) => {
        console.log(res.data);
        Cookies.set("userid", res.data.userid, { expires: 1 });
        Cookies.set("login", "google", { expires: 1 });
        Cookies.set("email", res.data.email, { expires: 1 });
        Cookies.set("usertype", res.data.usertype, { expires: 1 });
        Cookies.set("status", "true", { expires: 1 });
        navigate("/");
      });
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "https://sccbackend-lxvu.onrender.com/UserRoutes/signin",
        {
          email: email,
          password: password,
        }
      );
      Cookies.set("userid", response.data.userid, { expires: 1 });
      Cookies.set("email", response.data.email, { expires: 1 });
      Cookies.set("usertype", response.data.usertype, { expires: 1 });
      toast.success("sucess");
      if (response.data.usertype == "admin") {
        navigate("/dashboard");
        Cookies.set("status", "true", { expires: 1 });
        Cookies.set("token", response.data.token, { expires: 1 });
      }
      if (response.data.usertype == "client") {
        Cookies.set("status", "true", { expires: 1 });
        Cookies.set("token", response.data.token, { expires: 1 });

        navigate("/");
      }
    } catch {
      toast.error("no user exist");
    }
  };
  return (
    <div className="w-full h-auto flex  gap-5 ">
      <ToastContainer />
      <div className="w-2/5	mt-10  ">
        <div className="flex items-center justify-center flex-col">
          <div>
            <Link to="/">
              {" "}
              <img src={logoscc} className="w-[100px]" />
            </Link>
          </div>
          <div className="mt-4">
            <h1 className="text-[#CA0000] text-2xl		font-bold uppercase">
              St.Clare College Of Caloocan
            </h1>
          </div>
        </div>

        <div className="mt-16">
          <div>
            <h1 className="text-center text-3xl	font-bold">Sign In</h1>
          </div>
        </div>

        <div className="mt-6">
          <div className="px-3 ">
            <input
              className="bg-[#ebe9e9] border-2 border-[#f3f2f2] rounded-lg  w-full px-3 py-3 text-base cursor-pointer transition outline-none font-semibold hover:border-[black] hover:bg-[#fff] "
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="px-3 mt-8 relative flex justify-center items-center w-full">
            <div className="w-full">
              <input
                className="bg-[#ebe9e9] border-2 border-[#f3f2f2] rounded-lg  w-full px-3 py-3 text-base cursor-pointer transition outline-none font-semibold hover:border-[black] hover:bg-[#fff] "
                type={viewPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="absolute right-5">
              {viewPassword ? (
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 256 256"
                    className="text-xl	"
                    onClick={handleViewPassword}
                  >
                    <rect width="256" height="256" fill="none" />
                    <path
                      fill="currentColor"
                      d="M247.31 124.76c-.35-.79-8.82-19.58-27.65-38.41C194.57 61.26 162.88 48 128 48S61.43 61.26 36.34 86.35C17.51 105.18 9 124 8.69 124.76a8 8 0 0 0 0 6.5c.35.79 8.82 19.57 27.65 38.4C61.43 194.74 93.12 208 128 208s66.57-13.26 91.66-38.34c18.83-18.83 27.3-37.61 27.65-38.4a8 8 0 0 0 0-6.5M128 192c-30.78 0-57.67-11.19-79.93-33.25A133.47 133.47 0 0 1 25 128a133.33 133.33 0 0 1 23.07-30.75C70.33 75.19 97.22 64 128 64s57.67 11.19 79.93 33.25A133.46 133.46 0 0 1 231.05 128c-7.21 13.46-38.62 64-103.05 64m0-112a48 48 0 1 0 48 48a48.05 48.05 0 0 0-48-48m0 80a32 32 0 1 1 32-32a32 32 0 0 1-32 32"
                    />
                  </svg>
                </div>
              ) : (
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                    className="text-xl	"
                    onClick={handleViewPassword}
                  >
                    <rect width="24" height="24" fill="none" />
                    <path
                      fill="currentColor"
                      d="M2 5.27L3.28 4L20 20.72L18.73 22l-3.08-3.08c-1.15.38-2.37.58-3.65.58c-5 0-9.27-3.11-11-7.5c.69-1.76 1.79-3.31 3.19-4.54zM12 9a3 3 0 0 1 3 3a3 3 0 0 1-.17 1L11 9.17A3 3 0 0 1 12 9m0-4.5c5 0 9.27 3.11 11 7.5a11.8 11.8 0 0 1-4 5.19l-1.42-1.43A9.86 9.86 0 0 0 20.82 12A9.82 9.82 0 0 0 12 6.5c-1.09 0-2.16.18-3.16.5L7.3 5.47c1.44-.62 3.03-.97 4.7-.97M3.18 12A9.82 9.82 0 0 0 12 17.5c.69 0 1.37-.07 2-.21L11.72 15A3.064 3.064 0 0 1 9 12.28L5.6 8.87c-.99.85-1.82 1.91-2.42 3.13"
                    />
                  </svg>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="mt-1">
          <p className="text-center">or</p>
        </div>
        <div className="w-[20%]">
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 128 128"
            className=" text-2xl	"
          >
            <rect width="128" height="128" fill="none" />
            <path
              fill="#fff"
              d="M44.59 4.21a63.28 63.28 0 0 0 4.33 120.9a67.6 67.6 0 0 0 32.36.35a57.13 57.13 0 0 0 25.9-13.46a57.44 57.44 0 0 0 16-26.26a74.3 74.3 0 0 0 1.61-33.58H65.27v24.69h34.47a29.72 29.72 0 0 1-12.66 19.52a36.2 36.2 0 0 1-13.93 5.5a41.3 41.3 0 0 1-15.1 0A37.2 37.2 0 0 1 44 95.74a39.3 39.3 0 0 1-14.5-19.42a38.3 38.3 0 0 1 0-24.63a39.25 39.25 0 0 1 9.18-14.91A37.17 37.17 0 0 1 76.13 27a34.3 34.3 0 0 1 13.64 8q5.83-5.8 11.64-11.63c2-2.09 4.18-4.08 6.15-6.22A61.2 61.2 0 0 0 87.2 4.59a64 64 0 0 0-42.61-.38"
            />
            <path
              fill="#e33629"
              d="M44.59 4.21a64 64 0 0 1 42.61.37a61.2 61.2 0 0 1 20.35 12.62c-2 2.14-4.11 4.14-6.15 6.22Q95.58 29.23 89.77 35a34.3 34.3 0 0 0-13.64-8a37.17 37.17 0 0 0-37.46 9.74a39.25 39.25 0 0 0-9.18 14.91L8.76 35.6A63.53 63.53 0 0 1 44.59 4.21"
            />
            <path
              fill="#f8bd00"
              d="M3.26 51.5a63 63 0 0 1 5.5-15.9l20.73 16.09a38.3 38.3 0 0 0 0 24.63q-10.36 8-20.73 16.08a63.33 63.33 0 0 1-5.5-40.9"
            />
            <path
              fill="#587dbd"
              d="M65.27 52.15h59.52a74.3 74.3 0 0 1-1.61 33.58a57.44 57.44 0 0 1-16 26.26c-6.69-5.22-13.41-10.4-20.1-15.62a29.72 29.72 0 0 0 12.66-19.54H65.27c-.01-8.22 0-16.45 0-24.68"
            />
            <path
              fill="#319f43"
              d="M8.75 92.4q10.37-8 20.73-16.08A39.3 39.3 0 0 0 44 95.74a37.2 37.2 0 0 0 14.08 6.08a41.3 41.3 0 0 0 15.1 0a36.2 36.2 0 0 0 13.93-5.5c6.69 5.22 13.41 10.4 20.1 15.62a57.13 57.13 0 0 1-25.9 13.47a67.6 67.6 0 0 1-32.36-.35a63 63 0 0 1-23-11.59A63.7 63.7 0 0 1 8.75 92.4"
            />
          </svg> */}
          <GoogleLogin
            onSuccess={(credentialResponse: any) => {
              const decode = jwtDecode(credentialResponse.credential);
              handleFetch(decode);
            }}
            onError={() => {
              console.log("Login Failed");
            }}
          />
          ;
        </div>

        <div className="mt-10 flex items-center justify-center w-full">
          <div
            className="w-fit bg-[#e2e2e2]  px-5 py-3 rounded-lg
      
"
            onClick={handleLogin}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              className="text-4xl text-[#a2a2a2]	"
            >
              <rect width="24" height="24" fill="none" />
              <g fill="none">
                <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                <path
                  fill="currentColor"
                  d="m15.06 5.283l5.657 5.657a1.5 1.5 0 0 1 0 2.12l-5.656 5.658a1.5 1.5 0 0 1-2.122-2.122l3.096-3.096H4.5a1.5 1.5 0 0 1 0-3h11.535L12.94 7.404a1.5 1.5 0 0 1 2.122-2.121Z"
                />
              </g>
            </svg>
          </div>
        </div>

        <div className="mt-7">
          <p className="font-black tracking-widest text-lg	 cursor-pointer text-[gray] hover:text-black text-center">
            <Link to="/resetpassword">Can't Sign In?</Link>
          </p>
          <p className="font-black tracking-widest text-lg	 cursor-pointer text-[gray] hover:text-black text-center mt-2">
            <Link to="/register"> Create Account</Link>
          </p>
        </div>
      </div>

      <div className="w-3/5	">
        <div className="w-full ">
          <img src={sccpicture} className="w-full h-screen" />
        </div>
      </div>
    </div>
  );
};

export default Login;
