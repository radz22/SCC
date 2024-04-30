import { useState, useEffect } from "react";
import SideBar from "../components/SideBar";
import axios from "axios";

interface userData {
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
const DashBoard = () => {
  const [data, setData] = useState<userData[]>([]);
  const [search, setSearch] = useState<string>("");
  const [selectedOption, setSelectedOption] = useState<string>("");
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
    } catch {
      console.log("waiting");
    }
  };

  useEffect(() => {
    setInterval(() => {
      fetchData();
    }, 1000);
  }, []);

  return (
    <div className="flex gap-7">
      <div className="w-3/12		">
        <SideBar />
      </div>
      <div className="w-9/12			px-5">
        <div className="py-10 px-3 bg-[#f0f0f0] mt-10   rounded-lg shadow-md flex items-center justify-evenly ">
          <div>
            <h1 className="text-2xl	 font-bold gap-20">Student List</h1>
            <h1 className="text-2xl	 font-bold gap-20">with Section</h1>
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
              className="w-fit py-4 px-4	text-center text-lg	 rounded-md	 font-semibold cursor-pointer	"
              value={selectedOption || ""}
              onChange={handleSelectChange}
            >
              <option value="">Select an Course</option>

              {allSection.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="py-10 px-3 bg-[#f0f0f0] mt-5   rounded-lg shadow-md flex items-center justify-center  ">
          <h1 className="text-[30px] font-bold text-center uppercase">
            {selectedOption}
          </h1>
        </div>

        <div className="h-[65vh] overflow-auto	">
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
                  <p className="text-[15px] font-semibold">{data.idstudent}</p>
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
                  <p className="text-[15px] font-semibold">{data.gradelevel}</p>
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
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
