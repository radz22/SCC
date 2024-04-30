import { Link } from "react-router-dom";
import UserData from "../pages/UserData";

const Navbar = () => {
  return (
    <nav>
      <div className="w-full flex justify-between  text-white py-7 px-20 items-center ">
        <div className="text-[30px] font-semibold">
          <span>St.Clare Collage Caloocan</span>
        </div>

        <div className="flex text-center items-center   gap-10  text-[25px]  font-semibold">
          <div>
            <Link to="/">
              {" "}
              <p className="hover:bg-[#80808060] cursor-pointer	">Home</p>
            </Link>
          </div>
          <div>
            <Link to="/about">
              {" "}
              <p className="hover:bg-[#80808060] cursor-pointer	">About</p>
            </Link>
          </div>
          <div>
            <Link to="/lms">
              {" "}
              <p className="hover:bg-[#80808060] cursor-pointer	">Ims</p>{" "}
            </Link>
          </div>
          <div>
            <UserData />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
