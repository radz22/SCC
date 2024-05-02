import Sidebar from "../components/Sidebar";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
interface userData {
  cloudnaryid: string;
  _id: string;
  images: string;
  name: string;
  email: string;
}
const EditUser = () => {
  const [base64Image, setBase64Image] = useState<string>("");
  const [user, setUser] = useState<userData | null>();
  const [displayName, setDisplayName] = useState<string>("");
  const handleFileInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === "string") {
          setBase64Image(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const fetchData = async () => {
    try {
      await axios
        .get("https://sccbackend.onrender.com/auth/user", {
          withCredentials: true,
        })
        .then((res: any) => {
          setUser(res.data.data);
        });
    } catch {
      console.log("waiting");
    }
  };
  const token = Cookies.get("token");
  const fetchUser = async () => {
    try {
      await axios
        .post("https://sccbackend.onrender.com/UserRoutes/userdata", {
          token: token,
        })
        .then((res: any) => {
          setUser(res.data.data);
        });
    } catch {
      console.log("waiting");
    }
  };
  useEffect(() => {
    setInterval(() => {
      fetchData();
      fetchUser();
    }, 1000);
  }, []);

  const handleEdit = () => {
    axios
      .post(`https://sccbackend.onrender.com/UserRoutes/edituser`, {
        id: Cookies.get("userid"),
        images: base64Image,
        name: displayName,
      })
      .then(() => {
        toast.success("sucess");
      })
      .catch(() => {
        toast.error("no user exist");
      });
  };

  return (
    <div className="flex w-full bg-[#f9f9f9] h-screen">
      <ToastContainer />
      <div className="w-1/5	">
        <Sidebar images={user?.images} name={user?.name} />{" "}
      </div>
      <div className="w-4/5	flex items-center justify-center">
        <div className="w-2/4	bg-white shadow-lg shadow-[#b0b0b0] py-5 px-5">
          <div className="  mb-5 relative">
            <div className="w-full  flex items-center justify-center relative flex-col">
              <img
                src={base64Image ? base64Image : user?.images}
                className="w-48	rounded-full h-48	 brightness-50	 "
              />

              <div className="absolute ">
                <input
                  type="file"
                  className="hidden"
                  id="fileInput"
                  onChange={handleFileInputChange}
                />
                <label
                  htmlFor="fileInput"
                  className=" bg-transparent text-base	text-white "
                >
                  Click to change photo
                </label>
              </div>
            </div>
          </div>
          <div>
            <input
              className="bg-[#ebe9e9] border-2 border-[#f3f2f2] rounded-lg  w-full px-3 py-3 text-base cursor-pointer transition outline-none font-semibold hover:border-[black]  "
              type="text"
              placeholder="Display Name"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
            />
          </div>
          <div className="text-center mt-5">
            <button
              className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
              onClick={handleEdit}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditUser;
