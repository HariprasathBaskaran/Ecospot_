import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import {
  Person2OutlinedIcon,
  MailOutlineOutlinedIcon,
  RemoveRedEyeOutlinedIcon,
  VisibilityOffOutlinedIcon,
} from "../../Utils/Icons";
import "./CreateAccount.css";

const CreateAccount = () => {
  // Initialize form state with all required fields
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    rePassword: "",
    agreeTerms: false,
  });
  const [showSuccess, setShowSuccess] = useState(false);

  // State for storing all registered users
  const [registeredUsers, setRegisteredUsers] = useState([]);

  // State for handling form validation errors
  const [errors, setErrors] = useState({});

  // State for toggling password visibility
  const [showPassword, setShowPassword] = useState({
    password: false,
    rePassword: false,
  });

  // Load existing users from localStorage when component mounts
  useEffect(() => {
    const savedUsers = localStorage.getItem("registeredUsers");
    if (savedUsers) {
      setRegisteredUsers(JSON.parse(savedUsers));
    }
  }, []);

  useEffect(() => {
    if (showSuccess) {
      const timer = setTimeout(() => {
        setShowSuccess(false);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [showSuccess]);

  // Handle input changes for all form fields
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  // Validate form data
  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (formData.password !== formData.rePassword) {
      newErrors.rePassword = "Passwords do not match";
    }

    if (!formData.agreeTerms) {
      newErrors.agreeTerms = "You must agree to the terms and conditions";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Check if email already exists
      const emailExists = registeredUsers.some(
        (user) => user.email === formData.email
      );

      if (emailExists) {
        setErrors((prev) => ({
          ...prev,
          email: "This email is already registered",
        }));
        return;
      }

      // Add new user to the array
      const newUsers = [...registeredUsers, formData];
      setRegisteredUsers(newUsers);

      // Save to localStorage
      localStorage.setItem("registeredUsers", JSON.stringify(newUsers));

      // Reset form
      setFormData({
        name: "",
        email: "",
        password: "",
        rePassword: "",
        agreeTerms: false,
      });

      // Show success message
      alert("Account created successfully!");
      window.location.href = "/";
    }
  };

  // Toggle password visibility
  const togglePasswordVisibility = (field) => {
    setShowPassword((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  return (
    <div className="container-fluid">
      <div
        className="d-flex justify-content-center align-items-center md-5  "
        style={{ minHeight: "80vh", minWidth: "100%" }}
      >
        <div className="card m-5 p-5 ">
          <div className="justify-content-center align-items-center mb-4 word-wrap">
            <p className="h1">CREATE AN ACCOUNT</p>
          </div>
          {showSuccess && (
            <div className="alert alert-success" role="alert">
              Account created successfully!
            </div>
          )}
          <form className="w-100" onSubmit={handleSubmit}>
            <div className="form-group mb-5">
              {/* Name Input */}
              <div className="position-relative">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`form-control mb-5 p-3 border ${
                    errors.name ? "border-danger" : "border-dark"
                  }`}
                />

                {errors.name && (
                  <small className="text-danger">{errors.name}</small>
                )}
              </div>

              {/* Email Input */}
              <div className="position-relative">
                <input
                  type="text"
                  name="email"
                  placeholder="Email "
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`form-control mb-5 p-3 border ${
                    errors.email ? "border-danger" : "border-dark"
                  }`}
                />

                {errors.email && (
                  <small className="text-danger">{errors.email}</small>
                )}
              </div>

              {/* Password Input */}
              <div className="position-relative">
                <input
                  type={showPassword.password ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className={`form-control mb-5 p-3 border ${
                    errors.password ? "border-danger" : "border-dark"
                  }`}
                />
                <RemoveRedEyeOutlinedIcon
                  icon={
                    showPassword.password
                      ? RemoveRedEyeOutlinedIcon
                      : VisibilityOffOutlinedIcon
                  }
                  className="position-absolute"
                  style={{ top: "10px", right: "10px", cursor: "pointer" }}
                  onClick={() => togglePasswordVisibility("password")}
                />
                {errors.password && (
                  <small className="text-danger">{errors.password}</small>
                )}
              </div>

              {/* Repeat Password Input */}
              <div className="position-relative">
                <input
                  type={showPassword.rePassword ? "text" : "password"}
                  name="rePassword"
                  placeholder="Repeat Password"
                  value={formData.rePassword}
                  onChange={handleInputChange}
                  className={`form-control mb-5 p-3 border ${
                    errors.rePassword ? "border-danger" : "border-dark"
                  }`}
                />
                <VisibilityOffOutlinedIcon
                  icon={
                    showPassword.rePassword
                      ? VisibilityOffOutlinedIcon
                      : RemoveRedEyeOutlinedIcon
                  }
                  className="position-absolute"
                  style={{ top: "10px", right: "10px", cursor: "pointer" }}
                  onClick={() => togglePasswordVisibility("rePassword")}
                />
                {errors.rePassword && (
                  <small className="text-danger">{errors.rePassword}</small>
                )}
              </div>

              {/* Terms Agreement Checkbox */}
              <div className="position-relative mb-3">
                <input
                  type="checkbox"
                  name="agreeTerms"
                  checked={formData.agreeTerms}
                  onChange={handleInputChange}
                  className="form-check-input position-absolute"
                />
                <label
                  className="form-check-label position-relative"
                  style={{ left: "2rem" }}
                >
                  I agree to the terms and conditions
                </label>
                {errors.agreeTerms && (
                  <small className="text-danger d-block">
                    {errors.agreeTerms}
                  </small>
                )}
              </div>
            </div>

            {/* Submit Button */}
            <div className="d-grid gap-2 mb-5">
              <button type="submit" className="btn btn-warning mt-3">
                REGISTER
              </button>
            </div>

            {/* Login Link */}
            <div className="text-center">
              <p>
                Have already an Account?{" "}
                <Link
                  to="/SignIn"
                  className="link-primary text-decoration-underline"
                >
                  Login here
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
