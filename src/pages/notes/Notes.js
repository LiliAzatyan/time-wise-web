import React, { useState, useEffect } from "react";
import "./notes.css";

const Notes = () => {
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  const [category, setCategory] = useState("all");
  const [notesList, setNotesList] = useState([]);
  const [editingNoteIndex, setEditingNoteIndex] = useState(null);
  const [showMotivationalWords, setShowMotivationalWords] = useState(true);

  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem("notes"));
    if (storedNotes) {
      setNotesList(storedNotes);
      if (storedNotes.length > 0) {
        setShowMotivationalWords(false);
      }
    }
  }, []);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleNoteChange = (event) => {
    setNote(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted note:", { title, note, category });
    const updatedNotes = [...notesList];
    if (editingNoteIndex !== null) {
      updatedNotes[editingNoteIndex] = { title, text: note, category };
    } else {
      updatedNotes.push({ title, text: note, category });
    }
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
    setNotesList(updatedNotes);
    setTitle("");
    setNote("");
    setCategory("all");
    setEditingNoteIndex(null);
    if (showMotivationalWords) {
      setShowMotivationalWords(false);
    }
  };

  const filterNotesByCategory = (selectedCategory) => {
    setCategory(selectedCategory);
  };

  const deleteNote = (index) => {
    if (window.confirm("Are you sure you want to delete this note?")) {
      const updatedNotes = [...notesList];
      updatedNotes.splice(index, 1);
      localStorage.setItem("notes", JSON.stringify(updatedNotes));
      setNotesList(updatedNotes);
    }
  };

  const editNote = (index) => {
    const noteToEdit = notesList[index];
    setTitle(noteToEdit.title);
    setNote(noteToEdit.text);
    setCategory(noteToEdit.category);
    setEditingNoteIndex(index);
  };

  const filteredNotes =
    category === "all"
      ? notesList
      : notesList.filter((note) => note.category === category);

  return (
    <div className="notes-app">
      <div className="category-container">
        <button
          className={`category-btn ${category === "all" ? "active" : ""}`}
          onClick={() => filterNotesByCategory("all")}
        >
          All Notes
        </button>
        <button
          className={`category-btn ${
            category === "personal" ? "active" : ""
          }`}
          onClick={() => filterNotesByCategory("personal")}
        >
          Personal
        </button>
        <button
          className={`category-btn ${category === "work" ? "active" : ""}`}
          onClick={() => filterNotesByCategory("work")}
        >
          Work
        </button>
        <button
          className={`category-btn ${
            category === "education" ? "active" : ""
          }`}
          onClick={() => filterNotesByCategory("education")}
        >
          Education
        </button>
      </div>

      <div className="notes-container">
        {showMotivationalWords && (
          <div className="motivational-words">
            <p>Start jotting down your thoughts and ideas!</p>
            <p>You got this!</p>
          </div>
        )}
        <form className="add-note-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={handleTitleChange}
            required
            style={{ maxWidth: "390px", marginTop: "10px" }}
          />
          <textarea
            id="note"
            name="note"
            rows="4"
            cols="50"
            placeholder="Add your note here..."
            value={note}
            onChange={handleNoteChange}
            required
            style={{
              maxWidth: "390px",
              minWidth: "390px",
              minHeight: "90px",
              maxHeight: "090px",
            }}
          ></textarea>
          <div className="category-add-note">
            <div className="category-select">
              <label htmlFor="category">Category:</label>
              <select
                className="select-note-type"
                id="category"
                name="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
              >
                <option value="personal">Personal</option>
                <option value="work">Work</option>
                <option value="education">Education</option>
              </select>
            </div>
            <button className="add-note-btn" type="submit">
              {editingNoteIndex !== null ? "Update Note" : "Add Note"}
            </button>
          </div>
        </form>

        <div className="notes-list">
          {filteredNotes.map((note, index) => (
            <div key={index} className="note">
              <h3>{note.title}</h3>
              <p>{note.text}</p>
              <div>
                <button onClick={() => editNote(index)}>Edit</button>
                <button onClick={() => deleteNote(index)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notes;

