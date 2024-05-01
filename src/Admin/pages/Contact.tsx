import { Link } from "react-router-dom";
import Chat from "../components/Chat";
import ChatSideBar from "../components/ChatSideBar";

const Contact = () => {
  return (
    <div className="flex  gap-7 h-screen">
      <div className="w-[20%]">
        <ChatSideBar />
      </div>
      <div className="w-[80%] ">
        <Chat />
      </div>
    </div>
  );
};

export default Contact;
