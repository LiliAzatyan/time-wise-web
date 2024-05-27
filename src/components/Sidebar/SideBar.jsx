import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import {
  AppstoreOutlined,
  RestOutlined,
  AreaChartOutlined,
  FileDoneOutlined,
  AimOutlined,
} from "@ant-design/icons";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "./SidebarMenu";

const routes = [
  {
    path: "/my-planner",
    name: "My Planner",
    icon: <AreaChartOutlined />,
  },
  {
    path: "/calendar",
    name: "Calendar",
    icon: <AppstoreOutlined />,
  },
  {
    path: "/notes",
    name: "Notes",
    icon: <FileDoneOutlined />,
  },
  {
    path: "/goals",
    name: "Goals",
    icon: <AimOutlined />,
  },
  // {
  //   path: "/archive",
  //   name: "Archive",
  //   icon: <RestOutlined />,
  // },
];

const SideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: "140px",
      padding: "5px 15px",
      transition: {
        duration: 0.2,
      },
    },
  };

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
      <>
        <div className="main-container">
          <motion.div
              animate={{
                width: isOpen ? "300px" : "45px",
                transition: {
                  duration: 0.5,
                  type: "spring",
                  damping: 10,
                },
              }}
              className={`sidebar `}
          >
            <div className="top_section">
              <AnimatePresence>
                {isOpen && (
                    <motion.img
                        src="Home_Logo.png"
                        alt="Logo"
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="logoz"
                    />
                )}
              </AnimatePresence>
              <div className="bars">
                <FaBars onClick={toggle} />
              </div>
            </div>
            <section className="routes">
              {routes.map((route, index) => {
                if (route.subRoutes) {
                  return (
                      <SidebarMenu
                          setIsOpen={setIsOpen}
                          route={route}
                          showAnimation={showAnimation}
                          isOpen={isOpen}
                          key={index}
                      />
                  );
                }

                return (
                    <NavLink
                        to={route.path}
                        key={index}
                        className="link"
                        activeClassName="active"
                    >
                      <div className="icon">{route.icon}</div>
                      <AnimatePresence>
                        {isOpen && (
                            <motion.div
                                variants={showAnimation}
                                initial="hidden"
                                animate="show"
                                exit="hidden"
                                className="link_text"
                            >
                              {route.name}
                            </motion.div>
                        )}
                      </AnimatePresence>
                    </NavLink>
                );
              })}
            </section>
          </motion.div>

          <main>{children}</main>
        </div>
      </>
  );
};

export default SideBar;
