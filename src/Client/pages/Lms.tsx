import Navbar from "../components/Navbar";
import ims from "../../assets/ims.jpg";
import im3 from "../../assets/ims3.jpg";
import im4 from "../../assets/ims4.jpg";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import Chat from "../components/Chat";
import Cookies from "js-cookie";

const Lms = () => {
  const status = Cookies.get("status");

  return (
    <div className="w-full bg-white">
      {status == "true" ? (
        <div
          className="fixed z-[100]  bottom-[10%] right-[4%]
"
        >
          <Chat />
        </div>
      ) : (
        <div></div>
      )}
      <div className="relative">
        <div className="w-full bg-[#000000] ">
          <Navbar />
        </div>
        <div className="w-full flex justify-center gap-7   ">
          <div className="w-6/12">
            <img src={ims} className="w-full h-96	" />
          </div>

          <div className="w-6/12 mt-10 ">
            <div className="flex items-center justify-center flex-col w-full">
              <div>
                <h1 className="text-3xl	 font-bold">
                  INSTITUTIONAL MANAGEMENT SYSTEM
                </h1>
              </div>
              <div className="mt-10">
                <p className="text-xl text-[#919191] tracking-wider			">
                  (IMS) is an element that enables the school to facilitate the
                  storage, organization and retrieval of information. This is
                  where the students may have their enrolment procedures. Thus,
                  this element provides a platform where the faculty needs to
                  log-in/time-in for their virtual classes’ attendance.{" "}
                </p>
              </div>
            </div>

            <div className="flex items-end justify-end gap-4 mt-5 px-6">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 256 256"
                  className="text-4xl	"
                >
                  <path
                    fill="#1877f2"
                    d="M256 128C256 57.308 198.692 0 128 0C57.308 0 0 57.308 0 128c0 63.888 46.808 116.843 108 126.445V165H75.5v-37H108V99.8c0-32.08 19.11-49.8 48.348-49.8C170.352 50 185 52.5 185 52.5V84h-16.14C152.959 84 148 93.867 148 103.99V128h35.5l-5.675 37H148v89.445c61.192-9.602 108-62.556 108-126.445"
                  />
                  <path
                    fill="#fff"
                    d="m177.825 165l5.675-37H148v-24.01C148 93.866 152.959 84 168.86 84H185V52.5S170.352 50 156.347 50C127.11 50 108 67.72 108 99.8V128H75.5v37H108v89.445A128.959 128.959 0 0 0 128 256a128.9 128.9 0 0 0 20-1.555V165z"
                  />
                </svg>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.43em"
                  height="1em"
                  viewBox="0 0 256 180"
                  className="text-4xl	"
                >
                  <path
                    fill="#f00"
                    d="M250.346 28.075A32.18 32.18 0 0 0 227.69 5.418C207.824 0 127.87 0 127.87 0S47.912.164 28.046 5.582A32.18 32.18 0 0 0 5.39 28.24c-6.009 35.298-8.34 89.084.165 122.97a32.18 32.18 0 0 0 22.656 22.657c19.866 5.418 99.822 5.418 99.822 5.418s79.955 0 99.82-5.418a32.18 32.18 0 0 0 22.657-22.657c6.338-35.348 8.291-89.1-.164-123.134"
                  />
                  <path
                    fill="#fff"
                    d="m102.421 128.06l66.328-38.418l-66.328-38.418z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full bg-[#000000] mt-10 py-5 px-5">
          <div className=" flex items-center justify-center w-full">
            <div className="w-fit">
              <div>
                <h1 className="text-4xl	font-bold text-white">
                  ENROLLMENT FOR SCHOOL YEAR 2023-2024
                </h1>
              </div>
              <div className="border-b-2 border-[#919191] mt-4"></div>
            </div>
          </div>
          <div className="mt-10">
            <div className="flex items-center justify-center w-full">
              <img
                src={im3}
                className="rounded-full w-auto
            "
              />
            </div>

            <div className="text-center mt-6">
              <div>
                <h1 className="text-white text-2xl	">
                  Tertiary/College | 2nd sem
                </h1>
              </div>
              <div className="mt-3">
                <p className="text-[#A4A4A4] text-base	">
                  BSCS, BSHM, BSTM, BSBA, BEED,BSED-ENG,{" "}
                </p>
                <p className="text-[#A4A4A4] text-base 	">
                  BSED-MATH, AB POLSCI{" "}
                </p>
              </div>

              <div>
                <Link to="/fillup">
                  <button className="bg-[#ca0000] font-bold text-white px-[10px] py-3 text-2xl uppercase tracking-wide  transition rounded-lg hover:bg-[#000000] hover:text-[#ca0000] hover:outline mt-6">
                    enroll now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex justify-center gap-7">
          <div className="w-6/12">
            <div className=" flex items-center justify-center w-full mt-10">
              <div className="w-fit">
                <div>
                  <h1 className="text-[25px] font-semibold">
                    ENROLLMENT FOR SCHOOL YEAR 2023-2024
                  </h1>
                </div>
                <div className="border-b-2 border-[#000] mt-4"></div>

                <div className="mt-6">
                  <div>
                    <h1 className="text-base	font-semibold">
                      SHS FACULTY ATTENDANCE MONITORING
                    </h1>
                  </div>

                  <div>
                    <button className="bg-[#ca0000] font-bold text-white px-[10px] py-3 text-2xl uppercase tracking-wide  transition rounded-lg hover:bg-[#000000] hover:text-[#ca0000] hover:outline mt-6">
                      shs online attendance
                    </button>
                  </div>
                </div>

                <div className="mt-6">
                  <div>
                    <h1 className="text-base	font-semibold">
                      TERTIARY FACULTY ATTENDANCE MONITORING{" "}
                    </h1>
                  </div>

                  <div>
                    <button className="bg-[#ca0000] font-bold text-white px-[10px] py-3 text-2xl uppercase tracking-wide  transition rounded-lg hover:bg-[#000000] hover:text-[#ca0000] hover:outline mt-6">
                      tertiary online attendance
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-6/12">
            <img src={im4} className="w-full h-96	" />
          </div>
        </div>

        <div className="w-full bg-[#000000] ">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Lms;
