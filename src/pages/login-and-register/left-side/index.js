import picture_1 from "./picture/picture_1.png";
import picture_2 from "./picture/picture_2.png";
import picture_3 from "./picture/picture_3.png";
import picture_4 from "./picture/picture_4.png";
import picture_5 from "./picture/picture_5.png";
import picture_6 from "./picture/picture_6.png";
import picture_7 from "./picture/picture_7.png";
import picture_8 from "./picture/picture_8.png";
import PropTypes from "prop-types";
import { memo } from "react";
import React from "react";

const LeftSide = (props) => {
    const{loginStyle}=props;

    return (
        <div className={loginStyle.left}>
        <div className={loginStyle.heading}>
          <h1 className={loginStyle}>
            <span className={loginStyle.colorOrange}>Personal Planner</span> for
            Organizing <br />
            Work & Private Stuff
          </h1>
        </div>
        <div className={loginStyle.topPictureGroup}>
          <img className={loginStyle.img1} src={picture_1} alt="groups img" />
          <img className={loginStyle.img2} src={picture_2} alt="groups img" />
          <img className={loginStyle.img3} src={picture_3} alt="groups img" />
          <img className={loginStyle.img4} src={picture_4} alt="groups img" />
          <img className={loginStyle.img5} src={picture_5} alt="groups img" />
          <img className={loginStyle.img6} src={picture_6} alt="groups img" />
        </div>
        <div>
          <div className={loginStyle.center}>
          <h2 className={loginStyle.colorOrange}>Get productive</h2>
          <h2 className={loginStyle.colorWhite}>Do more in less time</h2>
          </div>
       <div className={loginStyle.one}>

          {/* <h3 className={loginStyle.colorWhite}>Here's an introduction to key features and benefits:</h3> */}
          <p className={loginStyle.text}>
              Here's an introduction to key features and benefits:
              Calendar Integration: Digital planners often integrate
              with calendar applications, allowing users to sync events 
              and appointments seamlessly.
              Task Management: Users can create, organize, and 
              prioritize tasks with ease. Some platforms offer features
              like due dates, reminders, and task categorization.
              Note-taking and Documentation: Digital planners usually 
              include note-taking capabilities, enabling users to jot 
              down ideas, thoughts, or important information.
          </p>
          <img className={loginStyle.img7} src={picture_7} alt="groups img" />
        </div>
        <div className={loginStyle.one}>
          {/* <h3 className={loginStyle.colorWhite}>Here's an introduction to key features and benefits:</h3> */}
          <p className={loginStyle.text2}>
             Here's an introduction to key features and benefits:
              Calendar Integration: Digital planners often integrate
              with calendar applications, allowing users to sync events 
              and appointments seamlessly.
              Task Management: Users can create, organize, and 
              prioritize tasks with ease. Some platforms offer features
              like due dates, reminders, and task categorization.
              Note-taking and Documentation: Digital planners usually 
              include note-taking capabilities, enabling users to jot 
              down ideas, thoughts, or important information.
          </p>
          <img className={loginStyle.img8} src={picture_8} alt="groups img" />
        </div>
        </div>
      </div> 
    )
};

LeftSide.propTypes = {
    loginStyle: PropTypes.object
};
export default memo(LeftSide);