import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

const ChatSideBar = () => {
  const [search, setSearch] = useState<string>("");

  const [user, setUser] = useState<any[]>([]);
  const fetchData = async () => {
    await axios
      .get("https://sccbackend.onrender.com/UserRoutes")
      .then((res) => {
        setUser(res.data);
      });
  };

  useEffect(() => {
    setInterval(() => {
      fetchData();
    }, 1000);
  }, []);

  console.log(user);
  const storeId = (id: string) => {
    Cookies.set("chatid", id, { expires: 1 });
  };
  return (
    <div className="w-full h-screen overflow-auto bg-[#d7d7d7] px-3 py-5 ">
      <div className="mb-10 ">
        <Link to="/dashboard">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 512 512"
              className="text-4xl	"
            >
              <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="48"
                d="M244 400L100 256l144-144M120 256h292"
              />
            </svg>
          </div>
        </Link>
      </div>
      <div className="w-full">
        <input
          type="text"
          placeholder="search user..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full bg-[#ebe9e9] border-2 border-[#f3f2f2] rounded-lg  px-3 py-3 text-base cursor-pointer transition outline-none font-semibold hover:border-[black] hover:bg-[#fff] "
        />
      </div>
      <div className="mt-4">
        {user
          .filter(
            (item) =>
              item.name !== "admin" &&
              item.name.toLowerCase().includes(search.toLowerCase())
          )
          .map((item) => (
            <div className="flex items-center gap-4 py-2">
              <div>
                <img src={item.images} className="w-12	h-12	rounded-full" />
              </div>
              <div>
                <h1
                  className="text-[#2d7594] font-semibold text-base cursor-pointer	"
                  onClick={() => storeId(item._id)}
                >
                  {item.name}
                </h1>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ChatSideBar;
