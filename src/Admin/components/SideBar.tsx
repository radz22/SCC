import logo from "../../assets/logo.jpg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useState } from "react";

interface SidebarItem {
  label: string;
  path: string;
  svg: any;
}

const SideBar = () => {
  const [sideBar] = useState<SidebarItem[]>([
    {
      label: "Dashboard",
      path: "/dashboard",
      svg: (
        <svg
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
      ),
    },
    {
      label: "Section",
      path: "/section",
      svg: (
        <svg
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
      ),
    },
  ]);
  const location = useLocation();
  const isActive = (item: SidebarItem) => location.pathname === item.path;
  const navigate = useNavigate();
  const handleLogout = () => {
    Cookies.remove("status");
    Cookies.remove("token");
    Cookies.remove("usertype");
    Cookies.remove("chatid");
    Cookies.remove("login");

    navigate("/");
    window.location.reload();
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
                <h1 className="text-white text-3xl	 font-semibold px-5 max-xl:text-2xl max-lg:text-lg max-lg:mt-4">
                  St.Clare Collage Caloocan
                </h1>
              </div>
            </div>
            <div className="px-3 mt-12">
              {sideBar.map((item) => (
                <div
                  className={`flex items-center w-full gap-4 hover:bg-[#2d7594] py-2  rounded-md mt-5 max-lg:gap-1 ${
                    isActive(item)
                      ? "bg-[#2d7594] w-auto py-2    rounded-md"
                      : ""
                  }`}
                >
                  <div className="text-white text-lg max-xl:text-base max-lg:text-sm	">
                    {item.svg}
                  </div>
                  <div>
                    <Link key={item.path} to={item.path}>
                      <h1 className="text-2xl	font-bold text-white max-xl:text-xl max-lg:text-lg">
                        {" "}
                        {item.label}
                      </h1>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            <div className=" mt-5 px-3">
              <div className=" flex items-center w-full gap-4 hover:bg-[#2d7594] py-2  rounded-md max-lg:gap-1	 ">
                <div>
                  <svg
                    className="text-white text-lg max-xl:text-base   max-lg:text-sm	"
                    xmlns="http://www.w3.org/2000/svg"
                    width="3em"
                    height="3em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M6 17c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1H6m9-9a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3a3 3 0 0 1 3 3M3 5v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2"
                    />
                  </svg>
                </div>
                <div>
                  <Link to="/contact">
                    <h1 className="text-2xl	font-bold text-white max-xl:text-xl max-lg:text-lg">
                      Contact
                    </h1>
                  </Link>
                </div>
              </div>
            </div>
            <div className=" mt-5 px-3 ">
              <div className=" flex items-center  w-full gap-4 hover:bg-[#2d7594] py-2  rounded-md max-lg:gap-1">
                <div>
                  <svg
                    className="text-white text-lg max-xl:text-base max-lg:text-sm  "
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
                    className="text-2xl	font-bold text-white max-xl:text-xl max-lg:text-lg"
                    onClick={handleLogout}
                  >
                    Logout
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
