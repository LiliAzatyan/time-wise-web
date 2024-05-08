import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  AppstoreOutlined,
  RestOutlined,
  AreaChartOutlined,
  FileDoneOutlined,
  AimOutlined,
} from "@ant-design/icons";

const items = [
  {
    label: 'My Planner',
    key: 'my-planner',
    icon: <AreaChartOutlined />,
    link: '/my-planner',
  },
  {
    label: 'Calendar',
    key: 'calendar',
    icon: <AppstoreOutlined />,
    link: '/calendar',
  },

  {
    label: 'My Notes',
    key: 'documents',
    icon: <FileDoneOutlined />,
    link: '/documents',
  },
  {
    label: 'Goal Tracking',
    key: 'goal-tracking',
    icon: <AimOutlined />,
    link: '/goal-tracking',
  },
  {
    label: 'My Archive',
    key: 'my-archive',
    icon: <RestOutlined />,
    link: '/my-archive',
  },
];

const App = () => {
  const [current, setCurrent] = useState('my-planner');
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    const key = items.find(item => item.link === path)?.key;

    if (key) {
      setCurrent(key);
    }
  }, [location]);

  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 1000);
  };

  return (
    <div style={{backgroundColor: "#FFFFFF" }}>
      <div style={{height: '64px', marginTop: '0px', backgroundColor: "#7BD6D4"}}>
         
        {/* <a href="/home" onClick={handleClick}> */}
          {/* <button 
            className={`button ${isClicked ? "true" : "false"}`}
            onClick={handleClick}
          > */}
            <img src="./TimeWise2.png" alt="Logo" width="70%" style={{marginTop: "13px", marginLeft: "8px"}}/>
          {/* </button> */}
        {/* </a> */}
      
      </div>
      <div style={{height: '100vh', marginTop: "40px"}}>
        {items.map(item => (
          <div key={item.key} style={{ marginBottom: '10px' }}>
            <Link to={item.link} style={{ textDecoration: 'none' }}>
              <button
                onClick={() => setCurrent(item.key)}
                style={{ marginTop: "15px", width: "100%", padding: '10px 20px', fontSize: '21px', color: current === item.key ? '#7BD6D4' : '#000', backgroundColor: "#fff",border: "none", borderRight: current === item.key ? 'solid 5px #7BD6D4' : "solid 0px #fff", cursor: 'pointer' }}
              >
                {item.icon}
                <span style={{ marginLeft: '8px' }}>{item.label}</span>
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
