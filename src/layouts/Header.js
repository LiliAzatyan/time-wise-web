import React from 'react';
import { Layout, Input, Space, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const { Header } = Layout;
const { Search } = Input;

const HeaderLayout = () => {
  const onSearch = (value) => {
    console.log(value); 
  };

  return (
    <Header style={{ backgroundColor: '#fff', padding: '0 24px', display: 'flex', alignItems: 'center', borderBottom: "solid 1px",borderColor: '#999' }}>
      

      <Space style={{ flexGrow: 1, marginTop: 30 }}>
        <Search placeholder="Search..." onSearch={onSearch} style={{ width: 200 }} />
      </Space>
      <Avatar size="large" icon={<UserOutlined />} style={{ marginLeft: 'auto' }} />
    </Header>
  );
};

export default HeaderLayout;
