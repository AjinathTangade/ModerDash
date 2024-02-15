import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

function Calendar() {
  const handleEventDrop = (eventInfo) => {
    console.log("Event dropped:", eventInfo);
    // Handle event drop logic here
  };
  return (
    <div>
      <div>
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          weekends={true}
          events={[
            { title: "Event 1", date: "2024-02-10" },
            { title: "Event 2", date: "2024-02-15" },
          ]}
          editable={true}
          droppable={true}
          eventDrop={handleEventDrop}
        />
      </div>
    </div>
  );
}

export default Calendar;
