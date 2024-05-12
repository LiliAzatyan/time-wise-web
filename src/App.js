import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GoalTracking from './pages/goal-tracking/GoalTracking';
import MyPlanner from './pages/my-planner/MyPlanner';
import MyArchive from './pages/my-archive/MyArchive';
import Documents from './pages/documents/Documents';
import Calendar from './pages/calendar/Calendar';
import SiderLayout from './layouts/SiderLayout.js';
import HeaderLayout from './layouts/Header';
import Home from './pages/home/home.js';
import SignIn from './pages/login-and-register/Login/SignIn';
import SignUp from "./pages/login-and-register/Register/SignUp";
import  PageNotFound from "./pages/notfound/404-page"
import { Layout, Flex } from 'antd';
import React from 'react';



const { Header, Sider, Content } = Layout;
const headerStyle = {
  textAlign: 'center',
  color: '#fff',
  paddingInline: 48,
  lineHeight: '64px',
  backgroundColor: '#7BD6D4',
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
            <Route path="/*" element={<PageNotFound />} />
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/my-planner" element={<Layout style={layoutStyle}>
              <Sider width="15%" style={siderStyle}>
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
              <Sider width="15%" style={siderStyle}>
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
              <Sider width="15%" style={siderStyle}>
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
              <Sider width="15%" style={siderStyle}>
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
              <Sider width="15%" style={siderStyle}>
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
          </Routes>
        </BrowserRouter>
      </Flex>
    </div>
);
export default App;


// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import LoginRegister from "./pages/login-and-register/index"
// import GoalTracking from './pages/goal-tracking/GoalTracking';
// import MyPlanner from './pages/my-planner/MyPlanner'; 
// import MyArchive from './pages/my-archive/MyArchive';
// import Documents from './pages/documents/Documents';
// import Calendar from './pages/calendar/Calendar';
// import SiderLayout from './layouts/SiderBar.js';
// import HeaderLayout from './layouts/Header';
// import Home from './pages/home/home.js';
// import { Layout, Flex } from 'antd';
// import React, { useState } from 'react';

// const { Header, Sider, Content } = Layout;
// const headerStyle = {
//   textAlign: 'center',
//   color: '#fff',
//   paddingInline: 48,
//   lineHeight: '64px',
//   backgroundColor: '#7BD6D4',
//   borderBottom: 'solid 1px',
//   borderColor: '#999',
//   transition: 'width 0.5s', // Add transition property
// };
// const contentStyle = {
//   textAlign: 'center',
//   color: '#000',
//   backgroundColor: '#FFFFFF',
//   transition: 'width 0.5s', // Add transition property
// };
// const siderStyle = {
//   textAlign: 'center',
//   color: '#000',
//   backgroundColor: '#ffffff',
//   width: '100vh',
// };

// const layoutStyle = {
//   borderRadius: 8,
//   overflow: 'hidden',
//   width: '100%',
//   height: '100vh',
// };

// const App = () => {
//   const [isOpen, setIsOpen] = useState(true);

//   const toggleSidebar = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div style={{padding: "0px", margin: "0px"}}>
//       <Flex gap="middle" wrap="wrap">
//         <BrowserRouter>
//           <Routes>
//             <Route path="/" element={<LoginRegister />} />
//             <Route path="/home" element={<Home />} />
//             <Route path="/my-planner" element={<Layout style={layoutStyle}>
//               <Sider width={isOpen ? "25%" : "0"} style={siderStyle}>
//                 <SiderLayout />
//               </Sider>
//               <Layout>
//                 <Header style={{ ...headerStyle, width: isOpen ? "75%" : "90%" }}>
//                   <HeaderLayout />
//                 </Header>
//                 <Content style={{ ...contentStyle, width: isOpen ? "75%" : "90%" }}>
//                   <MyPlanner />
//                 </Content>
//               </Layout>
//             </Layout>} />
//             {/* Other routes */}
//           </Routes>
//         </BrowserRouter>
//       </Flex>
//     </div>
//   );
// };

// export default App;
