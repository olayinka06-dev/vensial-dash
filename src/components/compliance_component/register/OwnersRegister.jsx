"use client";
import React, { useState } from "react";

const OwnersRegister = ({ handleSwitchReg }) => {
  const [userDetails, setUserDetails] = useState({
    full_name: "",
    email_address: "",
    address: "",
    identification: "",
    nin_number: "",
    phone_number: "",
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
        <h3 className="text-[20px] font-[600]">add owners</h3>
      </div>
      <form className="mt-7">
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label
              htmlFor="full_name"
              className="block mb-2 text-sm font-medium text-gray-900  "
            >
              full name <span className="text-red-500">*</span>
            </label>

            <input
              type="text"
              id="full_name"
              name="full_name"
              value={userDetails.full_name}
              onChange={handleChangeInput}
              className="block w-full p-4 text-gray-900 border border-gray-300 rounded-2xl bg-white sm:text-md focus:cyan-400 focus:cyan-400"
              placeholder="jays acad"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email_address"
              className="block mb-2 text-sm font-medium text-gray-900  "
            >
              email address <span className="text-red-500">*</span>
            </label>

            <input
              type="email"
              id="email_address"
              name="email_address"
              value={userDetails.email_address}
              onChange={handleChangeInput}
              className="block w-full p-4 text-gray-900 border border-gray-300 rounded-2xl bg-white sm:text-md focus:cyan-400 focus:cyan-400"
              placeholder="jaysalimi.msme@gmail.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="phone_number"
              className="block mb-2 text-sm font-medium text-gray-900  "
            >
              phone number <span className="text-red-500">*</span>
            </label>
            <div className="flex flex-row gap-0 items-center">
              <select
                name=""
                style={{ border: "1px solid rgba(0,0,0,0.10)" }}
                id=""
                className="block w-[30%] p-4 text-gray-900 rounded-s-2xl bg-white sm:text-md focus:cyan-400 focus:cyan-400"
              >
                <option value="">+234</option>
              </select>
              <input
                type="tel"
                id="phone_number"
                name="phone_number"
                value={userDetails.phone_number}
                onChange={handleChangeInput}
                style={{ border: "1px solid rgba(0,0,0,0.10)" }}
                className="block w-[70%] p-4 text-gray-900 rounded-e-2xl bg-white sm:text-md focus:cyan-400 focus:cyan-400"
                placeholder="090 345 567 55"
                required
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="nationality"
              className="block mb-2 text-sm font-medium text-gray-900  "
            >
              nationality <span className="text-red-500">*</span>
            </label>
            <select
              id="nationality"
              className="block w-full p-4 text-gray-900 border border-gray-300 rounded-2xl bg-white sm:text-md focus:cyan-400 focus:cyan-400"
              placeholder="Startups"
              required
            >
              <option value="">nigeria</option>
              <option value="">nigeria</option>
              <option value="">nigeria</option>
              <option value="">nigeria</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="state"
              className="block mb-2 text-sm font-medium text-gray-900  "
            >
              state / province <span className="text-red-500">*</span>
            </label>
            <select
              id="state"
              className="block w-full p-4 text-gray-900 border border-gray-300 rounded-2xl bg-white sm:text-md focus:cyan-400 focus:cyan-400"
              placeholder="Startups"
              required
            >
              <option value="">Lagos</option>
              <option value="">Lagos</option>
              <option value="">Lagos</option>
              <option value="">Lagos</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="city"
              className="block mb-2 text-sm font-medium text-gray-900  "
            >
              city <span className="text-red-500">*</span>
            </label>
            <select
              id="city"
              className="block w-full p-4 text-gray-900 border border-gray-300 rounded-2xl bg-white sm:text-md focus:cyan-400 focus:cyan-400"
              placeholder="Startups"
              required
            >
              <option value="">Lagos</option>
              <option value="">Lagos</option>
              <option value="">Lagos</option>
              <option value="">Lagos</option>
            </select>
          </div>
        </div>
        <div className="flex-col flex gap-5 mb-6  w-full">
          <div>
            <label
              htmlFor="address"
              className="block mb-2 text-sm font-medium text-gray-900  "
            >
              address <span className="text-red-500">*</span>
            </label>

            <input
              type="text"
              id="address"
              value={userDetails.address}
              name="address"
              onChange={handleChangeInput}
              className="block w-full p-4 text-gray-900 border border-gray-300 rounded-2xl bg-white sm:text-md focus:cyan-400 focus:cyan-400"
              placeholder="20B taiwo road, ilorin, kwara, NG"
              required
            />
          </div>
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label
                htmlFor="identification"
                className="block mb-2 text-sm font-medium text-gray-900  "
              >
                means of identification <span className="text-red-500">*</span>
              </label>

              <select
                type="text"
                id="identification"
                value={userDetails.identification}
                name="identification"
                onChange={handleChangeInput}
                className="block w-full p-4 text-gray-900 border border-gray-300 rounded-2xl bg-white sm:text-md focus:cyan-400 focus:cyan-400"
                // placeholder="NIN Card"
                required
              >
                <option value="NIN Payment">NIN Payment</option>
                <option value="Voters Card">Voters Card</option>
                <option value="International Passport">
                  International Passport
                </option>
              </select>
            </div>

            <div>
              <label
                htmlFor="nin_number"
                className="block mb-2 text-sm font-medium text-gray-900  "
              >
                ID Number <span className="text-red-500">*</span>
              </label>

              <input
                type="text"
                id="nin_number"
                value={userDetails.nin_number}
                name="nin_number"
                onChange={handleChangeInput}
                className="block w-full p-4 text-gray-900 border border-gray-300 rounded-2xl bg-white sm:text-md focus:cyan-400 focus:cyan-400"
                placeholder="3401406477"
                required
              />
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="block mb-2 text-sm font-medium text-gray-900  ">
              upload Document <span className="text-red-500">*</span>
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
          </div>
        </div>

        <div className="flex justify-end">
          <button
            onClick={handleSwitchReg}
            disabled={
              !userDetails.address ||
              !userDetails.email_address ||
              !userDetails.full_name ||
              !userDetails.identification ||
              !userDetails.nin_number ||
              !userDetails.phone_number
                ? true
                : false
            }
            type="submit"
            className="text-white bg-cyan-400 hover:bg-white hover:border hover:text-cyan-400 focus:ring-4 focus:outline-none focus:ring-cyan-400 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            continue
          </button>
        </div>
      </form>
    </div>
  );
};

export default OwnersRegister;
