import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import { Link } from "react-router-dom";
import DropDownUserMenu from "./DropDownUserMenu";
interface userData {
  section: string;
  cloudnaryid: string;
  _id: string;
  images: string;
  name: string;
  email: string;
  usertype: string;
}
const UserData = () => {
  const [dropDown, setDropDown] = useState(false);
  const [user, setUser] = useState<userData | null>();

  const fetchData = async () => {
    try {
      await axios
        .get("https://sccbackend.onrender.com/auth/user", {
          withCredentials: true,
        })
        .then((res: any) => {
          Cookies.set("status", res.data.status, { expires: 1 });
          setUser(res.data.data);
          Cookies.set("userid", res.data.userid, { expires: 1 });
          Cookies.set("email", res.data.email, { expires: 1 });
        });
    } catch {
      console.log("waiting");
    }
  };

  useEffect(() => {
    setInterval(() => {
      fetchData();
    }, 1000);
  }, []);

  const token = Cookies.get("token");
  useEffect(() => {
    axios
      .post("https://sccbackend.onrender.com/UserRoutes/userdata", {
        token: token,
      })
      .then((res) => {
        setUser(res.data.data);
      });
  }, []);

  const handleDropDown = () => {
    setDropDown(!dropDown);
  };

  const status = Cookies.get("status");
  console.log(user);
  return (
    <div>
      {status == "true" ? (
        <div>
          <div className="flex justify-center items-center gap-2 relative">
            <div>
              <img src={user?.images} className="rounded-full w-14	h-14	" />
            </div>
            <div>
              <div onClick={handleDropDown}>
                {dropDown ? (
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                    >
                      <rect width="24" height="24" fill="none" />
                      <path
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m17 14l-5-5m0 0l-5 5"
                      />
                    </svg>
                  </div>
                ) : (
                  <div onClick={handleDropDown}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                    >
                      <rect width="24" height="24" fill="none" />
                      <path
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m7 10l5 5m0 0l5-5"
                      />
                    </svg>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="z-1 absolute right-5 w-[450px]		mt-5">
            {dropDown && (
              <DropDownUserMenu
                images={user?.images}
                name={user?.name}
                usersection={user?.section}
              />
            )}
          </div>
        </div>
      ) : (
        <Link to="/login">
          {" "}
          <div>Login</div>
        </Link>
      )}
    </div>
  );
};

export default UserData;
