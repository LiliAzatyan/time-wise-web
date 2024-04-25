import React, { useState } from "react";
import { Modal } from "antd";

function DocumentCard({ document }) {
  const {
    title,
    description,
    dueDate,
    completed,
    handleTaskChange,
    handleDelete,
  } = document;
  const [expanded, setExpanded] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const cardStyle = {
    position: "relative",
    width: "300px",
    height: "200px",
    border: "1px solid #ddd",
    borderRadius: "10px",
    padding: "20px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    backgroundColor: expanded ? "#f0f0f0" : "#fff",
    boxShadow: expanded
      ? "0px 0px 20px 0px rgba(0, 0, 0, 0.2)"
      : "0px 0px 10px 0px rgba(0, 0, 0, 0.1)",
    opacity: completed ? "0.5" : "1",
  };

  const headerStyle = {
    textAlign: "center",
    marginBottom: "10px",
  };

  const titleStyle = {
    fontSize: "24px",
  };

  const lineStyle = {
    border: "0",
    borderTop: "1px solid #ddd",
    margin: "20px 0",
  };

  const bodyStyle = {
    textAlign: "center",
  };

  const deleteStyle = {
    position: "absolute",
    bottom: "10px",
    right: "10px",
    color: "red",
    cursor: "pointer",
    textDecoration: "underline",
  };

  const handleClick = () => {
    if (!expanded) {
      setModalVisible(true);
    } else {
      setExpanded(false);
    }
  };

  const handleOk = () => {
    setModalVisible(false);
  };

  const handleCancel = () => {
    setModalVisible(false);
  };

  return (
    <>
      <div style={cardStyle} onClick={handleClick}>
        <div style={headerStyle}>
          <h1 style={titleStyle}>{title}</h1>
        </div>
        <hr style={lineStyle} />
        <div style={bodyStyle}>
          <p>{description}</p>
        </div>
        <div
          style={deleteStyle}
          onClick={(e) => {
            e.stopPropagation();
            handleDelete();
          }}
        >
          Delete
        </div>
      </div>
      <Modal
        title={title}
        visible={modalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>{description}</p>
        <p>{dueDate}</p>
        <div style={{ marginBottom: "10px" }}>
          
          <input
            type="checkbox"
            id="completedCheckbox"
            checked={completed}
            onChange={() => handleTaskChange(document.id)} // Pass document.id as an argument
            style={{ display: "none" }}
          />

          <label
            htmlFor="completedCheckbox"
            style={{
              display: "inline-block",
              cursor: "pointer",
              width: "30px",
              height: "30px",
              border: "2px solid #007bff",
              borderRadius: "5px",
              position: "relative",
              marginRight: "10px",
            }}
          >
            <span
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                color: completed ? "#007bff" : "transparent",
                fontSize: "20px",
              }}
            >
              {completed ? "✓" : ""}
            </span>
          </label>
          <span style={{ verticalAlign: "middle" }}>Completed</span>
        </div>
      </Modal>
    </>
  );
}

export default DocumentCard;
