import axios from "axios";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

interface chat {
  studentid: string;
  id: string;
  email: string;
  message: string;
}
const Chat = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [message, setMessage] = useState<chat[]>([]);
  const [inputMessage, setInputMessage] = useState<string>("");
  const handleOpen = () => {
    setOpen(!open);
  };

  const email = Cookies.get("email");
  const fetchData = async () => {
    await axios
      .post("https://sccbackend.onrender.com/messageroutes/findusers", {
        id: Cookies.get("userid"),
      })
      .then((res) => {
        setMessage(res.data);
      });
  };

  useEffect(() => {
    setInterval(() => {
      fetchData();
    }, 1000);
  }, []);

  const sendMessage = () => {
    axios.post("https://sccbackend.onrender.com/messageroutes/", {
      studentid: Cookies.get("userid"),
      email: email,
      message: inputMessage,
    });
    setInputMessage("");
  };
  return (
    <div>
      <div className="mb-10	">
        {open && (
          <div className=" h-[450px]	bg-white w-96			">
            <div className="">
              <div className="py-3 bg-[#2d7594]">
                <h1 className="text-center text-white text-xl font-semibold ">
                  ADMIN
                </h1>
              </div>

              <div className="py-3 px-3 w-full h-80	 overflow-auto	">
                {message.map((item) => (
                  <div>
                    {item.email == email ? (
                      <div className="flex items-end justify-end gap-4 mt-3 flex-col">
                        <div className="bg-[#2d7594] px-2 py-2 w-auto">
                          <h1 className="font-bold text-white">{item.email}</h1>
                          <p className="text-white">{item.message}</p>
                        </div>
                      </div>
                    ) : (
                      <div className="flex items-start justify-start gap-4 flex-col">
                        <div className="bg-[#d7d7d7] px-2 py-2 w-auto mt-3">
                          <h1 className="font-bold">{item.email}</h1>
                          <p>{item.message}</p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full mt-5 flex items-center justify-center">
              <div className="w-full		px-2">
                <input
                  type="text"
                  className="bg-[#ebe9e9] border-2 border-[#f3f2f2] rounded-lg  w-full px-3 py-3 text-base cursor-pointer transition outline-none font-semibold hover:border-[black] hover:bg-[#fff] "
                  placeholder="Message"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                />
              </div>
              <div className=" bg-[#2d7594] px-3 py-3 mr-3	">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  className="text-white text-2xl"
                  onClick={sendMessage}
                >
                  <path fill="currentColor" d="M3 20v-6l8-2l-8-2V4l19 8z" />
                </svg>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="bg-[#e71111] px-4 py-4 rounded-md fixed z-[100]   right-[4%]	">
        {open ? (
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 8 8"
              className="text-white text-4xl "
              onClick={handleOpen}
            >
              <path
                fill="currentColor"
                d="M1.41 0L0 1.41l.72.72L2.5 3.94L.72 5.72L0 6.41l1.41 1.44l.72-.72l1.81-1.81l1.78 1.81l.69.72l1.44-1.44l-.72-.69l-1.81-1.78l1.81-1.81l.72-.72L6.41 0l-.69.72L3.94 2.5L2.13.72z"
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
              className="text-white text-4xl "
              onClick={handleOpen}
            >
              <path
                fill="currentColor"
                d="M19.07 4.93a10 10 0 0 0-16.28 11a1.06 1.06 0 0 1 .09.64L2 20.8a1 1 0 0 0 .27.91A1 1 0 0 0 3 22h.2l4.28-.86a1.26 1.26 0 0 1 .64.09a10 10 0 0 0 11-16.28ZM8 13a1 1 0 1 1 1-1a1 1 0 0 1-1 1m4 0a1 1 0 1 1 1-1a1 1 0 0 1-1 1m4 0a1 1 0 1 1 1-1a1 1 0 0 1-1 1"
              />
            </svg>
          </div>
        )}
      </div>
    </div>
  );
};

export default Chat;
