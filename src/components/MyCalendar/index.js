import React from "react"
import moment from "moment"
import { Calendar, momentLocalizer } from "react-big-calendar"
import events, { colors } from "../../constants/events"
import styles from "./style.module.css"
import "./cal.scss"
import clsx from 'clsx'
import classNames from "classnames"

import Tippy from "@tippyjs/react"
import "tippy.js/themes/light.css"

import {AiFillClockCircle} from "react-icons/ai"
import {MdLocationOn} from "react-icons/md"
import {GiLaurelsTrophy} from "react-icons/gi"


function LightenDarkenColor(col, amt) {
  
  var usePound = false;

  if (col[0] === "#") {
      col = col.slice(1);
      usePound = true;
  }

  var num = parseInt(col,16);

  var r = (num >> 16) + amt;

  if (r > 255) r = 255;
  else if  (r < 0) r = 0;

  var b = ((num >> 8) & 0x00FF) + amt;

  if (b > 255) b = 255;
  else if  (b < 0) b = 0;

  var g = (num & 0x0000FF) + amt;

  if (g > 255) g = 255;
  else if (g < 0) g = 0;

  return (usePound?"#":"") + (g | (b << 8) | (r << 16)).toString(16);

}

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
      offset={[0, 0]}
      zIndex={10}
      duration= "0"
      appendTo={() =>
        document.querySelector(".style-module--calendarContainer--2RFKR")
      }
      delay={[0, 0]}
      
    >
      <div className={styles.rbcEventContent} title={event.title} style={{padding:"2px 5px"}}>
        {event.sport}
      </div>
    </Tippy>
  )
}

const navigate = {
  PREVIOUS: 'PREV',
  NEXT: 'NEXT',
  TODAY: 'TODAY',
  DATE: 'DATE'
};

class MyToolbar extends React.Component {
  render() {
    let {
      localizer: { messages },
      label,
    } = this.props

    return (
      <div className={classNames("rbc-toolbar",styles.myStyle)}>
        <span className="rbc-btn-group">
          <button
            type="button"
            onClick={this.navigate.bind(null, navigate.TODAY)}
          >
            {messages.today}
          </button>
          <button
            type="button"
            onClick={this.navigate.bind(null, navigate.PREVIOUS)}
          >
            {messages.previous}
          </button>
          <button
            type="button"
            onClick={this.navigate.bind(null, navigate.NEXT)}
          >
            {messages.next}
          </button>
        </span>

        <span className="rbc-toolbar-label">{label}</span>

        <span className="rbc-btn-group">{this.viewNamesGroup(messages)}</span>
      </div>
    )
  }

  navigate = action => {
    this.props.onNavigate(action)
  }

  view = view => {
    this.props.onView(view)
  }

  viewNamesGroup(messages) {
    let viewNames = this.props.views
    const view = this.props.view

    if (viewNames.length > 1) {
      return viewNames.map(name => (
        <button
          type="button"
          key={name}
          className={clsx({ 'rbc-active': view === name })}
          onClick={this.view.bind(null, name)}
        >
          {messages[name]}
        </button>
      ))
    }
  }
}

const MyCalendar = () => {

  return (
    <div className={styles.calendarContainer}>
      <Calendar
        views={['month', 'day', 'agenda']}
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        popup={true}
        className={styles.calendar}
        components={{ event : EventComponent, toolbar: MyToolbar }}
        eventPropGetter={(event, start, end, isSelected) => {
          let newColor = LightenDarkenColor(colors[event.sport],-30);

          let newStyle = {
            backgroundColor: colors[event.sport],
            color: "white",
            outlineColor: newColor,
            border: "none",
            textTransform: "uppercase",
            fontSize: "14px",
          }
          return {
            className: "",
            style: newStyle,
          }
        }}
      />
    </div>
  )
}

export default MyCalendar
