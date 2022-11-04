import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url("https://images.unsplash.com/45/QDSMoAMTYaZoXpcwBjsL__DSC0104-1.jpg?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="hero-overlay bg-black bg-opacity-60"></div>
        <div className="text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold ">
              Welcome To Our Learn With Fun
            </h1>
            <p className="mb-5  text-stone-300"></p>
            <Link to="/courses">
              <button className="btn btn-secondary">Get Started</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
