import React, { useState } from "react";

const MarkDailyTasks = ({ closeModal, closeAllModals }) => {
  const [color1, setColor1] = useState("#EAEAEA");
  const [color2, setColor2] = useState("#EAEAEA");
  const [color3, setColor3] = useState("#EAEAEA");
  const [showModal, setShowModal] = useState(false);

  const handleClick1 = () => {
    setColor1((prevColor) => (prevColor === "#B982FF" ? "#EAEAEA" : "#B982FF"));
  };

  const handleClick2 = () => {
    setColor2((prevColor) => (prevColor === "#B982FF" ? "#EAEAEA" : "#B982FF"));
  };

  const handleClick3 = () => {
    setColor3((prevColor) => (prevColor === "#B982FF" ? "#EAEAEA" : "#B982FF"));
  };

  const handleSkip = () => {
    setShowModal(false); // Close the modal
    closeModal(); // Close the parent modal
    // Add functionality to skip
  };

  const handleSubmit = () => {
    setShowModal(true);
  };

  const handleModalCancel = () => {
    setShowModal(false);
  };

  const handleModalConfirm = () => {
    setShowModal(false); // Close the modal
    closeAllModals(); // Close all modals
    // Add functionality to confirm and save daily plans
  };

  return (
    <div>
      <div
        onClick={handleClick1}
        style={{
          backgroundColor: color1,
          width: "100%",
          height: "20%",
          margin: 10,
          display: "inline-block",
          border: "1px solid #D6D6D6",
          borderRadius: 10,
          cursor: "pointer",
          padding: 10,
        }}
      >
        Are you working?
      </div>
      <div
        onClick={handleClick2}
        style={{
          backgroundColor: color2,
          width: "100%",
          height: "20%",
          margin: 10,
          display: "inline-block",
          border: "1px solid #D6D6D6",
          borderRadius: 10,
          cursor: "pointer",
          padding: 10,
        }}
      >
        Are you want to have hobby time?
      </div>
      <div
        onClick={handleClick3}
        style={{
          backgroundColor: color3,
          width: "100%",
          height: "20%",
          margin: 10,
          display: "inline-block",
          border: "1px solid #D6D6D6",
          borderRadius: 10,
          cursor: "pointer",
          padding: 10,
        }}
      >
        Are you want to have rest time?
      </div>
      <div style={{ marginTop: 20 }}>
        <button
          style={{
            backgroundColor: "#B982FF",
            color: "white",
            border: "none",
            borderRadius: 5,
            padding: "8px 16px",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
            marginRight: 10,
          }}
          onClick={handleSkip}
        >
          Skip
        </button>
        <button
          style={{
            backgroundColor: "#B982FF",
            color: "white",
            border: "none",
            borderRadius: 5,
            padding: "8px 16px",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
          }}
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
      {showModal && (
        <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", backgroundColor: "rgba(0, 0, 0, 0.5)", zIndex: 999, backdropFilter: "blur(5px)" }}>
          <div style={{ position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)", backgroundColor: "white", padding: 20, borderRadius: 10, zIndex: 1000 }}>
            <p>Are you sure to save daily plans?</p>
            <div>
              <button
                style={{
                  backgroundColor: "#B982FF",
                  color: "white",
                  border: "none",
                  borderRadius: 5,
                  padding: "8px 16px",
                  cursor: "pointer",
                  transition: "background-color 0.3s ease",
                  marginRight: 10,
                }}
                onClick={handleModalCancel}
              >
                Cancel
              </button>
              <button
                style={{
                  backgroundColor: "#B982FF",
                  color: "white",
                  border: "none",
                  borderRadius: 5,
                  padding: "8px 16px",
                  cursor: "pointer",
                  transition: "background-color 0.3s ease",
                }}
                onClick={handleModalConfirm}
              >
                Yes, I'm sure
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MarkDailyTasks;
