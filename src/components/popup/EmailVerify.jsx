"use client";

import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import Button_cyan from "../buttons/Button_cyan";

const EmailVerify = () => {
  // const [showPopup, setShowPopup] = useState(isOpen);

  // const handleButtonClick = () => {
  //   console.log("Button clicked!");
  // };

  // const togglePopup = () => {
  //   setShowPopup(!showPopup);
  // };

  return (
    <>
      {/* {showPopup && ( */}
        <div className="fixed inset-0 filter_blur flex justify-center items-center z-10">
          <div className="bg-white p-10 w-[50%] h-[80vh] overflow-auto rounded-lg shadow-xl flex flex-col">
            <div className="flex justify-end items-end mb-4">
              <button className="text-gray-500">
                <FaTimes />
              </button>
            </div>
            <div className="flex justify-center items-center">
              <img src="/assets/image1.svg" alt="" />
            </div>

            <div className="flex flex-col mt-6 gap-y-8 justify-center items-center">
              <div>
                <img src="/assets/verify_mail.svg" alt="" />
              </div>
              <h2 className="text-black text-[25px] font-semibold capitalize">
                email verification sent
              </h2>
              <p className="w-[458px] text-center">
                <span className="text-black text-opacity-50 text-[16px] font-normal capitalize">
                  verification email has been sent to your email{" "}
                </span>
                <span className="text-cyan-400 text-[16px] font-semibold underline lowercase">
                  jaysalimi.msme@gmail.com
                </span>
                 <span className="text-black ml-2 text-opacity-50 text-[16px] font-normal capitalize">
                  kindly verify to access the dashboard
                </span>
              </p>
              <div>
                <Button_cyan buttonText="Login" />
              </div>
            </div>
          </div>
        </div>
      {/* )} */}
    </>
  );
};

export default EmailVerify;
