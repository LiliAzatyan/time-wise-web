import React, { useState } from "react";
import { Link } from "react-scroll";
import "./home.css";
import { Button, Modal } from "antd";
import Login from "../login-and-register/login/index";
import Registration from "../login-and-register/register/index";

import image from "./Photos/image.jpg";
import image1 from "./Photos/image1.png";
import image2 from "./Photos/image2.png";

function Home() {
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 1000);
  };

  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegistrationModalOpen, setIsRegistrationModalOpen] = useState(false);
  const [isBackgroundBlurred, setIsBackgroundBlurred] = useState(false);

  const showLoginModal = () => {
    setIsLoginModalOpen(true);
    setIsBackgroundBlurred(true); // Apply blur effect to the background
  };

  const showRegistrationModal = () => {
    setIsRegistrationModalOpen(true);
    setIsBackgroundBlurred(true); // Apply blur effect to the background
  };

  const handleLoginOk = () => {
    setIsLoginModalOpen(false);
    setIsBackgroundBlurred(false); // Remove blur effect from the background
  };

  const handleLoginCancel = () => {
    setIsLoginModalOpen(false);
    setIsBackgroundBlurred(false); // Remove blur effect from the background
  };

  const handleRegistrationOk = () => {
    setIsRegistrationModalOpen(false);
    setIsBackgroundBlurred(false); // Remove blur effect from the background
  };

  const handleRegistrationCancel = () => {
    setIsRegistrationModalOpen(false);
    setIsBackgroundBlurred(false); // Remove blur effect from the background
  };

  return (
    <div className={`blur-container ${isBackgroundBlurred ? 'blur-background' : ''}`}>
      <div className="header">
        <h1 className="typing-demo">
          Organize your life with our Time Wise app
        </h1>
        <Button type="default" onClick={showLoginModal}>
          Sign in
        </Button>

        <Button type="default" onClick={showRegistrationModal}>
          Sign up
        </Button>

        {isLoginModalOpen && (
          <div className="modal-container">
            <Modal
              title="Login"
              visible={isLoginModalOpen}
              onOk={handleLoginOk}
              onCancel={handleLoginCancel}
              style={{ width: "100%" }}
              footer={null}
            >
              <Login />
            </Modal>
          </div>
        )}

        {isRegistrationModalOpen && (
          <div className="modal-container">
            <Modal
              title="Registration"
              visible={isRegistrationModalOpen}
              onOk={handleRegistrationOk}
              onCancel={handleRegistrationCancel}
              style={{ width: "100%" }}
              footer={null}
            >
              <Registration />
            </Modal>
          </div>
        )}
      </div>
      <Link
        activeClass="active"
        to="section1"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      ></Link>
      <Link
        activeClass="active"
        to="section2"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      ></Link>
      <Link
        activeClass="active"
        to="section3"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      ></Link>
      <Link
        activeClass="active"
        to="section4"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      ></Link>
      <div id="section1" className="section">
        <div className="row">
          <div className="text">
            <h2>Time Wise: Organize work schedules with ease</h2>
            <p>
              Time Wise is a user-friendly app for organizing work schedules,
              meetings, tasks, and documents efficiently.
            </p>

            <a href="/my-planner" onClick={handleClick}>
              <button
                className={`button ${isClicked ? "bubble" : ""}`}
                onClick={handleClick}
              >
                Start Planning Now
              </button>
            </a>
          </div>
          <div className="images">
            <img src={image} alt="Image" />
          </div>
        </div>
      </div>
      <div
        id="section2"
        className="section"
        style={{ backgroundColor: "lightgray" }}
      >
        <div className="row">
          <div className="images">
            <img src={image1} alt="Image" />
          </div>
          <div className="text">
            <h2>
              Time Wise offers seamless task and document management with
              calendar integration
            </h2>
            <p>
              Stay organized with Time Wise's user-friendly interface, task
              management, and calendar integration for efficient work
              scheduling.
            </p>

            <a href="/documents" onClick={handleClick}>
              <button
                className={`button ${isClicked ? "bubble" : ""}`}
                onClick={handleClick}
              >
                Start organizing now
              </button>
            </a>
          </div>
        </div>
      </div>
      <div
        id="section3"
        className="section"
        style={{ backgroundColor: "white" }}
      >
        <div className="section3_header">
          <div className="text">
            <h2>Efficient task management</h2>
          </div>
        </div>
        <div className="row">
          <div className="text">
            <h2>
              Boost productivity with Time Wise's task management and calendar
              integration.
            </h2>
            <p>
              Time Wise enhances work efficiency with task management and
              calendar integration, ensuring a seamless workflow.
            </p>
            <a href="/documents" onClick={handleClick}>
              <button
                className={`button ${isClicked ? "bubble" : ""}`}
                onClick={handleClick}
              >
                Discover more features
              </button>
            </a>
          </div>
          <div className="images">
            <img src={image2} alt="Image 2" />
          </div>
        </div>
      </div>

      <div
        id="section4"
        className="section"
        style={{ backgroundColor: "lightgray" }}
      >
        <div className="section4_header">
          <div className="text">
            <h2>Organize your goals</h2>
          </div>
        </div>
        <div className="row">
          <div className="text">
            <h2>
              Time Wise offers seamless task and document management with
              calendar integration.
            </h2>
          </div>
          <div className="text">
            <a href="/goal-tracking" onClick={handleClick}>
              <button
                className={`add-goals-button ${isClicked ? "bubble" : ""}`}
                onClick={handleClick}
              >
                Add your goals
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
