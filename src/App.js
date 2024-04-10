// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import LoginAndRegister from "./pages/login-and-register";
// import React from "react";
// import "./App.css";

// const App = () => {
  
//   return (
    
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<LoginAndRegister />} />
//       </Routes>
//     </BrowserRouter>
//   );
// };

// export default App;

import React from 'react';
import { Layout, Flex } from 'antd';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SiderLayout from './layouts/SiderLayout';
import HeaderLayout from './layouts/Header';
import MyPlanner from './pages/my-planner/MyPlanner'; 
import Calendar from './pages/calendar/Calendar';
import Documents from './pages/documents/Documents';
import GoalTracking from './pages/goal-tracking/GoalTracking';
import MyArchive from './pages/my-archive/MyArchive';


const { Header, Sider, Content } = Layout;
const headerStyle = {
  textAlign: 'center',
  color: '#fff',
  height: 64,
  paddingInline: 48,
  lineHeight: '64px',
  backgroundColor: '#fff',
  borderBottom: 'solid 1px',
  borderColor: '#999'
};
const contentStyle = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  color: '#000',
  backgroundColor: '#ddd',
};
const siderStyle = {
  textAlign: 'center',
  lineHeight: '120px',
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
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </BrowserRouter>
  </Flex>
);
export default App;
