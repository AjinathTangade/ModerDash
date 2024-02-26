import { notes } from "@/data/data";
import "@flaticon/flaticon-uicons/css/all/all.css";
import { useEffect, useState } from "react";
function Notes() {
  const [selectCategory, setselectCategory] = useState(null);
  const [filterNotes, setfilterNotes] = useState([]);
  const [activeButton, setActiveButton] = useState(1);

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
  return (
    <div className="w-full xl:w-7/12 xl:mx-auto mt-32 mb-20 ">
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
          <div className="flex gap-5 justify-between p-3 border rounded-lg shadow-[5px] shadow-red">
            <div className="flex gap-8">
              <button
                className={`flex items-center gap-3 ${
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
                className={`flex items-center gap-3 ${
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
                className={`flex items-center gap-3 ${
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
            <div>
              <button className="flex gap-2 items-center bg-blue-500 p-3 text-white rounded-lg text-sm font-medium">
                <span>
                  <i className="fi fi-rr-note-sticky "></i>
                </span>
                Add Notes
              </button>
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
                    <div className="flex gap-2">
                      <span className="text-gray-500 text-sm">
                        {note.icon[0]}
                      </span>
                      <span className="text-gray-500 text-sm">
                        {note.icon[1]}
                      </span>
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
