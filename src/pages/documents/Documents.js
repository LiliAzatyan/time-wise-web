import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { Button, Modal } from "antd";
import "./style.css";

function Documents() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Task 1",
      description: "Description for Task 1",
      dueDate: "2024-04-12",
      completed: false,
    },
    {
      id: 2,
      title: "Task 2",
      description: "Description for Task 2",
      dueDate: "2024-04-15",
      completed: false,
    },
    {
      id: 3,
      title: "Task 3",
      description: "Description for Task 3",
      dueDate: "2024-04-16",
      completed: false,
    },
  ]);
  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    dueDate: "",
    completed: false,
  });

  const handleTaskChange = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDelete = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  const handlePriorityChange = (priority) => {
    console.log("Priority changed to:", priority);
  };





  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setTasks((prevTasks) => [
      ...prevTasks,
      { ...newTask, id: tasks.length + 1 },
    ]);
    setNewTask({
      title: "",
      description: "",
      dueDate: "",
      completed: false,
    });
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="daily-tasks-container">
      {/* <div className="button-row">
        <button className="save-button" onClick={handleSave}>
          Save
        </button>
        <button className="cancel-button" onClick={handleCancel}>
          Cancel
        </button>
      </div> */}
      <div className="open-modal">

      <Button type="primary" onClick={showModal} className="open-modal-button">
        + Add New Plan
      </Button>
      </div>
      <Modal
        title="Add New Plan"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div className="add-task-title">
          <p>Title</p>
          <input
            type="text"
            className="input title-input"
            placeholder="Enter title"
            value={newTask.title}
            onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
          />
        </div>
        <div className="add-task-description">
          <p>Description</p>
          <input
            type="text"
            className="input description-input"
            placeholder="Enter description"
            value={newTask.description}
            onChange={(e) =>
              setNewTask({ ...newTask, description: e.target.value })
            }
          />
        </div>

        <div className="add-task-date">
          <p>Date</p>
          <input
            type="date"
            className="input date-input"
            value={newTask.dueDate}
            onChange={(e) =>
              setNewTask({ ...newTask, dueDate: e.target.value })
            }
          />
        </div>

        <div className="add-task-priority">
          <p>Priority</p>
          <div className="priority-options">
            <input
              type="checkbox"
              onChange={() => handlePriorityChange("low")}
            />
            <label>Low </label>

            <input
              type="checkbox"
              onChange={() => handlePriorityChange("high")}
            />
            <label>High</label>
          </div>
        </div>
      </Modal>
      <div className="tasks-row">
        {tasks.map((task) => (
          <div className="task-card" key={task.id}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <div className="due-date">
              <span>Due Date: {task.dueDate || "Not set"}</span>
            </div>
            <div className="completed-checkbox">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => handleTaskChange(task.id)}
              />
              <label htmlFor={task.id}>Completed</label>
            </div>
            <div className="delete-icon" onClick={() => handleDelete(task.id)}>
              <FaTrash />
            </div>
          </div>
        ))}
      </div>
      
      
    </div>
  );
}

export default Documents;
