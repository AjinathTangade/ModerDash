import React, { useState, useEffect, useRef } from "react";
import Popup from "./Popup";

function Kanban() {
  const [notes, setNotes] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [newNoteName, setNewNoteName] = useState("");

  useEffect(() => {
    // Initialize with four default notes, each with different tasks
    const defaultNoteContent = [
      {
        content: "Todo",
        tasks: [
          { content: "This is first task", date: "2024-02-03", image: "/my-card.jpg" },
          { content: "Do some projects on React Native with Flutter", date: "2024-02-06" },
          
        ],
        color: "#eaeff4",
      },
      {
        content: "In Progress",
        tasks: [
          {
            content: "Do some projects on React Native with Flutter",
            date: "2024-02-08",
          },
          {
            content: "Persona development",
            date: "2024-02-23",
            desc: "Create user personas based on the research data to represent different user groups and their characteristics, gols, and behaviors..",
          },
          { content: "Usability testing", date: "2024-02-09", image: "/weatherbg.jpg" },
          {
            content: "First design concept",
            date: "2024-02-12",
          },
        ],
        color: "#ecf8ff",
      },
      {
        content: "Pending",
        tasks: [
          { content: "Redesign overview", date: "2024-02-10", image: "/kanban-img-2.jpg" },
          { content: "Design navigation changes", date: "2024-02-11", desc:"Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text." },
          { content: "Introduce new navigation", date: "2024-02-16" },
        ],
        color: "#ebf3fe",
      },
      {
        content: "Done",
        tasks: [
          {
            content: "Competitor research",
            desc:"research competitors and identify weakness and strengths each of them. comparing their product features, quelity...",
            date: "2024-02-21",
          },
          {
            content: "Branding visual identity",
            date: "2024-02-04",
            image: "/kanban-img-1.jpg",
          },
          {
            content: "Do some projects on React Native with Flutter",
            date: "2024-02-17",
          },
        ],
        color: "#e6fffa",
      },
    ];

    setNotes(defaultNoteContent);
  }, []);

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
    updatedNotes[noteIndex].tasks.push({ content: taskContent });
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
    <div className="lg:w-full xl:w-7/12 xl:mx-auto mt-24 lg:mt-32 lg:mb-20">
      <div className="flex flex-col gap-8 lg:gap-10 ">
        <div className="px-5 bg-indigo-50 rounded-lg">
          <div className="flex justify-between items-center">
            <div>
              <h4 className="text-xl font-semibold leading">Kanban</h4>
              <p className="text-sm text-gray-600">Best Employees</p>
            </div>
            <div>
              <img src="/ChatBc.png" alt="calender-img" className="h-24 lg:h-36" />
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center texa-md md:text-lg font-semibold">
        <h2>Improving Work Processes</h2>
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
          <div className="flex overflow-x-auto  gap-5  h-screen z-30">
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
                  className="rounded-lg p-3 flex flex-col gap-3 w-64 "
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
                    <div className="flex flex-col gap-5">
                      {note.tasks.map((task, taskIndex) => (
                        <div
                          key={taskIndex}
                          className="border flex flex-col bg-white rounded-lg"
                        >
                          <div className="p-2">
                            <h3 className="text-sm font-medium">
                              {task.content}
                            </h3>
                          </div>
                          <div>
                            {task.image && (
                              <img
                                src={task.image}
                                alt={task.content}
                                className="h-24 w-full"
                              />
                            )}
                            {task.desc && (
                            <p className="p-2 leading-norm text-sm font-mediuma text-gray-500">{task.desc}</p>
                          
                            )}
                          </div>
                          <div className="p-2">
                            <p className="text-sm font-medium">{task.date}</p>
                          </div>
                        </div>
                      ))}
                    </div>
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
