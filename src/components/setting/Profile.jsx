import React from "react";

const Profile = () => {
    return (
        <div className="">
            <div className="container lg:mt-[20px] mt-[10px] lg:space-x-[20px] space-x-[10px] flex">
                <div className="container">
                    <label htmlFor="" className="lg:text-[16px] text-[12px] font-[400] leading-[50px]" >First Name</label><br />
                    <input className="border border-[rgba(0,0,0,0.1)] w-full lg:py-[10px] py-[5px] lg:px-[20px] px-[10px] rounded-[10px] outline-none" placeholder="Jays" type="text" name="" id="" />
                </div>
                <div className="container">
                    <label htmlFor="" className="lg:text-[16px] text-[12px] font-[400] leading-[50px]">Last Name</label><br />
                    <input className="border border-[rgba(0,0,0,0.1)] w-full  lg:py-[10px] py-[5px] lg:px-[20px] px-[10px] rounded-[10px] outline-none" placeholder="Alimi" type="text" name="" id="" />
                </div>
            </div>
            <div className="container mx-auto lg:mt-[20px] mt-[10px]">
                <div className="container w-full">
                    <label htmlFor="" className="lg:text-[16px] text-[12px] font-[400] leading-[50px]">Email Address</label><br />
                    <input className="border border-[rgba(0,0,0,0.1)] w-full  py-[10px] px-[20px] rounded-[10px] outline-none" placeholder="jaysalimi.msme@gmail.com" type="email" name="" id="" />
                </div>
            </div>
            <div className="container mx-auto lg:mt-[20px] mt-[10px]">
                <label htmlFor="" className="lg:text-[16px] text-[12px] font-[400] leading-[50px]" >Your Role</label><br />
                <div className="container lg:space-x-[20px] space-x-[10px] flex">
                    <div className="container border border-[rgba(0,0,0,0.1)] lg:w-[70%] w-[50%]  lg:px-[20px] px-[10px] rounded-[10px] outline-none">
                    <input className="w-full pt-[10px] outline-none" placeholder="Owner" type="text" name="" id="" />
                    </div>
                    <div className="container border border-[rgba(0,0,0,0.1)] lg:w-[30%] w-[50%]  lg:px-[20px] px-[10px] rounded-[10px] outline-none lg:space-x-[10px] space-x-[5px] flex">
                        <label htmlFor="" className="lg:text-[20px] text-[10px] font-[500] leading-[50px]">+</label><br />
                        <input className="w-full outline-none" placeholder="Invite Team Member" type="text" name="" id="" />
                    </div>
                </div>
            </div>
            <div className="container rounded-[10px] w-full lg:py-[29px] py-[10px] lg:px-[20px] px-[10px] border border-[rgba(0,0,0,0.1)] lg:mt-[50px] mt-[20px]">
            
                <div className=" justify-between flex">
                <label htmlFor="" className="lg:text-[16px] text-[12px] font-[400]" >Password</label>
                    <p className="lg:py-[10px] py-[5px] lg:px-[20px] px-[10px] rounded-[10px] border border-[rgba(0,0,0,0.1)] text-[rgba(0,0,0,1)] lg:text-[16px] text-[12px] font-[400] cursor-pointer">Change Password</p>

                </div>
            </div>
            <div className="container rounded-[10px] w-full lg:py-[29px] py-[10px] lg:px-[20px] px-[10px] border border-[rgba(0,0,0,0.1)] lg:mt-[50px] mt-[20px]">
            
                <div className=" justify-between flex">
                <label htmlFor="" className="lg:text-[16px] text-[12px] font-[400]" >Two-factor Authentication</label>
                <input
                        className="h-3.5 w-8 items-end appearance-none rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-neutral-600 dark:after:bg-neutral-400 dark:checked:bg-primary dark:checked:after:bg-primary dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca]"
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckDefault" />

                </div>
            </div>
            </div>
    )
};
export default Profile;