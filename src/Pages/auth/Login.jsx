import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
let navigate = useNavigate();
  return (
    <div className="flex w-full h-screen bg-gray-300">
      <div className="w-full flex items-center justify-center lg:w-1/2 ">
        <div className="bg-white px-10 py-16 rounded-3xl border-2 border-gray-50">
          <h1 className="text-3xl font-semibold mb-4">
            Welcome to Seller-Inventory
          </h1>
          <div>
            <div>
              <label className="text-lg font-medium">Email</label>
              <input
                className="w-full border-2 border-gray-200 rounded-xl p-3 mt-1 bg-transparent"
                type="email"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="text-lg font-medium">Password</label>
              <input
                className="w-full border-2 border-gray-200 rounded-xl p-3 mt-1 bg-transparent"
                type="password"
                placeholder="Enter your password"
              />
            </div>
            <div>
              <div className="flex justify-between items-center mt-6">
                <div>
                  <input type="checkbox" id="remember" />
                  <label for="remember" className="ml-2 text-base font-medium">
                    Remember me
                  </label>
                </div>
                <div>
                  <button className="text-violet-800">Frogot Password</button>
                </div>
              </div>
              <div className="active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all bg-violet-500 text-center py-3 font-medium text-xl rounded-xl mt-4 text-white cursor-pointer">
                {" "}
                <button className="">
                  Login
                </button>
              </div>
              <div className="mt-6 flex justify-center items-center gap-1">
                <p className="font-medium text-base">Don't have an account? </p>
                <button className="text-violet-500" onClick={() => navigate("/register")}>Register</button>
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

export default Login;
