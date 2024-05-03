// import React, { useState } from "react";
// import LeftComponent from "./leftComponent";
// import RightComponent from "./rightComponent";

// function Documents() {
//   const [documents, setDocuments] = useState([]);

//   const handleTaskChange = (documentId) => {
//     setDocuments((prevDocuments) =>
//       prevDocuments.map((doc) =>
//         doc.id === documentId ? { ...doc, completed: !doc.completed } : doc
//       )
//     );
//   };

//   const handleSave = (newDocument) => {
//     setDocuments((prevDocuments) => [...prevDocuments, newDocument]);
//   };

//   const handleDelete = (documentId) => {
//     setDocuments((prevDocuments) =>
//       prevDocuments.filter((doc) => doc.id !== documentId)
//     );
//   };

//   return (
//     <div style={{ display: "flex" }}>
//       <LeftComponent
//         documents={documents}
//         handleTaskChange={handleTaskChange}
//         handleDelete={handleDelete} // Pass handleDelete to LeftComponent
//       />

//       <RightComponent onSave={handleSave} />
//     </div>
//   );
// }

// export default Documents;


import React, { useState, useEffect } from "react";
import LeftComponent from "./leftComponent";
import RightComponent from "./rightComponent";

function Documents() {
  const [documents, setDocuments] = useState([]);

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
    <div style={{ display: "flex" }}>
      <LeftComponent
        documents={documents}
        handleTaskChange={handleTaskChange}
        handleDelete={handleDelete}
      />
      <RightComponent onSave={handleSave} />
    </div>
  );
}

export default Documents;
