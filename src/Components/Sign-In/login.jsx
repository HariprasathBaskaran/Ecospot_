import React, { useState } from "react";
import "./login.css";
import { ArrowBackOutlinedIcon } from "../../Utils/Icons";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    if (error) setError("");
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const registeredUsers =
      JSON.parse(localStorage.getItem("registeredUsers")) || [];

    const user = registeredUsers.find(
      (user) =>
        user.email === formData.email && user.password === formData.password
    );

    if (user) {
      localStorage.setItem("currentUser", JSON.stringify(user));
      window.location.href = "/Home";
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div
      className=" wrapper container-fluid d-flex align-items-center justify-content-center position-relative  w-100"
      style={{ minWidth: "70%", height: "80vh" }}
    >
      <Link to="/">
        <ArrowBackOutlinedIcon
          className="icon position-relative "
          style={{ top: "-200px", left: "0px" }}
        />
      </Link>
      <div
        className="row w-100 justify-content-center "
        style={{ maxWidth: "50%" }}
      >
        <div className="col-md-5 col-sm-12  d-flex p-4  ">
          <div className="w-100" style={{ minwidth: "100%" }}>
            <img
              src="/CoverImage/loginimg.png"
              alt=""
              className="img-fluid h-100"
              style={{ width: "90%" }}
            />
          </div>
        </div>

        <div
          className="col-md-7 form-alignment d-flex flex-column align-items-stretch mb-3 p-5"
          style={{ width: "50%" }}
        >
          <div className=" ">
            <p className=" h2 fw-bold mb-2 ">Welcome to Ecospot,</p>
            <p className="h2 fw-bold mb-4">Sign-In to Countinue</p>
            <p>
              Don't have an Account{" "}
              <Link
                to="/CreateAccount"
                className="link-primary text-decoration-underline mb-5"
              >
                {" "}
                Create a Account
              </Link>
              <p>It's Take less than minute</p>
            </p>
          </div>
          <form className="w-100" onSubmit={handleLogin}>
            <div className="form-group mb-4 mt-3">
              <label htmlFor="username" className="fw-bold mb-3">
                E-mail
              </label>
              <input
                type="text"
                placeholder="Email "
                id="username"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="form-control mb-2 p-2 border border-dark"
              />
            </div>
            <div>
              <div className="form-group ">
                <label
                  className=" display-inline fw-bold mb-3"
                  htmlFor="password"
                >
                  Password
                </label>
              </div>
              <input
                type="password"
                placeholder="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="form-control mb-3 p-2 border border-dark"
              />
              <p>
                {" "}
                <Link
                  to="/Forgot-Password"
                  className="link-primary text-decoration-underline justify-content-center align-items-center"
                >
                  {" "}
                  Forgot your password?{" "}
                </Link>
              </p>
            </div>
            {error && (
              <div className="alert text-danger mt-3" role="alert">
                {error}
              </div>
            )}
            <div className="d-grid gap-2  mt-5">
              <button className="btn btn-success py-3">Sign-In</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
