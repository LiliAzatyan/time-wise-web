// import React, { useState } from "react";
// import { motion } from "framer-motion";

// function RightComponent({ onSave }) {
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [dueDate, setDueDate] = useState("");

//   const handleSave = () => {
//     const newDocument = {
//       id: Math.random(),
//       title,
//       description,
//       dueDate,
//     };

//     onSave(newDocument);

//     setTitle("");
//     setDescription("");
//     setDueDate("");
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0, x: 100 }}
//       animate={{ opacity: 1, x: 0 }}
//       transition={{ duration: 0.5 }}
//       style={{
//         flex: 1,
//         backgroundColor: "#f7f7f7",
//         padding: "20px",
//         borderRadius: "10px",
//         boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.1)",
//       }}
//     >
//       <h2 style={{ textAlign: "center", marginBottom: "20px", fontWeight: "bold" }}>
//         Add New Document
//       </h2>
//       <input
//         type="text"
//         placeholder="Title"
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//         style={inputStyle}
//       />
//       <input
//         type="text"
//         placeholder="Description"
//         value={description}
//         onChange={(e) => setDescription(e.target.value)}
//         style={inputStyle}
//       />
//       <input
//         type="date"
//         value={dueDate}
//         onChange={(e) => setDueDate(e.target.value)}
//         style={inputStyle}
//       />
//       <button onClick={handleSave} style={buttonStyle}>
//         Save
//       </button>
//     </motion.div>
//   );
// }

// const inputStyle = {
//   width: "100%",
//   padding: "10px",
//   marginBottom: "15px",
//   borderRadius: "5px",
//   border: "1px solid #ccc",
//   fontSize: "16px",
//   boxSizing: "border-box",
// };

// const buttonStyle = {
//   width: "100%",
//   padding: "10px",
//   borderRadius: "5px",
//   border: "none",
//   fontSize: "16px",
//   backgroundColor: "#F99B0D",
//   color: "#fff",
//   cursor: "pointer",
//   transition: "background-color 0.3s",
// };

// export default RightComponent;


import React, { useState } from "react";
import { motion } from "framer-motion";

function RightComponent({ onSave }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [isHovered, setIsHovered] = useState(false);

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
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.1 }}
      style={{
        flex: 1,
        backgroundColor: "#f7f7f7",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.1)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <motion.h2
        style={{
          textAlign: "center",
          marginBottom: "20px",
          fontWeight: "bold",
          position: "relative",
          zIndex: 1,
        }}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
      >
        Add New Document
      </motion.h2>
      <motion.input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={inputStyle}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
      />
      <motion.input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        style={inputStyle}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
      />
      <motion.input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        style={inputStyle}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
      />
      <motion.button
        onClick={handleSave}
        style={buttonStyle}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.99 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {isHovered ? "Save Document" : "Save"}
      </motion.button>
    </motion.div>
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
  backgroundColor: "#F99B0D",
  color: "#fff",
  cursor: "pointer",
  transition: "background-color 0.3s",
};

export default RightComponent;
