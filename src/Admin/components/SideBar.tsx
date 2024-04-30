import logo from "../../assets/logo.jpg";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

const SideBar = () => {
  const handleLogout = () => {
    Cookies.remove("status");
    Cookies.remove("token");
    window.open("https://sccbackend.onrender.com/auth/logout", "_self");
  };

  return (
    <div className="W-full h-screen">
      <div className="w-full">
        <div className="flex justify-between   ">
          <div className="h-screen bg-gray-900 shadow-md  ">
            <div className="justify-center flex mt-5">
              <img className="w-[30%]" src={logo} alt="" />
            </div>
            <div className="w-full ">
              <div className="text-center">
                <h1 className="text-white text-[35px] font-semibold px-5">
                  St.Clare Collage Caloocan
                </h1>
              </div>
            </div>
            <div className=" mt-20">
              <div className=" flex items-center ml-10 w-full gap-4">
                <div>
                  <svg
                    className="bg-white flex justify-center  rounded   "
                    xmlns="http://www.w3.org/2000/svg"
                    width="3em"
                    height="3em"
                    viewBox="0 0 24 24"
                  >
                    <rect width="24" height="24" fill="none" />
                    <path
                      fill="currentColor"
                      d="M13 9V3h8v6zM3 13V3h8v10zm10 8V11h8v10zM3 21v-6h8v6z"
                    />
                  </svg>
                </div>
                <div>
                  <Link to="/dashboard">
                    <h1 className="text-3xl	font-bold text-white">Dashboard</h1>
                  </Link>
                </div>
              </div>
              <hr className="bg-[#ffffffad] w-[80%]   ml-10 mt-2  border-2"></hr>
            </div>

            <div className=" mt-10">
              <div className=" flex items-center ml-10 w-full gap-4">
                <div>
                  <svg
                    className="bg-white flex justify-center rounded "
                    xmlns="http://www.w3.org/2000/svg"
                    width="3em"
                    height="3em"
                    viewBox="0 0 256 256"
                  >
                    <rect width="256" height="256" fill="none" />
                    <path
                      fill="currentColor"
                      d="m226.53 56.41l-96-32a8 8 0 0 0-5.06 0l-96 32A8 8 0 0 0 24 64v80a8 8 0 0 0 16 0V75.1l33.59 11.19a64 64 0 0 0 20.65 88.05c-18 7.06-33.56 19.83-44.94 37.29a8 8 0 1 0 13.4 8.74C77.77 197.25 101.57 184 128 184s50.23 13.25 65.3 36.37a8 8 0 0 0 13.4-8.74c-11.38-17.46-27-30.23-44.94-37.29a64 64 0 0 0 20.65-88l44.12-14.7a8 8 0 0 0 0-15.18ZM176 120a48 48 0 1 1-86.65-28.45l36.12 12a8 8 0 0 0 5.06 0l36.12-12A47.89 47.89 0 0 1 176 120m-48-32.43L57.3 64L128 40.43L198.7 64Z"
                    />
                  </svg>
                </div>
                <div>
                  <Link to="/section">
                    {" "}
                    <h1 className="text-3xl	font-bold text-white">Section</h1>
                  </Link>
                </div>
              </div>
              <hr className="bg-[#ffffffad] w-[80%]   ml-10 mt-2  border-2"></hr>
            </div>
            <div className=" mt-10">
              <div className=" flex items-center ml-10 w-full gap-4">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 15 15"
                    className="bg-white flex justify-center rounded text-5xl"
                  >
                    <path
                      fill="currentColor"
                      fill-rule="evenodd"
                      d="M11 2H4V0H3v2H1.5A1.5 1.5 0 0 0 0 3.5v8A1.5 1.5 0 0 0 1.5 13h12a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 13.5 2H12V0h-1zM3 6a2 2 0 1 1 4 0a2 2 0 0 1-4 0m-.618 4.618a2.927 2.927 0 0 1 5.236 0l.33.658A.5.5 0 0 1 7.5 12h-5a.5.5 0 0 1-.447-.724zM9 6h3V5H9zm0 3h3V8H9z"
                      clip-rule="evenodd"
                    />
                    <path fill="currentColor" d="M15 14v1H0v-1z" />
                  </svg>
                </div>
                <div>
                  <h1 className="text-3xl	font-bold text-white">Contact</h1>
                </div>
              </div>
              <hr className="bg-[#ffffffad] w-[80%]   ml-10 mt-2  border-2"></hr>
            </div>
            <div className=" mt-10">
              <div className=" flex items-center ml-10 w-full gap-4">
                <div>
                  <svg
                    className="bg-white flex justify-center   rounded  "
                    xmlns="http://www.w3.org/2000/svg"
                    width="3em"
                    height="3em"
                    viewBox="0 0 24 24"
                  >
                    <rect width="24" height="24" fill="none" />
                    <path
                      fill="currentColor"
                      d="m17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5M4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4z"
                    />
                  </svg>
                </div>
                <div>
                  <h1
                    className="text-3xl	font-bold text-white"
                    onClick={handleLogout}
                  >
                    Logout
                  </h1>
                </div>
              </div>
              <hr className="bg-[#ffffffad] w-[80%]   ml-10 mt-2  border-2"></hr>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
