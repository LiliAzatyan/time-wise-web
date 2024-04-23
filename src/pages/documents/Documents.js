import React, { useState, useEffect } from "react";
import { Button, Modal } from "antd";
import DocumentCard from '../../components/DocumentsCard'
import "./style.css";

function Documents() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    dueDate: "",
    completed: false,
  });

  const [isModalOpen, setIsModalOpen] = useState(false); // Define isModalOpen state
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleOk = () => {
    setTasks((prevTasks) => [
      ...prevTasks,
      { ...newTask, id: prevTasks.length + 1 },
    ]);
    setNewTask({
      title: "",
      description: "",
      dueDate: "",
      completed: false,
    });
    setIsModalOpen(false);
  };

  useEffect(() => {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

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

  return (
    <div className="daily-tasks-container">
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
      </Modal>
      <div className="tasks-row">
        {tasks.map((task) => (
          <DocumentCard
            key={task.id}
            title={task.title}
            body={task.description}
            dueDate={task.dueDate}
            completed={task.completed}
            handleTaskChange={() => handleTaskChange(task.id)}
            handleDelete={() => handleDelete(task.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default Documents;
