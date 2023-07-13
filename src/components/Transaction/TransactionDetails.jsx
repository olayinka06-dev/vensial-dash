"use client";
import { useRouter } from "next/navigation";
import React from "react";
export default function TransactionDetail() {
    const router = useRouter()
    return (
        <div className="container-fluid bg-[#FFFFFF] lg:py-[50px] py-[10px] lg:pb-[50px] pb-[20px] px-[30px] rounded-2xl">
            <div className="container flex py-[25px] space-x-[10px] cursor-pointer" onClick={() => router.back() }>
                <img src="/assets/arrowleft.svg" className=" cursor-pointer" />
                <p className="text-[#00CCFF] text-[16px] pt-[5px] font-[600]">Back To Page</p>
            </div>
            <div className="container pb-[25px]">
                <p className="lg:text-[20px] text-[16px] font-[600] text-[#000000]">Transaction Details</p>
            </div>
            <div className="container flex">
                <div className="container lg:space-x-[35px] space-x-[10px] flex">
                    <img src="/assets/id.svg" />
                    <p className="lg:text-[16px] text-[14px] text-[rgba(0,0,0,0.5)] font-[600]">Transaction ID</p>
                </div>
                <div className="container flex mx-auto items-end justify-end">
                    <p className="lg:text-[16px] text-[14px] text-[rgba(0,0,0,0.5)] font-[600]">d3-7ea471789ebe</p>
                </div>
            </div>
            <div className="container flex mt-[35px] ">
                <div className="container lg:space-x-[35px] space-x-[10px] flex">
                    <img src="/assets/minus.svg" />
                    <p className="lg:text-[16px] text-[14px] text-[rgba(0,0,0,0.5)] font-[600]">Sources Account</p>
                </div>
                <div className="container flex mx-auto items-end justify-end">
                    <p className="lg:text-[16px] text-[14px] text-[rgba(0,0,0,0.5)] font-[600]">mikexenon23@yahoo.com</p>
                </div>
            </div>
            <div className="container flex mt-[35px] ">
                <div className="container lg:space-x-[35px] space-x-[10px] flex">
                    <img src="/assets/plus.svg" />
                    <p className="lg:text-[16px] text-[14px] text-[rgba(0,0,0,0.5)] font-[600]">Destination Account</p>
                </div>
                <div className="container flex mx-auto items-end justify-end">
                    <p className="lg:text-[16px] text-[14px] text-[rgba(0,0,0,0.5)] font-[600]">bartholomew65@gmail.com</p>
                </div>
            </div>
            <div className="container flex mt-[35px] ">
                <div className="container lg:space-x-[35px] space-x-[10px] flex">
                    <img src="/assets/cash.svg" />
                    <p className="lg:text-[16px] text-[14px] text-[rgba(0,0,0,0.5)] font-[600]">Amount</p>
                </div>
                <div className="container flex mx-auto items-end justify-end">
                    <p className="lg:text-[16px] text-[14px] text-[rgba(0,204,255,1)] font-[600]">+N 20,000</p>
                </div>
            </div>
            <div className="container flex mt-[35px] ">
                <div className="container lg:space-x-[35px] space-x-[10px] flex">
                    <img src="/assets/graph.svg" />
                    <p className="text-[16px] text-[rgba(0,0,0,0.5)] font-[600]">Status</p>
                </div>
                <div className="container flex mx-auto items-end justify-end">
                    <p className="lg:text-[16px] text-[14px] text-[rgba(0,204,255,1)] font-[600]">Success</p>
                </div>
            </div>
            <div className="container mt-[35px] py-[17px] rounded-[10px] px-[20px] items-center justify-center border border-[rgba(0,0,0,0.1)] space-x-[15px] flex">
                <img src="/assets/trash.svg" />
                <button>
                <p className="text-[rgba(254,86,33,1)]">Delete Transaction</p>
                </button>
            </div>
        </div>
    )
}