import { useLocation, useNavigate } from "react-router-dom";
import { MENU_ITEMS } from "../constants/menu-items";
import { style } from "./style";
import { memo } from "react";
import { Menu } from "antd";
import React from "react";

const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Menu mode="vertical" style={style}>
      {MENU_ITEMS.map((item) => (
        <Menu.Item
          key={item.key}
          style={{ color: "inherit", marginLeft: "1px" }}
          onClick={() =>
            location.pathname !== item.path ? navigate(item.path) : null
          }
        >
          {item.label}
        </Menu.Item>
      ))}
    </Menu>
  );
};
export default memo(NavBar);
