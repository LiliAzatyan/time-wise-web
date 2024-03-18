import { memo, useState } from "react";
import { Input, Radio } from "antd";
import TextArea from "antd/es/input/TextArea";

const HomePage = () => {
  let taskObject = {
    title: "",
    description: "",
    today: false,
    image: "",
    important: false,
  };
  let [image, setImage] = useState([]);
  let [state, setState] = useState("flex");
  let [states, setStates] = useState("flex");
  let [stat, setStat] = useState("flex");
  let [taskArr, setTaskArr] = useState([]);
  let [title, setTitle] = useState("");
  let [description, setDescription] = useState("");
  let [today, setToday] = useState(false);
  let [important, setImportant] = useState(false);
  let taskToday = [];
  let taskImportant = [];
  let importanToday = [];
  let byDefault = [];
  [
    taskObject.title,
    taskObject.description,
    taskObject.today,
    taskObject.important,
  ] = [title, description, today, important];

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  taskArr.map((elm) => {
    if (elm.today === true && elm.important === false) {
      return taskToday.push(elm);
    } else if (elm.important === true && elm.today === false) {
      return taskImportant.push(elm);
    } else if (elm.important === true && elm.today === true) {
      return importanToday.push(elm);
    } else {
      return byDefault.push(elm);
    }
  });

  const removeTask = (index, taskType) => {
    setTaskArr((prevState) => prevState.filter((_, i) => i !== index));
    if (taskType === "today") {
      setSelectedTasksToday((prevState) => prevState.filter((item) => item !== index));
    } else if (taskType === "important") {
      setSelectedTasksImportant((prevState) => prevState.filter((item) => item !== index));
    } else if (taskType === "importantToday") {
      setSelectedTasksImportantToday((prevState) => prevState.filter((item) => item !== index));
    }
  };


  const [selectedTasksToday, setSelectedTasksToday] = useState([]);
  const [selectedTasksImportant, setSelectedTasksImportant] = useState([]);
  const [selectedTasksImportantToday, setSelectedTasksImportantToday] = useState([]);

  const toggleTaskSelectionToday = (index) => {
    setSelectedTasksToday((prevState) => toggleTaskSelection(prevState, index));
  };

  const toggleTaskSelectionImportant = (index) => {
    setSelectedTasksImportant((prevState) => toggleTaskSelection(prevState, index));
  };

  const toggleTaskSelectionImportantToday = (index) => {
    setSelectedTasksImportantToday((prevState) => toggleTaskSelection(prevState, index));
  };

  const toggleTaskSelection = (prevState, index) => {
    if (prevState.includes(index)) {
      return prevState.filter((item) => item !== index);
    }
    return [...prevState, index];
  };


  const styles = {
    base: {
      display: "flex",
      position: "relative",
      // backgroundColor: "gray",
      // height: '100%'
    },
    left: {
      // backgroundColor: "red",
      width: "50%",
      height: "100%",
      marginLeft: '50px'
    },
    right: {
      position: "absolute", // Position the right part absolutely
      top: 0, // Position it at the top of the container
      right: 0, // Position it at the right of the container
      display: "block",
      // backgroundColor: "blue", // Example background color
      width: "40%", // Adjust width as needed
      height: "100%", // Ensure it takes full height of the container
      content: {
        display: "grid",
      },
      buttons: {
        display: "flex",
        margin: "auto",
        color: "gray",
      },
    },
  };

  return (
    <div style={styles.base}>
      <div style={styles.left}>
        <div style={styles.left.items}>
          <div style={{ display: "ruby-text" }}>
            <Radio.Button
              onClick={() => setState(state === "none" ? "flex" : "none")}
            >
              Today
            </Radio.Button>
            <Radio.Button
              onClick={() => setStates(states === "none" ? "flex" : "none")}
            >
              Important
            </Radio.Button>
            <Radio.Button
              onClick={() => setStat(stat === "none" ? "flex" : "none")}
            >
              Important & Today
            </Radio.Button>
            <Radio.Button>Invite</Radio.Button>
          </div>
          <div>
            {taskToday.map((elm, index) => (
              <div
                style={{
                  display: state,
                  flexDirection: "column",
                  border: "1px solid",
                  borderRadius: "10px",
                  backgroundColor: selectedTasksToday.includes(index) ? "#996A0C" : '#FFF1D4' , // Change color when selected

                  alignItems: "center",
                  boxShadow: "0px 0px 30px rgba(0, 0, 0, 0.4)",
                  marginTop: "20px",
                }}
                id={index}
                key={index}
                onClick={() => toggleTaskSelectionToday(index)}
                onDoubleClick={() => removeTask(index, "today")}
              >
                <h2>Today's: Task{index + 1}</h2>
             
                <label>{elm.title}</label>
                <h4>Today's: Description</h4>
                <label>{elm.description}</label>
              </div>
            ))}

            {taskImportant.map((elm, index) => (
              <div
                style={{
                  display: states,
                  flexDirection: "column",
                  border: "1px solid",
                  borderRadius: "10px",
                  alignItems: "center",
                  backgroundColor: selectedTasksImportant.includes(index) ? "#996A0C" : '#FFF1D4' , // Change color when selected
                  boxShadow: "0px 0px 30px rgba(0, 0, 0, 0.4)",
                  marginTop: "20px",
                }}
                id={index}
                key={index}
                onClick={() => toggleTaskSelectionImportant(index)}
                onDoubleClick={() => removeTask(index, "important")}
              >
                <h2>Important: Task{index + 1}</h2>
                <label>{elm.title}</label>
                <h4>Important: Description</h4>
                <label>{elm.description}</label>
              </div>
            ))}

            {importanToday.map((elm, index) => (
              <div
                style={{
                  display: stat,
                  flexDirection: "column",
                  border: "1px solid",
                  backgroundColor: selectedTasksImportantToday.includes(index) ? "#996A0C" : '#FFF1D4' , // Change color when selected
                  borderRadius: "10px",
                  alignItems: "center",
                  boxShadow: "0px 0px 30px rgba(0, 0, 0, 0.4)",
                  marginTop: "20px",
                }}
                id={index}
                key={index}
                onClick={() => toggleTaskSelectionImportantToday(index)}
                onDoubleClick={() => removeTask(index, "importantToday")}
                
              >
                <h2>Important & Today: Task{index + 1}</h2>
                <label>{elm.title}</label>
                <h4>Important & Today: Description</h4>
                <label>{elm.description}</label>
              </div>
            ))}
{/* 
            {byDefault.map((elm, index) => (
              <div
                style={{
                  flexDirection: "column",
                  border: "1px solid",
                  borderRadius: "10px",
                  alignItems: "center",
                }}
                id={index}
                key={index}
              >
                <h2>Task{index + 1}</h2>
                <label>{elm.title}</label>
                <h4>Description</h4>
                <label>{elm.description}</label>
              </div>
            ))} */}
          </div>
        </div>
      </div>
      <div style={styles.right}>
        <div styles={styles.right.content}>
          <h1 className="create-task">Create Your Task</h1>
          <Input
            placeholder="Type your task name"
            value={title}
            onChange={(e) => setTitle((title = e.target.value))}
            style={{ width: "400px" }}
          />

          <TextArea
            placeholder="Type description"
            value={description}
            style={{ width: "400px" }}
            onChange={(e) => setDescription((description = e.target.value))}
          />
          <div style={styles.right.buttons}>
            <Radio.Button onClick={() => setToday(!today)}>Today</Radio.Button>
            <Radio.Button onClick={() => setImportant(!important)}>
              Important
            </Radio.Button>
            {/* <label className={style.lab}>
            Choose photo
            <Input type="file" accept="image/*" onChange={handleImageChange} style={{ backgroundColor: "transparent", display: "none", cursor: "pointer" }} />
          </label> */}
            <Radio.Button
              onClick={() =>
                setTaskArr(
                  [...taskArr, { title, description, today, image, important }],
                  setToday((today = false)),
                  setImportant((important = false)),
                  setImage((image = "")),
                  setTitle(""),
                  setDescription("")
                )
              }
              style={{
                backgroundColor: "green",
                color: "white",
              }}
            >
              Submit
            </Radio.Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(HomePage);