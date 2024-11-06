import { Link } from "react-router-dom";
import { useState } from "react";
import useLogin from "../../Hooks/useLogin";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { loading, login } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password);
  };

  return (
    <div className="font-kanit flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-[#e0e1dd]">
        <h1 className="text-3xl font-semibold text-center text-black">Login</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2 ">
              <span className="text-base label-text text-black">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="w-full input input-bordered h-10 focus:outline-none"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base label-text text-black">Password</span>
            </label>
            <input
              type="text"
              placeholder="Enter password"
              className="w-full input input-bordered h-10 focus:outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <Link
            to="/signin"
            className="text-sm mt-6 mx-2 hover:underline hover:text-[#3a86ff] text-black inline-block"
          >
            {"Don't"} have an account?{" "}
          </Link>

          <div>
            <button
              disabled={loading}
              className="mt-2 btn btn-block btn-sm hover:bg-[#3a86ff] hover:text-[#e0e1dd] transition-all text-[0.9rem] duration-300"
            >
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Login"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
