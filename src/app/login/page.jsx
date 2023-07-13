"use client";

import Link from "next/link";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [formErrors, setFormErrors] = useState({
    email: "",
    password: "",
  });

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const {
    email,
    password,
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

    if (!password) {
      errors.password = "Password is required.";
    }  
    // error messages ends here

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
    } else {
      setIsModalOpen(true);
    }
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const isFormValid =
    email &&
    password;

  return (
    <section className="bg-primary-color h-full flex py-10 px-10 justify-center items-center">
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

          <div>
            <label
              className="capitalize mt-6 text-black text-center text-opacity-50 text-[13px]"
              htmlFor="password"
            >
              Password:
            </label>
            <div className="relative">
              <input
                type={isPasswordVisible ? "text" : "password"}
                id="password"
                name="password"
                value={password}
                onChange={handleChange}
                required
                className="border text-black text-opacity-50 text-[13px] border-gray-300 w-full p-3 rounded-2xl"
              />
              <span
                className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                {isPasswordVisible ? (
                  <AiOutlineEyeInvisible size={20} />
                ) : (
                  <AiOutlineEye size={20} />
                )}
              </span>
            </div>
            {formErrors.password && (
              <p className="text-red-500 text-[12px]">{formErrors.password}</p>
            )}
          </div>
          <div>
            <Link href="/reset-password">
            <p className="capitalize mt-6 text-black text-opacity-50 text-end text-[13px] font-normal">
              <span
                className="underline ml-2 cursor-pointer text-primary-color font-medium"
              >
                Forgot Password
              </span>
            </p>
            </Link>
            
          </div>
          <button
            type="submit"
            disabled={!isFormValid}
            className="bg-primary-color w-full rounded-2xl text-white p-3"
          >
            Login
          </button>
        </form>

        <div>
          <p className="capitalize mt-6 text-black text-center text-opacity-50 text-[13px] font-normal">
            Don&apos;t Have an account?{" "}
            <Link
              href="/register"
              className="underline text-primary-color font-medium"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default RegisterPage;
