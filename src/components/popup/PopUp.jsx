"use client";

import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { terms } from "./data";


const Popup = ({ isOpen, onClose }) => {
  const [showPopup, setShowPopup] = useState(isOpen);

  const handleButtonClick = () => {
    console.log('Button clicked!')
  }

  const togglePopup = () => {
    setShowPopup(!showPopup);
    onClose();
  };

  return (
    <>
      {showPopup && (
        <div className="fixed inset-0 filter_blur flex justify-center px-10 items-center z-10">
          <div className="bg-white p-10 lg:w-[50%] md:w-[60%] w-full h-[80vh] overflow-auto rounded-2xl shadow-2xl flex flex-col">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">Terms of Service</h2>
              <button onClick={togglePopup} className="text-gray-500">
                <FaTimes />
              </button>
            </div>
              <div className="bg-black-color w-[100%] h-[2vh]"></div>
            <div className="mt-6">
              {terms.map((term, index) => (
                <div key={index}>
                  <div>
                    <h2 className="font-bold text-[16px] py-2">
                      {term.header}
                    </h2>
                    <p className="leading-relaxed text-[12px] py-2">
                      <span className="font-normal">{term.num}</span>
                      <span className="ml-2 text-black text-opacity-50">{term.text}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="md:flex gap-6 mt-6 justify-end">
                <button className="py-3 px-10 cursor-pointer font-bold rounded-2xl text-black text-opacity-50 text-sm border border-black border-opacity-10 bg-light-color">I Disagree</button>
               <button className="py-3 lg:mx-0 mx-auto mt-6 md:mt-0 px-10 cursor-pointer font-bold rounded-2xl text-white border text-sm border-tranparent bg-primary-color">I Agree</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
