import React, { useState } from "react";
import { Link } from "react-scroll";
import { Modal } from "antd";
import "./home.css";
import Login from "../login-and-register/login/index";
import Registration from "../login-and-register/register/index";
function Home() {
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [showRegistrationModal, setShowRegistrationModal] = useState(false);

    const handleLoginModal = () => {
        setShowLoginModal(!showLoginModal);
    };

    const handleRegistrationModal = () => {
        setShowRegistrationModal(!showRegistrationModal);
    };

    return (
        <div>
            <Link activeClass="active" to="section1" spy={true} smooth={true} offset={-70} duration={500}></Link>
            <Link activeClass="active" to="section2" spy={true} smooth={true} offset={-70} duration={500}></Link>
            <Link activeClass="active" to="section3" spy={true} smooth={true} offset={-70} duration={500}></Link>
            <Link activeClass="active" to="section4" spy={true} smooth={true} offset={-70} duration={500}></Link>
            <Link activeClass="active" to="section5" spy={true} smooth={true} offset={-70} duration={200}></Link>

            <div id="section1" className="section section1"
                 style={{backgroundColor: "#7BD6D4", color: "white", textAlign: "center", position: "relative"}}>
                <div className="text-container"
                     style={{position: "absolute", top: "20%", left: "50%", transform: "translate(-50%, -50%)"}}>
                    <h1 style={{color: "#7BD6D4", fontSize: "100px", fontFamily: 'Lucida Grande'}}>TimeWise</h1>
                    <p style={{fontSize: "25px"}}>Your Future Depends On What You Do Today</p>
                    <div className="login_reg">
                        <button className="button sign-up" style={{margin: '10px'}}
                                onClick={handleRegistrationModal}>Sign Up
                        </button>
                        <button className="button sign-in" style={{margin: '10px'}} onClick={handleLoginModal}>Sign In
                        </button>
                    </div>
                    <div className="platform">
                        <div className="app-store">
                            <img src="app-store-icon.png" alt="App Store"/>
                        </div>
                        <div className="google-market">
                            <img src="google-market-icon.png" alt="Google Market"/>
                        </div>
                    </div>
                </div>
            </div>


            <Modal title="Login" visible={showLoginModal} onCancel={handleLoginModal} footer={null}><Login/></Modal>


            <Modal title="Registration" visible={showRegistrationModal} onCancel={handleRegistrationModal}
                   footer={null}><Registration/></Modal>

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
