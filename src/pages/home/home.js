import { Link } from "react-scroll";
import React from "react";
import "./home.css";
import Lottie from "lottie-react";
import animationHeading from "../../animations/heading-animation.json";
import plannerAnimation from "../../animations/planner-animation.json";
import goalAnimation from "../../animations/goal-animation.json";
import notesAnimation from "../../animations/notes-animation.json";
import goalIcon from "../../homeicons/goal-icon.png";
import reminderIcon from "../../homeicons/reminder-icon.png";
import noteIcon from "../../homeicons/note-icon.png";
import taskManagementIcon from "../../homeicons/task-management-icon.png";
import flexibleIcon from "../../homeicons/flexible-icon.png";
import orginizeIcon from "../../homeicons/orginize-icon.png";
import truckIcon from "../../homeicons/truck-icon.png";
import priorityIcon from "../../homeicons/priority-icon.png";

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

      {/* header */}
      <div className="header">
        <img src="text.png" alt="TimeWise Logo" style={{ maxWidth: "100%" }} />
        <div style={{ marginLeft: "1000px" }}>
          <a href="/signin">
            <button className="sign-in">Sign In</button>
          </a>
          <a href="/signup">
            <button className="sign-up">Sign Up</button>
          </a>
        </div>
      </div>

      {/* container-1 */}
      <div className="container-1">
        <div>
          {/* big logo */}
          <div className="logo-container">
            <h1 style={{ fontSize: "48px" }}>Welcome to</h1>
            <img src="text.png" alt="TimeWise Logo" />
          </div>
          <p
            style={{ fontSize: "28px", marginTop: "-24px", marginLeft: "45px" }}
          >
            Where Organization Meets Inspiration.
          </p>
          {/* sections */}
          <div style={{ padding: "40px" }}>
            {/* left div */}
            <div style={{ display: "flex", gap: "200px" }}>
              <div style={{ flecDirection: "column" }}>
                {/* first div  */}
                <div>
                  <div style={{ display: "flex", gap: "15px" }}>
                    <p style={{ fontSize: "36px", marginTop: "5px" }}>
                      Goal Setting
                    </p>
                    <img src={goalIcon} alt="goal image" />
                  </div>
                  <p style={{ fontSize: "23px" }}>
                    Setting short-term and long-term <br /> goals, with the
                    ability to track <br /> progress and set milestones.
                  </p>
                </div>
                {/* second div  */}
                <div>
                  <div style={{ display: "flex", gap: "15px" }}>
                    <p style={{ fontSize: "36px", marginTop: "5px" }}>
                      Reminders
                    </p>
                    <img src={reminderIcon} alt="reminder image" />
                  </div>
                  <p style={{ fontSize: "23px" }}>
                    Setting reminders for important tasks, events, <br /> or
                    deadlines, and receiving notifications to stay <br /> on
                    track
                  </p>
                </div>
              </div>
              {/* third div */}
              <div style={{ flecDirection: "column" }}>
                <div>
                  <div style={{ display: "flex", gap: "15px" }}>
                    <p style={{ fontSize: "36px", marginTop: "5px" }}>
                      Note-taking
                    </p>
                    <img src={noteIcon} alt="note image" />
                  </div>
                  <p style={{ fontSize: "23px" }}>
                    Capturing thoughts, ideas, and additional <br /> information
                    related to tasks or events.
                  </p>
                </div>
                {/* fourth div */}
                <div>
                  <div style={{ display: "flex", gap: "15px" }}>
                    <p style={{ fontSize: "34px", marginTop: "5px" }}>
                      Task Management
                    </p>
                    <img src={taskManagementIcon} alt="taskManagement image" />
                  </div>
                  <p style={{ fontSize: "23px", marginTop: "5px" }}>
                    Creating, organizing, and prioritizing <br /> tasks or to-do
                    lists.
                  </p>
                </div>
              </div>
            </div>
            {/* right div */}
          </div>
        </div>
        <div>
          <Lottie
            animationData={plannerAnimation}
            style={{ width: "700px", height: "600px" }}
          />
        </div>
      </div>
      {/* section 2 */}
      <div
        style={{
          background: "#BCD0D2",

          padding: "30px 0",
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            backgroundColor: "white",
            boxShadow: "0px 4px 30px rgba(0, 0, 0, 0.1)",
            borderRadius: "30px",
            padding: "40px",
            maxWidth: "1500px",
            width: "90%",
            margin: "0 20px",
          }}
        >
          <h2
            style={{
              fontSize: "50px",
              color: "#2C889C",
              padding: "20px",
            }}
          >
            My Goals
          </h2>
          <p style={{ fontSize: "23px", padding: "20px", marginTop: "-13px" }}>
            My Goals page empowers you to set, track, and achieve your
            aspirations with precision. Here, you can: <br />
            With My Goals, you have the tools and support you need to turn your
            dreams into reality. <br /> Whether it's advancing your career,
            cultivating new skills, or enhancing your well-being, <br /> this
            page is your compass for success. Your goals, your journey, your
            triumphs.
          </p>
          <div style={{ display: "flex" }}>
            <div style={{ justifyContent: "column" }}>
              <div>
                <h2
                  style={{
                    fontSize: "30px",
                    color: "#2C889C",
                    padding: "20px",
                  }}
                >
                  Set Meaningful Goals
                </h2>
                <p
                  style={{
                    fontSize: "23px",
                    padding: "20px",
                    marginTop: "-23px",
                  }}
                >
                  Define your ambitions clearly and concisely, ensuring they
                  resonate with your values and desires.
                </p>
              </div>
              <div>
                <h2
                  style={{
                    fontSize: "30px",
                    color: "#2C889C",
                    padding: "20px",
                  }}
                >
                  Break Down Goals
                </h2>
                <p
                  style={{
                    fontSize: "23px",
                    padding: "20px",
                    marginTop: "-23px",
                  }}
                >
                  Deconstruct larger objectives into manageable tasks, making
                  them less daunting and more achievable.
                </p>
              </div>
              <div>
                <h2
                  style={{
                    fontSize: "30px",
                    color: "#2C889C",
                    padding: "20px",
                  }}
                >
                  Monitor Progress
                </h2>
                <p
                  style={{
                    fontSize: "23px",
                    padding: "20px",
                    marginTop: "-23px",
                  }}
                >
                  Keep tabs on your journey towards each goal, celebrating
                  milestones and staying motivated along the way
                </p>
              </div>
              <div>
                <h2
                  style={{
                    fontSize: "30px",
                    color: "#2C889C",
                    padding: "20px",
                  }}
                >
                  Stay Accountable{" "}
                </h2>
                <p
                  style={{
                    fontSize: "23px",
                    padding: "20px",
                    marginTop: "-23px",
                  }}
                >
                  Hold yourself accountable by regularly reviewing your progress
                  and adjusting your strategies as needed.
                </p>
              </div>
            </div>
            <div>
              <Lottie
                animationData={goalAnimation}
                style={{ marginTop: "-50px" }}
              />
            </div>
          </div>
        </div>
      </div>
      {/* section 3 */}
      <div>
        <h2 style={{ padding: "20px", fontSize: "38px", color: "#2C889C" }}>
          My Planner
        </h2>
        <p style={{ padding: "20px", fontSize: "22px", marginTop: "-30x" }}>
          My Planner page is designed to help you structure your days, weeks,
          and months with ease. Whether you're juggling personal tasks or
          professional deadlines, <br /> My Planner offers intuitive features
          to:
        </p>
        <div style={{ display: "flex", marginLeft: "50px" }}>
          <div style={{ padding: "20px" }}>
            <div style={{ display: "flex" }}>
              <div>
                <img src={orginizeIcon} alt="" />
              </div>
              <div>
                <p style={{ fontSize: "30px" }}>Organize Your Tasks</p>
                <p style={{ fontSize: "26px" }}>
                  Easily list and categorize your tasks to <br /> see what needs
                  to be done at a glance
                </p>
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <div>
                <img src={truckIcon} alt="" />
              </div>
              <div>
                <p style={{ fontSize: "30px" }}>Track Progress</p>
                <p style={{ fontSize: "26px" }}>
                  Monitor your progress and stay <br />
                  motivated as you complete your tasks.
                </p>
              </div>
            </div>
          </div>
          <div style={{ padding: "20px", marginLeft: "300px" }}>
            <div style={{ display: "flex" }}>
              <div>
                <img src={priorityIcon} alt="" />
              </div>
              <div>
                <p style={{ fontSize: "30px" }}>Set Priorities</p>
                <p style={{ fontSize: "26px" }}>
                  Highlight important tasks to ensure you <br /> focus on what
                  matters most.
                </p>
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <div>
                <img src={flexibleIcon} alt="" />
              </div>
              <div>
                <p style={{ fontSize: "30px" }}>Stay Flexible</p>
                <p style={{ fontSize: "26px" }}>
                  Adjust your plans as needed to accommodate <br /> changes and
                  new priorities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* section for notes */}
      <div style={{display: "flex", backgroundColor: "#BCD0D2"}}>
        <div>
          <Lottie  style={{width: "400px"}} animationData={notesAnimation}/>
        </div>
        <div style={{margin: "40px"}}>
        <p style={{fontSize: "38px"}}>My Notes</p>
        <p style={{fontSize: "25px", margin: "20px", fontFamily: "Inter"}}>
          My Notes page, your versatile digital companion for capturing
          thoughts, ideas, and reminders on the fly. Tailored for convenience
          and efficiency, this platform allows you to categorize your notes
          effortlessly into distinct sections such as Work, Life, and Study.
          Whether you're brainstorming project ideas, jotting down personal
          reflections, or keeping track of study notes, My Notes offers a
          seamless and organized solution. With easy access anytime, anywhere,
          and customizable features like tags and labels, you can streamline
          your note-taking process and stay productive throughout your day. Your
          thoughts, your categories, your convenience - all in one place with My
          Notes.
        </p>
        </div>
      </div>
      {/* section last */}
      <div style={{ backgroundColor: "black", justifyContent: "column" }}>
        <div>
          <img src="text.png" alt="TimeWise Logo" style={{ padding: "30px" }} />
        </div>
        <hr />

        <div>
          <div style={{ display: "flex", gap: "200px", padding: "18px" }}>
            <div
              style={{
                justifyContent: "column",
                color: "white",
                fontSize: "26px",
              }}
            >
              <p style={{ color: "#2C889C", fontSize: "38px" }}>My Planner</p>
              <div style={{ padding: "10px" }}>
                <p>Organize Your Tasks</p>
                <p>Set Priorities</p>
                <p>Track Progress</p>
                <p>Stay Flexible</p>
              </div>
            </div>
            <div
              style={{
                justifyContent: "column",
                color: "white",
                fontSize: "26px",
              }}
            >
              <p style={{ color: "#2C889C", fontSize: "38px" }}>My Goals</p>
              <div style={{ padding: "10px" }}>
                <p>Set Meaningful Goals</p>
                <p>Break Down Goals</p>
                <p>Monitor Progress</p>
                <p>Stay Accountable</p>
              </div>
            </div>
            <div
              style={{
                justifyContent: "column",
                color: "white",
                fontSize: "26px",
              }}
            >
              <p style={{ color: "#2C889C", fontSize: "38px" }}>Notes</p>
              <div style={{ padding: "10px" }}>
                <p>Only Notes</p>
                <p>Notes for work</p>
                <p>Notes for life</p>
                <p>Notes for Education</p>
              </div>
            </div>
            <div
              style={{
                justifyContent: "column",
                color: "white",
                fontSize: "26px",
              }}
            >
              <p style={{ color: "#2C889C", fontSize: "38px" }}>Calendar</p>
              <div style={{ padding: "10px" }}>
                <p>Be consistent</p>
                <p>Follow the calendar</p>
                <p>Mark the days</p>
                <p>Organize life precisely</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
