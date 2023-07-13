"use client";

import Popup from "@/components/popup/PopUp";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Toaster, toast } from "react-hot-toast";
import { HiEye, HiEyeOff } from "react-icons/hi";

const RegistrationForm = () => {
  const router = useRouter();
  // toggle password states
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  // pop up states
  const [showPopup, setShowPopup] = useState(false);

  const handlePopupClose = () => {
    setShowPopup(false);
    // Perform any necessary actions when the popup is closed
  };
  const handleOpenPopup = () => {
    setShowPopup(true);
  };

  // registration and validation states
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    const toastId = toast.loading('Sending Request...');
 

fetch("/api/reg", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(data),
})
  .then((response) => response.json())
  .then((resp) => {
    console.log(resp.message);
    toast.dismiss(toastId);
    if (resp.statusCode === "000") {
      toast.success(<b>{resp.message}</b>);
    } else {
      // isError = true;
      toast.error(resp.message, {
        icon: '❌', // Replace ErrorIcon with your error icon component
      });
    }
  })
  .catch((error) => {
    // isError = true;
    toast.dismiss(toastId);
    toast.error(<b>{error}</b>);
  });

// if (!isError) {
//   toast.success("Request sent successfully");
// }

   /*  toast.promise(
      fetch("/api/reg", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).then((response) => response.json()),
      {
        loading: "Sending request...",
        success: (resp) => {
          console.log(resp.message);
          if (resp.statusCode === "000") {
            return <b>{resp.message}</b>;
          } else {
            toast.error(resp.message);
          }
        },
        error: (error) => {
          return <b>{error}</b>;
        },
      }
    ); */
  };

  const password = watch("password");
  const countryOptions = [
    { value: "ng", label: "Nigeria" },
    { value: "us", label: "United States" },
    { value: "ca", label: "Canada" },
    { value: "uk", label: "United Kingdom" },
  ];
  const countryCodes = [
    { value: "+1", label: "+1 (USA)" },
    { value: "+44", label: "+44 (UK)" },
    { value: "+999", label: "+999 (AU)" },
  ];

  return (
    <section>
      <Toaster />
      <div className="container">
        <div className="flex flex-col items-center px-10 gap-6">
          <img
            src="/assets/image1.svg"
            className="h-8 mr-3"
            alt="VoucherPay Logo"
          />
          <div className="text-center">
            <h1 className="text-black text-[30px] font-semibold capitalize">
              Welcome To VoucherPay!
            </h1>
            <p className="capitalize mt-6 text-black text-opacity-50 text-[16px] font-normal">
              register or create an account to start accepting payment with
              voucherpay.
            </p>
          </div>
        </div>
        <div className=" flex flex-col items-center px-10 mt-6">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="md:flex gap-4 py-4">
              {/* business name input field */}
              <div className="md:w-[70%]">
                <label htmlFor="businessName">Business Name</label>
                <input
                  id="businessName"
                  placeholder="VoucherPay"
                  type="text"
                  {...register("businessName", {
                    required: "Business name is required",
                  })}
                  className="border border-gray-300 w-full p-3 rounded-2xl outline-primary-color"
                />
                {errors.businessName && (
                  <div className="text-red-500 text-[13px]">
                    {errors.businessName.message}
                  </div>
                )}
              </div>

              {/* country input fields */}
              <div className="md:w-[30%] mt-6 md:mt-0">
                <label htmlFor="country">Country</label>
                <select
                  id="country"
                  {...register("country", { required: "Country is required" })}
                  className="border border-gray-300 w-full p-3 rounded-2xl outline-primary-color"
                >
                  <option value="">Select a country</option>
                  {countryOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                {errors.country && (
                  <div className="text-red-500 text-[13px]">
                    {errors.country.message}
                  </div>
                )}
              </div>
            </div>

            <div className="md:flex gap-4 py-4">
              {/* Surname input field */}
              <div className="md:w-[50%]">
                <label htmlFor="surname">Surname</label>
                <input
                  id="surName"
                  type="text"
                  placeholder="Jays"
                  {...register("surname", { required: "Surname is required" })}
                  className="border border-gray-300 w-full p-3 rounded-2xl outline-primary-color"
                />
                {errors.surName && (
                  <div className="text-red-500 text-[13px]">
                    {errors.surname.message}
                  </div>
                )}
              </div>

              {/* othername input field */}
              <div className="md:w-[50%] mt-6 md:mt-0">
                <label htmlFor="otherName">Other Name</label>
                <input
                  id="otherName"
                  type="text"
                  placeholder="Alimi"
                  {...register("otherNames", {
                    required: "Last name is required",
                  })}
                  className="border border-gray-300 w-full p-3 rounded-2xl outline-primary-color"
                />
                {errors.otherName && (
                  <div className="text-red-500 text-[13px]">
                    {errors.otherNames.message}
                  </div>
                )}
              </div>
            </div>

            {/* email input field */}
            <div className="py-4">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                placeholder="info@gmail.com"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+\.\S+$/,
                    message: "Invalid email address",
                  },
                })}
                className="border border-gray-300 w-full p-3 rounded-2xl outline-primary-color"
              />
              {errors.email && (
                <div className="text-red-500 text-[13px]">
                  {errors.email.message}
                </div>
              )}
            </div>

            {/* phone number input field */}

            <div>
              <label htmlFor="phoneNumber">Phone Number</label>
              <div className="flex w-full">
                <select
                  id="countryCode"
                  {...register("countryCode", {
                    required: "Country code is required",
                  })}
                  className="border border-gray-300 p-3 rounded-2xl md:rounded-s-full outline-primary-color"
                >
                  <option value="">+234 (NG)</option>
                  {countryCodes.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <input
                  id="phoneNumber"
                  type="tel"
                  {...register("phoneNumber", {
                    required: "Phone number is required",
                  })}
                  className="border border-gray-300 w-full p-3 rounded-2xl md:rounded-e-full outline-primary-color"
                />
              </div>
              {errors.countryCode && (
                <div className="text-red-500 text-[13px]">
                  {errors.countryCode.message}
                </div>
              )}
              {errors.phoneNumber && (
                <div className="text-red-500 text-[13px]">
                  {errors.phoneNumber.message}
                </div>
              )}
            </div>

            <div className="md:flex gap-4 py-4">
              {/* password input field */}
              <div className="md:w-[50%]">
                <label htmlFor="password">Password</label>
                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 6,
                        message: "Password must be at least 6 characters long",
                      },
                      pattern: {
                        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])/,
                        message:
                          "Password must contain at least one uppercase letter, one lowercase letter, and one symbol",
                      },
                    })}
                    className="border border-gray-300 w-full p-3 rounded-2xl outline-primary-color"
                  />
                  <span
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
                    onClick={() =>
                      setShowPassword((prevShowPassword) => !prevShowPassword)
                    }
                  >
                    {showPassword ? <HiEyeOff /> : <HiEye />}
                  </span>
                </div>
                {errors.password && (
                  <div className="text-red-500 text-[13px]">
                    {errors.password.message}
                  </div>
                )}
              </div>

              {/* conrim password input field */}

              <div className="md:w-[50%] mt-6 md:mt-0">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <div className="relative">
                  <input
                    id="confirmPassword"
                    type={confirmPassword ? "text" : "password"}
                    {...register("confirmPassword", {
                      required: "Confirm password is required",
                      validate: (value) =>
                        value === password ||
                        "Passwords do not match, Please make sure you input the correct password",
                    })}
                    className="border border-gray-300 w-full p-3 rounded-2xl outline-primary-color"
                  />
                  <span
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
                    onClick={() =>
                      setConfirmPassword(
                        (prevShowPassword) => !prevShowPassword
                      )
                    }
                  >
                    {confirmPassword ? <HiEyeOff /> : <HiEye />}
                  </span>
                </div>
                {errors.confirmPassword && (
                  <div className="text-red-500 text-[13px]">
                    {errors.confirmPassword.message}
                  </div>
                )}
              </div>
            </div>

            <div>
              <p className="capitalize mt-6 text-black text-opacity-50 text-[16px] font-normal">
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
              className="bg-primary-color w-full rounded-2xl text-white p-3"
            >
              Register
            </button>
          </form>
          <div>
            <p className="capitalize mt-6 text-black text-opacity-50 text-[16px] font-normal">
              Already Have an account?{" "}
              <a href="/" className="underline text-primary-color font-medium">
                Sign In
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationForm;
