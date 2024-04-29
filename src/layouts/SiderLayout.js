import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppstoreOutlined, RestOutlined, AreaChartOutlined, FileDoneOutlined, AimOutlined } from '@ant-design/icons';

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
    label: 'Documents',
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

  const onClick = (key) => {
    console.log('click ', key);
    setCurrent(key);
  };
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 1000);
  };
  return (
    <div style={{backgroundColor: "#FCFCFC"}}>
      <div style={{height: '63px', marginTop: '0px', backgroundColor: "#7BD6D4"}}>
       <a href="/calendar" onClick={handleClick}>
              <button 
                className={`button ${isClicked ? "true" : "false"}`}
                onClick={handleClick}
              >
                <img src="./TimeWise2.png" alt="Logo" width="100%"/>
              </button>
      </a>
      
      </div>
      <div style={{height: '100vh', marginTop: "40px"}}>
        {items.map(item => (
          <div key={item.key} style={{ marginBottom: '10px' }}>
            <Link to={item.link} style={{ textDecoration: 'none' }}>
              <button 
                onClick={() => onClick(item.key)}
                style={{ padding: '10px 20px', fontSize: '16px', backgroundColor: current === item.key ? '#7BD6D4' : '#fff', color: current === item.key ? '#fff' : '#000', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
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


