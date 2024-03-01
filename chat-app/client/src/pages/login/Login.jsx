import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="font-kanit flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-[#e0e1dd]">
        <h1 className="text-3xl font-semibold text-center">Login</h1>
        <form action="">
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter username"
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

          <Link
            to="/signin"
            className="text-sm mt-6 mx-2 hover:underline hover:text-[#3a86ff] inline-block"
          >
            {"Don't"} have an account?{" "}
          </Link>

          <div>
            <button className="mt-2 btn btn-block btn-sm hover:bg-[#3a86ff] hover:text-[#e0e1dd] transition-all text-[0.9rem] duration-300">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login
