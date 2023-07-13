import React from "react";

function ComplainceNotification() {
  return (
    <div className="w-full px-4 py-3 mt-2 lg:mt-0 mb-4 bg-red-300 bg-opacity-30 rounded-2xl">
    <div className="flex flex-col justify-between items-start gap-2.5">
      <div className="flex justify-start items-start gap-7">
        <div>
          <span className="text-black text-opacity-50 text-sm font-normal capitalize">
            hi, welcome. you&apos;re currently on test mode. fill all compliance
          </span>
          <span className="text-cyan-400 text-sm font-semibold underline capitalize">
            &nbsp; here  &nbsp;
          </span>
          <span className="text-black text-opacity-50 text-sm font-normal capitalize">
            to switch your mode.
          </span>
        </div>
      </div>
    </div>
  </div>
  );
}

export default ComplainceNotification;
