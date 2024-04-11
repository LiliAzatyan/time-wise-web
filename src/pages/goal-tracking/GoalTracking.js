import React, { useState } from 'react';
import './style.css';

export default function GoalTracking() {
  const [goals, setGoals] = useState([
    {
      id: 1,
      title: 'Goal 1',
      description: 'Description for goal 1',
      dueDate: '2024-04-12',
      done: false,
      bigGoal: false
    },
    {
      id: 2,
      title: 'Goal 2',
      description: 'Description for goal 2',
      dueDate: '2024-04-13',
      done: false,
      bigGoal: false
    },
  ])

  const [newGoal, setNewGoal] = useState({
    title: '',
    description: '',
    dueDate: '',
    done: false,
    bigGoal: false
  })

  const addGoal = () => {
    setGoals((curGoals) => [...curGoals, { ...newGoal, id: goals.length + 1 }]);
    setNewGoal({
      title: "",
      description: "",
      dueDate: "",
      done: false,
      bigGoal: false
    });
  }

  const removeGoal = (id) => {
    setGoals((curGoals) => curGoals.filter((task) => task.id !== id))
  }

  const handleDone = (id) => {
    setGoals((curGoals) =>
      curGoals.map((goal) =>
        goal.id === id ? { ...goal, done: !goal.done } : goal
      )
    );
  };
  console.log(goals);

  return (
    <div>
      <div>
        <h2>Goal Tracknig</h2>
        <input
          type="text"
          className="input title-input"
          placeholder="Enter goal title"
          value={newGoal.title}
          onChange={(e) => setNewGoal({ ...newGoal, title: e.target.value })}
        />
      </div>
      <div className="add-task-description">
        <input
          type="text"
          className="input description-input"
          placeholder="Enter goal description"
          value={newGoal.description}
          onChange={(e) =>
            setNewGoal({ ...newGoal, description: e.target.value })
          }
        />
      </div>
      <div className="add-task-date">
        <input
          type="date"
          className="input date-input"
          value={newGoal.dueDate}
          onChange={(e) => setNewGoal({ ...newGoal, dueDate: e.target.value })}
        />
      </div>
      <div className="bigGoal">
        <input
          type="checkbox"
          onChange={() => newGoal.bigGoal === !newGoal.bigGoal}
        />
        <label>Is it a big goal?</label>
      </div>
      <button className="save-button" onClick={addGoal}>Save</button>

      <div className='allGoals'>
        <h2>My Goals</h2>
        <div>
          {goals.map((goal) => (
            <div className='singleGoal'>
            <div key={goal.id}>
              <h3>{goal.title}</h3>
              <p>{goal.description}</p>
              <div>
                <span>Due Date: {goal.dueDate || "Not set"}</span>
              </div>
            </div>
              <div>
                <input
                  type="checkbox"
                  checked={goal.done}
                  onChange={() => handleDone(goal.id)}
                />
                <label>Mark as done</label>
              <button className='goalBtn' onClick={() => removeGoal(goal.id)}>Remove</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
