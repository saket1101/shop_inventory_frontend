import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useRegisterMutation } from "../../redux/Api/userApi";

const Registration = () => {
  let navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [nameError, setNameError] = useState("");

  // rtk query call

  const [register, { isLoading }] = useRegisterMutation();

  const handleSubmit = async () => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

    if (!name) {
      setNameError("Name is required");
      return;
    } else {
      setNameError("");
    }
    if (!email) {
      setEmailError("Email is required");
      return;
    } else {
      setEmailError("");
    }
    if (!emailRegex.test(email)) {
      setEmailError("Invalid email format");
      return;
    } else {
      setEmailError("");
    }
    if (!password) {
      setPasswordError("Password is required");
      return;
    } else {
      setPasswordError("");
    }
    try {
      const response = await register({ name, email, password });
      if (response.data.status === "success") {
        setEmail("");
        setPassword("");
        setName("");
        navigate("/login");
      } else {
        alert("Something went wrong");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex w-full h-screen bg-gray-300">
      <div className="w-full flex items-center justify-center lg:w-1/2 ">
        <div className="bg-white px-10 py-16 rounded-3xl border-2 border-gray-50">
          <h1 className="text-3xl font-semibold mb-4">
            Welcome to Seller-Inventory
          </h1>
          <div>
            <div>
              <label className="text-lg font-medium">User Name</label>
              <input
                className="w-full border-2 border-gray-200 rounded-xl p-3 mt-1 bg-transparent"
                type="text"
                placeholder="Enter your name"
                value={name}
                required
                onChange={(e) => setName(e.target.value)}
              />
              {nameError && <p className="text-red-500">{nameError}</p>}
            </div>
            <div>
              <label className="text-lg font-medium">Email</label>
              <input
                className="w-full border-2 border-gray-200 rounded-xl p-3 mt-1 bg-transparent"
                type="email"
                placeholder="Enter your email"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
              />
              {emailError && <p className="text-red-500">{emailError}</p>}
            </div>
            <div>
              <label className="text-lg font-medium">Password</label>
              <div className="relative">
                <input
                  className="w-full border-2 border-gray-200 rounded-xl p-3 mt-1 bg-transparent"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                {passwordError && (
                  <p className="text-red-500">{passwordError}</p>
                )}

                <button
                  className="absolute right-3 top-1/2 transform -translate-y-1/2"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}{" "}
                </button>
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center mt-6">
                <div>
                  <input type="checkbox" id="remember" />
                  <label
                    htmlFor="remember"
                    className="ml-2 text-base font-medium"
                  >
                    Remember me
                  </label>
                </div>
                <div className="flex gap-1">
                  <p className="font-medium text-base">
                    {" "}
                    Already have an account?{" "}
                  </p>
                  <button
                    className="text-violet-500"
                    onClick={() => navigate("/login")}
                  >
                    Login
                  </button>
                </div>
              </div>
              <div className="bg-violet-500 text-center py-3 font-medium text-xl rounded-xl mt-4 text-white cursor-pointer">
                <button onClick={handleSubmit}>Register</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden lg:flex items-center justify-center h-full w-1/2 bg-gray-200 relative">
        <div className="w-60 h-60 bg-gradient-to-tr from-violet-500 to-pink-500 rounded-full animate-bounce"></div>
        <div className="w-full h-1/2 absolute bg-white/10 backdrop-blur-lg bottom-0"></div>
      </div>
    </div>
  );
};

export default Registration;
