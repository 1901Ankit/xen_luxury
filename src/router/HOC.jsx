// withDashboardLayout.js
import React from "react";
import Profile_sidebar from "../components/profile/profile_sidebar";

const withDashboardLayout = (WrappedComponent) => {
  return function DashboardLayoutHOC(props) {
    return (
      <div className="min-h-screen flex flex-col sm:flex-row bg-gray-50">
        <div className="hidden md:block w-full md:w-1/6 bg-gray-100 border-r border-r-[rgba(255,255,255,1)]">
          <Profile_sidebar />
        </div>

        {/* Main content */}
        <main className="w-full md:w-3/4 lg:w-4/5">
          <WrappedComponent {...props} />
        </main>
      </div>
    );
  };
};

export default withDashboardLayout;
