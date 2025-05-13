import React, { useState, useEffect } from "react";
import { CiUser } from "react-icons/ci";
import { FaEye, FaLock } from "react-icons/fa";
import { IoIosEyeOff } from "react-icons/io";
import { useLocation, useNavigate } from "react-router-dom";
import banner from "../../assets/login/banner.png";
import interior from "../../assets/login/interior.png";
import side from "../../assets/login/side.jpg";
import { GoArrowRight } from "react-icons/go";
import { RiSendPlane2Line } from "react-icons/ri";
import {
  useLoginUserMutation,
  useRegisterUserMutation,
  useForgotPasswordMutation,
} from "../../app/service/authData";
import { toast } from "react-hot-toast";
function Auth() {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(
    location.state?.activeTab || "signup"
  );
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    phone: "",
  });
  const [registerUser, { isLoading: isRegistering }] =
    useRegisterUserMutation();
  const [forgotPassword, { isLoading: isSendingEmail }] =
    useForgotPasswordMutation();
  const [loginUser, { isLoading: isLoggingIn }] = useLoginUserMutation();
  const [showPassword, setShowPassword] = useState(false);
  const [verificationStatus, setVerificationStatus] = useState({
    pending: false,
    email: "",
  });
  const [forgotPasswordMode, setForgotPasswordMode] = useState(false);
  const [forgotEmailSent, setForgotEmailSent] = useState(false);

  const navigate = useNavigate();
  useEffect(() => {
    if (location.state?.activeTab) {
      setActiveTab(location.state.activeTab);
    }
  }, [location.state]);

  const handleTabChange = (tab) => {
    if (verificationStatus.pending && tab === "signup") {
      toast.info(
        `Please verify your email (${verificationStatus.email}) before creating a new account`
      );
      return;
    }
    setActiveTab(tab);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (activeTab === "signup") {
      try {
        const response = await registerUser(formData).unwrap();
        console.log("User registered successfully:", response);
        setVerificationStatus({
          pending: true,
          email: formData.email,
        });
        setFormData({ username: "", email: "", password: "", phone: "" });
      } catch (error) {
        console.log("Error:", error);
        toast.error(error?.data?.message || "Registration failed");
      }
    } else if (activeTab === "login") {
      try {
        const loginData = {
          email: formData.email,
          password: formData.password,
        };
        const response = await loginUser(loginData).unwrap();
        console.log("User logged in successfully:", response);
        toast.success(response?.message || "Login successful");
        localStorage.setItem("user", JSON.stringify(response.user));
        localStorage.setItem("token", response.token);
        navigate("/");
        setFormData({ username: "", email: "", password: "", phone: "" });
        // You can add navigation or other post-login logic here
      } catch (error) {
        console.log("Error:", error);
        toast.error(error?.data?.message || "Login failed");
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const SuccessMessage = () => (
    <div className="flex flex-col items-center justify-center py-8 px-4 text-center">
      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
        <svg
          className="w-8 h-8 text-green-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>
      <h2 className="text-2xl font-bold text-gray-800 mb-2">
        Registration Successful!
      </h2>
      <p className="text-gray-600 mb-6">
        Please check your email ({verificationStatus.email}) to verify your
        account.
      </p>
      <p className="text-sm text-gray-500 mb-6">
        A verification link has been sent to your email address. Please click
        the link to activate your account.
      </p>
    </div>
  );
  const onForgot = () => {
    setForgotPasswordMode(true);
  };

  const handleForgotPasswordSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await forgotPassword({ email: formData.email }).unwrap();
      setForgotEmailSent(true);
      toast.success(
        response?.message || "Password reset email sent successfully"
      );
    } catch (error) {
      console.log("Error:", error);
      toast.error(error?.data?.message || "Failed to send reset email");
    }
  };

  return (
    <div
      className="w-full min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center p-4 bg-fixed"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div
        className={`w-full max-w-5xl bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col md:flex-row justify-evenly  ${
          activeTab === "login" ? "md:h-full" : "md:h-full"
        }`}
      >
        <div className="w-full md:w-5/12 p-6 h-full flex flex-col justify-between">
          <div>
            <div className="h-10 mb-4">
              <div className="h-full w-64 bg-slate-200 rounded-md"></div>
            </div>

            <div className="mb-10">
              <h1 className="text-[28px] font-bold mb-2">
                {activeTab === "login" ? "Welcome Back" : "Create an account"}
              </h1>
              <p className="text-slate-600">
                {activeTab === "login"
                  ? "Please enter your login details"
                  : "Fill in the form to get started"}
              </p>

              <div className="flex items-center justify-between mt-5 gap-4">
                <div
                  onClick={() => handleTabChange("login")}
                  className={`${
                    activeTab === "login"
                      ? "bg-[#3E2AD9] text-white"
                      : "bg-[#E0E0E0] text-[#6E6E6E]"
                  } p-3 rounded-xl cursor-pointer flex items-center justify-center w-full`}
                >
                  <FaLock className="w-5 h-5" />
                  <span className="mx-3">Log in</span>
                </div>
                <div
                  onClick={() => handleTabChange("signup")}
                  className={`${
                    activeTab === "signup"
                      ? "bg-[#3E2AD9] text-white"
                      : "bg-[#E0E0E0] text-[#6E6E6E]"
                  } p-3 rounded-xl cursor-pointer flex items-center justify-center w-full`}
                >
                  <CiUser className="w-5 h-5" />
                  <span className="mx-3">Sign up</span>
                </div>
              </div>
            </div>

            <div className="transition-all duration-300 space-y-6">
              {activeTab === "signup" && verificationStatus.pending ? (
                <SuccessMessage />
              ) : forgotPasswordMode ? (
                forgotEmailSent ? (
                  <div className="py-8 text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg
                        className="w-8 h-8 text-green-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <h2 className="text-xl font-bold text-gray-800 mb-2">
                      Check your email
                    </h2>
                    <p className="text-gray-600">
                      We've sent a password reset link to{" "}
                      <strong>{formData.email}</strong>.
                    </p>
                    <button
                      className="mt-6 text-indigo-600 underline"
                      onClick={() => setForgotPasswordMode(false)}
                    >
                      Back to login
                    </button>
                  </div>
                ) : (
                  <form
                    onSubmit={handleForgotPasswordSubmit}
                    className="space-y-6"
                  >
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700">
                        Enter your email
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        className="w-full pl-3 pr-3 py-2 rounded-md border"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={isSendingEmail}
                      className={`bg-[#3E2AD9] text-white p-3 rounded-xl w-full cursor-pointer flex items-center justify-center ${
                        isSendingEmail ? "opacity-70" : ""
                      }`}
                    >
                      {isSendingEmail ? (
                        <div className="flex items-center gap-2">
                          <svg
                            className="animate-spin h-5 w-5 text-white"
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
                          <span>Sending...</span>
                        </div>
                      ) : (
                        <>
                          Send reset link
                          <RiSendPlane2Line className="ml-4" />
                        </>
                      )}
                    </button>
                    <button
                      type="button"
                      className="text-slate-500 underline text-sm mt-2"
                      onClick={() => setForgotPasswordMode(false)}
                    >
                      Back to login
                    </button>
                  </form>
                )
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {activeTab === "signup" && (
                    <>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700">
                          Full Name
                        </label>
                        <input
                          type="text"
                          name="username"
                          className="w-full pl-3 pr-3 py-2 rounded-md border"
                          value={formData.username}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700">
                          Email address
                        </label>
                        <input
                          type="email"
                          name="email"
                          className="w-full pl-3 pr-3 py-2 rounded-md border"
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700">
                          Phone Number
                        </label>
                        <input
                          type="number"
                          name="phone"
                          className="w-full pl-3 pr-3 py-2 rounded-md border"
                          value={formData.phone}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="space-y-2 relative">
                        <label className="text-sm font-medium text-slate-700">
                          Password
                        </label>
                        <input
                          type={showPassword ? "text" : "password"}
                          name="password"
                          className="w-full pl-3 pr-10 py-2 rounded-md border"
                          value={formData.password}
                          onChange={handleChange}
                        />
                        <div
                          className="absolute inset-y-0 right-3 mt-4 flex items-center cursor-pointer"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? (
                            <IoIosEyeOff className="h-4 w-4 text-slate-500" />
                          ) : (
                            <FaEye className="h-4 w-4 text-slate-500" />
                          )}
                        </div>
                      </div>
                    </>
                  )}

                  {activeTab === "login" && (
                    <>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700">
                          Email address
                        </label>
                        <input
                          type="email"
                          name="email"
                          className="w-full pl-3 pr-3 py-2 rounded-md border"
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="space-y-2 relative">
                        <label className="text-sm font-medium text-slate-700">
                          Password
                        </label>
                        <input
                          type={showPassword ? "text" : "password"}
                          name="password"
                          className="w-full pl-3 pr-10 py-2 rounded-md border"
                          value={formData.password}
                          onChange={handleChange}
                        />
                        <div
                          className="absolute inset-y-0 right-3 mt-4 flex items-center cursor-pointer"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? (
                            <IoIosEyeOff className="h-4 w-4 text-slate-500" />
                          ) : (
                            <FaEye className="h-4 w-4 text-slate-500" />
                          )}
                        </div>
                      </div>
                      <div
                        className="text-sm text-slate-500 mb-4 text-right cursor-pointer"
                        onClick={onForgot}
                      >
                        Forgot password?{" "}
                      </div>
                    </>
                  )}

                  <button
                    type="submit"
                    disabled={
                      activeTab === "signup" ? isRegistering : isLoggingIn
                    }
                    className={`bg-[#3E2AD9] text-white p-3 rounded-xl cursor-pointer flex items-center justify-center w-full ${
                      isRegistering || isLoggingIn ? "opacity-70" : ""
                    }`}
                  >
                    {(activeTab === "signup" && isRegistering) ||
                    (activeTab === "login" && isLoggingIn) ? (
                      <div className="flex items-center gap-2">
                        <svg
                          className="animate-spin h-5 w-5 text-white"
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
                        <span>
                          {activeTab === "signup"
                            ? "Signing up..."
                            : "Logging in..."}
                        </span>
                      </div>
                    ) : activeTab === "login" ? (
                      "Log in"
                    ) : (
                      "Sign up"
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        <div className="w-full md:w-7/12 p-4 h-full flex flex-col items-center justify-between relative sm:w-1/2">
          <div
            className={`absolute  z-10 transition-all duration-300 ease-in-out ${
              activeTab === "login"
                ? "w-[140px] h-[150px] right-5 top-6"
                : "w-[140px] h-[150px] right-5 top-6"
            }`}
          >
            <img
              src={side}
              className="w-full h-full object-cover rounded-md"
              alt="side"
            />
            <button className="absolute bottom-1 left-2 bg-indigo-600 text-white px-2 py-1 text-sm rounded hover:bg-indigo-700 transition-colors flex items-center gap-1">
              <CiUser size={14} />
              {activeTab === "login" ? "Sign up" : "Log in"}
            </button>
          </div>

          <img
            src={interior}
            alt="Luxury hotel interior"
            className="w-full h-full object-cover rounded-3xl"
          />

          <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
            <h2 className="text-3xl font-bold mb-3">
              Get new experience in a new perspective
            </h2>
            <p className="text-[15px] font-medium">
              Elevate your lifestyle with us
            </p>

            <div className="mt-6">
              <button
                className="border-2 border-white text-white px-4 py-2 rounded-[20px] cursor-pointer w-full sm:w-1/2 md:w-2/5 lg:w-1/2 
              flex items-center justify-center bg-black/50"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="22"
                  height="22"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="#FFC107"
                    d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                  ></path>
                  <path
                    fill="#FF3D00"
                    d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                  ></path>
                  <path
                    fill="#4CAF50"
                    d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                  ></path>
                  <path
                    fill="#1976D2"
                    d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                  ></path>
                </svg>
                <span className="mx-2 text-sm sm:text-base">
                  {activeTab === "login" ? "Sign up" : "Log in"}
                </span>

                <GoArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;
