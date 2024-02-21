import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { useState } from "react";

function Calendar() {
  const [events, setEvents] = useState([
    { title: "Event 1", date: "2024-02-10" },
    { title: "Event 2", date: "2024-02-15" },
    // Add more events as needed
  ]);

  const handleDateSelect = (arg) => {
    // Create a new event object
    const newEvent = {
      title: "New Event",
      start: arg.start,
      end: arg.end,
      allDay: arg.allDay,
    };

    // Add the new event to the events array
    setEvents([...events, newEvent]);
  };
  const handleEventDrop = (eventInfo) => {
    console.log("Event dropped:", eventInfo);
    // Handle event drop logic here
  };

  return (

    <div className="w-full xl:w-7/12 xl:mx-auto mt-24 lg:mt-32 lg:mb-20">
    <div className="flex flex-col gap-10 ">
      <div className="px-5 bg-indigo-50 rounded-lg">
        <div className="flex justify-between items-center">
          <div>
            <h4 className="text-xl font-semibold leading">Calendar</h4>
            <p className="text-sm text-gray-600">Best Employees</p>
          </div>
          <div>
            <img src="/ChatBc.png" alt="calender-img" className="h-24 lg:h-36" />
          </div>
        </div>
      </div>
      <div className="shadow-sm rounded-lg border border-indigo-100 border-0.5 p-3 lg:p-8 h-screen">
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay",
          }}
          weekends={true}
          // events={[
          //   { title: "Event 1", date: "2024-02-10" },
          //   { title: "Event 2", date: "2024-02-15" }
          // ]}
          editable={true}
          droppable={true}
          eventDrop={handleEventDrop}
          events={events}
          selectable={true}
          select={handleDateSelect}
          style={{
            /* Add your inline CSS styles here */
            border: "3px solid red",
            /* Other styles */
          }}
        />
      </div>
    </div>
    </div>
  );
}

export default Calendar;
