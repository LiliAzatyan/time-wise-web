import React, { useState } from 'react';
import './style.css';

const GoalTracking = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [goalData, setGoalData] = useState({
    title: '',
    description: '',
    priority: 'medium',
    startDate: '',
    completionDate: ''
  });
  const [goals, setGoals] = useState([]);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setGoalData({
      ...goalData,
      [name]: value
    });
  };

  const handlePriorityChange = (event) => {
    setGoalData({
      ...goalData,
      priority: event.target.value
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setGoals([...goals, goalData]);
    setGoalData({
      title: '',
      description: '',
      priority: 'medium',
      startDate: '',
      completionDate: ''
    });
    togglePopup(); 
  };

  const handleGoalClick = (goal) => {
    console.log("Goal clicked:", goal);
  };

  return (
    <div className="container">
      <div className='section-1'>
        <div className='welcome-box'>
          <p className='name-section'>Hi, Lily 👋</p>
          <p className='welcome-section'>Let's pursue dreams, conquer goals!</p>
        </div>
        <div className="input-btn-container">
          <input className='search-input' type="text" placeholder='Search your Goal'/>
          <button className='add-btn' onClick={togglePopup}>Add Goal</button>
        </div>
      </div>

      {isPopupOpen && (
        <div className="popup-overlay">
          <div className="popup">
            <span className="close" onClick={togglePopup}>&times;</span>
            <div className="popup-content">
              <form onSubmit={handleFormSubmit} className='form-box'>
                <input
                  type="text"
                  name="title"
                  value={goalData.title}
                  onChange={handleInputChange}
                  placeholder='Goal Title'
                  required
                />
                <textarea
                  name="description"
                  value={goalData.description}
                  onChange={handleInputChange}
                  placeholder='Goal Description'
                  rows="5"
                  required
                ></textarea>

                <div className="priority-section">
                  <p>Select Priority:</p>
                  <label>
                    <input
                      type="radio"
                      name="priority"
                      value="low"
                      checked={goalData.priority === 'low'}
                      onChange={handlePriorityChange}
                    />
                    Low
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="priority"
                      value="medium"
                      checked={goalData.priority === 'medium'}
                      onChange={handlePriorityChange}
                    />
                    Medium
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="priority"
                      value="high"
                      checked={goalData.priority === 'high'}
                      onChange={handlePriorityChange}
                    />
                    High
                  </label>
                </div>

                <div className="date-section">
                  <label>Start Date:</label>
                  <input
                    type="date"
                    name="startDate"
                    value={goalData.startDate}
                    onChange={handleInputChange}
                    required
                  />
                  <label>Completion Date:</label>
                  <input
                    type="date"
                    name="completionDate"
                    value={goalData.completionDate}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <input type="submit" value="Add Goal" className="submit-btn" />
              </form>
            </div>
          </div>
        </div>
      )}

      <div className="section-2">
        <h2>Your Goals</h2>
        <ul className="goals-list">
          {goals.map((goal, index) => (
            <li key={index} onClick={() => handleGoalClick(goal)}>
              <strong>{goal.title}</strong>
              <p>{goal.description}</p>
              <p>Priority: {goal.priority}</p>
              <p>Start Date: {goal.startDate}</p>
              <p>Completion Date: {goal.completionDate}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="section-3">section 3</div>
    </div>
  );
};

export default GoalTracking;
