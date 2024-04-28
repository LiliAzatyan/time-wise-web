import { BorderVerticleOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import Select from 'react-select'; // Make sure to install react-select

function AddTaskForm({ onSave, onCancel }) {
  const [newTask, setNewTask] = useState({
    title: '',
    description: '',
    dueDate: '',
    priority: '',
    reminder: '',
    completed: false,
  });

  const handleSave = () => {
    onSave(newTask);
    resetForm();
  };

  const handleCancel = () => {
    onCancel();
    resetForm();
  };

  const resetForm = () => {
    setNewTask({
      title: '',
      description: '',
      dueDate: '',
      priority: '',
      reminder: '',
      completed: false,
    });
  };

  return (
    <div className="add-task-container" style={styles.container}>
      <div className="add-task-title" style={styles.inputContainer}>
        <input
          type="text"
          className="input title-input"
          placeholder="Enter title"
          value={newTask.title}
          onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
          style={styles.input}
        />
      </div>
      <div className="add-task-description" style={styles.inputContainer}>
        <input
          type="text"
          className="input description-input"
          placeholder="Enter description"
          value={newTask.description}
          onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
          style={styles.input}
        />
      </div>
      <div className="add-task-options" style={styles.optionsContainer}>
        <div style={styles.option}>
          <input
            type="date"
            className="input date-input"
            value={newTask.dueDate}
            onChange={(e) => setNewTask({ ...newTask, dueDate: e.target.value })}
            style={styles.input}
          />
        </div>
        <div style={styles.option}>
          <Select
            options={priorityOptions}
            placeholder="Priority"
            onChange={(selectedOption) =>
              setNewTask({ ...newTask, priority: selectedOption.value })
            }
          />
        </div>
        <div style={styles.option}>
          <Select
            options={reminderOptions}
            placeholder="Reminder"
            onChange={(selectedOption) =>
              setNewTask({ ...newTask, reminder: selectedOption.value })
            }
          />
        </div>
      </div>
      <div className="button-row" style={styles.buttonRow}>
        <button className="cancel-button" onClick={handleCancel} style={styles.button}>
          Cancel
        </button>
        <button className="save-button" onClick={handleSave} style={styles.saveButton}>
          Save
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    margin: '20px auto',
    padding: '20px',
    backgroundColor: '#fffff',
    border: 'solid 3px #7BD6D4',
    borderRadius: '10px',
    // boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.1)',
    maxWidth: '1000px',
  },
  inputContainer: {
  
    marginBottom: '20px',
  },
  label: {
    marginBottom: '5px',
  },
  input: {
    width: '100%',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '16px',
    boxSizing: 'border-box',
    backgroundColor: '#fff',
  },
  optionsContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  option: {
    width: '30%', // Adjust as needed
    marginBottom: '20px',
  },
  buttonRow: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  button: {
    padding: '10px 20px',
    borderRadius: '5px',
    border: 'none',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  saveButton: {
    padding: '10px 20px',
    borderRadius: '5px',
    backgroundColor: '#F99B0D',
    border: 'none',
    fontSize: '16px',
    cursor: 'pointer',
    // transition: 'background-color 0.3s',
  },
};

const priorityOptions = [
  { value: 'high', label: 'High' },
  { value: 'medium', label: 'Medium' },
  { value: 'low', label: 'Low' },
];

const reminderOptions = [
  { value: 'email', label: 'Email' },
  { value: 'notification', label: 'Notification' },
];

export default AddTaskForm;
