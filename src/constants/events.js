const now = new Date()

export default [
  {
    id: 0,
    title: 'Football Semi-finals',
    allDay: false,
    start: new Date("December 16, 2020 20:15:30"),
    end: new Date("December 16, 2020 23:15:30"),
    sport: "Football",
    location: "Something Arena"
  },
  {
    id: 1,
    title: "Trampoline Woman's finals",
    allDay: false,
    start: now,
    end: now,
    sport: "Trampoline",
    location: "Something Arena"
  },
  {
    id: 2,
    title: 'Basketball Croatia-USA',
    allDay: false,
    start: now,
    end: now,
    sport: "Basketball",
    location: "Something Arena"
  },
  {
    id: 3,
    title: 'Swimming',
    allDay: false,
    start: now,
    end: now,
    sport: "Swimming",
    location: "Something Arena"
  },
]

export const colors = {
  "Basketball": "lightsalmon",
  "Football": "lightgreen",
  "Swimming": "lightblue",
  "Trampoline": "lightcoral"
};