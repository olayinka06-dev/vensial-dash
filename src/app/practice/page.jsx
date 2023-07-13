"use client";
import React, { useState, useEffect, useRef } from 'react';
import { BiChevronDown } from 'react-icons/bi';

const Practice = () => {
    const [checkFocus, setCheckFocus] = useState(false);
    const [selectValue, setSelectValue] = useState("");
    const [changer, setchanger] = useState("");

    const selectRef = useRef();

    useEffect(() => {
        setchanger(optionData)
    }, []);

    const optionData = [
        "html",
        "css",
        "javascript tailwind",
        'python',
        "ruby",
        "dart",
        "c#",
        "c++",
        "django"
    ];

    useEffect(() => {
        const filteredOption = optionData.filter(opd=> {
            if (opd != "" && !opd.toLowerCase().includes(selectValue.toLowerCase())) {
                return false
            }
            return true
        })
        setchanger(filteredOption)
    }, [selectValue]);

    const handleClickOption = (option) => {
        setSelectValue(option)
        setCheckFocus(false)
    }
    const handleDropDown = () => {
        setCheckFocus(!checkFocus)
    }

    const handleSelectClick = () => {
        if (!selectRef.current) {
            setCheckFocus(false)
        }
    }

  return (
    <>
        <div className="w-[300px]" ref={selectRef} onClick={handleSelectClick}>
            <div className="relative">
            <input className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder='select mode' onFocus={()=> setCheckFocus(true)} onChange={(e)=> setSelectValue(e.target.value)} value={selectValue} type="text" name="" id="" />
            <span onClick={handleDropDown}><BiChevronDown className='text-[20px] absolute right-2 bottom-[9px]'/></span>
            </div>
            <div className={`w-full bg-white shadow-2xl px-2 transition-all duration-100 ${checkFocus ? "border border-gray-900" : ""}`}>
                {
                    checkFocus && (
                        changer.map((option, index)=>(
                            <p key={index} onClick={()=> handleClickOption(option)} className="cursor-pointer hover:bg-indigo-200 p-0 m-0">{option}</p>
                        ))
                    )
                }
            </div>
        </div>
    </>
  )
}

export default Practice