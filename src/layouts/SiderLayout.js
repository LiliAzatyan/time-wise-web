import { AppstoreOutlined, RestOutlined, AreaChartOutlined, FileDoneOutlined, AimOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

const items = [
  {
    label: 'My Planner',
    key: 'my-planner',
    icon: <AreaChartOutlined />,
    children: [
      {
        type: 'group',
        children: [
          {
            label: <Link to="/my-planner">Item 1</Link>,
            key: 'my-planner-item-1',
          },
          {
            label: <Link to="/my-planner/">Item 2</Link>,
            key: 'my-planner-item-2',
          },
        ],
      }
    ],
  },
  {
    label: 'Calendar',
    key: 'calendar',
    icon: <AppstoreOutlined />,
    children: [
      {
        type: 'group',
        children: [
          {
            label: <Link to="/calendar/">Option 1</Link>,
            key: 'calendar-option-1',
          },
          {
            label: <Link to="/calendar/">Option 2</Link>,
            key: 'calendar-option-2',
          },
        ],
      }
    ],
  },
  {
    label: 'Documents',
    key: 'documents',
    icon: <FileDoneOutlined />,
    children: [
      {
        type: 'group',
        children: [
          {
            label: <Link to="/documents">Option 1</Link>,
            key: 'documents-option-1',
          },
          {
            label: <Link to="/documents">Option 2</Link>,
            key: 'documents-option-2',
          },
        ],
      }
    ],
  },
  {
    label: 'Goal Tracking',
    key: 'goal-tracking',
    icon: <AimOutlined />,
    children: [
      {
        type: 'group',
        children: [
          {
            label: <Link to="/goal-tracking">Option 1</Link>,
            key: 'goal-tracking-option-1',
          },
          {
            label: <Link to="/goal-tracking">Option 2</Link>,
            key: 'goal-tracking-option-2',
          },
        ],
      }
    ],
  },
  {
    label: 'My Archive',
    key: 'my-archive', 
    icon: <RestOutlined />,
    children: [
      {
        type: 'group',
        children: [
          {
            label: <Link to="/my-archive">Option 1</Link>,
            key: 'my-archive-option-1',
          },
          {
            label: <Link to="/my-archive">Option 2</Link>,
            key: 'my-archive-option-2',
          },
        ],
      }
    ],
  },
];

const App = () => {
  const [current, setCurrent] = useState('my-planner');

  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  return (
    <div>
       <div style={{height: '63px', marginTop: '0px'}}>
         Logo
       </div>
       <div style={{height: '100vh', marginTop: "40px"}}>
      
       <Menu onClick={onClick} selectedKeys={[current]} mode="inline" items={items} />
    
       </div>
     </div>
  );
};

export default App;




