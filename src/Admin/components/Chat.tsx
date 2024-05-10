import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";

interface chat {
  studentid: string;
  id: string;
  email: string;
  message: string;
}
const Chat = () => {
  const [message, setMessage] = useState<chat[]>([]);
  const [inputMessage, setInputMessage] = useState<string>("");

  const fetchData = async () => {
    await axios
      .post("https://sccbackend-lxvu.onrender.com/messageroutes/findusers", {
        id: Cookies.get("chatid"),
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
    axios.post("https://sccbackend-lxvu.onrender.com/messageroutes/", {
      studentid: Cookies.get("chatid"),
      email: "admin@gmail.com",
      message: inputMessage,
    });
    setInputMessage("");
  };
  return (
    <div className=" px-4 w-full">
      <div className="h-[88vh] overflow-auto">
        {message.map((item) => (
          <div>
            {item.email == "admin@gmail.com" ? (
              <div className="flex items-end justify-end gap-4 mt-5 flex-col">
                <div className="bg-[#2d7594] px-3 py-3 w-auto">
                  <h1 className="font-bold text-white">{item.email}</h1>
                  <p className="text-white">{item.message}</p>
                </div>
              </div>
            ) : (
              <div className="flex items-start justify-start gap-4 mt-5 flex-col">
                <div className="bg-[#d7d7d7] px-3 py-3 w-auto mt-3">
                  <h1 className="font-bold">{item.email}</h1>
                  <p>{item.message}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="w-full mt-10 flex items-center justify-center gap-5">
        <div className="w-full	">
          <input
            type="text"
            className="bg-[#ebe9e9] border-2 border-[#f3f2f2] rounded-lg  w-full px-3 py-3 text-base cursor-pointer transition outline-none font-semibold hover:border-[black] hover:bg-[#fff] "
            placeholder="Message"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
          />
        </div>
        <div className=" bg-[#2d7594] px-3 py-3 mr-3 	" onClick={sendMessage}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            className="text-white text-2xl"
          >
            <path fill="currentColor" d="M3 20v-6l8-2l-8-2V4l19 8z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Chat;
