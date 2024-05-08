import React, { useState, useEffect } from "react";
import LeftComponent from "./ItemsComponent";
import RightComponent from "./rightComponent";
import { Button } from "antd";
import "./NoteStyle.css";

function Documents() {
  const [documents, setDocuments] = useState([]);
  const [filter, setFilter] = useState("All");
  const [showRightComponent, setShowRightComponent] = useState(false);

  useEffect(() => {
    // Load documents from local storage when component mounts
    const storedDocuments = JSON.parse(localStorage.getItem("documents"));
    if (storedDocuments) {
      setDocuments(storedDocuments);
    }
  }, []);

  const handleTaskChange = (documentId) => {
    setDocuments((prevDocuments) =>
      prevDocuments.map((doc) =>
        doc.id === documentId ? { ...doc, completed: !doc.completed } : doc
      )
    );
  };
  
  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };
  
  const handleAddNoteClick = () => {
    setShowRightComponent(!showRightComponent);
  };

  const handleSave = (newDocument) => {
    const updatedDocuments = [...documents, newDocument];
    setDocuments(updatedDocuments);
    // Save updated documents to local storage
    localStorage.setItem("documents", JSON.stringify(updatedDocuments));
  };

  const handleDelete = (documentId) => {
    const updatedDocuments = documents.filter((doc) => doc.id !== documentId);
    setDocuments(updatedDocuments);
    // Save updated documents to local storage
    localStorage.setItem("documents", JSON.stringify(updatedDocuments));
  };

  return (
    <div style={{ height: "100vh", overflowY: "auto" }}>
      <div style={{ display: "flex", alignItems: "center"}}>
        <Button type={filter === "All" ? "primary" : "default"} onClick={() => handleFilterChange("All")} className="btn-box">All</Button>
        <Button type={filter === "Week" ? "primary" : "default"} onClick={() => handleFilterChange("Life")} className="btn-box">Life</Button>
        <Button type={filter === "Month" ? "primary" : "default"} onClick={() => handleFilterChange("Work")} className="btn-box">Work</Button>
        <Button type={filter === "Month" ? "primary" : "default"} onClick={() => handleFilterChange("Education")} className="btn-box">Education</Button>
        <Button type={filter === "Month" ? "primary" : "default"} onClick={() => handleFilterChange("Finance")} className="btn-box">Finance</Button>
        <Button onClick={handleAddNoteClick} className="add-note">Add Note</Button>
      </div>
      {showRightComponent && <RightComponent onSave={handleSave} />}
      <LeftComponent
        documents={documents}
        handleTaskChange={handleTaskChange}
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default Documents;


