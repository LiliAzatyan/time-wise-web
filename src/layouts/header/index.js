import { LOGIN, REGISTRATION } from "../../components/constants/path";
import UserName from "../../components/profile";
import { useLocation } from "react-router-dom";
import NavBar from "../../components/NavBar";
import Logo from "../../components/Logo";
import { memo } from "react";
import React from "react";

const Header = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname !== LOGIN && location.pathname !== REGISTRATION && (
        <div
          style={{
            backgroundColor: "#2F291B",
            display: "flex",
          }}
        >
          <Logo />
          <NavBar />
          <UserName />
        </div>
      )}
    </>
  );
};

export default memo(Header);
