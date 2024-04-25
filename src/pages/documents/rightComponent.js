// RightComponent.js
import React, { useState } from "react";

function RightComponent({ onSave }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleSave = () => {
    const newDocument = {
      id: Math.random(),
      title,
      description,
      dueDate,
    };

    onSave(newDocument);

    setTitle("");
    setDescription("");
    setDueDate("");
  };

  return (
    <div style={{ flex: 1, backgroundColor: "#f7f7f7", padding: "20px", borderRadius: "10px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Add New Document</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={inputStyle}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        style={inputStyle}
      />
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        style={inputStyle}
      />
      <button onClick={handleSave} style={buttonStyle}>Save</button>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "10px",
  marginBottom: "15px",
  borderRadius: "5px",
  border: "1px solid #ccc",
  fontSize: "16px",
  boxSizing: "border-box",
};

const buttonStyle = {
  width: "100%",
  padding: "10px",
  borderRadius: "5px",
  border: "none",
  fontSize: "16px",
  backgroundColor: "#007bff",
  color: "#fff",
  cursor: "pointer",
  transition: "background-color 0.3s",
};

export default RightComponent;
