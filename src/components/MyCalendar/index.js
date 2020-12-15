import React from "react";
import moment from "moment"
import {Calendar, momentLocalizer} from 'react-big-calendar'
import events,{colors} from '../../constants/events'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import styles from "./style.module.css"

moment.locale("hr");
const localizer = momentLocalizer(moment);

const MyCalendar = () =>{
    return (
        <div className={styles.calendarContainer}> 
            <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            popup = {true}
            className={styles.calendar}

            eventPropGetter={
                (event, start, end, isSelected) => {
                    console.log(event);
                  let newStyle = {
                    backgroundColor: colors[event.sport],
                    color: 'black',
                  };
                  if (isSelected){
                      newStyle.backgroundColor = "darken(colors[event.sport], 10%)"
                  }
                  return {
                    className: "",
                    style: newStyle
                  };
                }
            }

            onSelectEvent={
                (event,e) => {
                    console.log(e);
                    let asdf = {
                        backgroundColor: "red",
                        color: "black"
                    }
                }
            }
            />
        </div>
    )
}

export default MyCalendar