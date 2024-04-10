import React from 'react';
import { AppstoreOutlined, RestOutlined, AreaChartOutlined, FileDoneOutlined, AimOutlined } from '@ant-design/icons';
import { Menu } from 'antd';

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items = [
  getItem('My Planner', 'sub1', <AreaChartOutlined />, [
    getItem('Item 1', 'g1', null, [getItem('Option 1', '1'), getItem('Option 2', '2')], 'group'),
    getItem('Item 2', 'g2', null, [getItem('Option 3', '3'), getItem('Option 4', '4')], 'group'),
  ]),
  {
    type: 'divider',
  },
  getItem('Calendar', 'sub2', <AppstoreOutlined />, [
    getItem('Option 5', '5'),
    getItem('Option 6', '6'),
    getItem('Submenu', 'sub3', null, [getItem('Option 7', '7'), getItem('Option 8', '8')]),
  ]),
  {
    type: 'divider',
  },
  getItem('Documents', 'sub4', <FileDoneOutlined />, [
    getItem('Option 9', '9'),
    getItem('Option 10', '10'),
    getItem('Option 11', '11'),
    getItem('Option 12', '12'),
  ]),
  // Add more menus here
  getItem('Goal Tracker', 'sub5', <AimOutlined />, [
    getItem('Option 13', '13'),
    getItem('Option 14', '14'),
  ]),
  {
    type: 'divider',
  },
  getItem('My archive', 'sub6', <RestOutlined />, [
    getItem('Option 15', '15'),
    getItem('Option 16', '16'),
  ]),
];

const App = () => {
  const onClick = (e) => {
    console.log('click ', e);
  };

  return (
    <div>
      <div style={{height: '63px', marginTop: '0px'}}>
        Logo
      </div>
      <div style={{height: '100vh',borderRight: 'solid 0.5px', borderColor:"#999"}}>
        
    <Menu
      onClick={onClick}
      style={{
        width: '100%',
      }}
      defaultSelectedKeys={['1']}
      // defaultOpenKeys={['sub1']}
      mode="inline"
      items={items}
      />
      </div>
    </div>
  );
};

export default App;
