import React from "react";
import Cookies from "js-cookie";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
interface userData {
  name: string | any;
  images: string | any;
}

const Sidebar: React.FC<userData> = (props) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    Cookies.remove("status");
    Cookies.remove("token");
    Cookies.remove("userid");
    Cookies.remove("email");
    Cookies.remove("usertype");
    Cookies.remove("login");
    Cookies.remove("displayname");
    navigate("/");
    window.location.reload();
  };

  const handleDelete = () => {
    axios
      .post(`https://sccbackend.onrender.com/UserRoutes/deleteuser`, {
        email: Cookies.get("email"),
      })
      .then(() => {
        toast.success("sucess");
        Cookies.remove("status");
        Cookies.remove("token");
        Cookies.remove("userid");
        Cookies.remove("email");

        navigate("/");
        window.location.reload();
      })
      .catch(() => {
        toast.error("no user exist");
      });
  };
  return (
    <div className="w-full px-5 py-5 bg-white shadow-lg shadow-[#b0b0b0] h-screen	">
      <ToastContainer />
      <div className="flex items-center justify-center flex-col">
        <div className="w-full flex items-center justify-center ">
          <img
            src={props.images}
            className=" w-44		rounded-full h-44	

            "
          />
        </div>
        <div className="mt-5">
          <h1 className="text-2xl	font-semibold">{props.name}</h1>
        </div>
      </div>
      <div className="mt-32 cursor-pointer	">
        <div className="flex items-center  gap-5">
          <div className="	bg-[#d5d3d3]  px-3 py-3 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              className="text-black text-3xl	"
            >
              <path
                fill="currentColor"
                d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 2a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2m0 7c2.67 0 8 1.33 8 4v3H4v-3c0-2.67 5.33-4 8-4m0 1.9c-2.97 0-6.1 1.46-6.1 2.1v1.1h12.2V17c0-.64-3.13-2.1-6.1-2.1"
              />
            </svg>
          </div>
          <div>
            <p className="text-[#595959] text-2xl		font-semibold		">Edit Profile</p>
          </div>
        </div>
      </div>

      <div className="mt-7 cursor-pointer	">
        <div className="flex items-center  gap-4" onClick={handleDelete}>
          <div className="	bg-[#d5d3d3]  px-3 py-3 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              className="text-black text-3xl	"
            >
              <g
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-width="2"
              >
                <path
                  stroke-dasharray="20"
                  stroke-dashoffset="20"
                  d="M3 21V20C3 17.7909 4.79086 16 7 16H11C13.2091 16 15 17.7909 15 20V21"
                >
                  <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    dur="0.4s"
                    values="20;0"
                  />
                </path>
                <path
                  stroke-dasharray="20"
                  stroke-dashoffset="20"
                  d="M9 13C7.34315 13 6 11.6569 6 10C6 8.34315 7.34315 7 9 7C10.6569 7 12 8.34315 12 10C12 11.6569 10.6569 13 9 13Z"
                >
                  <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    begin="0.5s"
                    dur="0.4s"
                    values="20;0"
                  />
                </path>
                <path
                  stroke-dasharray="10"
                  stroke-dashoffset="10"
                  d="M15 3L21 9"
                >
                  <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    begin="1s"
                    dur="0.2s"
                    values="10;0"
                  />
                </path>
                <path
                  stroke-dasharray="10"
                  stroke-dashoffset="10"
                  d="M21 3L15 9"
                >
                  <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    begin="1.2s"
                    dur="0.2s"
                    values="10;0"
                  />
                </path>
              </g>
            </svg>
          </div>
          <div>
            <p className="text-[#595959] text-2xl		font-semibold		">
              Delete Account
            </p>
          </div>
        </div>
      </div>
      <Link to="/">
        <div className="mt-7 cursor-pointer	">
          <div className="flex items-center  gap-4">
            <div className="	bg-[#d5d3d3]  px-3 py-3 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                className="text-black text-3xl	"
              >
                <path
                  fill="currentColor"
                  d="M6 19h3v-6h6v6h3v-9l-6-4.5L6 10zm-2 2V9l8-6l8 6v12h-7v-6h-2v6zm8-8.75"
                />
              </svg>
            </div>
            <div>
              <p className="text-[#595959] text-2xl		font-semibold		">Home</p>
            </div>
          </div>
        </div>
      </Link>
      <div className="mt-7 cursor-pointer	">
        <div className="flex items-center gap-4" onClick={handleLogout}>
          <div className="bg-[#d5d3d3]  px-3 py-3 rounded-full	">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              className="text-black text-3xl	"
            >
              <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M20 12h-9.5m7.5 3l3-3l-3-3m-5-2V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2v-1"
              />
            </svg>
          </div>
          <div>
            <p className="text-[#595959] text-2xl		font-semibold	">Logout</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
