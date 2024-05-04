import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.jpg";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cookies from "js-cookie";

const Fillup = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [middleName, setMiddleName] = useState<string>("");
  const [lrn, setLrn] = useState<string>("");
  const [idStudent, setIdStudent] = useState<string>("");
  const [course, setCourse] = useState<string>("");
  const [gradeLevel, setGradeLevel] = useState<string>("");
  const [schoolYear, setSchoolYear] = useState<string>("");
  const [type, setType] = useState<string>("");

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setType(event.target.value);
  };

  const handleCreate = async () => {
    try {
      await axios
        .post("https://sccbackend.onrender.com/studentform", {
          studentid: Cookies.get("userid"),
          firstname: firstName,
          lastname: lastName,
          middlename: middleName,
          lrn: lrn,
          idstudent: idStudent,
          course: course,
          gradelevel: gradeLevel,
          schoolyear: schoolYear,
          type: type,
        })

        .then(() => {
          toast.success("sucess");
          setFirstName("");
          setLastName("");
          setMiddleName("");
          setLrn("");
          setIdStudent("");
          setCourse("");
          setGradeLevel("");
          setSchoolYear("");
          setType("");
        })
        .catch(() => {
          toast.error("1 account per fill up");
        });
    } catch {
      toast.error("error");
    }
  };

  return (
    <>
      <div className="w-full h-screen">
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
        <ToastContainer />
        <div className="w-full flex items-center justify-center flex-col  ">
          <div className="bg-[#f7f7f7]  round-md shadow-md py-[70px] ">
            <div className="flex justify-center">
              <img className="w-[100px]" src={logo} alt="" />

              <h1 className=" text-[30px] font-bold text-gray-800 mt-6">
                Student Application Form
              </h1>
            </div>

            <div className="w-full  mt-10 px-16">
              <div className="">
                <h1 className="text-[15px] font-bold text-gray-800">
                  Student Name
                </h1>
              </div>

              <div className="flex mt-2 gap-7">
                <div className="w-full">
                  <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="Enter First Name"
                    className="rounded-sm  py-2 px-3 w-[300px] outline-none shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset]"
                  />

                  <div className="mt-2">
                    <h1 className="text-[12px] font-semibold text-gray-500">
                      First Name
                    </h1>
                  </div>
                </div>

                <div className="w-full">
                  <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Enter Last Name"
                    className="rounded-sm  py-2 px-3 w-[300px] outline-none shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset]"
                  />
                  <div className="mt-2">
                    <h1 className="text-[12px] font-semibold text-gray-500 ">
                      Last Name
                    </h1>
                  </div>
                </div>

                <div className="w-full">
                  <input
                    type="text"
                    value={middleName}
                    onChange={(e) => setMiddleName(e.target.value)}
                    placeholder="Enter Middle Name"
                    className="rounded-sm  py-2 px-3 w-[200px] outline-none shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset]"
                  />
                  <div className="mt-2">
                    <h1 className="text-[12px]  text-gray-500 ">Middle Name</h1>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full px-16 mt-10">
              <div className="flex  mt-2 gap-7">
                <div className="">
                  {" "}
                  <div className="">
                    <h1 className="text-[15px] font-bold text-gray-800">Lrn</h1>
                  </div>
                  <input
                    type="text"
                    placeholder="5029XXXXX"
                    value={lrn}
                    onChange={(e) => setLrn(e.target.value)}
                    className="rounded-sm  py-2 px-3 w-[300px] outline-none mt-2 shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset]"
                  />
                  <div className="mt-2">
                    <h1 className="text-[12px]  text-gray-500 ">Lrn</h1>
                  </div>
                </div>

                <div className="">
                  <div className="">
                    <h1 className="text-[15px] font-bold text-gray-800">
                      Id Student
                    </h1>
                  </div>
                  <input
                    type="text"
                    value={idStudent}
                    onChange={(e) => setIdStudent(e.target.value)}
                    placeholder="09622XXX"
                    className="rounded-sm  py-2 px-3 w-[200px] outline-none  mt-2 shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset]"
                  />
                  <div className="mt-2">
                    <h1 className="text-[12px]  text-gray-500 "> Id Student</h1>
                  </div>
                </div>

                <div className="">
                  <div className="">
                    <h1 className="text-[15px] font-bold text-gray-800">
                      Course
                    </h1>
                  </div>
                  <input
                    type="text"
                    placeholder="Enter Your Course"
                    value={course}
                    onChange={(e) => setCourse(e.target.value)}
                    className="rounded-sm  py-2 px-3 w-[300px] outline-none  mt-2 shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset]"
                  />
                  <div className="mt-2">
                    <h1 className="text-[12px]  text-gray-500 ">Course</h1>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full px-16 mt-10">
              <div className="flex  mt-2 gap-7">
                <div className="">
                  {" "}
                  <div className="">
                    <h1 className="text-[15px] font-bold text-gray-800">
                      {" "}
                      Grade Level
                    </h1>
                  </div>
                  <input
                    type="text"
                    value={gradeLevel}
                    onChange={(e) => setGradeLevel(e.target.value)}
                    placeholder="Enter your Grade Level"
                    className="rounded-sm  py-2 px-3 w-[300px] outline-none mt-2 shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset]"
                  />
                  <div className="mt-2">
                    <h1 className="text-[12px]  text-gray-500 ">Grade Level</h1>
                  </div>
                </div>

                <div className="">
                  <div className="">
                    <h1 className="text-[15px] font-bold text-gray-800">
                      School Year
                    </h1>
                  </div>
                  <input
                    type="text"
                    value={schoolYear}
                    onChange={(e) => setSchoolYear(e.target.value)}
                    placeholder="09622XXX"
                    className="rounded-sm  py-2 px-3 w-[200px] outline-none  mt-2 shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset]"
                  />
                  <div className="mt-2">
                    <h1 className="text-[12px]  text-gray-500 ">School Year</h1>
                  </div>
                </div>

                <div className="w-full mt-1">
                  {" "}
                  <div className="">
                    <h1 className="text-[15px] font-bold text-gray-800">
                      Type of student
                    </h1>
                  </div>
                  <div className="flex mt-3  gap-7">
                    {" "}
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        className="form-radio text-blue-500"
                        name="gender"
                        value="old"
                        checked={type === "old"}
                        onChange={handleOptionChange}
                      />
                      <span className="ml-2">Old</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        className="form-radio text-pink-500"
                        name="gender"
                        value="new"
                        checked={type === "new"}
                        onChange={handleOptionChange}
                      />
                      <span className="ml-2">New</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        className="form-radio text-green-500"
                        name="gender"
                        value="transferee"
                        checked={type === "transferee"}
                        onChange={handleOptionChange}
                      />
                      <span className="ml-2">Transferee</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full"></div>
            <div className="w-full px-16 mt-5 ">
              <button
                className="bg-[#ca0000] text-white px-[15px] py-3 rounded-lg transition uppercase tracking-widest  hover:bg-[#ca0000a9] hover:text-white shadow-lg"
                onClick={handleCreate}
              >
                <p className="font-bold text-[20px]">Enter</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Fillup;
