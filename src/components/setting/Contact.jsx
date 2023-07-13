"use client";
import React from "react";
export default function SettingContact() {
    return (
        <div className="">
            <div className="container lg:mt-[20px] mt-[10px] lg:space-x-[20px] space-x-[10px] flex">
                <div className="container">
                    <label htmlFor="" className="lg:text-[16px] text-[12px] font-[400] leading-[50px]" >Nationality</label><br />
                    <input className="border border-[rgba(0,0,0,0.1)] w-full lg:py-[10px] py-[5px] lg:px-[20px] px-[10px] rounded-[10px] outline-none" placeholder="Nigeria" type="text" name="" id="" />
                </div>
                <div className="container">
                    <label htmlFor="" className="lg:text-[16px] text-[12px] font-[400] leading-[50px]">Province/Region</label><br />
                    <input className="border border-[rgba(0,0,0,0.1)] w-full  lg:py-[10px] py-[5px] lg:px-[20px] px-[10px] rounded-[10px] outline-none" placeholder="Lagos" type="text" name="" id="" />
                </div>
            </div>
            <div className="container mx-auto lg:mt-[20px] mt-[10px]">
                <div className="container w-full">
                    <label htmlFor="" className="lg:text-[16px] text-[12px] font-[400] leading-[50px]">Home Address</label><br />
                    <input className="border border-[rgba(0,0,0,0.1)] w-full  py-[10px] px-[20px] rounded-[10px] outline-none" placeholder="20, taiwo road, ilorin" type="text" name="" id="" />
                </div>
            </div>
            <div className="container mx-auto lg:mt-[20px] mt-[10px]">
                <div className="container w-full">
                    <label htmlFor="" className="lg:text-[16px] text-[12px] font-[400] leading-[50px]">Support Email</label><br />
                    <p className="lg:text-[12px] text-[8px] leading-15px lg:pb-[15px] font-[400] text-[rgba(0,0,0,0.5)]">As soon as a dispute (chargeback or fraud claim) is raised for a transaction or more support is required from your team, voucherpay will notify you via email in the email addresses that you specify below.</p>
                    <input className="border border-[rgba(0,0,0,0.1)] w-full  py-[10px] px-[20px] rounded-[10px] outline-none" placeholder="talk2jays0x@gmail.com" type="text" name="" id="" />
                </div>
            </div>
            </div>
    )
}