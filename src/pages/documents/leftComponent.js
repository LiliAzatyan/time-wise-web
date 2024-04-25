// LeftComponent.js
import React from "react";
import DocumentCard from "../../components/DocumentsCard";

function LeftComponent({ documents, handleTaskChange }) {
    
  console.log(handleTaskChange);
  const containerStyle = {
    marginRight: "20px",
    height: "90vh", // Set the height of the scrollable area
    overflowY: "scroll", // Allow vertical scrolling
    paddingRight: "10px", // Add a bit of right padding to prevent the scrollbar from overlaying content
  };

  return (
    <div style={containerStyle}>
      {documents.map((document) => (
        <div key={document.id} style={{ marginBottom: "10px" }}>
          <DocumentCard
            document={document}
            handleTaskChange={handleTaskChange} // Pass handleTaskChange here
          />
        </div>
      ))}
    </div>
  );
}

export default LeftComponent;
