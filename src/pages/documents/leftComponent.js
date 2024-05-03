import React, { useState, useEffect } from "react";
import { Modal } from "antd";

function LeftComponent({ documents = [], handleTaskChange, handleDelete }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedDocument, setSelectedDocument] = useState(null);
  const [updatedDocuments, setUpdatedDocuments] = useState(documents); // Define setUpdatedDocuments

  useEffect(() => {
    setUpdatedDocuments(documents);
  }, [documents]);

  const containerStyle = { // Define containerStyle
    scrollbarWidth: "none",
    marginRight: "20px",
    height: "90vh",
    overflowY: "scroll",
    paddingRight: "10px",
    width: "300px",
  };

  const handleClick = (document) => {
    setSelectedDocument(document);
    setModalVisible(true);
  };

  const handleOk = () => {
    setModalVisible(false);
    setSelectedDocument(null);
  };

  const handleCancel = () => {
    setModalVisible(false);
    setSelectedDocument(null);
  };

  return (
    <div style={containerStyle}>
      {updatedDocuments.map((document) => (
        <div key={document.id} style={{ marginBottom: "10px" }}>
          <div
            style={{
              position: "relative",
              width: "300px",
              height: "200px",
              borderBottom: "1px solid #ddd",
              borderRadius: "10px",
              padding: "20px",
              alignItems: "center",
              cursor: "pointer",
              transition: "all 0.3s ease",
              backgroundColor: "#fff",
              boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.05)",
            }}
            onClick={() => handleClick(document)}
          >
            <div style={{ textAlign: "center", marginBottom: "10px" }}>
              <h1 style={{ fontSize: "24px" }}>{document.title}</h1>
            </div>
            <hr style={{ border: "0", borderTop: "1px solid #ddd", margin: "20px 0" }} />
            <div style={{ textAlign: "center" }}>
              <p>{document.description}</p>
            </div>
            <div
              style={{
                position: "absolute",
                bottom: "10px",
                right: "10px",
                color: "red",
                cursor: "pointer",
                textDecoration: "underline",
              }}
              onClick={(e) => {
                e.stopPropagation();
                handleDelete(document.id); // Call handleDelete with document id
              }}
            >
              Delete
            </div>
          </div>
        </div>
      ))}
      {selectedDocument && (
        <Modal
          title={selectedDocument.title}
          visible={modalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <p>{selectedDocument.description}</p>
          <p>{selectedDocument.dueDate}</p>
        </Modal>
      )}
    </div>
  );
}

export default LeftComponent;
