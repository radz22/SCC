import axios from "axios";
import { useEffect, useState } from "react";
import scc from "../../assets/sccpicture.jpg";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";
interface userData {
  _id: string;
  studentid: string;
  firstname: string;
  lastname: string;
  middlename: string;
  lrn: string;
  idstudent: string;
  course: string;
  gradelevel: string;
  schoolyear: string;
  type: string;
  section: string;
}
const Profile = () => {
  const [data, setData] = useState<userData | null>();
  const fetchData = async () => {
    try {
      await axios
        .post("https://sccbackend.onrender.com/studentform/yourprofile", {
          id: Cookies.get("userid"),
        })
        .then((res: any) => {
          setData(res.data);
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

  const getEmail = Cookies.get("email");
  return (
    <div className="w-full">
      <div className="ml-10 mt-6">
        <Link to="/">
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
      <div className="w-full h-screen flex  ">
        <div className="w-3/6	flex items-center justify-center flex-col ">
          <div>
            <h1 className="text-2xl font-bold">Your Profile:</h1>
          </div>
          <div>
            <h1 className="text-4xl font-bold mt-7">{getEmail}</h1>
          </div>
          <div className="grid grid-cols-4 place-items-center gap-5	mt-10">
            <div className="flex items-center justify-center flex-col">
              <p className="text-lg font-bold">FIRST NAME</p>
              <p className="text-lg	">{data?.firstname}</p>
            </div>
            <div className="flex items-center justify-center flex-col">
              <p className="text-lg font-bold">LAST NAME</p>
              <p className="text-lg	">{data?.lastname}</p>
            </div>

            <div className="flex items-center justify-center flex-col">
              <p className="text-lg font-bold">MIDDLE NAME</p>
              <p className="text-lg	">{data?.middlename}</p>
            </div>

            <div className="flex items-center justify-center flex-col">
              <p className="text-lg font-bold">LRN </p>
              <p className="text-lg	">{data?.lrn}</p>
            </div>

            <div className="flex items-center justify-center flex-col">
              <p className="text-lg font-bold">ID STUDENT </p>
              <p className="text-lg	">{data?.idstudent}</p>
            </div>

            <div className="flex items-center justify-center flex-col">
              <p className="text-lg font-bold">COURSE </p>
              <p className="text-lg	">{data?.course}</p>
            </div>

            <div className="flex items-center justify-center flex-col">
              <p className="text-lg font-bold">GRADE LEVEL </p>
              <p className="text-lg	">{data?.gradelevel}</p>
            </div>

            <div className="flex items-center justify-center flex-col">
              <p className="text-lg font-bold">SCHOOL YEAR </p>
              <p className="text-lg	">{data?.schoolyear}</p>
            </div>

            <div className="flex items-center justify-center flex-col">
              <p className="text-lg font-bold">STATUS </p>
              <p className="text-lg	">{data?.type}</p>
            </div>
            <div className="flex items-center justify-center flex-col">
              {data?.section == "empty" ? (
                <div>
                  {" "}
                  <p className="text-lg font-bold">SECTION </p>
                  <p className="text-lg	">Pending...</p>
                </div>
              ) : (
                <div>
                  <p className="text-lg font-bold">SECTION </p>
                  <p className="text-lg	">{data?.section}</p>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="w-3/6	h-screen">
          <div className="w-full ">
            <img src={scc} className="w-full h-screen"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
