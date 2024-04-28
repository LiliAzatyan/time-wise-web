import React, { useState } from 'react';
import { Drawer, Layout, Input, Space, Avatar, Button, Divider } from 'antd';
import { UserOutlined, BulbOutlined, CloudDownloadOutlined, GlobalOutlined, LogoutOutlined } from '@ant-design/icons';

const { Header } = Layout;
const { Search } = Input;

const App = () => {
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false); 

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const onSearch = (value) => {
    console.log(value);
  };

  const handleInstallApp = () => {
    console.log('Install app');
  };

  const handleSwitchAccount = () => {
    console.log('Switch account');
  };

  const handleLogout = () => {
    console.log('Logout');
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    
  };

  return (
    <div className={darkMode ? 'dark-mode' : ''}> {/* Apply dark mode class */}
      <Header style={{ backgroundColor: '#6BC6C4', padding: '0 24px', display: 'flex', alignItems: 'center', borderBottom: "solid 1px", borderColor: '#6BC6C4' }}>
        <Space style={{ flexGrow: 1, marginTop: 30 }}>
          <Search placeholder="Search..." onSearch={onSearch} style={{ width: 200 }} />
        </Space>
        <Avatar size="large" icon={<UserOutlined />} style={{ marginLeft: 'auto', cursor: 'pointer' }} onClick={showDrawer} />
      </Header>
      <Drawer title="" onClose={onClose} visible={open}>
        <div style={{ position: 'relative', height: '100%' }}>
          <div style={{ textAlign: 'center', marginTop: '16px', marginLeft: "50px" }}>
            <Avatar size={64} icon={<UserOutlined />} />
            <div style={{ marginTop: '8px', fontSize: '16px', fontWeight: 'bold' }}>Your Account</div>
          </div>
          <Divider style={{ margin: '16px 0' }} />
          <div>
            <div style={{ marginTop: "20px" }}>
              <Button icon={<BulbOutlined />} style={{ background: 'none', border: 'none' }} onClick={toggleDarkMode}>
                {darkMode ? 'Light Mode' : 'Dark Mode'}
              </Button>
            </div>
            <div style={{ marginTop: "20px" }}>
              <Button icon={<GlobalOutlined />} style={{ background: 'none', border: 'none' }}>Language</Button>
            </div>
            <div style={{ marginTop: "20px" }}>
              <Button icon={<CloudDownloadOutlined />} style={{ background: 'none', border: 'none' }} onClick={handleInstallApp}>Install App</Button>
            </div>
          </div>
          <Divider style={{ margin: '16px 0' }} />
          <div style={{ position: 'absolute', bottom: '16px', left: '16px', right: '16px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Button type="link" onClick={handleSwitchAccount}>Switch Account</Button>
              <Button type="link" onClick={handleLogout} icon={<LogoutOutlined />}>Logout</Button>
            </div>
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default App;



























































































































































































