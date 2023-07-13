"use client";
import Image from "next/image";
import React, { useState } from "react";

import {MdOutlineDashboardCustomize} from 'react-icons/md'
import {FiUser, FiUsers} from 'react-icons/fi'
import {BiLogOut,  BiChevronLeft} from 'react-icons/bi'
import {TbTransferIn, TbTransferOut, TbTransform} from 'react-icons/tb'
function Sidebar() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const [open, setOpen] = useState(false);

  const Menus = [
    {
      title: "Dashboard",
      icon: (
        
    <MdOutlineDashboardCustomize/>
      ),
    },
    {
      title: "Transactions",
      icon: (
        <TbTransform/>
      ),
    },
    {
      title: "Customer",
      icon: (
        <FiUser/>
      ),
    },
    {
      title: "Send",
      icon: (
       <TbTransferIn/>
      ),
    },
    {
      title: "Receive",
      icon: (
        <TbTransferOut/>
      ),
    },
    {
      title: "Teams",
      icon: (
       <FiUsers/>
      ),
    },
    {
      title: "  out",
      icon: (
        <BiLogOut/>
      ),
      gap: true,
    },
    {
      title: "Log  ",
      icon: (
        <BiLogOut/>
      ),
      gap: true,
    },
    {
      title: " 121",
      icon: (
        <BiLogOut/>
      ),
      gap: true,
    },
    {
      title: "12345",
      icon: (
        <BiLogOut/>
      ),
      gap: true,
    },
    {
      title: "Log out",
      icon: (
        <BiLogOut/>
      ),
      gap: true,
    },

  ];

  return (
    <>
      <aside
        id="cta-button-sidebar"
        className={`hidden lg:block ${
          open ? "w-64" : "w-20 "
        }   duration-300 h-[64] bg-white shadow rounded-2xl relative  `}
        aria-label="Sidebar"
      >
        <div
          className={`${open ? "w-64" : "w-20"}   h-[auto] bg-white rounded-2xl fixed`}
        >
          <div
            className={`${
              open ? "w-64" : "w-20"
            } h-[63px] bg-white rounded-tl-2xl rounded-tr-2xl shadow flex justify-center items-center`}
          >
            <div
              className={`${
                open ? "w-full" : "w-20 m-3"
              } h-12 flex justify-center items-center p-12 gap-[12px]`}
            >
              <div className="flex gap-x-7 items-center">
                <div className="w-10 h-10 left-5 top-3 absolute bg-amber-500 rounded-full flex items-center justify-center">
                <div className="text-white text-[14px] font-semibold capitalize">
                  KE
                </div>
                </div>
             
                <h1
                  className={`text-black origin-left font-semibold capitalize duration-300 ${
                    !open && "scale-0 hidden"
                  }`}
                >
                  Kelvin Egodobu
                </h1>
              </div>
            </div>
 
          </div>

          <div className="  px-3 py-4 	">
            <div
              className={`absolute cursor-pointer rounded-full -right-3 top-15 w-7 h-7 border-2 border-cyan-500 "
            }`}
              onClick={() => setOpen(!open)}
            > 
            <BiChevronLeft  className={`w-6 h-6  ${!open && "rotate-180"}`}/>
               
            </div>
            <ul className="space-y-2 font-medium ">
              {Menus.map((d, i) => (
                <li
                  key={i}
                  className={` item-center gap-x-4 cursor-pointer p-2  hover:text-cyan-400  hover:bg-gray-50 rounded-md ${
                    d.gap ? "mt-9" : "mt-2"
                  } ${i === 0 && "bg-lime"}`}
                >
                  <a
                    href="#"
                    className="flex items-center p-2 py-2 text-black text-opacity-50 text-lg rounded-lg  hover:text-cyan-400  hover:bg-gray-50 group"
                  >
                    {d.icon}
                    <span
                      className={`${
                        !open && "hidden"
                      } font-medium ml-3 origin-left duration-200`}
                    >
                      {" "}
                      {d.title}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
