import { useLocation, useNavigate } from "react-router-dom";
import { HOME } from "../constants/path";
import { memo } from "react";
import React from "react";

const ProjectTitle = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div
      onClick={() => (location.pathname !== HOME ? navigate(HOME) : null)}
      style={{
        cursor: "pointer",
      color: "#DE8300",
      }}
    >
      <h1>Personal Planner</h1>
    </div>
  );
};

export default memo(ProjectTitle);
