import { LOGIN, REGISTRATION } from "../../components/constants/path";
import UserName from "../../components/profile/UserName";
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
            backgroundColor: "blue",
          }}
        >
          <UserName/>
        </div>
      )}
    </>
  );
};

export default memo(Header);
