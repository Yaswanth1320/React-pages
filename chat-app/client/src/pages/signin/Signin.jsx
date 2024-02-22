import React from 'react'
import { GenderCheckbox } from './GenderCheckbox';

export const Signin = () => {
  return (
    <div className="font-kanit flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-[#e0e1dd]">
        <h1 className="text-3xl font-semibold text-center">Signup</h1>
        <form action="">
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter your fullname"
              className="w-full input input-bordered h-10 focus:outline-none"
            />
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter a username"
              className="w-full input input-bordered h-10 focus:outline-none"
            />
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="text"
              placeholder="Enter password"
              className="w-full input input-bordered h-10 focus:outline-none"
            />
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base label-text">Conform Password</span>
            </label>
            <input
              type="text"
              placeholder="Conform password"
              className="w-full input input-bordered h-10 focus:outline-none"
            />
          </div>

          <GenderCheckbox/>

          <a
            href="#"
            className="text-sm mt-6 mx-2 hover:underline hover:text-[#3a86ff] inline-block"
          >
            {"Already"} have an account?{" "}
          </a>

          <div>
            <button className="mt-2 btn btn-block btn-sm hover:bg-[#3a86ff] hover:text-[#e0e1dd] transition-all text-[0.9rem] duration-300">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
