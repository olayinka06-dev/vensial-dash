"use client";

import Popup from "@/components/popup/PopUp";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
// import Modal from "react-modal";
import { FaTimes } from "react-icons/fa";
import Button_cyan from "@/components/buttons/Button_cyan";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    businessName: "",
    country: "",
    surname: "",
    otherName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });

  const [formErrors, setFormErrors] = useState({
    businessName: "",
    country: "",
    surname: "",
    otherName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });

  const [showPopup, setShowPopup] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState(false);

  const {
    businessName,
    country,
    surname,
    otherName,
    email,
    phoneNumber,
    password,
    confirmPassword,
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

    if (!businessName) {
      errors.businessName = "Business name is required.";
    }

    if (!country) {
      errors.country = "Country is required.";
    }

    if (!surname) {
      errors.surname = "Surname is required.";
    }

    if (!otherName) {
      errors.otherName = "Other name is required.";
    }

    if (!email) {
      errors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email is invalid.";
    }

    if (!phoneNumber) {
      errors.phoneNumber = "Phone number is required.";
    }

    if (!password) {
      errors.password = "Password is required.";
    } else if (password.length < 6) {
      errors.password = "Password should be at least 6 characters long.";
    } else if (
      !/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/.test(
        password
      )
    ) {
      errors.password =
        "Password must contain at least 1 uppercase, 1 lowercase, 1 number, and 1 symbol.";
    }

    if (!confirmPassword) {
      errors.confirmPassword = "Confirm password is required.";
    } else if (password !== confirmPassword) {
      errors.confirmPassword = "Passwords do not match.";
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

  const toggleConfirmPasswordVisibility = () => {
    setIsConfirmPasswordVisible(!isConfirmPasswordVisible);
  };

  const handlePopupClose = () => {
    setShowPopup(false);
    // Perform any necessary actions when the popup is closed
  };

  const handleOpenPopup = () => {
    setShowPopup(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setFormData({
      businessName: "",
      country: "",
      surname: "",
      otherName: "",
      email: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
    });
    setFormErrors({
      businessName: "",
      country: "",
      surname: "",
      otherName: "",
      email: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
    });
  };

  const isFormValid =
    businessName &&
    country &&
    surname &&
    otherName &&
    email &&
    phoneNumber &&
    password &&
    confirmPassword;

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
              htmlFor="businessName"
            >
              Business Name:
            </label>
            <input
              type="text"
              id="businessName"
              name="businessName"
              value={businessName}
              onChange={handleChange}
              required
              className="border text-black text-opacity-50 text-[13px] border-gray-300 w-full p-3 rounded-2xl"
            />
            {formErrors.businessName && (
              <p className="text-red-500 text-[12px]">{formErrors.businessName}</p>
            )}
          </div>
          <div>
            <label
              className="capitalize mt-6 text-black text-center text-opacity-50 text-[13px]"
              htmlFor="country"
            >
              Country:
            </label>
            <select
              id="country"
              name="country"
              value={country}
              onChange={handleChange}
              required
              className="border text-black text-opacity-50 text-[13px] border-gray-300 w-full p-3 rounded-2xl"
            >
              <option value="">Select Country</option>
              <option value="country1">Country 1</option>
              <option value="country2">Country 2</option>
              {/* Add more countries as needed */}
            </select>
            {formErrors.country && (
              <p className="text-red-500 text-[12px]">{formErrors.country}</p>
            )}
          </div>
          <div>
            <label
              className="capitalize mt-6 text-black text-center text-opacity-50 text-[13px]"
              htmlFor="surname"
            >
              Surname:
            </label>
            <input
              type="text"
              id="surname"
              name="surname"
              value={surname}
              onChange={handleChange}
              required
              className="border text-black text-opacity-50 text-[13px] border-gray-300 w-full p-3 rounded-2xl"
            />
            {formErrors.surname && (
              <p className="text-red-500 text-[12px]">{formErrors.surname}</p>
            )}
          </div>
          <div>
            <label
              className="capitalize mt-6 text-black text-center text-opacity-50 text-[13px]"
              htmlFor="otherName"
            >
              Other Name:
            </label>
            <input
              type="text"
              id="otherName"
              name="otherName"
              value={otherName}
              onChange={handleChange}
              required
              className="border text-black text-opacity-50 text-[13px] border-gray-300 w-full p-3 rounded-2xl"
            />
            {formErrors.otherName && (
              <p className="text-red-500 text-[12px]">{formErrors.otherName}</p>
            )}
          </div>
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
          <div className="flex gap-x-3 items-center">
            <div>
              <label
                className="capitalize mt-6 text-black text-center text-opacity-50 text-[13px]"
                htmlFor=""
              >
                Code
              </label>
              <select
                name=""
                id=""
                className="border text-black text-opacity-50 text-[13px] border-gray-300 w-full p-3 rounded-2xl"
              >
                <option value="">Select Code</option>
                <option value="">+234</option>
                <option value="">+339</option>
                <option value="">+256</option>
                <option value="">+911</option>
              </select>
            </div>
            <div>
              <label
                className="capitalize mt-6 text-black text-center text-opacity-50 text-[13px]"
                htmlFor="phoneNumber"
              >
                Phone Number:
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={phoneNumber}
                onChange={handleChange}
                required
                className="border text-black text-opacity-50 text-[13px] border-gray-300 w-full p-3 rounded-2xl"
              />
            </div>
            {formErrors.phoneNumber && (
              <p className="text-red-500 text-[12px]">{formErrors.phoneNumber}</p>
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
            <label
              className="capitalize mt-6 text-black text-center text-opacity-50 text-[13px]"
              htmlFor="confirmPassword"
            >
              Confirm Password:
            </label>
            <div className="relative">
              <input
                type={isConfirmPasswordVisible ? "text" : "password"}
                id="confirmPassword"
                name="confirmPassword"
                value={confirmPassword}
                onChange={handleChange}
                required
                className="border text-black text-opacity-50 text-[13px] border-gray-300 w-full p-3 rounded-2xl"
              />
              <span
                className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
                onClick={toggleConfirmPasswordVisibility}
              >
                {isConfirmPasswordVisible ? (
                  <AiOutlineEyeInvisible size={20} />
                ) : (
                  <AiOutlineEye size={20} />
                )}
              </span>
            </div>
            {formErrors.confirmPassword && (
              <p className="text-red-500 text-[12px]">{formErrors.confirmPassword}</p>
            )}
          </div>
          <div>
            <p className="capitalize mt-6 text-black text-opacity-50 text-center text-[13px] font-normal">
              By signing Up Means You Agree To Our
              <span
                onClick={handleOpenPopup}
                className="underline ml-2 cursor-pointer text-primary-color font-medium"
              >
                Terms of Services
              </span>
            </p>
            {showPopup && (
              <Popup isOpen={showPopup} onClose={handlePopupClose} />
            )}
          </div>
          <button
            type="submit"
            disabled={!isFormValid}
            className="bg-primary-color cursor-pointer w-full rounded-2xl text-white p-3"
          >
            Register
          </button>
        </form>

        <div>
          <p className="capitalize mt-6 text-black text-center text-opacity-50 text-[13px] font-normal">
            Already Have an account?{" "}
            <Link
              href="/login"
              className="underline text-primary-color font-medium"
            >
              Sign In
            </Link>
          </p>
        </div>
       {/*  <Modal isOpen={isModalOpen} className="w-[50%]" onRequestClose={closeModal}>
        <div className="fixed inset-0 bg-primary-color filter_blur px-10 flex justify-center items-center z-10">
          <div className="bg-white p-10 lg:w-[30%] md:w-[50%] w-full h-[80vh] overflow-auto rounded-2xl shadow-2xl flex flex-col">
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
              <p className="text-center">
                <span className="text-black text-opacity-50 text-[13px] font-normal capitalize">
                  verification email has been sent to your email{" "}
                </span>
                <span className="text-cyan-400 text-[13px] font-semibold underline lowercase">
                  jaysalimi.msme@gmail.com
                </span>
                 <span className="text-black ml-2 text-opacity-50 text-[13px] font-normal capitalize">
                  kindly verify to access the dashboard
                </span>
              </p>
              <div>
                <Button_cyan buttonText="Login" />
              </div>
            </div>
          </div>
        </div>
        </Modal> */}
      </div>
    </section>
  );
};

export default RegisterPage;
