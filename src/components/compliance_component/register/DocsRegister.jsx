"use client";
import React, { useState } from "react";

const DocsRegister = ({ handleContinue }) => {
  const [userDetails, setUserDetails] = useState({
    file: "",
    certificate: "",
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
        <div className="flex flex-col gap-5">
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
          <h3 className="block mb-2 text-sm font-medium text-gray-900  ">
            upload your form 3 <span className="text-red-500">*</span>
          </h3>
          <div className="border w-full border-[rgba(0,0,0,0.10)] rounded-2xl p-4">
            <div className="py-[120px!important] px-5 bg-[#F9FBFC] text-center mx-auto rounded-xl">
              <div className="flex flex-col md:flex-row gap-3 items-center justify-center">
                <span className="text-[12px] font-[600] text-[rgba(0,0,0,0.30)]">
                  drag & drop here{" "}
                </span>
                <input
                  type="file"
                  onChange={handleChangeInput}
                  value={userDetails.file}
                  name="file"
                  id="file"
                  className="underline md:mx-0 mx-auto md:w-auto w-full text-[#00CCFF] cursor-pointer border-none bg-transparent"
                />
              </div>
            </div>
          </div>
          <h3 className="block mb-2 text-sm font-medium text-gray-900  ">
            certificate of corporation <span className="text-red-500">*</span>
          </h3>
          <div className="border border-[rgba(0,0,0,0.10)] rounded-2xl p-4">
            <div className="py-[120px!important] px-5 bg-[#F9FBFC] text-center mx-auto rounded-xl">
              <div className="flex flex-col md:flex-row gap-3 items-center justify-center">
                <span className="text-[12px] cursor-pointer font-[600] text-[rgba(0,0,0,0.30)]">
                  drag & drop here{" "}
                </span>
                <input
                  type="file"
                  className="underline md:mx-0 mx-auto md:w-auto w-full text-[#00CCFF] border-none bg-transparent"
                  name="certificate"
                  value={userDetails.certificate}
                  onChange={handleChangeInput}
                  id="certificate"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end mt-5">
          <button
            type="submit"
            onClick={handleContinue}
            disabled={
              !userDetails.file || !userDetails.certificate ? true : false
            }
            className="text-white bg-cyan-400 hover:bg-white hover:border hover:text-cyan-400 focus:ring-4 focus:outline-none focus:ring-cyan-400 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            save change
          </button>
        </div>
      </form>
    </div>
  );
};

export default DocsRegister;
