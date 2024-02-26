import { notes } from "@/data/data";
import "@flaticon/flaticon-uicons/css/all/all.css";
import { useState } from "react";
function NotesFilter() {
  const [selectCategory, setselectCategory] = useState(null);
  const [filterNotes, setfilterNotes] = useState([]);

  const handleCategory = (category) => {
    setselectCategory(category);
    console.log(category);
    const filterData = notes.filter(
      (category) => notes.category === "Business"
    );
    setfilterNotes(filterData);
    console.log(filterData);
  };
  return <div>NotesFilter</div>;
}

export default NotesFilter;
