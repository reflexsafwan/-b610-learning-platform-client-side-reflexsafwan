import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useContext } from "react";
import { useState } from "react";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

const Login = () => {
  const { googleLogIn, gitHubLogIn, logInWithEmailPassword } = useContext(AuthContext);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (event) => {
    event.preventDefault();
    setError(null);
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    logInWithEmailPassword(email, password)
      .then((result) => {
        setError(null);
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => setError(error.message));
  };

  const handleGoogleLogIn = () => {
    googleLogIn()
      .then((result) => {
        navigate(from, { replace: true });
      })
      .catch((error) => console.error(error));
  };

  const handleGigHubLogIn = () => {
    gitHubLogIn()
      .then((result) => {
        navigate(from, { replace: true });
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <div className="p-3 min-h-screen bg-base-200">
        <div className=" flex-col  mx-auto">
          <div className=" rounded-lg w-full md:w-96 mx-auto shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit} className="card-body">
              <h1 className="text-xl font-bold">Login now!</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <Link to="" className="label-text-alt link link-hover">
                    Forgot password?
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
              </div>
              <p className="text-red-500">{error}</p>
              <label className="text-center ">
                <Link
                  to="/register"
                  className="label-text-alt link link-hover text-center"
                >
                  Don't have account?
                </Link>
              </label>
            </form>
          </div>

          <div className="w-full md:w-96 mx-auto  mt-4">
            <button
              onClick={handleGoogleLogIn}
              className="flex items-center border bg-white shadow-lg rounded-lg w-full p-1 mb-2"
            >
              <FcGoogle className="text-2xl m-1"></FcGoogle>
              <p className="flex-grow font-semibold">Continue with Google</p>
            </button>
            <button
              onClick={handleGigHubLogIn}
              className="flex items-center bg-white border shadow-lg   rounded-lg  w-full p-1"
            >
              <FaGithub className="text-2xl  m-1"></FaGithub>
              <p className="flex-grow font-semibold">Continue with Github</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
