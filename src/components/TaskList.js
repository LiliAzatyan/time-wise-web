import React, { useState } from "react";
import { FaTrash, FaEye } from "react-icons/fa";

function TaskList({ tasks, handleTaskChange, handleDelete }) {
  const [selectedTask, setSelectedTask] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [completedTasks, setCompletedTasks] = useState([]);

  const openModal = (task) => {
    setSelectedTask(task);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedTask(null);
    setIsModalOpen(false);
  };

  const toggleTaskCompletion = (taskId) => {
    setCompletedTasks((prevCompletedTasks) => {
      if (prevCompletedTasks.includes(taskId)) {
        return prevCompletedTasks.filter((id) => id !== taskId);
      } else {
        return [...prevCompletedTasks, taskId];
      }
    });
  };



  return (
    <div className="tasks-container" style={styles.container}>
      {tasks.map((task, index) => (
        <div
          className="task-card"
          key={task.id}
          style={{
            ...styles.taskCard,
            backgroundColor:
              completedTasks.includes(task.id) ? "#EAEAEA" : index % 2 === 0 ? "#F2FBFB" : "#F7F7F7",
            textDecoration: completedTasks.includes(task.id) ? "line-through" : "none",
          }}
        >
          <input
            type="checkbox"
            checked={completedTasks.includes(task.id)}
            onChange={() => {
              handleTaskChange(task.id);
              toggleTaskCompletion(task.id);
            }}
            style={styles.checkbox}
          />
          <div className="task-details" style={styles.taskDetails}>
            <h3>{task.title}</h3>
            {/* <p>{task.description}</p> */}
          </div>
          <div className="metadata" style={styles.metadata}>
            <div className="due-date" style={styles.dueDate}>
              <span>
                {task.dueDate === new Date().toISOString().split("T")[0]
                  ? "Today"
                  : task.dueDate || "Due Date Placeholder"}
              </span>
            </div>
            <div className="priority" style={styles.priority}>
              <span>{task.priority || "Priority Placeholder"}</span>
            </div>
            <div className="view-button" style={styles.viewButton}>
              <button
                onClick={() => openModal(task)}
                style={{ border: "none", backgroundColor: "#7BD6D4" }}
              >
                View <FaEye />
              </button>
            </div>
            <div
              className="delete-icon"
              onClick={() => handleDelete(task.id)}
              style={styles.deleteIcon}
            >
              <FaTrash />
            </div>
          </div>
        </div>
      ))}
      {isModalOpen && (
        <div className="modal" style={styles.modal} onClick={closeModal}>
          <div
            className="modal-content"
            style={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <span className="close" onClick={closeModal} style={styles.close}>
              &times;
            </span>
            <h2 style={styles.header}>{selectedTask.title}</h2>
            {/* <p style={styles.taskDetail}>{selectedTask.title}</p> */}
            <p style={styles.taskDetail}>
              {selectedTask.description}
            </p>
            <p style={styles.taskDetail}>{selectedTask.dueDate}</p>
            <p style={styles.taskDetail}>{selectedTask.priority}</p>
            {/* Add more task details here */}
          </div>
        </div>
      )}
    </div>
  );
}
const styles = {
  container: {
    width: "102vh",
    height: "55vh",
    overflowY: "auto",
    padding: "20px",
    scrollbarWidth: 'none'
  },
  taskCard: {
    width: "100vh",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: "10px",
    padding: "20px",
    boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.1)",
    marginBottom: "20px",
    marginRight: "1000px"
  },
  checkbox: {
    marginRight: "20px",
  },
  taskDetails: {
    flex: "1",
    marginRight: "20px",
  },
  metadata: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    flex: "1",
    justifyContent: "flex-end",
  },
  dueDate: {
    marginRight: "20px",
    fontSize: "14px",
  },
  priority: {
    marginRight: "20px",
    fontSize: "14px",
  },
  viewButton: {
    backgroundColor: "#7BD6D4",
    borderRadius: "5px",
    marginRight: "20px",
    cursor: "pointer",
  },
  deleteIcon: {
    cursor: "pointer",
    fontSize: "24px",
    color: "red",
  },
  modal: {
    display: "block",
    position: "fixed",
    zIndex: "1",
    left: "0",
    top: "0",
    width: "100%",
    height: "100%",
    overflow: "auto",
    backgroundColor: "rgba(0,0,0,0.4)",
  },
  modalContent: {
    backgroundColor: "#fefefe",
    margin: "10% auto",
    padding: "20px",
    border: "1px solid #888",
    width: "60%",
    maxWidth: "600px",
    borderRadius: "8px",
    position: "relative",
    fontSize: "1.2rem",
  },
  close: {
    position: "absolute",
    top: "10px",
    right: "10px",
    fontSize: "2rem", 
    color: "#aaa",
    cursor: "pointer",
  },
  header: {
    fontSize: "2.5rem", 
    marginBottom: "10px",
  },
  taskDetail: {
    marginBottom: "10px",
    lineHeight: "1.5",
  },
  close: {
    color: "#aaa",
    position: "absolute",
    top: "10px",
    right: "10px",
    // fontSize: "80px",
    fontWeight: "bold",
    cursor: "pointer",
  },
};

export default TaskList;