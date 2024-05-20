import React, { useState, useEffect } from 'react';
import Chart from 'chart.js/auto';
import img from './goals-pictures/motivation-pictures.png';
import './style.css';

const GoalTracking = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [goalData, setGoalData] = useState({
    title: '',
    description: '',
    priority: 'medium',
    startDate: '',
    completionDate: '',
    category: 'work',
  });
  const [goals, setGoals] = useState([]);
  const [chartPriority, setChartPriority] = useState(null);
  const [chartCompletion, setChartCompletion] = useState(null);

  useEffect(() => {
    const storedGoals = JSON.parse(localStorage.getItem('goals'));
    if (storedGoals) {
      setGoals(storedGoals);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('goals', JSON.stringify(goals));
    updateCharts();
  }, [goals]);

  const updatePriorityChart = (data) => {
    if (chartPriority) {
      chartPriority.data.datasets = data.map((dataset, index) => ({
        label: `Goals by Priority - ${['Work', 'Learning', 'Life'][index]}`,
        data: dataset,
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
        ],
        borderWidth: 1,
      }));

      chartPriority.update();
    }
  };

  const updateCompletionChart = (data) => {
    if (chartCompletion) {
      chartCompletion.data.datasets[0].data = data;
      chartCompletion.update();
    }
  };

  const updateCharts = () => {
    const priorityData = {
      low: { work: 0, learning: 0, life: 0 },
      medium: { work: 0, learning: 0, life: 0 },
      high: { work: 0, learning: 0, life: 0 },
    };

    const completedData = {
      completed: goals.filter(goal => !!goal.completionDate).length,
      notCompleted: goals.filter(goal => !goal.completionDate).length
    };

    goals.forEach((goal) => {
      priorityData[goal.priority][goal.category]++;
    });

    updatePriorityChart([
      [
        priorityData.low.work,
        priorityData.medium.work,
        priorityData.high.work,
      ],
      [
        priorityData.low.learning,
        priorityData.medium.learning,
        priorityData.high.learning,
      ],
      [
        priorityData.low.life,
        priorityData.medium.life,
        priorityData.high.life,
      ],
    ]);

    updateCompletionChart([completedData.completed, completedData.notCompleted]);
  };

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
    const updatedGoals = [...goals, goalData];
    setGoals(updatedGoals);
    setGoalData({
      title: '',
      description: '',
      priority: 'medium',
      startDate: '',
      completionDate: '',
      category: 'work',
    });
    localStorage.setItem('goals', JSON.stringify(updatedGoals)); 
    togglePopup();
  };

  const handleGoalClick = (goalIndex) => {
    const updatedGoals = [...goals];
    updatedGoals.splice(goalIndex, 1);
    setGoals(updatedGoals);
    localStorage.setItem('goals', JSON.stringify(updatedGoals));
  };

  useEffect(() => {
    const priorityCtx = document.getElementById('priorityChart');
    const completionCtx = document.getElementById('completionChart');

    if (priorityCtx && completionCtx && !chartPriority && !chartCompletion) {
      setChartPriority(new Chart(priorityCtx, {
        type: 'bar',
        data: {
          labels: ['Low', 'Medium', 'High'],
          datasets: [],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      }));

      setChartCompletion(new Chart(completionCtx, {
        type: 'doughnut',
        data: {
          labels: ['Completed', 'Not Completed'],
          datasets: [{
            label: 'Goals Completion Status',
            data: [0, 0],
            backgroundColor: [
              'rgba(75, 192, 192, 0.5)',
              'rgba(255, 99, 132, 0.5)',
            ],
            hoverOffset: 4,
          }],
        },
      }));
    }

    return () => {
      if (chartPriority) {
        chartPriority.destroy();
      }
      if (chartCompletion) {
        chartCompletion.destroy();
      }
    };
  }, [chartPriority, chartCompletion]);

  return (
    <div className="container"> 
      <div className='section-1'>
        <div className='welcome-box'>
          <p className='name-section'>Hi, TimeWiser 👋</p>
          <p className='welcome-section'>Let's pursue dreams, conquer goals!</p>
        </div>
        <div className="input-btn-container">
          <input className='search-input' type="text" placeholder='Search your Goal'/>
          <button className='add-btn' onClick={togglePopup}>Add Goal</button>
        </div>
      </div>

      {isPopupOpen && (
        <div className="popup-overlay">
            <div className="popup-content">
              <form onSubmit={handleFormSubmit} className='form-box'>
              <span className="close" onClick={togglePopup}>&times;</span>
                <input style={{maxWidth: "99%", minWidth: "99%", border: "2px solid #F99B0D", marginTop: "30px", marginLeft: "1.5px"}}
                  type="text"
                  name="title"
                  value={goalData.title}
                  onChange={handleInputChange}
                  placeholder='Goal Title'
                  required
                />
                <textarea style={{maxWidth: "99%", minWidth: "99%", border: "2px solid #F99B0D", marginLeft: "1.5px"}}
                  name="description"
                  value={goalData.description}
                  onChange={handleInputChange}
                  placeholder='Goal Description'
                  rows="5"
                  required
                ></textarea>

                <div className="priority-section">
                  <p>Select Priority:</p>
                  <div className='priority-box'>
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
                </div>

                <div className="category-section">
                  <p>Select Category:</p>
                  <select
                    name="category"
                    value={goalData.category}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="work">Work</option>
                    <option value="learning">Learning</option>
                    <option value="life">Life</option>
                  </select>
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
      )}

<div className="section-2">
  <h2 className='Goal-list-title'>Your Goals</h2>
  <div className="goals-container">
    <ul className="goals-list">
      {goals.map((goal, index) => (
        <li key={index} className="goal-item">
          <div className="goal-details">
            <strong>{goal.title}</strong>
            <p>{goal.description}</p>
            <p>Priority: {goal.priority}</p>
            <p>Category: {goal.category}</p>
            <p>Start Date: {goal.startDate}</p>
            <p>Completion Date: {goal.completionDate || 'Not Completed'}</p>
          </div>
          <button className="delete-btn" onClick={() => handleGoalClick(index)}>Delete</button>
        </li>
      ))}
    </ul>
  </div>
</div>

      <div className="section-3">
        <div className="charts-container">
          <div className="chart">
            <h3>Goals by Priority</h3>
            <canvas id="priorityChart" width="200" height="150"></canvas>
          </div>
          <div className="side-content" style={{ maxWidth: "100%" }}>
            <h3>Motivational Words</h3>
            <p>Stay focused and keep moving forward!</p>
            <img src={img} alt="motivation-picture" style={{ maxWidth: "100%", height: "auto" }} />
            {/* <img src={img} alt="motivation-picture" style={{width: "400px", height: "400px"}}/> */}
          </div>
          <div className="chart">
            <h3>Goals Completion Status</h3>
            <canvas id="completionChart" width="200" height="150"></canvas>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoalTracking;