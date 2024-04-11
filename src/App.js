// import LoginAndRegistr from "./pages/login-and-register";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
  backgroundColor: '#fff',
  borderBottom: 'solid 1px',
  borderColor: '#999'
};
const contentStyle = {
  textAlign: 'center',
  color: '#000',
  backgroundColor: '#ddd',
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
  <Flex gap="middle" wrap="wrap">
    <BrowserRouter>
      <Layout style={layoutStyle}>
        <Sider width="25%" style={siderStyle}>
          <SiderLayout />
        </Sider>
        <Layout>
          <Header style={headerStyle}>
            <HeaderLayout />
          </Header>
          <Content style={contentStyle}>
            <Routes>
              {/* <Route path="/" element={} /> */}
              <Route path="/my-planner" element={<MyPlanner />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/documents" element={<Documents />} />
              <Route path="/goal-tracking" element={<GoalTracking />} />
              <Route path="/my-archive" element={<MyArchive />} />
              <Route path="/" element={<Home/>}/>
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </BrowserRouter>
  </Flex>
);
export default App;
