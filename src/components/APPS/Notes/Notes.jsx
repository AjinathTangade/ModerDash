import { notes } from "@/data/data";
import "@flaticon/flaticon-uicons/css/all/all.css";
import { useEffect, useState } from "react";
function Notes() {
  const [selectCategory, setselectCategory] = useState(null);
  const [filterNotes, setfilterNotes] = useState([]);
  const [activeButton, setActiveButton] = useState(1);
  const [showAddNoteForm, setShowAddNoteForm] = useState(false);
  useEffect(() => {
    handleAllCategoriesClick();
  }, []);

  const handleCategory = (category, buttonIndex) => {
    setselectCategory(category);
    const filterData = notes.filter((note) => note.category === category);
    // console.log(filterData);
    setfilterNotes(filterData);
    setActiveButton(buttonIndex);
  };
  const handleAllCategoriesClick = () => {
    setselectCategory(null);
    setfilterNotes(notes);
    setActiveButton(1);
  };
  const deleteNote = (id) => {
    const deleteNotes = filterNotes.filter((note) => note.id != id);
    setfilterNotes(deleteNotes);
  };

  const toggleAddNoteForm = () => {
    setShowAddNoteForm(!showAddNoteForm);
  };

  return (
    <div className="w-full w-9/12 xl:w-8/12 xl:mx-auto mt-32 mb-20">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-10 ">
          <div className="px-5 bg-indigo-50 rounded-lg">
            <div className="flex justify-between items-center">
              <div>
                <h4 className="text-xl font-semibold leading">Notes</h4>
                <p className="text-sm text-gray-600">Best Employees</p>
              </div>
              <div>
                <img
                  src="/ChatBc.png"
                  alt="calender-img"
                  className="h-24 lg:h-36"
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex gap-5 justify-between p-3 flex-wrap border rounded-lg shadow-[5px] shadow-red relative">
            <div className="flex gap-3 md:gap-8 flex-wrap">
              <button
                className={`flex items-center gap-2 md:gap-3 ${
                  activeButton === 1
                    ? "bg-blue-500 p-3 text-white rounded-lg text-md font-medium"
                    : ""
                }`}
                onClick={() => handleAllCategoriesClick()}
              >
                <span>
                  <i className="fi fi-rr-list"></i>
                </span>
                All Notes
              </button>
              <button
                className={`flex items-center gap-2 md:gap-3 ${
                  activeButton === 2
                    ? "bg-blue-500 p-3 text-white rounded-lg text-md font-medium"
                    : ""
                }`}
                onClick={() => handleCategory("Business", 2)}
              >
                <span>
                  <i className="fi fi-sr-briefcase"></i>
                </span>
                Business
              </button>
              <button
                className={`flex items-center gap-2 md:gap-3 ${
                  activeButton === 3
                    ? "bg-blue-500 p-3 text-white rounded-lg text-md font-medium"
                    : ""
                }`}
                onClick={() => handleCategory("Social", 3)}
              >
                <span>
                  <i className="fi fi-rs-share"></i>
                </span>
                Social
              </button>
              <button
                className={`flex items-center gap-3 ${
                  activeButton === 4
                    ? "bg-blue-500 p-3 text-white rounded-lg text-md font-medium"
                    : ""
                }`}
                onClick={() => handleCategory("Important", 4)}
              >
                <span>
                  <i className="fi fi-rr-star"></i>
                </span>
                Important
              </button>
            </div>
            <div className="relative">
              <button
                className="flex gap-2 items-center bg-blue-500 p-3 text-white rounded-lg text-sm font-medium"
                onClick={toggleAddNoteForm}
              >
                <span>
                  <i className="fi fi-rr-note-sticky "></i>
                </span>
                Add Notes
              </button>
              {showAddNoteForm && (
                <div className="absolute md:right-32 border w-80 h-80 lg:w-96 rounded-lg bg-white z-10">
                  <div>
                    <div className="bg-blue-500 h-12 flex items-center px-5 rounded-t-lg">
                      <h3 className="text-white">Add Notes</h3>
                    </div>
                    <div className="px-3 pt-5 flex flex-col gap-4">
                      <div className="flex flex-col gap-2">
                        <label
                          htmlFor="Note Title"
                          className="font-semibold text-sm"
                        >
                          Note Title
                        </label>
                        <input
                          type="text"
                          placeholder="Title"
                          className="border p-2 rounded-md placeholder:text-sm placeholder:text-gray-500"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label
                          htmlFor="Note Title"
                          className="font-semibold text-sm"
                        >
                          Note Description
                        </label>

                        <textarea
                          id="message"
                          name="message"
                          rows="2"
                          className="border border-gray-200 p-2 rounded-md placeholder:text-sm placeholder:text-gray-500 "
                          placeholder="Description"
                        ></textarea>
                      </div>
                      <div className="flex justify-end gap-4 ">
                        <button className="p-2 rounded-md font-semibold text-sm text-red-400 bg-red-50 w-20 hover:bg-red-400 hover:text-white">
                          Discord
                        </button>
                        <button className="p-2 rounded-md font-semibold text-sm text-white bg-blue-300 w-16 hover:bg-blue-500 ">
                          Add
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="grid grid-row lg:grid-cols-3 gap-5 w-full">
          {filterNotes.map((note, index) => (
            <div key={index} className="flex-wrap">
              <div className="border p-5 rounded-lg">
                <div className="flex flex-col gap-6">
                  <div className="flex">
                    <div className="flex flex-col">
                      <h3 className="font-semibold text-sm group-hover:text-indigo-500">
                        {note.name}
                      </h3>
                      <p className="text-sm text-gray-500 group-hover:text-indigo-400">
                        {note.date}
                      </p>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 group-hover:text-indigo-400">
                      {note.subSlug}
                    </p>
                  </div>
                  <div className="flex justify-between">
                    <div className="flex gap-3">
                      <span className="text-gray-500 text-sm">
                        {note.icon[0]}
                      </span>
                      <button
                        className="text-red-500 text-sm"
                        onClick={() => deleteNote(note.id)}
                      >
                        {note.icon[1]}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Notes;
