import React from "react";
import { useStyle } from "./LeftSide.styles";
import Logo from "../Logo";
import NavBar from "../NavBar/NavBar";
import UserName from "../profile/UserName";

const LeftSide = () => {
  const classes = useStyle();

  return (
    <>
        <div className={classes.header}>
          <Logo />
          <NavBar />
        </div>
    </>
  );
};

export default LeftSide;
