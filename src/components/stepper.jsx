import { useLocation, useNavigate } from "react-router-dom";
import {
  FaCalendarCheck,
  FaBed,
  FaMagic,
  FaCreditCard,
  FaArrowLeft,
} from "react-icons/fa";

const Stepper = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const steps = [
    { name: "Check availability", icon: <FaCalendarCheck />, path: "/" },
    { name: "Select room", icon: <FaBed />, path: "/roomlist" },
    { name: "Enhance your stay", icon: <FaMagic />, path: "/enhance_stay" },
    { name: "Payment way", icon: <FaCreditCard />, path: "/payment" },
  ];

  const currentStepIndex = steps.findIndex(
    (step) => step.path === location.pathname
  );
  const hasPrevious = currentStepIndex > 0;
  const previousStep = hasPrevious ? steps[currentStepIndex - 1].path : null;

  const getStepStatus = (stepPath) => {
    if (location.pathname === stepPath) return "active";
    if (currentStepIndex >= steps.findIndex((step) => step.path === stepPath))
      return "completed";
    return "inactive";
  };

  return (
    <div className="w-full border-b border-gray-200 py-4 bg-white shadow-sm">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4">
          {/* Step-wise Back Button */}
          {hasPrevious && (
            <button
              onClick={() => navigate(previousStep)}
              className="w-24 h-10 font-semibold md:flex items-center justify-center text-[13px] bg-[#3E2AD9] text-white border border-[#3E2AD9] p-2 rounded-[10px] cursor-pointer hidden"
            >
              <FaArrowLeft className="mr-1" />
              Back
            </button>
          )}

          {/* Stepper UI */}
          <div className="flex-1 flex justify-between items-center relative">
            {steps.map((step, index) => {
              const stepStatus = getStepStatus(step.path);
              const isCompleted = currentStepIndex > index;

              return (
                <div
                  key={index}
                  className="flex-1 flex flex-col items-center text-center relative cursor-pointer"
                  onClick={() => navigate(step.path)}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-base z-10 ${
                      stepStatus === "active"
                        ? "bg-blue-600 text-white"
                        : stepStatus === "completed"
                        ? "bg-blue-400 text-white"
                        : "bg-gray-200 text-gray-500"
                    }`}
                  >
                    {step.icon}
                  </div>

                  <span
                    className={`mt-2 text-xs font-semibold w-[68px] md:w-full ${
                      stepStatus === "active"
                        ? "text-gray-900"
                        : stepStatus === "completed"
                        ? "text-gray-600"
                        : "text-gray-400"
                    }`}
                  >
                    {step.name}
                  </span>

                  {/* Connector line */}
                  {index < steps.length - 1 && (
                    <div
                      className="absolute top-6 left-[70%] right-[-30%] h-[1px] z-0"
                      style={{
                        backgroundImage: `repeating-linear-gradient(to right, ${
                          isCompleted ? "#3E2AD9" : "#ccc"
                        } 0, ${
                          isCompleted ? "#3E2AD9" : "#ccc"
                        } 6px, transparent 6px, transparent 12px)`,
                      }}
                    ></div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stepper;
