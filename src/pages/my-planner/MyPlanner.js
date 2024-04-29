// import React, { useState } from "react";
// import AddTaskForm from "../../components/AddTaskForm";
// import TaskList from "../../components/TaskList";
// import TypingAnimation from "../../components/TypingAnimation";

// function MyPlanner() {
//   const [tasks, setTasks] = useState([]);

//   const handleTaskChange = (taskId) => {
//     setTasks((prevTasks) =>
//       prevTasks.map((task) =>
//         task.id === taskId ? { ...task, completed: !task.completed } : task
//       )
//     );
//   };

//   const handleDelete = (taskId) => {
//     setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
//   };

//   const handleSave = (newTask) => {
//     setTasks((prevTasks) => [
//       ...prevTasks,
//       { ...newTask, id: prevTasks.length + 1 },
//     ]);
//   };

//   const handleCancel = () => {
//     console.log("Action cancelled!");
//   };

//   return (
//     <div style={{ display: 'flex' }}>
//       <div className="daily-tasks-container" style={styles.container}>
//         <div style={styles.leftPanel}>
//           <AddTaskForm onSave={handleSave} onCancel={handleCancel} />
//         </div>
//         <div style={styles.rightPanel}>
//           <TaskList
//             tasks={tasks}
//             handleTaskChange={handleTaskChange}
//             handleDelete={handleDelete}
//           />
//         </div>
//       </div>
//       <div className="animationDiv"  style={animationStyles}>
//         <TypingAnimation text={"Every step you take brings you closer to your dreams. Keep moving forward."} />
//       </div>
//     </div>
//   );
// }

// const styles = {
//   container: {
//     display: "flex",
//     flexDirection: "column",
//     height: "100%",
//   },
//   leftPanel: {
//     flex: "1",
//     marginLeft: "15px",
//     marginRight: "auto",
//     width: "100vh",
//   },
//   rightPanel: {
//     marginRight: "auto",
//     width: "100%",
//   },
// };
// const animationStyles = {
//     color: '#7BD6D4'
//   };

// export default MyPlanner;


import React, { useState, useEffect } from "react";
import AddTaskForm from "../../components/AddTaskForm";
import TaskList from "../../components/TaskList";
import TypingAnimation from "../../components/TypingAnimation";

function MyPlanner() {
  const [tasks, setTasks] = useState([]);

  // Load tasks from local storage when component mounts
  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  // Save tasks to local storage when tasks state updates
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
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

  const handleSave = (newTask) => {
    setTasks((prevTasks) => [
      ...prevTasks,
      { ...newTask, id: prevTasks.length + 1 },
    ]);
  };

  const handleCancel = () => {
    console.log("Action cancelled!");
  };

  return (
    <div style={{ display: 'flex' }}>
      <div className="daily-tasks-container" style={styles.container}>
        <div style={styles.leftPanel}>
          <AddTaskForm onSave={handleSave} onCancel={handleCancel} />
        </div>
        <div style={styles.rightPanel}>
          <TaskList
            tasks={tasks}
            handleTaskChange={handleTaskChange}
            handleDelete={handleDelete}
          />
        </div>
      </div>
      <div className="animationDiv"  style={animationStyles}>
        <TypingAnimation text={"Every step you take brings you closer to your dreams. Keep moving forward."} />
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
  },
  leftPanel: {
    flex: "1",
    marginLeft: "15px",
    marginRight: "auto",
    width: "100vh",
  },
  rightPanel: {
    marginRight: "auto",
    width: "100%",
  },
};
const animationStyles = {
    color: '#7BD6D4'
  };

export default MyPlanner;
