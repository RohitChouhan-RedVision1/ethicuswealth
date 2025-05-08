import React from 'react';

const LoginPage = () => {
  return (
    <div className="py-[60px]">
      <div className="max-w-screen-xl min-h-[500px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 bg-[var(--rv-third)] rounded-2xl shadow-lg overflow-hidden">
        {/* Left Section */}
        <div className="flex flex-col  px-10">
          <h2 className="text-sm font-medium text-gray-600">LARGEST IMAGE SOURCE</h2>
          <h1 className="text-4xl font-bold mt-2">
            POWERED BY <br />
            <span className="text-black">
              CREATORS <span className="text-lime-500 underline underline-offset-4">AROUND</span>
            </span>{' '}
            <br />
            THE WORLD.
          </h1>
          <p className="mt-6 text-sm text-gray-500">Don’t have an account?</p>
          <a href="#" className="text-sm mt-1 text-black underline">Create account →</a>

          <div className="mt-10 rounded-xl overflow-hidden">
            <img src="/about-car.jpg" alt="About" className="w-1/2 object-cover" />
            <div className="absolute p-4 text-white bg-black/60 w-full">
              <h3 className="text-white font-semibold">About us</h3>
              <p className="text-xs">Over 3 million free high-resolution images brought to you by the world’s most generous community of photographers.</p>
            </div>
          </div>
        </div>

        {/* Right Section - Login with Image */}
        <div className="relative h-full flex items-center justify-center bg-black">
          <img
            src="/lotus-gt.jpg"
            alt="Login Car"
            className="absolute inset-0 w-full h-full object-cover opacity-50"
          />
          <div className="relative bg-white p-6 rounded-xl w-80 shadow-lg z-10">
            <h3 className="text-center text-sm font-medium">Login to your account</h3>
            <div className="mt-4 space-y-3">
              <input
                type="text"
                placeholder="Username"
                defaultValue="Jackob blonde"
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
              />
              <div className="flex justify-between items-center text-xs text-gray-600">
                <label className="flex items-center gap-1">
                  <input type="checkbox" className="accent-lime-500" />
                  Remember me
                </label>
                <a href="#" className="text-black">Forgot your password?</a>
              </div>
              <button className="w-full bg-black text-white py-2 rounded hover:bg-gray-800">login</button>
              <img src="/login-car.jpg" alt="Car" className="rounded-xl mt-3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
