import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import about from "../../assets/about.jpg";
import about1 from "../../assets/about1.jpg";
import about2 from "../../assets/about2.jpg";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import Chat from "../components/Chat";

const About = () => {
  const status = Cookies.get("status");

  return (
    <div>
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
      <div className="w-full  h-auto bg-[#000000] relative">
        <div>
          <Navbar />
        </div>

        <div className="w-full		 px-32 py-3">
          <div>
            <h1 className="font-bold text-4xl	 text-white   mt-16  ">
              ENROLLMENT FOR SCHOOL YEAR 2023-2024
            </h1>
            <div className="border-b-2 border-[#919191] mt-4"></div>
          </div>
        </div>

        <div>
          <div className="w-full flex justify-center gap-10 mt-20  px-32 py-3">
            <div className="w-6/12	">
              <img src={about} className="w-full h-72	" />
            </div>

            <div className="w-6/12	">
              <div>
                <h1 className="text-white font-semibold text-3xl	 ">
                  ONLINE ENROLLMENT
                </h1>
              </div>
              <div>
                <p className="text-[#919191] font-semibold  text-[16px] mt-2  ">
                  Simplified and Seamless: Enroll Online with Ease for a Bright
                  Academic Journey!
                </p>
              </div>

              <div>
                <p className="text-[#919191] font-semibold  text-xl	 mt-2  ">
                  PRE-SCHOOL TO JUNIOR HIGH
                </p>
                <p className="text-[#919191] font-semibold  text-base	mt-2  ">
                  SENIOR HIGH SCHOOL{" "}
                </p>

                <p className="text-[#919191]  mt-2  text-base	 ">
                  ABM, HUMSS, ARTS & DESIGN, TVL-ICT, TVL-HE
                </p>
              </div>
              <div>
                <p className="text-[#919191] font-semibold  text-[16px] mt-2   text-xl ">
                  TERTIARY
                </p>
                <p className="text-[#919191] base	 mt-2  ">
                  BEED, BSED-ENG, BSED-MATH, BSCS, BSBA, BSHM, BSTM, AB POLSCI
                </p>
              </div>
              <div>
                <button className="bg-[#ca0000] font-bold text-white px-[10px] py-3 text-2xl uppercase tracking-wide  transition rounded-lg hover:bg-[#000000] hover:text-[#ca0000] hover:outline mt-6">
                  <Link to="/fillup"> enroll now</Link>
                </button>
              </div>
            </div>
          </div>

          <div className="w-full flex justify-center gap-10 mt-20 px-32 py-3">
            <div className="w-6/12	">
              <div>
                <h1 className="text-white font-semibold text-3xl	 ">
                  CHOOSE YOUR MODALITY
                </h1>
              </div>
              <div>
                <p className="text-[#919191] font-semibold  text-[16px] mt-6  ">
                  Personalized Learning Pathways: Empowering Students to Choose
                  Their Ideal Modality for Success - Full Online or Blended!
                </p>
              </div>

              <div>
                <button className="bg-[#ca0000] font-bold text-white px-[10px] py-3 text-2xl uppercase tracking-wide  transition rounded-lg hover:bg-[#000000] hover:text-[#ca0000] hover:outline mt-6">
                  <Link to="/fillup">enroll now</Link>
                </button>
              </div>
            </div>
            <div className="w-6/12	">
              <img src={about1} className="w-full h-72	" />
            </div>
          </div>

          <div className="w-full flex justify-center gap-10 mt-20  px-32 py-3">
            <div className="w-6/12	">
              <img src={about2} className="w-full h-72	" />
            </div>

            <div className="w-6/12	">
              <div>
                <h1 className="text-white font-semibold text-3xl	 ">
                  Empower Your Future with St. Clare College: Where Success
                  Begins
                </h1>
              </div>
              <div>
                <p className="text-[#919191] font-semibold  text-[16px] mt-6  ">
                  Are you ready to invest in your future and unlock your full
                  potential? St Clare College is your ultimate destination to
                  master in-demand skills for the 21st century. Don't miss the
                  opportunity to be at the forefront of success – enroll this
                  semester and take the first step towards a brighter tomorrow!
                </p>

                <p className="text-[#919191] font-semibold  text-[16px] mt-2  ">
                  Secure your future with St Clare College and join our thriving
                  community of achievers! Click the link below to apply now and
                  unlock a world of limitless possibilities!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default About;
