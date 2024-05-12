import React, { useState, useEffect } from "react";
import "./notes.css";

const Notes = () => {
  const [title, setTitle] = useState(""); // State to manage the note title
  const [note, setNote] = useState(""); // State to manage the note value
  const [category, setCategory] = useState("all"); // State to manage the selected category
  const [notesList, setNotesList] = useState([]); // State to manage the list of notes
  const [editingNoteIndex, setEditingNoteIndex] = useState(null); // State to manage the index of the note being edited

  useEffect(() => {
    // Load notes from local storage on component mount
    const storedNotes = JSON.parse(localStorage.getItem("notes"));
    if (storedNotes) {
      setNotesList(storedNotes);
    }
  }, []);

  const handleTitleChange = (event) => {
    // Update the title state when the input value changes
    setTitle(event.target.value);
  };

  const handleNoteChange = (event) => {
    // Update the note state when the textarea value changes
    setNote(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform any action you want to do with the submitted note data
    console.log("Submitted note:", { title, note, category });
    // Save note to local storage
    const updatedNotes = [...notesList];
    if (editingNoteIndex !== null) {
      // Update existing note if editing
      updatedNotes[editingNoteIndex] = { title, text: note, category };
    } else {
      // Add new note if not editing
      updatedNotes.push({ title, text: note, category });
    }
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
    // Update notes list state
    setNotesList(updatedNotes);
    // Clear the inputs after submission
    setTitle("");
    setNote("");
    setCategory("all");
    setEditingNoteIndex(null);
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

  const filteredNotes = category === "all" ? notesList : notesList.filter(note => note.category === category);

  return (
    <div>
      <div className="category-container">
        <button className={`category-btn ${category === "all" ? "active" : ""}`} onClick={() => filterNotesByCategory("all")}>All Notes</button>
        <button className={`category-btn ${category === "personal" ? "active" : ""}`} onClick={() => filterNotesByCategory("personal")}>Personal</button>
        <button className={`category-btn ${category === "work" ? "active" : ""}`} onClick={() => filterNotesByCategory("work")}>Work</button>
        <button className={`category-btn ${category === "education" ? "active" : ""}`} onClick={() => filterNotesByCategory("education")}>Education</button>
      </div>

      {/* Add Note Form */}
      <form className="add-note-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={handleTitleChange}
          required
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
        ></textarea>
        <div className="category-select">
          <label htmlFor="category">Category:</label>
          <select id="category" name="category" value={category} onChange={(e) => setCategory(e.target.value)} required>
            <option value="personal">Personal</option>
            <option value="work">Work</option>
            <option value="education">Education</option>
          </select>
        </div>
        <button className="add-note-btn" type="submit">{editingNoteIndex !== null ? "Update Note" : "Add Note"}</button>
      </form>

      {/* Render filtered notes */}
      <div className="notes-container">
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
  );
};

export default Notes;
