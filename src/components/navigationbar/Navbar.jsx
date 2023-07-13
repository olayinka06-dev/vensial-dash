"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return ( 
 
      <nav className="bg-white  fixed top-0 w-full z-20 border-gray-200 shadow">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link href="/" className="flex items-center">
            <img src="/assets/image1.svg" className="h-8 mr-3" alt="VoucherPay Logo" />
          </Link>
          <div className="flex items-center md:order-2 lg:space-x-[20px]">
            <Image
              height={20}
              width={20}
              src="/assets/Vector1.svg"
              className="cursor-pointer mb-[7px]"
            />
            <Image
              height={20}
              width={20}
              src="/assets/bell.svg"
              className="cursor-pointer mb-[7px]"
            />
            <div className="relative">
              <button onClick={toggleDropdown}>
                <Image
                  height={30}
                  width={30}
                  src="/assets/Group40.svg"
                  className="cursor-pointer"
                />
              </button>
            </div>
            {isDropdownOpen && (
              <div className="bg-[#FFFFFF] rounded-[10px] shadow py-[10px] lg:px-[40px] px-[20px] absolute top-[60px] lg:right-[75px] right-[20px]">
                <div className="container py-[10px] flex lg:flex-row flex-row lg:space-x-[35px] space-x-[10px]">
                  <Image
                    height={35}
                    width={35}
                    src="/assets/Group40.svg"
                    className="cursor-pointer"
                  />
                  <div>
                    <p className="text-[#000000] font-[600] lg:text-[15px] text-[12px]">
                      Jays Alimi
                    </p>
                    <p className="text-[#000000] font-[400] lg:text-[12px] text-[10px]">
                      jaysalimi.msme@gmail.com
                    </p>
                  </div>
                </div>
                <div className="container py-[10px] flex lg:flex-row flex-row lg:space-x-[25px] space-x-[10px]">
                  <Image
                    height={20}
                    width={20}
                    src="/assets/cog.svg"
                    className="cursor-pointer"
                  />
                  <p className="text-[#000000] font-[400] text-[12px] cursor-pointer">
                    Compliance
                  </p>
                </div>
                <div className="container py-[10px] flex lg:flex-row flex-row lg:space-x-[25px] space-x-[10px]">
                  <Image
                    height={20}
                    width={20}
                    src="/assets/triangle.svg"
                    className="cursor-pointer "
                  />
                  <p className="text-[#000000] font-[400] text-[12px] cursor-pointer">
                    Dispute
                  </p>
                </div>
                <div className="container py-[10px] flex lg:flex-row flex-row lg:space-x-[25px] space-x-[10px]">
                  <Image
                    height={20}
                    width={20}
                    src="/assets/hexagon.svg"
                    className="cursor-pointer"
                  />
                  <p className="text-[#000000] font-[400] text-[12px] cursor-pointer">
                    HelpDesk
                  </p>
                </div>
                <div className="container py-[10px] flex lg:flex-row flex-row lg:space-x-[25px] space-x-[10px]">
                  <Image
                    height={20}
                    width={20}
                    src="/assets/clipboard.svg"
                    className="cursor-pointer"
                  />
                  <p className="text-[#000000] font-[400] text-[12px] cursor-pointer">
                    Terms Of Service
                  </p>
                </div>
                <div className="container py-[30px] flex lg:flex-row flex-row lg:space-x-[35px] space-x-[10px]">
                  <Image
                    height={20}
                    width={20}
                    src="/assets/logout.svg"
                    className="cursor-pointer text-[#00CCFF]"
                  />
                  <p className=" font-[400] text-[12px] text-[#00CCFF] cursor-pointer">
                    Log Out
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
 
  );
}

export default Navbar;
