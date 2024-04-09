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
import SiderLayout from './layouts/SiderLayout'
import HeaderLayout from './layouts/Header'

const { Header, Sider, Content } = Layout;
const headerStyle = {
  textAlign: 'center',
  color: '#fff',
  height: 64,
  paddingInline: 48,
  lineHeight: '64px',
  backgroundColor: '#4096ff',
};
const contentStyle = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#0958d9',
};
const siderStyle = {
  textAlign: 'center',
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#1677ff',
};

const layoutStyle = {
  borderRadius: 8,
  overflow: 'hidden',
  width: '100%',
  height: '100vh',
};
const App = () => (
  <Flex gap="middle" wrap="wrap">

    <Layout style={layoutStyle}>
      <Sider width="25%" style={siderStyle}>
        <SiderLayout />
      </Sider>
      <Layout>
        <Header style={headerStyle}>
          <HeaderLayout />
        </Header>
        <Content style={contentStyle}>
          
          Content
          
        </Content>
      </Layout>
    </Layout>
  </Flex>
);
export default App;