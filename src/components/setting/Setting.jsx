"use client";
import React, { useState } from "react";
import settingsData from "./SettingData";
export default function SettingHome() {
    const [activeTab, setActiveTab] = useState(0)
    const menus = [
        "Profile",
        "Contact",
        "Preferences",
        "API Key & Webhook",
    ];
    const handleClickTab = (data) => {
        setActiveTab(data)
    }
    return (
        <div className="container-fluid bg-[#FFFFFF] py-[50px] px-[30px]">
            <div className="container">
                <p className="text-[20px] font-[600] text-[rgba(0,0,0,1)] leading-[25px]">Setting</p>
                <div className="lg:container mx-auto flex space-x-[10px] mt-[23px]">
                    {
                        menus.map((menu, index)=>(
                                <button onClick={()=> handleClickTab(index)} key={index} className={`border border-[rgba(0,0,0,0.1)] ${activeTab === index ? "bg-[#0CF] text-white" : ""} active:bg-black lg:text-[14px] text-[12px] text-[rgba(0,0,0,0.5)] rounded-[15px] lg:py-[10px] py-[2px] lg:px-[30px] px-[8px]`}>{menu}</button>
                        ))
                    }
                </div>
                <div className="">
                    {
                        settingsData[activeTab].content
                    }
                </div>

            </div>
        </div>
    )
}