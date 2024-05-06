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
import Select from "react-select";

function RightComponent({ onSave }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [reminder, setReminder] = useState(""); // State for reminder selection
  const [isHovered, setIsHovered] = useState(false);

  const handleSave = () => {
    const newDocument = {
      id: Math.random(),
      title,
      description,
      dueDate,
      reminder, // Include reminder in the document object
    };

    onSave(newDocument);

    // Reset input fields
    setTitle("");
    setDescription("");
    setDueDate("");
    setReminder("");
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
        height: "400px",
        width: "40%",
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

      <Select
        options={reminderOptions}
        placeholder="Select Genre of Your Note"
        value={reminderOptions.find(option => option.value === reminder)}
        onChange={(selectedOption) => setReminder(selectedOption.value)}
        styles={selectStyles}
      />
      <motion.button
        onClick={handleSave}
        style={buttonStyle}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.99 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {isHovered ? "Save Note" : "Save"}
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

const reminderOptions = [
  { value: 'personal', label: 'Personal' },
  { value: 'work', label: 'Work' },
  { value: 'education', label: 'Education' },
];

// Custom styles for react-select
const selectStyles = {
  control: (styles) => ({
    ...styles,
    width: "100%",
    marginBottom: "15px",
  }),
};

export default RightComponent;
