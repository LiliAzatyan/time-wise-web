import React, { useState } from 'react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';

export default function TaskCard({ task, onDelete, onEdit }) {
    const [isCompleted, setIsCompleted] = useState(false);

    const handleCheckboxChange = () => {
        setIsCompleted(!isCompleted);
    };

    return (
        <div style={taskCardStyles}>
            <div style={taskHeaderStyles}>
                <input type="checkbox" checked={isCompleted} onChange={handleCheckboxChange} />
                <h3 style={{ ...taskTitleStyles, textDecoration: isCompleted ? 'line-through' : 'none' }}>
                    {task.title}
                </h3>
            </div>
            <p style={taskDescriptionStyles}>{task.description}</p>
            <p style={taskCategoryStyles}>{task.category}</p>
            <div style={{ ...priorityIndicatorStyles, backgroundColor: priorityColors[task.priority] }}>
                {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}
            </div>
            <div style={taskFooterStyles}>
                {/*<FaEdit style={iconStyles} onClick={() => onEdit(task)} />*/}
                <FaEdit style={iconStyles} />
                <FaTrashAlt style={iconStyles} onClick={() => onDelete(task)} />
            </div>
        </div>
    );
}

const taskCardStyles = {
    // width: '270px',
    height: '220px',
    backgroundColor: '#ffffff',
    padding: '10px',
    marginBottom: '10px',
    borderRadius: '8px',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
    border: '1px solid #68B37A',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
};

const taskHeaderStyles = {
    display: 'flex',
    alignItems: 'center',
};

const taskTitleStyles = {
    marginLeft: '10px',
    flex: '1',
};

const taskDescriptionStyles = {
    margin: '10px 0',
};

const taskCategoryStyles = {
    color: '#666',
    fontSize: '0.9em',
};

const priorityIndicatorStyles = {
    padding: '2px 8px',
    borderRadius: '4px',
    color: '#fff',
    fontSize: '0.8em',
};

const taskFooterStyles = {
    display: 'flex',
    justifyContent: 'flex-end',
    gap: '10px',
};

const iconStyles = {
    cursor: 'pointer',
    color: '#888',
    transition: 'color 0.3s',
};

const priorityColors = {
    none: '#D1D3D1',
    low: '#4C649E',
    medium: '#FCC858',
    high: '#FF8B7B',
};
