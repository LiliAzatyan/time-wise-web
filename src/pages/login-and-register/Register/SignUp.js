import React, { useEffect, useState } from "react";
import "./SignUp.css";
import {
  AiOutlineMail,
  AiOutlineLock,
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiOutlineUser,
} from "react-icons/ai";
import { useNavigate, NavLink } from "react-router-dom";
import axios from "axios";
import basestyle from "../Base.module.css";
import registrAnimation from "../../../animations/registration-animation.json";
import Lottie from "lottie-react";
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showText, setShowText] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const navigate = useNavigate();

  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [user, setUserDetails] = useState({
    name: "",
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUserDetails({
      ...user,
      [name]: value,
    });
  };

  const validateForm = (values) => {
    const error = {};
    const regex = /^[^\s+@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).+$/;

    if (!values.name) {
      error.fname = "Name is required";
    }
    if (!values.email) {
      error.email = "Email is required";
    } else if (!regex.test(values.email)) {
      error.email = "This is not a valid email format!";
    }
    if (!values.password) {
        error.password = "Password is required";
    } else if (values.password.length < 6) {
      error.password = "Password must be more than 8 characters";
    } else if (values.password.length > 30) {
      error.password = "Password cannot exceed more than 30 characters";
    } else if (!passwordRegex.test(values.password)) {
      error.password =
        "Password must contain at least 1 uppercase letter and 1 number";
    }
    return error;
  };

  const signupHandler = async (e) => {
    e.preventDefault();
    const errors = validateForm(user);
    setFormErrors(errors);
    setIsSubmit(true);
    if (Object.keys(errors).length === 0) {
      try {
        const response = await axios.post(`https://api.timewise.am/api/auth/register`, user);
        alert(response.data.message);
        navigate("/signin", { replace: true });
      } catch (err) {
        if (err.response && err.response.data) {
          setFormErrors({ ...formErrors, apiError: err.response.data.message });
        } else {
          console.log(err);
        }
      }
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const container = document.querySelector(".container");
    container.addEventListener("animationend", handleAnimationEnd);

    return () => {
      container.removeEventListener("animationend", handleAnimationEnd);
    };
  }, []);

  const handleAnimationEnd = () => {
    setShowText(true);
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <div className="container">
      <div className={`split left ${isLoaded ? "animate-slide-up" : ""}`}>
        <div className="row" style={{ padding: "20px", position: "relative" }}>
          <div
            className="logo_header"
            style={{ position: "absolute", top: "10px", left: "0px" }}
          >
            <Link to="/">
              <img
                src="text.png"
                alt="TimeWise Logo"
                style={{ maxWidth: "100%" }}
              />
            </Link>
          </div>
        </div>
        <div style={{}}>
          <h1
            style={{
              fontSize: "48px",
              marginBottom: "10px",
              color: "black",
              fontStyle: "normal",
              fontWeight: 800,
            }}
          >
            <span style={{ color: "black" }}>Welcome to </span>
            <span style={{ color: "#2C889C" }}>Time</span>
            <span style={{ color: "#68B37A" }}>Wise </span>
            <p
              className={showText ? "animate-text" : ""}
              style={{
                fontSize: "26px",
                lineHeight: "36px",
                fontFamily: "Lato",
                fontStyle: "normal",
                fontWeight: 600,
              }}
            >
              Sign up to access your personalized dashboard, <br /> set goals,
              track your tasks, and make the most of every minute.
            </p>
          </h1>
          <Lottie animationData={registrAnimation} className="registr-image" />
        </div>
        <div className="row" style={{ display: "flex" }}>
          <img src="/Vector.png" alt="vImage" />
        </div>
      </div>

      <div
        className={`split right ${isLoaded ? "animate-slide-right-to-left" : ""}`}
      >
        <div className="centered">
          <div className="card">
            <form onSubmit={signupHandler}  style={{  "box-shadow": "0px 0px 30.1px 0px #AFEEEE, 0px 0px 6.3px 0px #AFEEEE"}}>
              <div className="form-wrapper">
                <h3>Create account</h3>
                {formErrors.apiError && <p className={basestyle.error}>{formErrors.apiError}</p>}
                <p className={basestyle.error}>{formErrors.fname}</p>
                <div className="text_area" style={{ marginTop: "30px" }}>
                  <AiOutlineUser className="icon" size={30} />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Full Name"
                    className="text_input"
                    onChange={changeHandler}
                    value={user.name}
                  />
                </div>
                <p className={basestyle.error}>{formErrors.email}</p>
                <div className="text_area">
                  <AiOutlineMail className="icon" size={30} />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    className="text_input"
                    onChange={changeHandler}
                    value={user.email}
                  />
                </div>
                <p className={basestyle.error}>{formErrors.password}</p>
                <div className="text_area">
                  <AiOutlineLock className="icon" size={30} />
                  <input
                    type={isPasswordVisible ? "text" : "password"}
                    id="password"
                    name="password"
                    placeholder="Password"
                    className="text_input"
                    onChange={changeHandler}
                    value={user.password}
                  />
                  <span className="eye-icon" onClick={togglePasswordVisibility}>
                    {isPasswordVisible ? (
                      <AiOutlineEyeInvisible />
                    ) : (
                      <AiOutlineEye />
                    )}
                  </span>
                </div>
                <input
                  type="submit"
                  value="SIGN UP"
                  className="btn"
                />
                <NavLink
                  to="/signin"
                  className="signup-link"
                  style={{ marginTop: "30px" }}
                >
                  Already have an account? Sign in
                </NavLink>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
