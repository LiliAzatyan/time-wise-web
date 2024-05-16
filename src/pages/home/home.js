import { Link } from "react-scroll";
import React from "react";
import "./home.css";

function Home() {
  return (
    <div>
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
      <Link
        activeClass="active"
        to="section5"
        spy={true}
        smooth={true}
        offset={-70}
        duration={200}
      ></Link>

      <div id="section1">
        <div className="header">
          <div className="logo">
            {/* <img src="Home_Logo.png" alt="Logo"/> */}
            <img
              src="text.png"
              alt="TimeWise Logo"
              style={{ maxWidth: "100%" }}
            />
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
          <div className="text" style={{ marginLeft: "90px" }}>
            <div className="logo-container">
              <h1 style={{ fontSize: "48px" }}>Welcome to</h1>
              <img
                src="text.png"
                alt="TimeWise Logo"
                style={{ maxWidth: "100%" }}
              />
            </div>
            <p style={{ fontSize: "24px", color: "black", marginTop: "10px" }}>
              Where organization meets inspiration.
            </p>
            <p className="common-text">
              Time Wise is a time management system that helps you create a
              framework where you are aware of your tasks for the day or even
              the whole week. That means you don't spend time thinking about
              what to work on and what to skip on any particular workday.
            </p>
            <div className={"social_but"}>
              <button
                className="try_free"
                style={{
                  width: "150px",
                  height: "50px",
                  fontSize: "18px",
                  padding: "10px 20px",
                }}
              >
                Try Free
              </button>
              <button
                className="get_app"
                style={{
                  width: "150px",
                  height: "50px",
                  fontSize: "18px",
                  padding: "10px 20px",
                }}
              >
                Get App
              </button>
            </div>
          </div>
          {/* <div className="background-image"> */}
            <img src="Hedaer__bg.png" alt="Background" className="background-image-header"/>
          {/* </div> */}
        </div>
      </div>

      <div
        id="section2"
        className="section"
        style={{ backgroundColor: "rgba(123, 214, 212, 0.15)" }}
      >
        <div className="text">
          <h2 className="common-heading">My Planner</h2>
          <p className="common-text">
            A my planner helps you organize your day with sections for date and
            time, task lists, prioritization, notes, and sometimes goal setting
            and reflection. It's portable and keeps you focused and productive
            by outlining your schedule and priorities.
          </p>
        </div>
        <div className="images">
          <img src="image1.png" alt="my planner" width="500px"/>
        </div>
      </div>
      <div
        className="section3_header section"
        style={{ backgroundColor: "rgba(123, 214, 212, 0.15)" }}
      >
        <div className="image">
          <img src="image2.png" alt="aa" />
        </div>

        <div className="text">
          <h2 className="common-heading">My Goals</h2>
          <p className="common-text">
            Your Goals Web Page: Your digital roadmap for growth. Set SMART
            goals - Specific, Measurable, Achievable, Relevant, Time-bound. Keep
            track, stay aligned, and adjust as needed. Your journey, your pace,
            your success.
          </p>
        </div>
      </div>

      <div
        id="section4"
        className="section"
        style={{ backgroundColor: "rgba(123, 214, 212, 0.15)" }}
      >
        <div className="text">
          <h2 className="common-heading">My Notes</h2>
          <p className="common-text">
            Your Notes Web Page: Your digital notebook for capturing thoughts,
            ideas, and insights. Organize, reflect, and ideate freely. Your
            space to jot, brainstorm, and remember. Your thoughts, your
            creativity, all in one place.
          </p>
        </div>
        <div className="images">
          <img src="image3.png" alt="My goals" />
        </div>
      </div>
      <div
        id="section5"
        className="section section5"
        style={{ textAlign: "center", backgroundColor: "#fff" }}
      >
        <p className="animated-marker">
          "TimeWise makes it easy to go as simple or as complex as you want"
        </p>
      </div>
    </div>
  );
}

export default Home;