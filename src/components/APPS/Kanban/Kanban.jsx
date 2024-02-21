import React, { useState, useEffect, useRef } from "react";
import Popup from "./Popup";

function Kanban() {
  const [notes, setNotes] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [newNoteName, setNewNoteName] = useState("");

  useEffect(() => {
    // Initialize with four default notes, each with different tasks containing dates and images
    const defaultNoteContent = [
      {
        content: "Todo",
        tasks: [
          {
            content: "Task 1",
            date: "2024-02-06",
            image: "/path/to/image1.jpg",
          },
          {
            content: "Task 2",
            date: "2024-02-07",
            image: "/path/to/image2.jpg",
          },
        ],
        color: "#eaeff4",
      },
      {
        content: "In Progress",
        tasks: [
          {
            content: "Task 3",
            date: "2024-02-08",
            image: "/path/to/image3.jpg",
          },
          {
            content: "Task 4",
            date: "2024-02-09",
            image: "/path/to/image4.jpg",
          },
        ],
        color: "#ecf8ff",
      },
      {
        content: "Pending",
        tasks: [
          {
            content: "Task 5",
            date: "2024-02-10",
            image: "/path/to/image5.jpg",
          },
          {
            content: "Task 6",
            date: "2024-02-11",
            image: "/path/to/image6.jpg",
          },
        ],
        color: "#ebf3fe",
      },
      {
        content: "Done",
        tasks: [
          {
            content: "Task 7",
            date: "2024-02-12",
            image: "/path/to/image7.jpg",
          },
          {
            content: "Task 8",
            date: "2024-02-13",
            image: "/path/to/image8.jpg",
          },
        ],
        color: "#e6fffa",
      },
    ];

    setNotes(defaultNoteContent);
  }, []); // Empty dependency array ensures the effect runs only once

  const handleAddNote = () => {
    setShowPopup(true); // Show the popup for adding a new note
  };

  const handleConfirmAddNote = (inputValue, editIndex) => {
    // Generate a random color
    const colors = ["#eaeff4", "#ecf8ff", "#ebf3fe", "#e6fffa"]; // Define available colors
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    // Create a new note object with the provided note name and random color
    const newNote = {
      content: inputValue.trim() !== "" ? inputValue : "New Note",
      tasks: [],
      color: randomColor,
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

  // Calculate the height of the note based on its content
  const calculateNoteHeight = (noteIndex) => {
    // Get the reference to the note content element
    const noteContentElement = noteContentRefs.current[noteIndex];
    //console.log(noteContentElement)
    // Check if the note content element exists before accessing its scrollHeight
    if (noteContentElement) {
      return noteContentElement.scrollHeight;
    }
    return 0; // Return 0 if the note content element is undefined
  };

  // Refs to store references to note content elements
  const noteContentRefs = useRef([]);

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
          <div className="flex flex-wrap gap-10 justify-center h-52">
            {notes.map((note, index) => (
              <div
                key={index}
                className="rounded-lg"
                style={{
                  height: calculateNoteHeight(index),
                  backgroundColor: note.color,
                }}
              >
                <div
                  className="rounded-lg p-3 flex flex-col gap-3 w-60 "
                  style={{ backgroundColor: note.color }}
                >
                  <div className="flex justify-between">
                    <h3 className="text-md font-medium">{note.content}</h3>
                    <div className="flex gap-4">
                      <button
                        className="font-medium text-sm text-blue-600 hover:text-blue-200"
                        onClick={() => handleEdit(index)}
                      >
                        <i className="fi fi-rr-edit"></i>
                      </button>
                      <button
                        className="font-medium text-md text-red-600 hover:text-red-200"
                        onClick={() => handleDelete(index)}
                      >
                        <i className="fi fi-rs-trash"></i>
                      </button>
                    </div>
                  </div>
                  <div>
                    <input
                      type="text"
                      className="w-full p-1 border border-indigo-300 rounded-md outline-none placeholder:text-sm placeholder:p-2"
                      placeholder="Add Task"
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          handleAddTask(index, e.target.value);
                          e.target.value = "";
                        }
                      }}
                    />
                  </div>
                  <div>
                    {notes.map((note, noteIndex) => (
                      <div key={noteIndex}>
                        <h2>{note.content}</h2>
                        <ul>
                          {note.tasks.map((task, taskIndex) => (
                            <li key={taskIndex}>
                              <div>
                                <p>{task.content}</p>
                                <p>{task.date}</p>
                                <img src={task.image} alt={task.content} />
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Kanban;
