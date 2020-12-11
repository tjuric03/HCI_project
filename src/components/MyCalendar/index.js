import React from "react";
import moment from "moment"
import {Calendar, momentLocalizer} from 'react-big-calendar'
import events from '../../constants/events'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import styles from "./style.module.css"

const localizer = momentLocalizer(moment)


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
            />
        </div>
    )
}

export default MyCalendar