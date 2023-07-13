import Image from "next/image";
import ComplainceNotification from "@/components/general/ComplainceNotification";
import { BiChevronDown } from "react-icons/bi";
import ChartComponent from "@/components/HomeComponents/PieChart";

export default function Home() {
  return (
    <>
      <div className="flex-1 mx-2 lg:ms-11">
        {<ComplainceNotification />}
        <div className="p-12 mb-4 rounded-2xl bg-white shadow">
          <div className="text-black text-2xl mb-4 font-semibold capitalize">
            user summary
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div className="flex items-center justify-center h-24 rounded-2xl bg-white shadow-sm border border-gray-800">
              <div className="w-full h-full flex flex-col justify-start items-center gap-2.5 py-5 ">
                <div className="text-black text-opacity-50 text-sm font-normal capitalize">
                  Total balance
                </div>
                <div className="text-black text-2xl font-semibold capitalize">
                  n 200,000
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center h-24 rounded-2xl bg-white shadow-sm border border-gray-800">
              <div className="w-full h-full flex flex-col justify-start items-center gap-2.5  py-5">
                <div className="text-black text-opacity-50 text-sm font-normal capitalize">
                  active users
                </div>
                <div className="text-black text-2xl font-semibold capitalize">
                  20.2k
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center h-24 rounded-2xl bg-white shadow-sm border border-gray-800">
              <div className="w-full h-full flex flex-col justify-start items-center gap-2.5  py-5">
                <div className="text-black text-opacity-50 text-sm font-normal capitalize">
                  daily transaction
                </div>
                <div className="text-black text-2xl font-semibold capitalize">
                  10.9k
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-12 h-auto mb-4 rounded-2xl bg-white shadow">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <h2 className="text-black text-2xl font-semibold capitalize">
              Current Statistics
            </h2>
           {/*  <div className="justify-start items-center gap-[13px] inline-flex">
              <div className="w-[25px] h-[25px] bg-teal-300 rounded-full" />
              <div className="text-black text-[18px] font-normal capitalize">
                receive{" "}
              </div>
            </div> */}
            <div className="w-2/3 md:w-auto h-12 px-4 py-3 bg-white rounded-2xl border border-black border-opacity-10 flex flex-col justify-start items-start gap-2.5">
              <div className="flex items-center gap-2.5">
                <div className="text-black text-sm font-normal capitalize">
                  monthly
                </div>
                <span className="w-6 h-6">
                  <BiChevronDown />
                </span>
              </div>
            </div>
          </div>
          <div className="grid grid-rows-3 md:grid-rows-1 grid-flow-col gap-4">
            <div className="row-span-1 md:row-span-3   shadow-cyan-100">
              <ChartComponent />
            </div>
            <div className="row-span-1 md:col-span-2  shadow-cyan-100">
              <div className="flex  align-items">
                <div className="w-48 h-[105px] flex-col justify-start items-start gap-[15px] inline-flex">
                  <div className="justify-start items-center gap-[13px] inline-flex">
                    <div className="w-[25px] h-[25px] bg-amber-500 rounded-full" />
                    <div className="text-black text-[18px] font-normal capitalize">
                      cash withdrawal
                    </div>
                  </div>
                  <div className="justify-start items-center gap-[13px] inline-flex">
                    <div className="w-[25px] h-[25px] bg-orange-600 rounded-full" />
                    <div className="text-black text-[18px] font-normal capitalize">
                      send
                    </div>
                  </div>
                  <div className="justify-start items-center gap-[13px] inline-flex">
                    <div className="w-[25px] h-[25px] bg-teal-300 rounded-full" />
                    <div className="text-black text-[18px] font-normal capitalize">
                      receive{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row-span-1 md:col-span-2   shadow-cyan-100">
              <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex    ">
                <li className="w-full    ">
                  <div className="flex items-center pl-3">
                    <input
                      type="checkbox"
                      defaultValue
                      className="w-6 h-6 text-cyan-500 bg-gray-100  rounded focus:ring-cyan-500   focus:ring-2  "
                    />
                    <label
                      htmlFor="cash-checkbox-list"
                      className="w-full py-3 ml-2 text-[14px] font-medium text-gray-900  "
                    >
                      Cash withdrawal
                    </label>
                  </div>
                </li>
                <li className="w-full   ">
                  <div className="flex items-center pl-3">
                    <input
                      type="checkbox"
                      defaultValue
                      className="w-6 h-6 text-cyan-500 bg-gray-100  rounded focus:ring-cyan-500   focus:ring-2  "
                    />
                    <label
                      htmlFor="send-checkbox-list"
                      className="w-full py-3 ml-2 text-[14px] font-medium text-gray-900  "
                    >
                      Send
                    </label>
                  </div>
                </li>
                <li className="w-full">
                  <div className="flex items-center pl-3">
                    <input
                      type="checkbox"
                      defaultValue
                      className="w-6 h-6 text-cyan-500 bg-gray-100  rounded focus:ring-cyan-500 focus:ring-2"
                    />
                    <label
                      htmlFor="Receive-checkbox-list"
                      className="w-full py-3 ml-2 text-[14px] font-medium text-gray-900  "
                    >
                      Receive
                    </label>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
