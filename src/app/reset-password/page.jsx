"use client";

import Link from "next/link";
import { useState } from "react";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    email: "",
  });

  const [formErrors, setFormErrors] = useState({
    email: "",
    password: "",
  });


  const {
    email,
  } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setFormErrors({ ...formErrors, [name]: "" });
  };

  // error messages start here

  const handleSubmit = (e) => {
    e.preventDefault();

    let errors = {};

    if (!email) {
      errors.email = "Email is required.";
    } 
 
    // error messages ends here

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
    } else {
      // setIsModalOpen(true);
    }
  };

  

  const isFormValid = email ;

  return (
    <section className="bg-primary-color h-[100vh] flex py-10 px-10 justify-center items-center">
      <div className="container bg-light-color lg:w-[40%] md:w-[50%] w-full py-10 rounded-xl">
        <div className="flex flex-col items-center px-10 gap-6">
          <img
            src="/assets/image1.svg"
            className="h-8 mr-3"
            alt="VoucherPay Logo"
          />
          <div className="text-center">
            <h1 className="text-black text-[20px] md:text-[30px] font-semibold capitalize">
              Welcome To VoucherPay!
            </h1>
            <p className="capitalize mt-6 text-black text-opacity-50 text-[14px] font-normal">
              register or create an account to start accepting payment with
              voucherpay.
            </p>
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          className="px-10 mt-10 flex flex-col gap-y-6"
        >
          <div>
            <label
              className="capitalize mt-6 text-black text-center text-opacity-50 text-[13px]"
              htmlFor="email"
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleChange}
              required
              className="border text-black text-opacity-50 text-[13px] border-gray-300 w-full p-3 rounded-2xl"
            />
            {formErrors.email && (
              <p className="text-red-500 text-[12px]">{formErrors.email}</p>
            )}
          </div>

          
          <button
            type="submit"
            disabled={!isFormValid}
            className="bg-primary-color w-full rounded-2xl text-white p-3"
          >
            Send Now
          </button>
        </form>

        <div>
          <p className="capitalize mt-6 text-black text-center text-opacity-50 text-[13px] font-normal">
            Don't Have an account?{" "}
            <Link
              href="/register"
              className="underline text-primary-color font-medium"
            >
              Resend Link
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default RegisterPage;
