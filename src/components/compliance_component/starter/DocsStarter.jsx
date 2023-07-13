"use client";
import React, { useState } from "react";

const DocsStarter = ({ handleContinue }) => {
  const [userDetails, setUserDetails] = useState({
    file: "",
  });

  const handleChangeInput = (e) => {
    const { value, name } = e.target;
    setUserDetails((prevData) => ({ ...prevData, [name]: value }));
  };
  return (
    <div className="animation p-12 h-auto mb-4 rounded-2xl bg-white shadow capitalize">
      <div className="flex flex-col gap-4">
        <p className="text-[rgba(0,0,0,0.50)] font-[400] text-[16px]">
          compliance
        </p>
        <h3 className="text-[20px] font-[600]">document</h3>
      </div>
      <form className="mt-7">
        <div className="grid gap-6 mb-6 md:grid-cols-1">
          <div>
            <label
              htmlFor="bank_name"
              className="block mb-2 text-sm font-medium text-gray-900  "
            >
              proof of address <span className="text-red-500">*</span>
            </label>

            <select
              id="bank_name"
              className="block w-full p-4 text-gray-900 border border-gray-300 rounded-2xl bg-white sm:text-md focus:cyan-400 focus:cyan-400"
              placeholder="utility bills payment"
              required
            >
              <option value="">utility bills payment</option>
              <option value="">utility bills payment</option>
              <option value="">utility bills payment</option>
              <option value="">utility bills payment</option>
              <option value="">utility bills payment</option>
            </select>
          </div>

          <div className="border border-[rgba(0,0,0,0.10)] rounded-2xl p-4">
            <div className="py-[120px!important] bg-[#F9FBFC] text-center mx-auto rounded-xl">
              <div className="">
                <span className="text-[12px] font-[600] text-[rgba(0,0,0,0.30)]">
                  drag & drop here{" "}
                </span>
                <input
                  onChange={handleChangeInput}
                  value={userDetails.file}
                  type="file"
                  className="underline cursor-pointer text-[#00CCFF] border-none bg-transparent"
                  name="file"
                  id="file"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            onClick={handleContinue}
            disabled={!userDetails.file ? true : false}
            className="text-white bg-cyan-400 hover:bg-white hover:border hover:text-cyan-400 focus:ring-4 focus:outline-none focus:ring-cyan-400 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            save change
          </button>
        </div>
      </form>
    </div>
  );
};

export default DocsStarter;
