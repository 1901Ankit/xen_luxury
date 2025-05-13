import React, { useState } from "react";
import { FaSearch, FaFilter } from "react-icons/fa";
import Profile_mobilefilters from "../profile/profile_filter";
const inputFields = [
  {
    label: "First name",
    placeholder: "Enter first name",
    type: "text",
    name: "firstName",
  },
  {
    label: "Last name",
    placeholder: "Enter last name",
    type: "text",
    name: "lastName",
  },
  {
    label: "Contact number",
    placeholder: "Enter your mobile number",
    type: "text",
    name: "contactNumber",
  },
  { label: "Email", placeholder: "Enter email", type: "email", name: "email" },
  {
    label: "New password",
    placeholder: "Enter password",
    type: "password",
    name: "newPassword",
  },
  {
    label: "Confirm password",
    placeholder: "Re-enter password",
    type: "password",
    name: "confirmPassword",
  },
];

const Edit_profile = () => {
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [searchParams, setSearchParams] = useState({});
  return (
    <>
      <div className="md:hidden flex items-center justify-between w-full mt-10 px-4">
        <div className="relative flex-1 mr-2">
          <input
            type="text"
            placeholder="Search hotels..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm" />
        </div>
        <button
          onClick={() => setShowMobileFilters(true)}
          className="flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-md text-sm font-medium"
        >
          <FaFilter />
          Filters
        </button>
      </div>

      <Profile_mobilefilters
        show={showMobileFilters}
        onClose={() => setShowMobileFilters(false)}
        searchParams={searchParams}
        setSearchParams={setSearchParams}
      />
      <div className="min-h-screen flex flex-col sm:flex-row ">
        <div className="min-w-full  rounded-lg overflow-hidden">
          <div className="flex-1 p-8">
            <h2 className="text-xl font-semibold text-[#3E2AD9] mb-1">
              Edit profile
            </h2>
            <p className="text-gray-500 mb-3">Enter your details here</p>
            <p className="text-gray-500 mb-5 border-t border-gray-200"></p>
            <form className="grid grid-cols-1 md:grid-cols-3 gap-4  space-y-3 ">
              {inputFields.map((field, index) => (
                <div key={index}>
                  <label className="text-base font-medium ">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    name={field.name}
                    placeholder={field.placeholder}
                    className="block w-full mt-1 border-[1px] border-[#93C3FD] rounded-md py-2 pl-2 focus:border-blue-500 transition-colors duration-300 focus:outline-none focus:ring-0"
                  />
                </div>
              ))}

              <div className="col-span-1 md:col-span-3 flex justify-start gap-4 mt-4">
                <button
                  type="button"
                  className="px-6 py-2 bg-transparent text-[#3E2AD9] rounded-md font-medium transition-colors cursor-pointer border border-[rgba(62,42,217,1)]"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-indigo-600 text-white rounded-md font-medium transition-colors cursor-pointer"
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Edit_profile;
