import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  AppstoreOutlined,
  RestOutlined,
  AreaChartOutlined,
  FileDoneOutlined,
  AimOutlined,
} from "@ant-design/icons";

const items = [
  {
    // label: "My Planner",
    key: "My Planner",
    icon: <AreaChartOutlined />,
    link: "/my-planner",
  },
  {
    // label: "Calendar",
    key: "Calendar",
    icon: <AppstoreOutlined />,
    link: "/calendar",
  },

  {
    // label: "My Notes",
    key: "Notes",
    icon: <FileDoneOutlined />,
    link: "/notes",
  },
  {
    // label: "Goal Tracking",
    key: "Goal Tracking",
    icon: <AimOutlined />,
    link: "/goal-tracking",
  },
  // {
  //   // label: "My Archive",
  //   key: "my-archive",
  //   icon: <RestOutlined />,
  //   link: "/my-archive",
  // },
];

const App = () => {
  const [current, setCurrent] = useState("my-planner");
  const location = useLocation();
  const [hoveredItem, setHoveredItem] = useState(null);

  useEffect(() => {
    const path = location.pathname;
    const key = items.find((item) => item.link === path)?.key;

    if (key) {
      setCurrent(key);
    }
  }, [location]);

  const handleMouseEnter = (key) => {
    setHoveredItem(key);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  return (
    <div style={{ backgroundColor: "#FFFFFF", border: "1px #F7F7F7 solid" }}>
      <div style={{ height: "64px", marginTop: "-1px", marginRight: "-1px", backgroundColor: "#7BD6D4" }}>
        <img src="./TimeWise2.png" alt="Logo" width="70%" style={{ marginTop: "13px", marginLeft: "8px" }} />
      </div>
      <div style={{ height: "100vh", marginTop: "40px" }}>
        {items.map((item) => (
          <div key={item.key} style={{ marginBottom: "10px" }}>
            <Link to={item.link} style={{ textDecoration: "none" }}>
              <button
                onClick={() => setCurrent(item.key)}
                onMouseEnter={() => handleMouseEnter(item.key)}
                onMouseLeave={handleMouseLeave}
                style={{
                  marginTop: "30px",
                  position: "relative",
                  width: "100%",
                  padding: "10px 20px",
                  fontSize: "21px",
                  color: current === item.key ? "#7BD6D4" : "#000",
                  backgroundColor: "#fff",
                  border: "none",
                  borderRight:
                    current === item.key
                      ? "solid 5px #7BD6D4"
                      : "solid 0px #fff",
                  cursor: "pointer",
                }}
              >
                {item.icon}
                <span style={{ marginLeft: "8px" }}>{item.label}</span>
                {hoveredItem === item.key && (
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: "50%",
                      marginLeft: "10px", // Added margin for spacing
                      backgroundColor: "#fff",
                      padding: "5px",
                      border: "1px solid #ccc",
                      borderRadius: "5px",
                      zIndex: "999",
                    }}
                  >
                    {item.key}
                  </div>
                )}
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
