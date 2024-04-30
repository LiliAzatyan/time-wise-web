import React from "react";
import "./SignIn.css";

function SignIn() {
    return (
        <div className="background">
            <div id="section1" className="section section1">
                <div className="header">
                    <div className="logo">
                        <a href="/" className="logo-link">
                            <img src="Home_Logo.png" alt="Logo"/>
                        </a>
                    </div>
                </div>

                <div className="content">
                    <div className="text" style={{marginLeft: '90px'}}>
                        <div className="logo-container">
                            <h1 style={{fontSize: "48px"}}>Welcome to</h1>
                            <img src="text.png" alt="TimeWise Logo" style={{maxWidth: "100%"}}/>
                        </div>
                        <p style={{fontSize: "24px", color: "black", marginTop: "10px"}}>Just sign in and plan your day. It’s easy.</p>
                        <p style={{fontSize: "16px", color: "white", marginTop: "20px"}}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
                        </p>
                        <div className={"social_but"}>
                            <img src="Vector.png" alt="Vector Image"/>
                        </div>
                    </div>
                    <div className="forms-wrapper">
                        <form className="forms" method="post" action="/login-and-register/Login/SignIn">
                            <div className={"inputGroup"}>
                                <h1>Sign in</h1>
                                <input type="email" name="email" placeholder="Email" style={{
                                    width: "100%",
                                    height: "56px",
                                    border: "1px solid #7FC991",
                                    borderRadius:"10px" ,
                                    color: "#7FC991",
                                    fontSize:"15px"
                                }} required/>
                                <input type="password" name="password" placeholder="Password" style={{
                                    width: "100%",
                                    height: "56px",
                                    border: "1px solid #7FC991",
                                    borderRadius:"10px" ,
                                    color: "#7FC991",
                                    fontSize:"15px"
                                }} required/>
                                <a href="/password-recovery" className="forgot-password-link">Forgot password?</a>
                                <button type="submit" style={{
                                    width: "100%",
                                    height: "56px",
                                    background:"black",
                                    borderRadius:"10px" ,
                                    color: "white",
                                    fontSize : "18px"
                                }}>Sign In</button>
                                <a href="/signup" className="sign-up-link">Don't have an account? Sign up</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignIn;
