"use client"
import React, { useState } from 'react';

const ContactInfoStarter = ({handleContinue}) => {
  const [userDetails, setUserDetails] = useState({
    business_email: '',
    business_address: '',
    tax_id: '',
  });

  const handleChangeInput = (e) => {
    const {value, name} = e.target;
    setUserDetails((prevData)=>({...prevData, [name]: value}));
  }
  return (
    <div className="animation p-12 h-auto mb-4 rounded-2xl bg-white shadow capitalize">
      <div className="flex flex-col gap-4">
        <p className="text-[rgba(0,0,0,0.50)] font-[400] text-[16px]">
          compliance
        </p>
        <h3 className="text-[20px] font-[600]">contact information</h3>
      </div>
      <form className="mt-7">
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label
              htmlFor="business_email"
              className="block mb-2 text-sm font-medium text-gray-900  "
            >
              business email <span className="text-red-500">*</span>
            </label>

            <input
              type="email"
              id="business_email"
              name='business_email'
              onChange={handleChangeInput}
              className="block w-full p-4 text-gray-900 border border-gray-300 rounded-2xl bg-white sm:text-md focus:cyan-400 focus:cyan-400"
              placeholder="jays@gmail.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="business_address"
              className="block mb-2 text-sm font-medium text-gray-900  "
            >
              business address <span className="text-red-500">*</span>
            </label>

            <input
              type="text"
              id="business_address"
              name='business_address'
              value={userDetails.business_address}
              onChange={handleChangeInput}
              className="block w-full p-4 text-gray-900 border border-gray-300 rounded-2xl bg-white sm:text-md focus:cyan-400 focus:cyan-400"
              placeholder="20B taiwo road, ilorin, kwara, NG"
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
                style={{border: "1px solid rgba(0,0,0,0.10)"}}
                id=""
                className="block w-[30%] p-4 text-gray-900 rounded-s-2xl bg-white sm:text-md focus:cyan-400 focus:cyan-400"
              >
                <option value="">+234</option>
              </select>
              <input
                type="tel"
                id="phone_number"
                style={{ border: "1px solid rgba(0,0,0,0.10)" }}
                className="block w-[70%] p-4 text-gray-900 rounded-e-2xl bg-white sm:text-md focus:cyan-400 focus:cyan-400"
                placeholder="090 345 567 55"
                required
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="tax_id"
              className="block mb-2 text-sm font-medium text-gray-900  "
            >
              taxation ID <span className="text-red-500">*</span>
            </label>

            <input
              type="text"
              id="tax_id"
              name='tax_id'
              value={userDetails.tax_id}
              onChange={handleChangeInput}
              className="block w-full p-4 text-gray-900 border border-gray-300 rounded-2xl bg-white sm:text-md focus:cyan-400 focus:cyan-400"
              placeholder="3401406477"
              required
            />
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            onClick={handleContinue}
            disabled={!userDetails.business_address || !userDetails.business_email || !userDetails.tax_id ? true : false}
            className="text-white bg-cyan-400 hover:bg-white hover:border hover:text-cyan-400 focus:ring-4 focus:outline-none focus:ring-cyan-400 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            save change
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactInfoStarter;
