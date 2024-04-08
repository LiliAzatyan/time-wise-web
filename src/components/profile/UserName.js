import React, { useState } from "react";
import { UserDeleteOutlined } from "@ant-design/icons";
import { Drawer, Button, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import '../../App.css'

export default function UserName() {
  const [open, setOpen] = useState(false);

  const changeBodyColor = () => {
    document.body.style.backgroundColor === 'darkslategrey'
    ? document.body.style.backgroundColor = '#FBF8E5'
    : document.body.style.backgroundColor = 'darkslategrey';
  }
  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const [isClicked, setIsClicked] = useState(false);
  const handleIconClick = () => {
    setIsClicked(!isClicked);
    if (!open) {
      showDrawer(); 
    } else {
      onClose(); 
    }
  };
  const iconColor = isClicked ? "black" : "#DE8300";

  return (
    <div
      onClick={handleIconClick}
      style={{
        fontSize: "50px",
        display: "flex",
        justifyContent: "flex-end",
        padding: "0 10px", 
        // marginTop: "7px",
        color: iconColor,
        cursor: "pointer",
        height: "80px",
      }}
    >
      <UserDeleteOutlined style={{ fontSize: "50px" }} /> {/* Maximize icon size */}

        
      <Drawer title="Settings" onClose={onClose} visible={open} style={{backgroundColor: "#CFBB83"}}>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
        <h1>Your Account</h1>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Avatar size={120} icon={<UserOutlined />} style={{ marginBottom: "20px" }} /> {/* Set avatar size and margin */}
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <Button style={{ width: "200px", height: "40px", fontSize: "18px", backgroundColor: "#CFBB83" }}>Language</Button>
            <Button
              onClick={changeBodyColor}
              style={{ width: "200px", height: "40px", fontSize: "18px", backgroundColor: "#CFBB83" }
              }>Turn On &nbsp;{document.body.style.backgroundColor === 'darkslategrey' ? <i className="fa-solid fa-sun"></i> : <i className="fa-solid fa-moon"></i>
              } &nbsp; Mode </Button>
            <Button style={{ width: "200px", height: "40px", fontSize: "18px", backgroundColor: "#CFBB83" }}>Switch Account</Button>
            <Button style={{ width: "200px", height: "40px", fontSize: "18px", backgroundColor: "#CFBB83" }}>Report Bug</Button>
            <Button style={{ width: "200px", height: "40px", fontSize: "18px", backgroundColor: "#CFBB83"}}>Install App</Button>
            <Link to="/"><Button style={{ width: "200px", height: "40px", fontSize: "18px", backgroundColor: "#CFBB83", color: "red"}}>Log out</Button></Link>
          </div>
        </div>
      </Drawer>
    </div>
  );
}