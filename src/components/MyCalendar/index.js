import React, { Children } from "react"
import moment from "moment"
import { Calendar, momentLocalizer } from "react-big-calendar"
import events, { colors } from "../../constants/events"
// import 'react-big-calendar/lib/css/react-big-calendar.css';
import styles from "./style.module.css"
import "./cal.scss"
import Tippy, { roundArrow, tippy } from "@tippyjs/react"
import "react-tippy/dist/tippy.css"
import "tippy.js/themes/light.css"
import {AiFillClockCircle} from "react-icons/ai"
import {MdLocationOn} from "react-icons/md"
import {GiLaurelsTrophy} from "react-icons/gi"

moment.locale("hr")
const localizer = momentLocalizer(moment)

const EventComponent = ({ event }) => {
  return (
    <Tippy
      content={
        <div className={styles.popup}>
          <div><MdLocationOn size="32px" className={styles.icons}/>{event.location}</div>
          <div> <AiFillClockCircle size="32px" className={styles.icons}/>{`${event.start.toLocaleTimeString("hr", {
            hour12: true,
            hour: "2-digit",
            minute: "2-digit",
          })} - ${event.end.toLocaleTimeString("hr", {
            hour12: true,
            hour: "2-digit",
            minute: "2-digit",
          })}`}</div>
          <div><GiLaurelsTrophy size="32px" className={styles.icons}/>{event.title}</div>
        </div>
      }
      interactive={true}
      trigger="click"
      theme={"light"}
      placement={"bottom"}
      offset={[0, -10]}
      zIndex={"1000"}
      arrow = {true}
      appendTo={() =>
        document.querySelector(".style-module--calendarContainer--2RFKR")
      }
      delay={[100, 0]}
      
    >
      <div className="rbc-event-content" title={event.title}>
        {event.sport}
      </div>
    </Tippy>
  )
}

const MyCalendar = () => {

  return (
    <div className={styles.calendarContainer}>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        popup={true}
        className={styles.calendar}
        components={{ event : EventComponent }}
        eventPropGetter={(event, start, end, isSelected) => {
          let newStyle = {
            backgroundColor: colors[event.sport],
            color: "black",
          }
          return {
            className: "",
            style: newStyle,
          }
        }}
        onSelectEvent={event => {
          console.log("Clicked")
        }}
      />
    </div>
  )
}

export default MyCalendar
