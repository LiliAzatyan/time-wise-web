import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginRegister from "./pages/login-and-register/index"
import GoalTracking from './pages/goal-tracking/GoalTracking';
import MyPlanner from './pages/my-planner/MyPlanner'; 
import MyArchive from './pages/my-archive/MyArchive';
import Documents from './pages/documents/Documents';
import Calendar from './pages/calendar/Calendar';
import SiderLayout from './layouts/SiderLayout';
import HeaderLayout from './layouts/Header';
import Home from './pages/home/home.js';
import { Layout, Flex } from 'antd';
import React from 'react';

const { Header, Sider, Content } = Layout;
const headerStyle = {
  textAlign: 'center',
  color: '#fff',
  paddingInline: 48,
  lineHeight: '64px',
  backgroundColor: '#6BC6C4',
  borderBottom: 'solid 1px',
  borderColor: '#999'
};
const contentStyle = {
  textAlign: 'center',
  color: '#000',
  backgroundColor: '#FFFFFF',
};
const siderStyle = {
  textAlign: 'center',
  color: '#000',
  backgroundColor: '#ffffff',
};

const layoutStyle = {
  borderRadius: 8,
  overflow: 'hidden',
  width: '100%',
  height: '100vh',
};
const App = () => (
  <div style={{padding: "0px", margin: "0px"}}>
  <Flex gap="middle" wrap="wrap">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginRegister />} />
        <Route path="/home" element={<Home />} />
        <Route path="/my-planner" element={<Layout style={layoutStyle}>
          <Sider width="25%" style={siderStyle}>
            <SiderLayout />
          </Sider>
          <Layout>
            <Header style={headerStyle}>
              <HeaderLayout />
            </Header>
            <Content style={contentStyle}>
              <MyPlanner />
            </Content>
          </Layout>
        </Layout>} />
        <Route path="/calendar" element={<Layout style={layoutStyle}>
          <Sider width="25%" style={siderStyle}>
            <SiderLayout />
          </Sider>
          <Layout>
            <Header style={headerStyle}>
              <HeaderLayout />
            </Header>
            <Content style={contentStyle}>
              <Calendar />
            </Content>
          </Layout>
        </Layout>} />
        <Route path="/documents" element={<Layout style={layoutStyle}>
          <Sider width="25%" style={siderStyle}>
            <SiderLayout />
          </Sider>
          <Layout>
            <Header style={headerStyle}>
              <HeaderLayout />
            </Header>
            <Content style={contentStyle}>
              <Documents />
            </Content>
          </Layout>
        </Layout>} />
        <Route path="/goal-tracking" element={<Layout style={layoutStyle}>
          <Sider width="25%" style={siderStyle}>
            <SiderLayout />
          </Sider>
          <Layout>
            <Header style={headerStyle}>
              <HeaderLayout />
            </Header>
            <Content style={contentStyle}>
              <GoalTracking />
            </Content>
          </Layout>
        </Layout>} />
        <Route path="/my-archive" element={<Layout style={layoutStyle}>
          <Sider width="25%" style={siderStyle}>
            <SiderLayout />
          </Sider>
          <Layout>
            <Header style={headerStyle}>
              <HeaderLayout />
            </Header>
            <Content style={contentStyle}>
              <MyArchive />
            </Content>
          </Layout>
        </Layout>} />
        <Route path="/workspace" element={<Layout style={layoutStyle}>
          <Sider width="25%" style={siderStyle}>
            <SiderLayout />
          </Sider>
          <Layout>
            <Header style={headerStyle}>
              <HeaderLayout />
            </Header>
            <Content style={contentStyle}>
              {/* <Home /> */}
            </Content>
          </Layout>
        </Layout>} />
      </Routes>
    
    </BrowserRouter>
  </Flex>
  </div>
);
export default App;