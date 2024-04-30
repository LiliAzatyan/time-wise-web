import React  from "react";
import { Link } from "react-scroll";
import "./home.css";

function Home() {


    return (
        <div>
            <Link activeClass="active" to="section1" spy={true} smooth={true} offset={-70} duration={500}></Link>
            <Link activeClass="active" to="section2" spy={true} smooth={true} offset={-70} duration={500}></Link>
            <Link activeClass="active" to="section3" spy={true} smooth={true} offset={-70} duration={500}></Link>
            <Link activeClass="active" to="section4" spy={true} smooth={true} offset={-70} duration={500}></Link>
            <Link activeClass="active" to="section5" spy={true} smooth={true} offset={-70} duration={200}></Link>

            <div id="section1">
                <div className="header">
                    <div className="logo">
                        <img src="Home_Logo.png" alt="Logo"/>
                    </div>
                    <div className="buttons">
                        <a href="/signin">
                            <button className="sign-in">Sign In</button>
                        </a>
                        <a href="/signup">
                            <button className="sign-up">Sign Up</button>
                        </a>
                    </div>
                </div>

                <div className="content">
                    <div className="text" style={{marginLeft: '90px'}}>
                        <div className="logo-container">
                            <h1 style={{fontSize: "48px"}}>Welcome to</h1>
                            <img src="text.png" alt="TimeWise Logo" style={{maxWidth: "100%"}}/>
                        </div>
                        <p style={{ fontSize: "24px", color: "black",marginTop: "10px" }}>Where organization meets
                            inspiration.</p>
                        <p style={{fontSize: "16px", color: "grey" ,marginTop: "20px"}}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua.
                            Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco.
                        </p>
                        <div className={"social_but"}>
                            <button className="try_free"
                                    style={{width: "150px", height: "50px", fontSize: "18px", padding: "10px 20px"}}>Try
                                Free
                            </button>
                            <button className="get_app"
                                    style={{width: "150px", height: "50px", fontSize: "18px", padding: "10px 20px"}}>Get
                                App
                            </button>
                        </div>
                    </div>
                    <div className="background-image">
                        <img src="Hedaer__bg.png" alt="Background"/>
                    </div>
                </div>
            </div>


            <div id="section2" className="section" style={{backgroundColor: "rgba(123, 214, 212, 0.15)"}}>
                <div className="text">
                    <h2 className="common-heading">My Planner</h2>
                    <p className="common-text">
                        ALorem ipsum dolor sit amet consectetur. Quis tortor gravida nibh arcu id purus ullaxcorper. Vel
                        vel erat semper augue.Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet
                        consectetur. Quis tortor gravida nibh arcu id purus ullaxcorper. Vel vel erat semper augue.Lorem
                        ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Quis tortor gravida
                        nibh arcu id purus ullaxcorper. Vel vel erat semper augue.Lorem ipsum dolor sit amet
                        consectetur. Lorem ipsum dolor sit amet consectetur. Quis tortor gravida nibh arcu id purus
                        ullaxcorper.
                    </p>
                </div>
                <div className="images">
                    <img src="image1.png" alt="my planner"/>
                </div>
            </div>
            <div className="section3_header section" style={{backgroundColor: "rgba(123, 214, 212, 0.15)"}}>

                <div className="image">
                    <img src="image2.png" alt="aa"/>
                </div>

                <div className="text">
                    <h2 className="common-heading">My Goals</h2>
                    <p className="common-text">
                        Lorem ipsum dolor sit amet consectetur. Quis tortor gravida nibh arcu id purus ullaxcorper. Vel
                        vel erat semper augue.Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet
                        consectetur. Quis tortor gravida nibh arcu id purus ullaxcorper. Vel vel erat semper augue.Lorem
                        ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.
                    </p>
                </div>
            </div>


            <div id="section4" className="section" style={{backgroundColor: "rgba(123, 214, 212, 0.15)"}}>
                <div className="text">
                    <h2 className="common-heading">My Notes</h2>
                    <p className="common-text">
                        ALorem ipsum dolor sit amet consectetur. Quis tortor gravida nibh arcu id purus ullaxcorper. Vel
                        vel erat semper augue.Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet
                        consectetur. Quis tortor gravida nibh arcu id purus ullaxcorper. Vel vel erat semper augue.Lorem
                        ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Quis tortor gravida
                        nibh arcu id purus ullaxcorper. Vel vel erat semper augue.Lorem ipsum dolor sit amet
                        consectetur. Lorem ipsum dolor sit amet consectetur. Quis tortor gravida nibh arcu id purus
                        ullaxcorper.
                    </p>
                </div>
                <div className="images">
                    <img src="image3.png" alt="My goals"/>
                </div>
            </div>
            <div id="section5" className="section section5" style={{textAlign: "center", backgroundColor: "#fff"}}>
                <p className="animated-marker">"TimeWise makes it easy to go as simple or as complex as you want"</p>
            </div>
        </div>
    );
}

export default Home;
