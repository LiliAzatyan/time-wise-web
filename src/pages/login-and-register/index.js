// import { Form } from "antd";
import { memo, useState } from "react";
import LeftSide from "./left-side";
import Register from "./register";
import useStyles from "./style";
import Login from "./login";
import React from "react";



const LoginAndRegister = () => {
  const loginStyle = useStyles();

  const [showLogin,setShowLogin] = useState(true);

  return (
    <div className={loginStyle.container}>
      <LeftSide loginStyle={loginStyle}/>
      <div className={loginStyle.right}>
        <p className={loginStyle.title}>Personal Planner</p>
        {showLogin ? <Login setShowLogin={setShowLogin}/> : <Register setShowLogin={setShowLogin}/> }
      </div>
    </div>
  );
};

export default memo(LoginAndRegister);

