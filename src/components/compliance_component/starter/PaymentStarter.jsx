import React from 'react'

const PaymentStarter = ({handleContinue}) => {
    return (
        <div className="animation p-12 h-auto mb-4 rounded-2xl bg-white shadow capitalize">
          <div className="flex flex-col gap-4">
            <p className="text-[rgba(0,0,0,0.50)] font-[400] text-[16px]">
              compliance
            </p>
            <h3 className="text-[20px] font-[600]">link payment information</h3>
          </div>
          <form className="mt-7">
            <div className="grid gap-6 mb-6 md:grid-cols-2">
              <div>
                <label
                  htmlFor="account_number"
                  className="block mb-2 text-sm font-medium text-gray-900  "
                >
                  account number <span className="text-red-500">*</span>
                </label>
    
                <input
                  type="tel"
                  id="account_number"
                  className="block w-full p-4 text-gray-900 border border-gray-300 rounded-2xl bg-white sm:text-md focus:cyan-400 focus:cyan-400"
                  placeholder="8060951561"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="account_name"
                  className="block mb-2 text-sm font-medium text-gray-900  "
                >
                  account name <span className="text-red-500">*</span>
                </label>
    
                <input
                  type="tel"
                  id="account_name"
                  className="block w-full p-4 text-gray-900 border border-gray-300 rounded-2xl bg-white sm:text-md focus:cyan-400 focus:cyan-400"
                  placeholder="jays alimi"
                  required
                />
              </div>
            </div>
            <div className="grid gap-6 mb-6 md:grid-cols-1">
              <div>
                <label
                  htmlFor="bank_name"
                  className="block mb-2 text-sm font-medium text-gray-900  "
                >
                    bank name <span className="text-red-500">*</span>
                </label>
    
                <select
                  id="bank_name"
                  className="block w-full p-4 text-gray-900 border border-gray-300 rounded-2xl bg-white sm:text-md focus:cyan-400 focus:cyan-400"
                  placeholder="20B taiwo road, ilorin, kwara, NG"
                  required
                >
                    <option value="">UBA</option>
                    <option value="">UBA</option>
                    <option value="">UBA</option>
                    <option value="">UBA</option>
                    <option value="">UBA</option>
                </select>
              </div>

            </div>
    
            <div className="flex justify-end">
              <button
                type="submit"
                onClick={handleContinue}
                className="text-white bg-cyan-400 hover:bg-white hover:border hover:text-cyan-400 focus:ring-4 focus:outline-none focus:ring-cyan-400 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
              >
                save change
              </button>
            </div>
          </form>
        </div>
    );
}

export default PaymentStarter