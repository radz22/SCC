import { useState, useEffect } from "react";
import SideBar from "../components/SideBar";
import axios from "axios";
import Cookies from "js-cookie";

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

import {
  TERipple,
  TEModal,
  TEModalDialog,
  TEModalContent,
  TEModalHeader,
  TEModalBody,
  TEModalFooter,
} from "tw-elements-react";
const DashBoard = () => {
  const [showModal, setShowModal] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [inputEdit, setInputEdit] = useState<string>("");
  const [data, setData] = useState<userData[]>([]);
  const [search, setSearch] = useState<string>("");
  const [selectedOption, setSelectedOption] = useState<string>("");

  const handleDeleteModel = (id: string) => {
    setShowDelete(!false);
    Cookies.set("ID", id, { expires: 1 });
  };
  const handlemodel = (id: string) => {
    setShowModal(!false);
    Cookies.set("ID", id, { expires: 1 });
  };
  const handleEdit = async () => {
    axios
      .post("https://sccbackend.onrender.com/studentform/studentsection", {
        id: Cookies.get("ID"),
        section: inputEdit,
      })
      .then(() => {
        console.log("sucess");
        Cookies.remove("ID");
      });
  };

  const handleDelete = async () => {
    axios
      .post("https://sccbackend.onrender.com/studentform/studentdelete", {
        id: Cookies.get("ID"),
      })
      .then(() => {
        console.log("sucess");
        Cookies.remove("ID");
      });
  };

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  const allSection = [
    "BSCS",
    "BSTM",
    "BSHM",
    "BSED",
    "BSED-MATH,",
    "AB POLSCI",
  ];
  const filternosection = data.filter((section) => section.section !== "empty");

  const fetchData = async () => {
    try {
      await axios
        .get("https://sccbackend.onrender.com/studentform")
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

  return (
    <div>
      <div className="flex gap-7 max-lg:gap-4">
        <div className="w-3/12			max-lg:w-1/5	">
          <SideBar />
        </div>
        <div className="w-9/12	 	max-lg:w-4/5		max-lg:px-2 px-5">
          <div className="py-10 px-3 bg-[#f0f0f0] mt-10   rounded-lg shadow-md flex items-center justify-evenly ">
            <div>
              <h1 className="text-2xl	 font-bold gap-20 max-xl:text-xl  max-lg:text-lg">
                Student List
              </h1>
              <h1 className="text-2xl	 font-bold gap-20 max-xl:text-xl max-lg:text-lg">
                with Section
              </h1>
            </div>
            <div className="flex items-center justify-center">
              <div>
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="rounded-full outline-none  font-bold p-2 w-96	 mt-2 mr-1   shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset]"
                />
              </div>
            </div>
            <div className="mt-2">
              <select
                className="w-fit py-4 px-4	text-center text-lg	 rounded-md	 font-semibold cursor-pointer max-xl:text-base	"
                value={selectedOption || ""}
                onChange={handleSelectChange}
              >
                <option value="">Select an Course</option>

                {allSection.map((option, index) => (
                  <option key={index} value={option}>
                    <h1 className="max-xl:text-base">{option}</h1>
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="py-10 px-3 bg-[#f0f0f0] mt-5   rounded-lg shadow-md flex items-center justify-center ">
            <h1 className="ttext-3xl	 font-bold text-center uppercase max-lg:text-2xl	">
              {selectedOption}
            </h1>
          </div>

          <div className="max-[1440px]:h-[60vh]	2xl:h-[65vh] max-[1280px]:h-[55vh]	 overflow-auto	">
            {filternosection
              .filter(
                (item) =>
                  item.course
                    .toLowerCase()
                    .includes(selectedOption.toLowerCase()) &&
                  item.gradelevel.toLowerCase().includes(search.toLowerCase())
              )
              .map((data) => (
                <div className="py-10 px-3 bg-[#f0f0f0] mt-5   rounded-lg shadow-md flex items-center justify-evenly  gap-3">
                  <div>
                    <h1 className="text-[15px] font-bold">Id Stu</h1>
                    <p className="text-[15px] font-semibold">
                      {data.idstudent}
                    </p>
                  </div>
                  <div>
                    <h1 className="text-[15px] font-bold">Name</h1>
                    <p className="text-[15px] font-semibold">
                      {data.firstname} {data.lastname}{" "}
                    </p>
                  </div>
                  <div>
                    <h1 className="text-[15px] font-bold">Lrn</h1>
                    <p className="text-[15px] font-semibold">{data.lrn}</p>
                  </div>
                  <div>
                    <h1 className="text-[15px] font-bold">Year</h1>
                    <p className="text-[15px] font-semibold">
                      {data.gradelevel}
                    </p>
                  </div>

                  <div>
                    <h1 className="text-[15px] font-bold">Course</h1>
                    <p className="text-[15px] font-semibold">{data.course}</p>
                  </div>
                  <div>
                    {data.section == "empty" ? (
                      <div></div>
                    ) : (
                      <div>
                        <h1 className="text-[15px] font-bold">Section</h1>
                        <p className="text-[15px] font-semibold">
                          {data.section}
                        </p>
                      </div>
                    )}
                  </div>
                  <div>
                    <h1 className="text-[15px] font-bold">Status</h1>
                    <p className="text-[15px] font-semibold">{data.type}</p>
                  </div>

                  <div>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                        className="text-3xl	text-[#e41212]"
                        onClick={() => handleDeleteModel(data.studentid)}
                      >
                        <path
                          fill="currentColor"
                          d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"
                        />
                      </svg>
                    </div>

                    <div className="mt-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                        className="text-3xl	text-[#42d116]"
                        onClick={() => handlemodel(data.studentid)}
                      >
                        <path
                          fill="currentColor"
                          d="M7.243 17.997H3v-4.243L14.435 2.319a1 1 0 0 1 1.414 0l2.829 2.828a1 1 0 0 1 0 1.415zm-4.243 2h18v2H3z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>

      <div>
        {/* <!-- Modal --> */}
        <TEModal
          show={showModal}
          setShow={setShowModal}
          className="mt-[300px] ml-[100px]"
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
                    placeholder="section "
                    value={inputEdit}
                    onChange={(e) => setInputEdit(e.target.value)}
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
                      handleEdit();
                      setShowModal(false);
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

      <div>
        {/* <!-- Modal --> */}
        <TEModal
          show={showDelete}
          setShow={setShowDelete}
          className="mt-[300px] ml-[100px]"
        >
          <TEModalDialog>
            <TEModalContent>
              <TEModalHeader>
                <button
                  type="button"
                  className="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                  onClick={() => setShowDelete(false)}
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
                  <h1 className="text-center text-xl font-semibold">
                    You want to Delete?
                  </h1>
                </div>
              </TEModalBody>
              <TEModalFooter>
                <TERipple rippleColor="light">
                  <button
                    type="button"
                    className="inline-block rounded bg-primary-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200"
                    onClick={() => setShowDelete(false)}
                  >
                    Close
                  </button>
                </TERipple>
                <TERipple rippleColor="light">
                  <button
                    type="button"
                    className="ml-1 inline-block rounded bg-[#cd1212] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                    onClick={() => {
                      handleDelete();
                      setShowDelete(false);
                    }}
                  >
                    Delete?
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

export default DashBoard;
