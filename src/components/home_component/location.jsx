import React from "react";
const Location = () => {
  return (
    <div className="px-4 py-10">
      <div className="flex flex-col md:flex-row items-center justify-center md:items-center gap-4 mb-10">
        <div className="flex flex-col md:flex-row items-center justify-center md:items-center gap-4 mb-10">
          <div className="relative inline-block px-6 py-3 text-[30px] font-bold whitespace-nowrap">
            OUR LOCATION{" "}
            <span className="absolute bottom-4 left-8 w-full h-full pointer-events-none">
              <span className="absolute top-0 left-0 w-[209px] h-0.5 bg-indigo-600" />
              <span className="absolute top-0 left-0 w-0.5 h-1/2 bg-indigo-600" />
              <span className="absolute top-0 right-16 w-0.5 h-1/2 bg-indigo-600" />
            </span>
            <span className="absolute top-4  right-6 w-full h-full pointer-events-none">
              <span className="absolute bottom-0 left-14 w-0.5 h-1/2 bg-indigo-600" />
              <span className="absolute bottom-0 right-2 w-[209px] h-0.5 bg-indigo-600" />
              <span className="absolute bottom-0 right-2 w-0.5 h-1/2 bg-indigo-600" />
            </span>
          </div>
        </div>
      </div>



      
    </div>
  );
};

export default Location;
