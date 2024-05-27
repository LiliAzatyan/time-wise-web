import React, { useState, useEffect } from 'react';
import AddTaskForm from '../../components/AddTaskForm/AddTaskForm';
import TaskCard from '../../components/TaskCard/TaskCard';

export default function MyPlanner() {
  const [activeButton, setActiveButton] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const tasksPerPage = 6;

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []);

  const handleButtonClick = (buttonType) => {
    setActiveButton(activeButton === buttonType ? null : buttonType);
  };

  const handleAddTask = (newTask) => {
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  const handleDeleteTask = (taskToDelete) => {
    const updatedTasks = tasks.filter((task) => task !== taskToDelete);
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  const handleNextPage = () => {
    if (currentPage < Math.ceil(tasks.length / tasksPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const plannerStyles = {
    width: '65%',
    float: 'left',
    backgroundColor: '#f0f0f0',
    padding: '20px',
    boxSizing: 'border-box',
    position: 'relative',
  };

  const bannerStyles = {
    width: '35%',
    float: 'right',
    padding: '20px',
    boxSizing: 'border-box',
    boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.1)',
  };

  const buttonStyles = {
    width: '100px',
    height: '40px',
    padding: '10px 20px',
    backgroundColor: '#ffffff',
    border: '2px solid #68B37A',
    borderRadius: '8px',
    color: '#68B37A',
    cursor: 'pointer',
    transition: 'all 0.5s ease',
    marginRight: '10px',
  };

  const activeButtonStyles = {
    backgroundColor: '#68B37A',
    color: '#ffffff',
  };

  const addButtonStyles = {
    display: isHovered ? 'inline-block' : 'none',
    padding: '10px 20px',
    backgroundColor: '#68B37A',
    color: '#ffffff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    position: 'absolute',
    right: '20px',
    top: '20px',
  };

  const addIconStyles = {
    marginRight: '8px',
  };

  const gridContainerStyles = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
    gap: '20px',
    marginTop: '20px',
  };

  const paginationStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '20px',
  };

  const paginationButtonStyles = {
    ...buttonStyles,
    width: 'auto',
    padding: '10px 20px',
  };

  const indexOfLastTask = currentPage * tasksPerPage;
  const indexOfFirstTask = indexOfLastTask - tasksPerPage;
  const currentTasks = tasks.slice(indexOfFirstTask, indexOfLastTask);

  return (
      <div>
        <div
            style={plannerStyles}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
          <button
              style={{
                ...buttonStyles,
                ...(activeButton === 'all' ? activeButtonStyles : {}),
              }}
              onClick={() => handleButtonClick('all')}
          >
            All
          </button>
          <button
              style={{
                ...buttonStyles,
                ...(activeButton === 'work' ? activeButtonStyles : {}),
              }}
              onClick={() => handleButtonClick('work')}
          >
            Work
          </button>
          <button
              style={{
                ...buttonStyles,
                ...(activeButton === 'education' ? activeButtonStyles : {}),
              }}
              onClick={() => handleButtonClick('education')}
          >
            Education
          </button>
          <button
              style={{
                ...buttonStyles,
                ...(activeButton === 'personal' ? activeButtonStyles : {}),
              }}
              onClick={() => handleButtonClick('personal')}
          >
            Personal
          </button>
          <button style={addButtonStyles}>
            <span style={addIconStyles}>+</span>
          </button>
          <div style={gridContainerStyles}>
            {currentTasks.map((task, index) => (
                <TaskCard key={index} task={task} onDelete={handleDeleteTask} />
            ))}
          </div>
          <div style={paginationStyles}>
            <button
                style={paginationButtonStyles}
                onClick={handlePreviousPage}
                disabled={currentPage === 1}
            >
              Previous
            </button>
            <button
                style={paginationButtonStyles}
                onClick={handleNextPage}
                disabled={currentPage >= Math.ceil(tasks.length / tasksPerPage)}
            >
              Next
            </button>
          </div>
        </div>
        <div style={bannerStyles}>
          <AddTaskForm onAddTask={handleAddTask} />
        </div>
      </div>
  );
}
