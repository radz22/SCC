import React, { useState, useRef } from "react";
import otpBg from "../../assets/otpbg.svg";
import logoscc from "../../assets/logo.jpg";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";

const Otp = () => {
  const navigate = useNavigate();
  // Define initial input values
  const initialInputs = [
    { id: 1, value: "" },
    { id: 2, value: "" },
    { id: 3, value: "" },
    { id: 4, value: "" },
  ];

  // State to manage input values
  const [inputs, setInputs] = useState(initialInputs);

  // Ref to store references to input elements
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  // Handler function to update input value
  const handleInputChange = (id: number, value: string, index: number) => {
    // Ensure input length is limited to 1 character
    const newValue = value.slice(0, 1);

    // Update input value
    const updatedInputs = inputs.map((input) =>
      input.id === id ? { ...input, value: newValue } : input
    );
    setInputs(updatedInputs);

    if (value !== "" && inputRefs.current[index + 1]) {
      const nextInput = inputRefs.current[index + 1];
      if (nextInput) {
        nextInput.focus();
      }
    }
  };

  const handleKeyUp = (
    event: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (event.key === "Backspace" || event.key === "Delete") {
      if (inputRefs.current[index - 1]) {
        inputRefs.current[index - 1]?.focus();
      }
    }
  };

  const deleteInfo = () => {
    Cookies.remove("name");
    Cookies.remove("email");
    Cookies.remove("password");
    Cookies.remove("otpsignup");
  };
  const handleOTP = async () => {
    const getValue = inputs.map((input) => input.value).join("");
    const otp = Cookies.get("otpsignup");
    if (getValue == otp) {
      try {
        await axios
          .post("https://sccbackend.onrender.com/UserRoutes/signup", {
            images: Cookies.get("images"),
            name: Cookies.get("name"),
            email: Cookies.get("email"),
            password: Cookies.get("password"),
          })
          .then(() => {
            handleDirectLogin();
            deleteInfo();
          });
      } catch {
        console.log("user existing");
      }
    } else {
      console.log("invalid otp");
    }
  };

  const handleDirectLogin = async () => {
    try {
      const response = await axios.post(
        "http://localhost:4000/UserRoutes/signin",
        {
          email: Cookies.get("email"),
          password: Cookies.get("password"),
        }
      );
      Cookies.set("userid", response.data.userid, { expires: 1 });
      Cookies.set("email", response.data.email, { expires: 1 });
      Cookies.set("usertype", response.data.usertype, { expires: 1 });

      if (response.data.status == "Sucess Login") {
        Cookies.set("status", "true", { expires: 1 });
        Cookies.set("token", response.data.token, { expires: 1 });
        navigate("/");
      }
    } catch {
      console.log("error");
    }
  };

  return (
    <>
      <div className="w-full h-auto flex  gap-5 ">
        <div className="w-2/5	mt-10  ">
          <div className="flex items-center justify-center flex-col">
            <div>
              <Link to="/">
                {" "}
                <img src={logoscc} className="w-[100px]" />
              </Link>
            </div>
            <div className="mt-4">
              <h1 className="text-[#CA0000] text-2xl		font-bold uppercase">
                St.Clare College Of Caloocan
              </h1>
            </div>
          </div>

          <div className="mt-16">
            <div>
              <h1 className="text-center text-3xl	font-bold">OTP</h1>
            </div>
            <div>
              <h1 className="text-center text-xl mt-7	semibold">
                Verification Code
              </h1>
            </div>

            <div>
              <p className="text-center text-base	 mt-7	 text-[#a3a3a3]">
                We have sent a verification code
              </p>
              <p className="text-center text-base	 mt-1 text-[#a3a3a3]	">
                to your gmail account
              </p>
            </div>
          </div>

          <div className="mt-16 px-3 flex justify-around ">
            {inputs.map((input, index) => (
              <div className="" key={index}>
                {" "}
                <input
                  key={input.id}
                  type="text"
                  value={input.value}
                  className="w-[60px] outline-none border-b-2 border-indigo-500 text-center text-2xl"
                  onChange={(e) =>
                    handleInputChange(input.id, e.target.value, index)
                  }
                  onKeyUp={(e) => handleKeyUp(e, index)}
                  ref={(el) => (inputRefs.current[index] = el)}
                />
              </div>
            ))}
          </div>

          <div className="mt-16 flex items-center justify-center w-full">
            <div
              className="w-fit bg-[#e2e2e2]  px-5 py-3 rounded-lg
  
"
              onClick={handleOTP}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                className="text-4xl text-[#a2a2a2]	"
              >
                <rect width="24" height="24" fill="none" />
                <g fill="none">
                  <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                  <path
                    fill="currentColor"
                    d="m15.06 5.283l5.657 5.657a1.5 1.5 0 0 1 0 2.12l-5.656 5.658a1.5 1.5 0 0 1-2.122-2.122l3.096-3.096H4.5a1.5 1.5 0 0 1 0-3h11.535L12.94 7.404a1.5 1.5 0 0 1 2.122-2.121Z"
                  />
                </g>
              </svg>
            </div>
          </div>
        </div>

        <div className="w-3/5 bg-[#c8c8c8]	">
          <div className="w-full px-10 ">
            <img src={otpBg} className="w-full h-screen" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Otp;
