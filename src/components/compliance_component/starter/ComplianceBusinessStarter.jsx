"use client";
import React, { useState } from "react";
import optionContent from "./Data";

const ComplianceBusinessStarter = ({ selectedOption, handleOptionChange, handleContinue }) => {
  const [currentOption, setCurrentOption] = useState(0);
  const [userDetails, setUserDetails] = useState({
    trade_name: '',
    description: ''
  });

  const handleChangeInput = (e) => {
    const {value, name} = e.target;
    setUserDetails((prevData)=>({...prevData, [name]: value}));
  }

  const optionData = [
    "Co Operative",
    "Enterpreneur",
    "School",
    "Government",
    "Agency",
    "Startup",
  ];

  const handleChangeSelect = (index) => {
    setCurrentOption(index);
  };
  return (
    <div className="animation p-12 h-auto mb-4 rounded-2xl bg-white shadow capitalize">
      <div className="flex flex-col gap-4">
        <p className="text-[rgba(0,0,0,0.50)] font-[400] text-[16px]">
          compliance
        </p>
        <h3 className="text-[20px] font-[600]">business information</h3>
        <h4 className="">
          choose business type <span className="text-red-500">*</span>
        </h4>
        <div className="flex flex-row items-center gap-6 my-7">
          <div className="flex flex-row items-center gap-2">
            <input
              type="radio"
              value="option1"
              checked={selectedOption === "option1"}
              onChange={handleOptionChange}
            />{" "}
            <span>starter business</span>
          </div>
          <div className="flex flex-row items-center gap-2">
            <input
              name="filter"
              type="radio"
              value="option2"
              checked={selectedOption === "option2"}
              onChange={handleOptionChange}
              id=""
            />{" "}
            <span>registered business</span>
          </div>
        </div>
      </div>
      <form>
        <div className="grid gap-6 mb-6 md:grid-cols-1">
          <div>
            <label
              htmlFor="business_name"
              className="block mb-2 text-sm font-medium text-gray-900  "
            >
              trading name <span className="text-red-500">*</span>
            </label>

            <input
              type="text"
              id="trade_name"
              name="trade_name"
              value={userDetails.trade_name}
              onChange={handleChangeInput}
              className="block w-full p-4 text-gray-900 border border-gray-300 rounded-2xl bg-white sm:text-md focus:cyan-400 focus:cyan-400"
              placeholder="jays acad."
              required
            />
          </div>
          <div>
            <label
              htmlFor="description"
              className="block mb-2 text-sm font-medium text-gray-900  "
            >
              description <span className="text-red-500">*</span>
            </label>
            <textarea
              type="text"
              id="description"
              value={userDetails.description}
              onChange={handleChangeInput}
              className="block w-full p-4 text-gray-900 border border-gray-300 rounded-2xl bg-white sm:text-md focus:cyan-400 focus:cyan-400"
              placeholder="jays acad is a platform that educate designer about latest trends in technology industry."
              required
              name="description"
              cols="10"
              rows="5"
            ></textarea>
          </div>
        </div>
        <div className="grid gap-6 mb-6 md:grid-cols-2 mt-3">
          <div>
            <label
              htmlFor="industry"
              className="block mb-2 text-sm font-medium text-gray-900  "
            >
              Industry <span className="text-red-500">*</span>
            </label>
            <select
              type="text"
              id="industry"
              onChange={(e) => handleChangeSelect(e.target.selectedIndex)}
              className="block w-full p-4 text-gray-900 border border-gray-300 rounded-2xl bg-white sm:text-md focus:cyan-400 focus:cyan-400"
              placeholder="Flowbite"
              required
            >
              {optionData.map((option, index) => (
                <option value={option} key={index}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label
              htmlFor="category"
              className="block mb-2 text-sm font-medium text-gray-900  "
            >
              Category <span className="text-red-500">*</span>
            </label>

            <select
              id="category"
              className="block w-full p-4 text-gray-900 border border-gray-300 rounded-2xl bg-white sm:text-md focus:cyan-400 focus:cyan-400"
              required
            >
              {optionContent[currentOption].content.map((opt, indexOne) => (
                <option key={indexOne} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            onClick={handleContinue}
            disabled={!userDetails.description || !userDetails.trade_name ? true : false}
            className="text-white bg-cyan-400 hover:bg-white hover:border hover:text-cyan-400 focus:ring-4 focus:outline-none focus:ring-cyan-400 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ComplianceBusinessStarter;
