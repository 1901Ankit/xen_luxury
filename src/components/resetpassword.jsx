import { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useResetPasswordMutation } from "../app/service/authData";
import { FaEye, FaLock } from "react-icons/fa";
import { IoIosEyeOff } from "react-icons/io";
import banner from "../assets/login/banner.png";
import { toast } from "react-hot-toast";

const ResetPassword = () => {
  const [resetPassword, { isLoading: isResetting }] =
    useResetPasswordMutation();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const token = searchParams.get("token");
  const email = searchParams.get("email");

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      return toast.error("Passwords do not match");
    }

    try {
      const data = {
        email,
        token,
        newPassword: password,
      };

      const response = await resetPassword(data).unwrap();
      toast.success(response?.message || "Password reset successful");
      setTimeout(() => {
        navigate("/auth", { state: { activeTab: "login" } });
      }, 2000);
    } catch (error) {
      toast.error(error?.data?.message || "Failed to reset password");
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center p-4"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div className="w-full max-w-md bg-white rounded-xl shadow-2xl p-8">
        <div className="text-center mb-8">
          <div className="inline-block p-3 bg-[#eceafb] rounded-full mb-4">
            <FaLock className="w-6 h-6 text-[#3E2AD9]" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800">Reset Password</h2>
          <p className="text-gray-600 mt-2">Enter your new password below</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700">
              New Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                className="w-full pl-3 pr-10 py-3 rounded-lg border focus:outline-none focus:border-[#3E2AD9]"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Enter new password"
              />
              <div
                className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <IoIosEyeOff className="h-5 w-5 text-slate-500" />
                ) : (
                  <FaEye className="h-5 w-5 text-slate-500" />
                )}
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700">
              Confirm New Password
            </label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                className="w-full pl-3 pr-10 py-3 rounded-lg border focus:outline-none focus:border-[#3E2AD9]"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                placeholder="Confirm new password"
              />
              <div
                className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? (
                  <IoIosEyeOff className="h-5 w-5 text-slate-500" />
                ) : (
                  <FaEye className="h-5 w-5 text-slate-500" />
                )}
              </div>
            </div>
          </div>

          <button
            type="submit"
            disabled={isResetting}
            className="w-full bg-[#3E2AD9] text-white py-3 rounded-lg font-semibold hover:bg-[#2f1fa3] transition-colors flex items-center justify-center"
          >
            {isResetting ? (
              <div className="flex items-center gap-2">
                <svg
                  className="animate-spin h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                <span>Resetting Password...</span>
              </div>
            ) : (
              "Reset Password"
            )}
          </button>

          <div className="text-center mt-4 cursor-pointer">
            <button
              type="button"
              onClick={() =>
                navigate("/auth", { state: { activeTab: "login" } })
              }
              className="text-[#3E2AD9] hover:text-[#2f1fa3] text-sm font-medium"
            >
              Back to Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
