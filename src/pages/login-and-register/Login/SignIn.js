import React, { useEffect, useState } from "react";
import "./SignIn.css";
import {
  AiOutlineMail,
  AiOutlineLock,
  AiOutlineEye,
  AiOutlineEyeInvisible,
} from "react-icons/ai";
import { useNavigate, NavLink } from "react-router-dom";
import axios from "axios";
import basestyle from "../Base.module.css";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showText, setShowText] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isSigningUp] = useState(false);
  const navigate = useNavigate();
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [user, setUserDetails] = useState({
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
    if (!values.email) {
      error.email = "Email is required";
    } else if (!regex.test(values.email)) {
      error.email = "Please enter a valid email address";
    }
    if (!values.password) {
      error.password = "Password is required";
    }
    return error;
  };

  const loginHandler = (e) => {
    e.preventDefault();
    setFormErrors(validateForm(user));
    setIsSubmit(true);
    // if (!formErrors) {

    // }
  };

  const signinHandler = async (e) => {
    e.preventDefault();
    const errors = validateForm(user);
    setFormErrors(errors);
    setIsSubmit(true);
    if (Object.keys(errors).length === 0) {
      try {
        const response = await axios.post(
          `https://api.timewise.am/api/auth/login`,
          user
        );
        alert(response.data.message);
        navigate("/my-planner", { replace: true });
      } catch (err) {
        if (err.response && err.response.data) {
          setFormErrors({ ...formErrors, apiError: err.response.data.message });
        } else {
          console.log(err);
        }
      }
    }
  };

  //   useEffect(() => {
  //     if (Object.keys(formErrors).length === 0 && isSubmit) {
  //       axios
  //         // .post(`https://api.timewise.am/api/auth/login`, user)
  //         .post(`http://localhost:3001/api/auth/login`, user)
  //         .then((res) => {
  //           // setUserState(res.data.user);
  //           navigate("/my-planner", { replace: true });
  //         })
  //         .catch((err) => console.log("Sign in Error" + err));
  //         console.log(user);
  //     }
  //   }, [formErrors]);
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
            {/* <img src="Home_Logo.png" alt="TimeWise Logo" style={{maxWidth: '100%', height: 'auto'}}/> */}
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
          </h1>

          <p
            className={showText ? "animate-text" : ""}
            style={{
              fontSize: "25px",
              lineHeight: "36px",
              fontFamily: "Lato",
              fontStyle: "normal",
              fontWeight: 600,
            }}
          >
            Streamline Your Day with Efficient Time Management
          </p>
        </div>
        <div className="row" style={{ display: "flex" }}>
          <div
            className={`image-container ${isLoaded ? "animate-slide-up" : ""}`}
            style={{ flex: "1" }}
          >
            <img src="/Vector.svg" alt="Login " />
          </div>
        </div>
      </div>
      <p className={basestyle.error}>{formErrors.email}</p>
      <div
        className={`split right ${
          isLoaded ? "animate-slide-right-to-left" : ""
        }`}
      >
        <div className="centered">
          <div
            className="card"
            style={{ display: isSigningUp ? "none" : "block" }}
          >

            <form onSubmit={signinHandler} style={{  "box-shadow": "0px 0px 30.1px 0px #AFEEEE, 0px 0px 6.3px 0px #AFEEEE"}}>
              <div className="form-wrapper">
                <h3>Sign in</h3>
                <p className={basestyle.error}>{formErrors.email}</p>
                <div className="text_area" style={{ marginTop: "50px" }}>
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
                <p className="forgot-password">Forgot Password?</p>
                <button
                  style={{ marginTop: "28px" }}
                  type="submit"
                  className="btn"
                  //   onClick={loginHandler}
                >
                    Sign in
                </button>
                <NavLink
                  to="/signup"
                  className="signup-link"
                  style={{ marginTop: "50px" }}
                >
                  Don't have an account? Sign up
                </NavLink>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;