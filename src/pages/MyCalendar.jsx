import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import "react-big-calendar/lib/css/react-big-calendar.css";

export const MyCalendar = () => {
    const localizer = momentLocalizer(moment)
    const state = {
        events: [
          {
            start: moment().toDate(),
            end: moment()
              .add(1, "hours")
              .toDate(),
            title: "Tooth extraction"
          },  
          {
            start: moment().toDate(),
            end: moment()
              .add(1, "hours")
              .toDate(),
            title: "Floss"
          }
        ]
      };

  return (
    <div className='bg-gray-100 h-screen text-center items-center flex flex-col col-10 container-fluid pt-[4rem]'>
       <Calendar
      localizer={localizer}
      events={state.events}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 800, width:1500 }}
    />
    </div>
  )
}
