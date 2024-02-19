import React, { useState, useEffect } from "react";
import Popup from "./Popup";

function Kanban() {
  const [notes, setNotes] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [newNoteName, setNewNoteName] = useState("");

  useEffect(() => {
    // Initialize with four default notes, each with the same content
    const defaultNoteContent = [
      { content: "Note 1", tasks: [] },
      { content: "Note 2", tasks: [] },
      { content: "Note 3", tasks: [] },
      { content: "Note 4", tasks: [] },
    ];
    setNotes(defaultNoteContent);
  }, []);

  const handleAddNote = () => {
    setShowPopup(true); // Show the popup for adding a new note
  };

  const handleConfirmAddNote = (inputValue, editIndex) => {
    // Create a new note object with the provided note name
    const newNote = {
      content: inputValue.trim() !== "" ? inputValue : "New Note", // Use the provided note name or default to "New Note"
      tasks: [],
    };

    if (editIndex !== null && editIndex !== undefined) {
      // If editing an existing note, replace the note at the specified index
      const updatedNotes = [...notes];
      updatedNotes[editIndex] = newNote;
      setNotes(updatedNotes);
    } else {
      // If adding a new note, append the new note to the existing notes
      setNotes([...notes, newNote]);
    }

    setShowPopup(false); // Close the popup
  };

  const handleEdit = (index) => {
    // Get the content of the note at the specified index
    const noteContent = notes[index].content;
    // Set the initial content of the popup to the note content
    setNewNoteName(noteContent);
    // Show the popup for editing the note
    setShowPopup(true);
  };

  const handleDelete = (index) => {
    const updatedNotes = [...notes];
    updatedNotes.splice(index, 1); // Remove the note at the specified index
    setNotes(updatedNotes);
  };

  const handleCancelAddNote = () => {
    setShowPopup(false); // Close the popup without adding a new note
  };

  const handleAddTask = (noteIndex, taskContent) => {
    const updatedNotes = [...notes];
    // Add the new task to the specified note
    updatedNotes[noteIndex].tasks.push(taskContent);
    setNotes(updatedNotes);
  };

  return (
    <div className="w-full xl:w-7/12 xl:mx-auto mt-32 mb-20">
      <div className="flex flex-col gap-10 ">
        <div className="px-5 bg-indigo-50 rounded-lg">
          <div className="flex justify-between items-center">
            <div>
              <h4 className="text-xl font-semibold leading">Kanban</h4>
              <p className="text-sm text-gray-600">Best Employees</p>
            </div>
            <div>
              <img src="/ChatBc.png" alt="calender-img" className="h-36" />
            </div>
          </div>
        </div>
        <div className=" flex justify-end ">
          <button
            onClick={handleAddNote}
            className="bg-blue-500 p-3 text-white rounded-lg text-sm font-medium"
          >
            Add Note
          </button>
        </div>
        <div>
          {showPopup && (
            <Popup
              isOpen={showPopup}
              onClose={handleCancelAddNote}
              onConfirm={handleConfirmAddNote}
              onCancel={handleCancelAddNote}
              newNoteName={newNoteName}
              setNewNoteName={setNewNoteName}
            />
          )}
          {notes.map((note, index) => (
            <div key={index}>
              <p>{note.content}</p>
              <button onClick={() => handleEdit(index)}>Edit</button>
              <button onClick={() => handleDelete(index)}>Delete</button>
              <input
                type="text"
                placeholder="Add Task"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleAddTask(index, e.target.value);
                    e.target.value = "";
                  }
                }}
              />
              <ul>
                {note.tasks.map((task, taskIndex) => (
                  <li key={taskIndex}>{task}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Kanban;
