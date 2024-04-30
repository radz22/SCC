import React from "react";
import Cookies from "js-cookie";
import { Link, useNavigate } from "react-router-dom";
interface userData {
  name: string | any;
  images: string | any;
  usersection: string | any;
}

const DropDownUserMenu: React.FC<userData> = (props) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    Cookies.remove("status");
    Cookies.remove("token");
    Cookies.remove("userid");
    Cookies.remove("email");
    navigate("/");
    window.location.reload();
  };
  console.log(props.usersection);
  return (
    <div className="bg-white px-5 py-7 rounded-md	">
      <div className="flex items-center gap-7">
        <div>
          <img src={props.images} className="rounded-full w-14	h-14	" />
        </div>
        <div className="flex   flex-col">
          <Link to="/profile">
            {" "}
            <h1 className="text-black text-2xl	font-semibold ">{props.name}</h1>
          </Link>
          {props.usersection == "" ? (
            <div>
              <h1 className="text-black text-lg	font-semibold">
                Pending Section...
              </h1>
            </div>
          ) : (
            <h1 className="text-black text-xl	font-semibold">
              {props.usersection}
            </h1>
          )}
        </div>
      </div>

      <div className="border-b-2 border-[#919191] mt-4"></div>

      <Link to="/edituser">
        <div className="flex items-center justify-between mt-7 cursor-pointer	">
          <div className="flex items-center justify-center gap-5">
            <div className="bg-[#d5d3d3]  px-3 py-3 rounded-full	">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                className="text-black text-3xl	"
              >
                <path
                  fill="currentColor"
                  d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4"
                />
              </svg>
            </div>
            <div>
              <p className="text-[#595959] text-2xl		font-medium		">Edit Profile</p>
            </div>
          </div>

          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              className="text-black"
            >
              <path
                fill="currentColor"
                d="M12.6 12L8 7.4L9.4 6l6 6l-6 6L8 16.6z"
              />
            </svg>
          </div>
        </div>
      </Link>

      <div
        className="flex items-center justify-between mt-7 cursor-pointer	"
        onClick={handleLogout}
      >
        <div className="flex items-center justify-center gap-5">
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
            <p className="text-[#595959] text-2xl		font-medium		">Logout</p>
          </div>
        </div>

        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            className="text-black"
          >
            <path
              fill="currentColor"
              d="M12.6 12L8 7.4L9.4 6l6 6l-6 6L8 16.6z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default DropDownUserMenu;
