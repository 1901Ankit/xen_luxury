import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";
import SearchPanel from "./searchpanel";

const MobileFilters = ({ show, onClose, searchParams, setSearchParams }) => {
  return (
    <AnimatePresence>
      {show && (
        <>
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          <motion.div
            className="fixed inset-y-0 right-0 w-4/5 max-w-md bg-white z-50 shadow-xl overflow-y-auto"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
          >
            <div className="p-4 border-b flex justify-between items-center">
              <h2 className="text-lg font-semibold">Filters</h2>
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-gray-100"
              >
                <FaTimes />
              </button>
            </div>

            <div className="p-4">
              <SearchPanel
                searchParams={searchParams}
                setSearchParams={(params) => {
                  setSearchParams(params);
                  onClose();
                }}
              />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileFilters;
