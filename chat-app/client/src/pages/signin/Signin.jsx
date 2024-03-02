import React, { useState } from "react";
import { GenderCheckbox } from "./GenderCheckbox";
import { Link } from "react-router-dom";
import useSignup from "../../Hooks/useSignup";

const Signin = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    conformPassword: "",
    gender: "",
  });

  const { loading, signup } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs);
  };

  const handleCheckboxChange = (gender) => {
    setInputs({ ...inputs, gender });
  };

  return (
    <div className="font-kanit flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-[#e0e1dd]">
        <h1 className="text-3xl font-semibold text-center">Signup</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter your fullname"
              className="w-full input input-bordered h-10 focus:outline-none"
              value={inputs.fullName}
              onChange={(e) =>
                setInputs({ ...inputs, fullName: e.target.value })
              }
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
              value={inputs.username}
              onChange={(e) =>
                setInputs({ ...inputs, username: e.target.value })
              }
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
              value={inputs.password}
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
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
              value={inputs.conformPassword}
              onChange={(e) =>
                setInputs({ ...inputs, conformPassword: e.target.value })
              }
            />
          </div>

          <GenderCheckbox
            onCheckboxChange={handleCheckboxChange}
            selectedGender={inputs.gender}
          />

          <Link
            to="/login"
            className="text-sm mt-6 mx-2 hover:underline hover:text-[#3a86ff] inline-block"
          >
            {"Already"} have an account?{" "}
          </Link>

          <div>
            <button className="mt-2 btn btn-block btn-sm hover:bg-[#3a86ff] hover:text-[#e0e1dd] transition-all text-[0.9rem] duration-300">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signin;
