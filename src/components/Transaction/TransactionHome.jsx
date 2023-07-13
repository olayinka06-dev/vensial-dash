"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import DataTable from "../Table/DataTable";

import { TbDotsVertical } from "react-icons/tb";
export default function TransactionHome() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownOpen1, setIsDropdownOpen1] = useState(false);
  const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);
  const [isDropdownOpen3, setIsDropdownOpen3] = useState(false);
  const [isDropdownOpen4, setIsDropdownOpen4] = useState(false);
  const [isDropdownOpen5, setIsDropdownOpen5] = useState(false);
  const [isDropdownOpen6, setIsDropdownOpen6] = useState(false);
  const [isDropdownOpen7, setIsDropdownOpen7] = useState(false);
  const [isDropdownOpen8, setIsDropdownOpen8] = useState(false);
  const [isDropdownDelete, setIsDropdownDelete] = useState(false);
  const [isGoback, setIsGoback] = useState(false);

  const goBack = () => {
    setIsGoback(!isGoback);
    setIsDropdownDelete(false);
  };
  const Dropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    setIsGoback(false);
    setIsDropdownOpen1(false);
    setIsDropdownOpen2(false);
    setIsDropdownOpen3(false);
    setIsDropdownOpen4(false);
    setIsDropdownOpen5(false);
    setIsDropdownOpen6(false);
    setIsDropdownOpen7(false);
    setIsDropdownOpen8(false);
  };
  const Dropdown1 = () => {
    setIsDropdownOpen1(!isDropdownOpen1);
    setIsDropdownOpen(false);
    setIsDropdownOpen2(false);
    setIsDropdownOpen3(false);
    setIsDropdownOpen4(false);
    setIsDropdownOpen5(false);
    setIsDropdownOpen6(false);
    setIsDropdownOpen7(false);
    setIsDropdownOpen8(false);
  };
  const Dropdown2 = () => {
    setIsDropdownOpen2(!isDropdownOpen2);
    setIsDropdownOpen1(false);
    setIsDropdownOpen(false);
    setIsDropdownOpen3(false);
    setIsDropdownOpen4(false);
    setIsDropdownOpen5(false);
    setIsDropdownOpen6(false);
    setIsDropdownOpen7(false);
    setIsDropdownOpen8(false);
  };
  const Dropdown3 = () => {
    setIsDropdownOpen3(!isDropdownOpen3);
    setIsDropdownOpen1(false);
    setIsDropdownOpen(false);
    setIsDropdownOpen2(false);
    setIsDropdownOpen4(false);
    setIsDropdownOpen5(false);
    setIsDropdownOpen6(false);
    setIsDropdownOpen7(false);
    setIsDropdownOpen8(false);
  };
  const Dropdown4 = () => {
    setIsDropdownOpen4(!isDropdownOpen4);
    setIsDropdownOpen1(false);
    setIsDropdownOpen(false);
    setIsDropdownOpen3(false);
    setIsDropdownOpen2(false);
    setIsDropdownOpen5(false);
    setIsDropdownOpen6(false);
    setIsDropdownOpen7(false);
    setIsDropdownOpen8(false);
  };
  const Dropdown5 = () => {
    setIsDropdownOpen5(!isDropdownOpen5);
    setIsDropdownOpen1(false);
    setIsDropdownOpen(false);
    setIsDropdownOpen3(false);
    setIsDropdownOpen4(false);
    setIsDropdownOpen2(false);
    setIsDropdownOpen6(false);
    setIsDropdownOpen7(false);
    setIsDropdownOpen8(false);
  };
  const Dropdown6 = () => {
    setIsDropdownOpen6(!isDropdownOpen6);
    setIsDropdownOpen1(false);
    setIsDropdownOpen(false);
    setIsDropdownOpen3(false);
    setIsDropdownOpen4(false);
    setIsDropdownOpen5(false);
    setIsDropdownOpen2(false);
    setIsDropdownOpen7(false);
    setIsDropdownOpen8(false);
  };
  const Dropdown7 = () => {
    setIsDropdownOpen7(!isDropdownOpen7);
    setIsDropdownOpen1(false);
    setIsDropdownOpen(false);
    setIsDropdownOpen3(false);
    setIsDropdownOpen4(false);
    setIsDropdownOpen5(false);
    setIsDropdownOpen6(false);
    setIsDropdownOpen2(false);
    setIsDropdownOpen8(false);
  };
  const Dropdown8 = () => {
    setIsDropdownOpen8(!isDropdownOpen8);
    setIsDropdownOpen1(false);
    setIsDropdownOpen(false);
    setIsDropdownOpen3(false);
    setIsDropdownOpen4(false);
    setIsDropdownOpen5(false);
    setIsDropdownOpen6(false);
    setIsDropdownOpen7(false);
    setIsDropdownOpen2(false);
  };
  const DropDelete = () => {
    setIsDropdownDelete(!isDropdownDelete);
  };

  const data = [
    [
      "1",
      "d3-7ea471789ebe",
      "mikexenon23@yahoo.com",
      "bartholomew65@gmail.com",
      "+N 20,000",
    ],
    [
      "2",
      "d3-7ea471789ebe",
      "mikexenon23@yahoo.com",
      "bartholomew65@gmail.com",
      "+N 20,000",
    ],
  ];

  let columns = [
    { title: "S/N" },
    { title: "Transaction ID" },
    { title: "Source Acct" },
    { title: "Destination Acct" },
    { title: "Amount" },
    {
      title: "Action",
      render: (data, type, row) => {
        return `
        <button className="relative cursor-pointer text-xs">
        ${(<TbDotsVertical />)}
      </button>
        `;
      },
    },
  ];

  return (
    <div className="container-fluid bg-[#FFFFFF] py-[50px] px-[30p rounded-2xl">
      <div className="container flex flex-col lg:flex-row">
        <div className="container">
          <p className="text-[#000000] lg:text-[20px] lg:pb-[0px] pb-[15px] text-[15px] font-[600]">
            Transaction History
          </p>
        </div>

        <div className="lg:container relative lg:items-end items-start lg:justify-end justify-start flex space-x-[10px]">
          <div className=" lg:w-full w-[210px] flex lg:py-[5px] py-[2px] lg:px-[10px] px-[5px] rounded-[10px] border border-[#c6c2c2]">
            <label
              htmlFor="search"
              className="lg:text-[30px] text-[25px] text-[#c6c2c2] cursor-pointer"
            >
              <BiSearch />
            </label>
            <input
              className="lg:px-[10px] lg:w-full w-[165px] px-[5px] outline-none"
              type="text"
              name="search"
              id=""
              placeholder="Search Transaction"
            />
          </div>
          <div className="border border-[#c6c2c2] rounded-[10px] lg:py-[7px] py-[2px] lg:px-[10px] px-[5px] space-x-[20px]">
            <select id="selectOption" className="outline-none ">
              <option className="lg:text-[15px] text-[10px]" value="option1">
                Daily
              </option>
              <option className="lg:text-[15px] text-[10px]" value="option2">
                Weekly
              </option>
              <option className="lg:text-[15px] text-[10px]" value="option3">
                Monthly
              </option>
              <option className="lg:text-[15px] text-[10px]" value="option3">
                Yearly
              </option>
            </select>
          </div>
        </div>
      </div>
      <DataTable data={data} columns={columns} />
      <div className="container lg:mt-[50px] mt-[20px] lg:overflow-hidden w-full overflow-x-scroll">
        <div className="container lg:w-full w-[800px] bg-[rgba(249,251,252,1)] py-[10px] px-[10px] items-start justify-between flex">
          <p className="text-[rgba(0,0,0,0.5)] text-[14px] font-[600]">
            Transaction ID
          </p>
          <p className="text-[rgba(0,0,0,0.5)] text-[14px] font-[600]">
            Source Acct
          </p>
          <p className="text-[rgba(0,0,0,0.5)] text-[14px] font-[600]">
            Destination Acct
          </p>
          <p className="text-[rgba(0,0,0,0.5)] text-[14px] font-[600]">
            Amount
          </p>
          <p></p>
        </div>
        <div className="container lg:w-full w-[800px] border-b-2 items-start py-[10px] px-[10px] justify-between flex">
          <p className=" text-[rgba(0,0,0,0.5)] text-[12px]">
            <span className="py-[2px] px-[5px] border border-grey">1</span>
            <span className="ms-[5px]">d3-7ea471789ebe</span>
          </p>
          <p className="text-[rgba(0,0,0,0.5)] text-[12px] ">
            mikexenon23@yahoo.com
          </p>
          <p className="text-[rgba(0,0,0,0.5)] text-[12px] ">
            bartholomew65@gmail.com
          </p>
          <p className="text-[12px] text-[#00CCFF] ">+N 20,000</p>
          <button
            className=" relative cursor-pointer text-[10px]"
            onClick={Dropdown}
          >
            <img src="/assets/dots.svg" className="text-[rgba(0,0,0,0.5)]" />
          </button>
          {isDropdownOpen && (
            <div className=" bg-[#FFFFFF] shadow py-[10px] px-[20px] rounded-[10px] absolute z-20 lg:top-[40%] top-[42%] lg:right-0 right-[35px]">
              <div className="flex space-x-[10px] border-b-2">
                <div className="flex space-x-[5px] pb-[10px] text-[rgba(0,0,0,0.5)]">
                  <Image height={10} width={10} src="/assets/status.svg" />
                  <p className="text-[rgba(0,0,0,0.5)] text-[11px]">Status:</p>
                </div>
                <p className="text-[rgba(0,204,255,1)] text-[11px]">Success</p>
              </div>
              <div className="flex space-x-[5px] pt-[15px] pb-[10px] text-[rgba(0,0,0,0.5)]">
                <Image height={10} width={10} src="/assets/eye.svg" />
                <Link
                  href={"/transactions/1"}
                  className="text-[rgba(0,0,0,0.5)] text-[11px]  cursor-pointer"
                >
                  View Details
                </Link>
              </div>
              <div className="flex space-x-[5px] pb-[10px] text-[red]">
                <Image height={10} width={10} src="/assets/trash.svg" />
                <button
                  className="relative cursor-pointer"
                  onClick={DropDelete}
                >
                  <p className="text-[red] text-[11px] cursor-pointer">
                    Delete
                  </p>
                </button>
                {isDropdownDelete && (
                  <div className="container mx-auto lg:w-[500px] w-[250px] bg-[#FFFFFF] bg-transparent backdrop-blur-[3px] shadow py-[30px] px-[20px] rounded-[10px] absolute z-20 lg:top-[-45%] top-[-70%] lg:right-[250%] right-[80px]">
                    <div className="container flex  items-end justify-end">
                      <img
                        src="/assets/iconx.svg"
                        className="cursor-pointer"
                        onClick={goBack}
                      />
                    </div>
                    <p className=" text-black text-center lg:text-[16px] text-[11px] leading-[20px] font-[600]">
                      Are You Sure You Want To <br /> Delete This Content?
                    </p>
                    <div className="container mx-auto lg:mt-[40px] mt-[20px] space-x-[20px] items-center justify-center flex">
                      <div className="container lg:w-[360px] w-[200px] rounded-[12px]  lg:py-[12px] py-[5px] border border-[rgba(0, 0, 0, 0.1)]">
                        <p
                          onClick={goBack}
                          className="text-center cursor-pointer text-[rgba(0,0,0,0.5)] lg:text-[15px] text-[12px] font-[600]"
                        >
                          No, Go Back
                        </p>
                      </div>
                      <div className="container lg:py-[12px] py-[5px] rounded-[12px] cursor-pointer border border-[rgba(254,86,33,1)] bg-[rgba(254,86,33,1)]">
                        <p className="text-center text-[white] lg:text-[15px] text-[12px] font-[600]">
                          Yes, Delete It
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
        <div className="container lg:w-full w-[800px] border-b-2 items-start py-[10px] px-[10px] justify-between flex">
          <p className=" text-[rgba(0,0,0,0.5)] text-[12px]">
            <span className="py-[2px] px-[5px] border border-grey">2</span>
            <span className="ms-[5px]">d3-7ea471789ebe</span>
          </p>
          <p className="text-[rgba(0,0,0,0.5)] text-[12px] ">
            mikexenon23@yahoo.com
          </p>
          <p className="text-[rgba(0,0,0,0.5)] text-[12px] ">
            bartholomew65@gmail.com
          </p>
          <p className="text-[#00CCFF] text-[12px] ">+N 20,000</p>
          <button
            className=" relative cursor-pointer text-[10px]"
            onClick={Dropdown1}
          >
            <img src="/assets/dots.svg" className="text-[rgba(0,0,0,0.5)]" />
          </button>
          {isDropdownOpen1 && (
            <div className=" bg-[#FFFFFF] shadow py-[10px] px-[20px] rounded-[10px] z-20 absolute lg:top-[46%] top-[48%] lg:right-0 right-[35px]">
              <div className="flex space-x-[10px] border-b-2">
                <div className="flex space-x-[5px] pb-[10px] text-[rgba(0,0,0,0.5)]">
                  <Image height={10} width={10} src="/assets/status.svg" />
                  <p className="text-[rgba(0,0,0,0.5)] text-[11px]">Status:</p>
                </div>
                <p className="text-[rgba(0,204,255,1)] text-[11px]">Success</p>
              </div>
              <div className="flex space-x-[5px] pt-[15px] pb-[10px] text-[rgba(0,0,0,0.5)]">
                <Image height={10} width={10} src="/assets/eye.svg" />
                <Link
                  href={"/transactions/1"}
                  className="text-[rgba(0,0,0,0.5)] text-[11px]  cursor-pointer"
                >
                  View Details
                </Link>
              </div>
              <div className="flex space-x-[5px] pb-[10px] text-[red]">
                <Image height={10} width={10} src="/assets/trash.svg" />
                <p className="text-[red] text-[11px] cursor-pointer">Delete</p>
              </div>
            </div>
          )}
        </div>
        <div className="container lg:w-full w-[800px] border-b-2 items-start py-[10px] px-[10px] justify-between flex">
          <p className=" text-[rgba(0,0,0,0.5)] text-[12px]">
            <span className="py-[2px] px-[5px] border border-grey">3</span>
            <span className="ms-[5px]">d3-7ea471789ebe</span>
          </p>
          <p className="text-[rgba(0,0,0,0.5)] text-[12px] ">
            mikexenon23@yahoo.com
          </p>
          <p className="text-[rgba(0,0,0,0.5)] text-[12px] ">
            bartholomew65@gmail.com
          </p>
          <p className="text-[#00CCFF] text-[12px] ">+N 20,000</p>
          <button
            className=" relative cursor-pointer text-[10px]"
            onClick={Dropdown2}
          >
            <img src="/assets/dots.svg" className="text-[rgba(0,0,0,0.5)]" />
          </button>
          {isDropdownOpen2 && (
            <div className=" bg-[#FFFFFF] shadow py-[10px] px-[20px] rounded-[10px] z-20 absolute lg:top-[52%] top-[54%] lg:right-0 right-[35px]">
              <div className="flex space-x-[10px] border-b-2">
                <div className="flex space-x-[5px] pb-[10px] text-[rgba(0,0,0,0.5)]">
                  <Image height={10} width={10} src="/assets/status.svg" />
                  <p className="text-[rgba(0,0,0,0.5)] text-[11px]">Status:</p>
                </div>
                <p className="text-[rgba(0,204,255,1)] text-[11px]">Success</p>
              </div>
              <div className="flex space-x-[5px] pt-[15px] pb-[10px] text-[rgba(0,0,0,0.5)]">
                <Image height={10} width={10} src="/assets/eye.svg" />
                <Link
                  href={"/transactions/1"}
                  className="text-[rgba(0,0,0,0.5)] text-[11px]  cursor-pointer"
                >
                  View Details
                </Link>
              </div>
              <div className="flex space-x-[5px] pb-[10px] text-[red]">
                <Image height={10} width={10} src="/assets/trash.svg" />
                <p className="text-[red] text-[11px] cursor-pointer">Delete</p>
              </div>
            </div>
          )}
        </div>
        <div className="container lg:w-full w-[800px] border-b-2 items-start py-[10px] px-[10px] justify-between flex">
          <p className=" text-[rgba(0,0,0,0.5)] text-[12px]">
            <span className="py-[2px] px-[5px] border border-grey">4</span>
            <span className="ms-[5px]">d3-7ea471789ebe</span>
          </p>
          <p className="text-[rgba(0,0,0,0.5)] text-[12px] ">
            mikexenon23@yahoo.com
          </p>
          <p className="text-[rgba(0,0,0,0.5)] text-[12px] ">
            bartholomew65@gmail.com
          </p>
          <p className="text-[#FE5621] text-[12px] ">+N 20,000</p>
          <button
            className=" relative cursor-pointer text-[10px]"
            onClick={Dropdown3}
          >
            <img src="/assets/dots.svg" className="text-[rgba(0,0,0,0.5)]" />
          </button>
          {isDropdownOpen3 && (
            <div className=" bg-[#FFFFFF] shadow py-[10px] px-[20px] rounded-[10px] z-20 absolute lg:top-[58%] top-[61%] lg:right-0 right-[35px]">
              <div className="flex space-x-[10px] border-b-2">
                <div className="flex space-x-[5px] pb-[10px] text-[rgba(0,0,0,0.5)]">
                  <Image height={10} width={10} src="/assets/status.svg" />
                  <p className="text-[rgba(0,0,0,0.5)] text-[11px]">Status:</p>
                </div>
                <p className="text-[red] text-[11px]">Cancelled</p>
              </div>
              <div className="flex space-x-[5px] pt-[15px] pb-[10px] text-[rgba(0,0,0,0.5)]">
                <Image height={10} width={10} src="/assets/eye.svg" />
                <Link
                  href={"/transactions/1"}
                  className="text-[rgba(0,0,0,0.5)] text-[11px]  cursor-pointer"
                >
                  View Details
                </Link>
              </div>
              <div className="flex space-x-[5px] pb-[10px] text-[red]">
                <Image height={10} width={10} src="/assets/trash.svg" />
                <p className="text-[red] text-[11px] cursor-pointer">Delete</p>
              </div>
            </div>
          )}
        </div>
        <div className="container lg:w-full w-[800px] border-b-2 items-start py-[10px] px-[10px] justify-between flex">
          <p className=" text-[rgba(0,0,0,0.5)] text-[12px]">
            <span className="py-[2px] px-[5px] border border-grey">5</span>
            <span className="ms-[5px]">d3-7ea471789ebe</span>
          </p>
          <p className="text-[rgba(0,0,0,0.5)] text-[12px] ">
            mikexenon23@yahoo.com
          </p>
          <p className="text-[rgba(0,0,0,0.5)] text-[12px] ">
            bartholomew65@gmail.com
          </p>
          <p className="text-[#00CCFF] text-[12px] ">+N 20,000</p>
          <button
            className=" relative cursor-pointer text-[10px]"
            onClick={Dropdown4}
          >
            <img src="/assets/dots.svg" className="text-[rgba(0,0,0,0.5)]" />
          </button>
          {isDropdownOpen4 && (
            <div className=" bg-[#FFFFFF] shadow py-[10px] px-[20px] rounded-[10px] z-20 absolute lg:top-[64%] top-[68%] lg:right-0 right-[35px]">
              <div className="flex space-x-[10px] border-b-2">
                <div className="flex space-x-[5px] pb-[10px] text-[rgba(0,0,0,0.5)]">
                  <Image height={10} width={10} src="/assets/status.svg" />
                  <p className="text-[rgba(0,0,0,0.5)] text-[11px]">Status:</p>
                </div>
                <p className="text-[rgba(0,204,255,1)] text-[11px]">Success</p>
              </div>
              <div className="flex space-x-[5px] pt-[15px] pb-[10px] text-[rgba(0,0,0,0.5)]">
                <Image height={10} width={10} src="/assets/eye.svg" />
                <Link
                  href={"/transactions/1"}
                  className="text-[rgba(0,0,0,0.5)] text-[11px]  cursor-pointer"
                >
                  View Details
                </Link>
              </div>
              <div className="flex space-x-[5px] pb-[10px] text-[red]">
                <Image height={10} width={10} src="/assets/trash.svg" />
                <p className="text-[red] text-[11px] cursor-pointer">Delete</p>
              </div>
            </div>
          )}
        </div>
        <div className="container lg:w-full w-[800px] border-b-2 items-start py-[10px] px-[10px] justify-between flex">
          <p className=" text-[rgba(0,0,0,0.5)] text-[12px]">
            <span className="py-[2px] px-[5px] border border-grey">6</span>
            <span className="ms-[5px]">d3-7ea471789ebe</span>
          </p>
          <p className="text-[rgba(0,0,0,0.5)] text-[12px] ">
            mikexenon23@yahoo.com
          </p>
          <p className="text-[rgba(0,0,0,0.5)] text-[12px] ">
            bartholomew65@gmail.com
          </p>
          <p className="text-[#FE5621] text-[12px] ">+N 20,000</p>
          <button
            className=" relative cursor-pointer text-[10px]"
            onClick={Dropdown5}
          >
            <img src="/assets/dots.svg" className="text-[rgba(0,0,0,0.5)]" />
          </button>
          {isDropdownOpen5 && (
            <div className=" bg-[#FFFFFF] shadow py-[10px] px-[20px] rounded-[10px] z-20 absolute lg:top-[70%] top-[74%] lg:right-0 right-[35px]">
              <div className="flex space-x-[10px] border-b-2">
                <div className="flex space-x-[5px] pb-[10px] text-[rgba(0,0,0,0.5)]">
                  <Image height={10} width={10} src="/assets/status.svg" />
                  <p className="text-[rgba(0,0,0,0.5)] text-[11px]">Status:</p>
                </div>
                <p className="text-[red] text-[11px]">Cancelled</p>
              </div>
              <div className="flex space-x-[5px] pt-[15px] pb-[10px] text-[rgba(0,0,0,0.5)]">
                <Image height={10} width={10} src="/assets/eye.svg" />
                <Link
                  href={"/transactions/1"}
                  className="text-[rgba(0,0,0,0.5)] text-[11px]  cursor-pointer"
                >
                  View Details
                </Link>
              </div>
              <div className="flex space-x-[5px] pb-[10px] text-[red]">
                <Image height={10} width={10} src="/assets/trash.svg" />
                <p className="text-[red] text-[11px] cursor-pointer">Delete</p>
              </div>
            </div>
          )}
        </div>
        <div className="container lg:w-full w-[800px] border-b-2 items-start py-[10px] px-[10px] justify-between flex">
          <p className=" text-[rgba(0,0,0,0.5)] text-[12px]">
            <span className="py-[2px] px-[5px] border border-grey">7</span>
            <span className="ms-[5px]">d3-7ea471789ebe</span>
          </p>
          <p className="text-[rgba(0,0,0,0.5)] text-[12px] ">
            mikexenon23@yahoo.com
          </p>
          <p className="text-[rgba(0,0,0,0.5)] text-[12px] ">
            bartholomew65@gmail.com
          </p>
          <p className="text-[#00CCFF] text-[12px] ">+N 20,000</p>
          <button
            className=" relative cursor-pointer text-[10px]"
            onClick={Dropdown6}
          >
            <img src="/assets/dots.svg" className="text-[rgba(0,0,0,0.5)]" />
          </button>
          {isDropdownOpen6 && (
            <div className=" bg-[#FFFFFF] shadow py-[10px] px-[20px] rounded-[10px] z-20 absolute lg:top-[76%] top-[82%] lg:right-0 right-[35px]">
              <div className="flex space-x-[10px] border-b-2">
                <div className="flex space-x-[5px] pb-[10px] text-[rgba(0,0,0,0.5)]">
                  <Image height={10} width={10} src="/assets/status.svg" />
                  <p className="text-[rgba(0,0,0,0.5)] text-[11px]">Status:</p>
                </div>
                <p className="text-[rgba(0,204,255,1)] text-[11px]">Success</p>
              </div>
              <div className="flex space-x-[5px] pt-[15px] pb-[10px] text-[rgba(0,0,0,0.5)]">
                <Image height={10} width={10} src="/assets/eye.svg" />
                <Link
                  href={"/transactions/1"}
                  className="text-[rgba(0,0,0,0.5)] text-[11px]  cursor-pointer"
                >
                  View Details
                </Link>
              </div>
              <div className="flex space-x-[5px] pb-[10px] text-[red]">
                <Image height={10} width={10} src="/assets/trash.svg" />
                <p className="text-[red] text-[11px] cursor-pointer">Delete</p>
              </div>
            </div>
          )}
        </div>
        <div className="container lg:w-full w-[800px] border-b-2 items-start py-[10px] px-[10px] justify-between flex">
          <p className=" text-[rgba(0,0,0,0.5)] text-[12px]">
            <span className="py-[2px] px-[5px] border border-grey">8</span>
            <span className="ms-[5px]">d3-7ea471789ebe</span>
          </p>
          <p className="text-[rgba(0,0,0,0.5)] text-[12px] ">
            mikexenon23@yahoo.com
          </p>
          <p className="text-[rgba(0,0,0,0.5)] text-[12px] ">
            bartholomew65@gmail.com
          </p>
          <p className="text-[#00CCFF] text-[12px] ">+N 20,000</p>
          <button
            className=" relative cursor-pointer text-[10px]"
            onClick={Dropdown7}
          >
            <img src="/assets/dots.svg" className="text-[rgba(0,0,0,0.5)]" />
          </button>
          {isDropdownOpen7 && (
            <div className=" bg-[#FFFFFF] shadow py-[10px] px-[20px] rounded-[10px] z-20 absolute lg:top-[82%] top-[89%] lg:right-0 right-[35px]">
              <div className="flex space-x-[10px] border-b-2">
                <div className="flex space-x-[5px] pb-[10px] text-[rgba(0,0,0,0.5)]">
                  <Image height={10} width={10} src="/assets/status.svg" />
                  <p className="text-[rgba(0,0,0,0.5)] text-[11px]">Status:</p>
                </div>
                <p className="text-[rgba(0,204,255,1)] text-[11px]">Success</p>
              </div>
              <div className="flex space-x-[5px] pt-[15px] pb-[10px] text-[rgba(0,0,0,0.5)]">
                <Image height={10} width={10} src="/assets/eye.svg" />
                <Link
                  href={"/transactions/1"}
                  className="text-[rgba(0,0,0,0.5)] text-[11px]  cursor-pointer"
                >
                  View Details
                </Link>
              </div>
              <div className="flex space-x-[5px] pb-[10px] text-[red]">
                <Image height={10} width={10} src="/assets/trash.svg" />
                <p className="text-[red] text-[11px] cursor-pointer">Delete</p>
              </div>
            </div>
          )}
        </div>
        <div className="container lg:w-full w-[800px] border-b-2 items-start py-[10px] px-[10px] justify-between flex">
          <p className=" text-[rgba(0,0,0,0.5)] text-[12px]">
            <span className="py-[2px] px-[5px] border border-grey">9</span>
            <span className="ms-[5px]">d3-7ea471789ebe</span>
          </p>
          <p className="text-[rgba(0,0,0,0.5)] text-[12px] ">
            mikexenon23@yahoo.com
          </p>
          <p className="text-[rgba(0,0,0,0.5)] text-[12px] ">
            bartholomew65@gmail.com
          </p>
          <p className="text-[#00CCFF] text-[12px] ">+N 20,000</p>
          <button
            className=" relative cursor-pointer text-[10px]"
            onClick={Dropdown8}
          >
            <img src="/assets/dots.svg" className="text-[rgba(0,0,0,0.5)]" />
          </button>
          {isDropdownOpen8 && (
            <div className=" bg-[#FFFFFF] shadow py-[10px] px-[20px] rounded-[10px] z-20 absolute lg:top-[89%] top-[95%] lg:right-0 right-[35px]">
              <div className="flex space-x-[10px] border-b-2">
                <div className="flex space-x-[5px] pb-[10px] text-[rgba(0,0,0,0.5)]">
                  <Image height={10} width={10} src="/assets/status.svg" />
                  <p className="text-[rgba(0,0,0,0.5)] text-[11px]">Status:</p>
                </div>
                <p className="text-[rgba(0,204,255,1)] text-[11px]">Success</p>
              </div>
              <div className="flex space-x-[5px] pt-[15px] pb-[10px] text-[rgba(0,0,0,0.5)]">
                <Image height={10} width={10} src="/assets/eye.svg" />
                <Link
                  href={"/transactions/1"}
                  className="text-[rgba(0,0,0,0.5)] text-[11px]  cursor-pointer"
                >
                  View Details
                </Link>
              </div>
              <div className="flex space-x-[5px] pb-[10px] text-[red]">
                <Image height={10} width={10} src="/assets/trash.svg" />
                <p className="text-[red] text-[11px] cursor-pointer">Delete</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
