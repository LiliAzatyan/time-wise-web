import { Link } from "react-scroll";
import React from "react";
import "./home.css";
import Lottie from "lottie-react";
import animationHeading from "../../animations/heading-animation.json";
import plannerAnimation from "../../animations/planner-animation.json";
import goalAnimation from "../../animations/goal-animation.json";
import notesAnimation from "../../animations/notes-animation.json";

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
          <div className="background-image-header">
            {/* <img src="Hedaer__bg.png" alt="Background" className="background-image-header"/> */}
            <Lottie animationData={animationHeading} />
          </div>
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
            My Planner page is designed to help you structure your days, weeks,
            and months with ease. Whether you're juggling personal tasks or
            professional deadlines, My Planner offers intuitive features to:{" "}
            <br />
            <ul style={{ marginLeft: "50px" }}>
              <li>
                Organize Your Tasks: Easily list and categorize your tasks to
                see what needs to be done at a glance.
              </li>
              <li>
                Set Priorities: Highlight important tasks to ensure you focus on
                what matters most.
              </li>
              <li>
                Track Progress: Monitor your progress and stay motivated as you
                complete your tasks.
              </li>
              <li>
                Stay Flexible: Adjust your plans as needed to accommodate
                changes and new priorities.
              </li>
            </ul>
            With My Planner, you'll stay productive, balanced, and in control of
            your schedule. Plan your time effectively, reduce stress, and
            achieve your goals with confidence. Your time, your plan, your
            success.
          </p>
        </div>
        <div className="images">
          {/* <img src="image1.png" alt="my planner" width="500px"/> */}
          <Lottie animationData={plannerAnimation} />
        </div>
      </div>
      <div
        className="section3_header section"
        style={{ backgroundColor: "rgba(123, 214, 212, 0.15)" }}
      >
        <div className="goal-animation">
          {/* <img src="image2.png" alt="aa" /> */}
          <Lottie animationData={goalAnimation} />
        </div>

        <div className="text">
          <h2 className="common-heading">My Goals</h2>
          <p className="common-text">
            My Goals page empowers you to set, track, and achieve your
            aspirations with precision. Here, you can:
            <ul style={{ marginLeft: "50px" }}>
              <li>
                Set Meaningful Goals: Define your ambitions clearly and
                concisely, ensuring they resonate with your values and desires.
              </li>
              <li>
                Break Down Goals: Deconstruct larger objectives into manageable
                tasks, making them less daunting and more achievable.
              </li>
              <li>
                Monitor Progress: Keep tabs on your journey towards each goal,
                celebrating milestones and staying motivated along the way.
              </li>
              <li>
                Stay Accountable: Hold yourself accountable by regularly
                reviewing your progress and adjusting your strategies as needed.
              </li>
            </ul>
            With My Goals, you have the tools and support you need to turn your
            dreams into reality. Whether it's advancing your career, cultivating
            new skills, or enhancing your well-being, this page is your compass
            for success. Your goals, your journey, your triumphs.
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
            My Notes page, your versatile digital companion for capturing
            thoughts, ideas, and reminders on the fly. Tailored for convenience
            and efficiency, this platform allows you to categorize your notes
            effortlessly into distinct sections such as Work, Life, and Study.
            Whether you're brainstorming project ideas, jotting down personal
            reflections, or keeping track of study notes, My Notes offers a
            seamless and organized solution. With easy access anytime, anywhere,
            and customizable features like tags and labels, you can streamline
            your note-taking process and stay productive throughout your day.
            Your thoughts, your categories, your convenience - all in one place
            with My Notes.
          </p>
        </div>
        <div className="images">
          {/* <img src="image3.png" alt="My goals" /> */}
          <Lottie animationData={notesAnimation} />
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
