import axios from "axios";
import { useEffect, useState } from "react";
import scc from "../../assets/sccpicture.jpg";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";
import {
  TERipple,
  TEModal,
  TEModalDialog,
  TEModalContent,
  TEModalHeader,
  TEModalBody,
  TEModalFooter,
} from "tw-elements-react";
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
  const [showModal, setShowModal] = useState(false);
  const [firstName, setFirstName] = useState<any | string>("");
  const [lastName, setLastName] = useState<any>("");
  const [middleName, setMiddleName] = useState<any>("");
  const [lrn, setLrn] = useState<any>("");
  const [idStudent, setIdStudent] = useState<any>("");
  const [course, setCourse] = useState<any>("");
  const [gradeLevel, setGradeLevel] = useState<any>("");
  const [schoolYear, setSchoolYear] = useState<any>("");
  const [type, setType] = useState<any>("");

  const fetchData = async () => {
    try {
      await axios
        .post("https://sccbackend.onrender.com/studentform/yourprofile", {
          id: Cookies.get("userid"),
        })
        .then((res: any) => {
          setData(res.data);
        });
    } catch {}
  };

  useEffect(() => {
    setInterval(() => {
      fetchData();
    }, 1000);
  }, []);
  const getEmail = Cookies.get("email");
  const handlemodel = () => {
    setShowModal(!false);
    setFirstName(data?.firstname);
    setLastName(data?.lastname);
    setMiddleName(data?.middlename);
    setLrn(data?.lrn);
    setIdStudent(data?.idstudent);
    setCourse(data?.course);
    setGradeLevel(data?.gradelevel);
    setSchoolYear(data?.schoolyear);
    setType(data?.type);
  };

  const handleEdit = () => {
    axios.post("https://sccbackend.onrender.com/studentform/editProfile", {
      id: Cookies.get("userid"),
      firstname: firstName.toUpperCase(),
      lastname: lastName.toUpperCase(),
      middlename: middleName.toUpperCase(),
      lrn: lrn.toUpperCase(),
      idstudent: idStudent.toUpperCase(),
      course: course.toUpperCase(),
      gradelevel: gradeLevel.toUpperCase(),
      schoolyear: schoolYear.toUpperCase(),
      type: type.toUpperCase(),
    });
  };
  return (
    <div>
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
              {data == null ? (
                <div></div>
              ) : (
                <button
                  className="mt-5 bg-[#2d7594] text-lg text-white py-3 px-3 font-bold"
                  onClick={handlemodel}
                >
                  Edit
                </button>
              )}
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
      <div>
        {/* <!-- Modal --> */}
        <TEModal
          show={showModal}
          setShow={setShowModal}
          className="mt-[60px] ml-[100px]"
        >
          <TEModalDialog>
            <TEModalContent>
              <TEModalHeader>
                {/* <!--Modal title--> */}

                {/* <!--Close button--> */}
                <button
                  type="button"
                  className="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                  onClick={() => setShowModal(false)}
                  aria-label="Close"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </TEModalHeader>
              {/* <!--Modal body--> */}
              <TEModalBody>
                <div>
                  <input
                    type="text"
                    className="w-full py-3 px-3 font-2xl outline-none"
                    placeholder="FIRST NAME "
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />

                  <input
                    type="text"
                    className="w-full py-3 px-3 font-2xl outline-none"
                    placeholder="LAST NAME "
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />

                  <input
                    type="text"
                    className="w-full py-3 px-3 font-2xl outline-none"
                    placeholder="MIDDLE NAME "
                    value={middleName}
                    onChange={(e) => setMiddleName(e.target.value)}
                  />
                  <input
                    type="text"
                    className="w-full py-3 px-3 font-2xl outline-none"
                    placeholder="LRN "
                    value={lrn}
                    onChange={(e) => setLrn(e.target.value)}
                  />
                  <input
                    type="text"
                    className="w-full py-3 px-3 font-2xl outline-none"
                    placeholder="ID STUDENT  "
                    value={idStudent}
                    onChange={(e) => setIdStudent(e.target.value)}
                  />
                  <input
                    type="text"
                    className="w-full py-3 px-3 font-2xl outline-none"
                    placeholder="COURSE "
                    value={course}
                    onChange={(e) => setCourse(e.target.value)}
                  />
                  <input
                    type="text"
                    className="w-full py-3 px-3 font-2xl outline-none"
                    placeholder="GRADE LEVEL "
                    value={gradeLevel}
                    onChange={(e) => setGradeLevel(e.target.value)}
                  />
                  <input
                    type="text"
                    className="w-full py-3 px-3 font-2xl outline-none"
                    placeholder="SCHOOL YEAR  "
                    value={schoolYear}
                    onChange={(e) => setSchoolYear(e.target.value)}
                  />
                  <input
                    type="text"
                    className="w-full py-3 px-3 font-2xl outline-none"
                    placeholder="STATUS "
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                  />
                </div>
              </TEModalBody>
              <TEModalFooter>
                <TERipple rippleColor="light">
                  <button
                    type="button"
                    className="inline-block rounded bg-primary-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </TERipple>
                <TERipple rippleColor="light">
                  <button
                    type="button"
                    className="ml-1 inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                    onClick={() => {
                      setShowModal(false);
                      handleEdit();
                    }}
                  >
                    Save changes
                  </button>
                </TERipple>
              </TEModalFooter>
            </TEModalContent>
          </TEModalDialog>
        </TEModal>
      </div>
    </div>
  );
};

export default Profile;
