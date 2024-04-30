import React from "react";
import "./SignUp.css";

function SignUp() {
    return (
        <div className="background">
            <div id="section1" className="section section1">
                <div className="header">
                    <div className="logo">
                        <a href="/" className="logo-link">
                            <img src="Home_Logo.png" alt="Logo" />
                        </a>
                    </div>
                </div>

                <div className="content">
                    <div className="text" style={{ marginLeft: "90px" }}>
                        <div className="logo-container">
                            <h1 style={{ fontSize: "48px" }}>Welcome to</h1>
                            <img src="text.png" alt="TimeWise Logo" style={{ maxWidth: "100%" }} />
                        </div>
                        <p style={{ fontSize: "24px", color: "black", marginTop: "10px" }}>
                            Just sign in and plan your day. It’s easy.
                        </p>
                        <p style={{ fontSize: "16px", color: "white", marginTop: "20px" }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
                        </p>
                        <div className={"social_but"}>
                            <img src="Vector.png" alt="Vector Image" />
                        </div>
                    </div>
                    <div className="forms-wrapper">
                        <form className="forms" method="post" action="/login">
                            <div className={"inputGroup"}>
                                <h1>Create account</h1>
                                <input
                                    type="text"
                                    name="full_name"
                                    placeholder="Full name"
                                    style={{
                                        width: "100%",
                                        height: "56px",
                                        border: "1px solid #7FC991",
                                        borderRadius: "10px",
                                        color: "#7FC991",
                                        fontSize: "15px",
                                    }}
                                    required
                                />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    style={{
                                        width: "100%",
                                        height: "56px",
                                        border: "1px solid #7FC991",
                                        borderRadius: "10px",
                                        color: "#7FC991",
                                        fontSize: "15px",
                                    }}
                                    required
                                />
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    style={{
                                        width: "100%",
                                        height: "56px",
                                        border: "1px solid #7FC991",
                                        borderRadius: "10px",
                                        color: "#7FC991",
                                        fontSize: "15px",
                                    }}
                                    required
                                />
                                <div style={{ display: "flex", alignItems: "center", marginTop: "10px" }}>
                                    <input type="checkbox" id="rememberMe" name="rememberMe" style={{ marginRight: "10px" }} />
                                    <label htmlFor="rememberMe" style={{ fontSize: "15px", color: "black" }}>Remember me</label>
                                </div>
                                <button
                                    type="submit"
                                    style={{
                                        width: "100%",
                                        height: "56px",
                                        background: "black",
                                        borderRadius: "10px",
                                        color: "white",
                                        fontSize: "18px",
                                    }}
                                >
                                    Create account
                                </button>
                                <a href="/signin" className="sign-up-link">
                                    Already have an account? Sign in
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
