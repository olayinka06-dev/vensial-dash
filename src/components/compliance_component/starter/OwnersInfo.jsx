import React from "react";
import { BiPlus } from "react-icons/bi";

const Card = ({ icons, text, info }) => {
  return (
    <div className="flex justify-between">
      <div className="flex gap-2">
        <span>{icons}</span>
        <span>{text}</span>
      </div>
      <h3 className="text-[18px] font-[600]">{info}</h3>
    </div>
  );
};

const OwnersInfo = ({handleBackward, handleContinue}) => {
  return (
    <div className="animation p-12 h-auto mb-4 rounded-2xl bg-white shadow capitalize">
      <div className="flex flex-col gap-4">
        <p className="text-[rgba(0,0,0,0.50)] font-[400] text-[16px]">
          compliance
        </p>
        <h3 className="text-[20px] font-[600]">business information</h3>
        <h4 className="">
          You Can Only Add 3 Owners at a Time
        </h4>
      </div>
      <div className="py-7 px-8 border border-dashed mt-4 border-[rgba(0,0,0,0.10)] rounded-2xl capitalize">
        <h3 className="text-[20px] font-[600]">Owners 1</h3>
        <div className="flex-col flex gap-5 mt-7">
          <Card icons={""} text={"Full Name"} info={"Jays Acads"} />
          <Card icons={""} text={"Email"} info={"JaysAlimi@gmail.com"} />
          <Card icons={""} text={"Phone No."} info={"090 325 656 67"} />
          <Card icons={""} text={"Nationality"} info={"Nigeria"} />
          <Card icons={""} text={"State/Province"} info={"Lagos"} />
          <Card icons={""} text={"City"} info={"Ikeja"} />
          <Card
            icons={""}
            text={"Address"}
            info={"@0B taiwo Road Ilorin, Kwara State"}
          />
          <Card icons={""} text={"Means of Identification"} info={"NIN Card"} />
          <Card icons={""} text={"NIN Number"} info={"2134567890247643267"} />
        </div>
      </div>
      <div className="flex items-center mt-6 gap-2 justify-end">
        <button
          type="submit"
          onClick={handleBackward}
          className="text-white flex items-center gap-4 bg-gray-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
        >
        <span><BiPlus/></span>
          <span>Add New Owner</span>
        </button>
        <button
          type="submit"
          onClick={handleContinue}
          className="text-white bg-cyan-400 hover:bg-white hover:border hover:text-cyan-400 focus:ring-4 focus:outline-none focus:ring-cyan-400 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default OwnersInfo;
