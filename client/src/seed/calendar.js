// Authorized link to make POST event creation with, to authorize, follow these directions: https://developers.google.com/google-apps/calendar/auth
console.log('CALENDAR.JS - you need to grab an access token from Google, and insert your own calendar ID :) Go to this file for more info')
const url = "https://www.googleapis.com/calendar/v3/calendars/INSERT_YOUR_OWN_CALENDAR_ID_HERE/events?access_token=GET_YOUR_OWN_ACCESS_TOKEN_K_THX_BYE-JEN"



// Template data for Google Calendar API event creation
const calendarEvent = {
  start: { dateTime: "2017-10-31T15:00:00-07:00" },
  end: { dateTime: "2017-10-31T15:30:00-07:00" },
  attendees: [],
  description: "whee whee wheeeeee I MADE CALENDAR CONNECT",
  location: "in the backrooms...",
  summary: "Weekly Code Review",
  sendNotifications: true

}


// Code review week
const mon = "2017-10-23"
const tues = "2017-10-24"
const thurs = "2017-10-26"
const fri = "2017-10-27"


// Time slots for code review
const timeSlots = [
  {
  "start": { "dateTime": mon + "T15:15:00-07:00" },
  "end": { "dateTime": mon + "T16:00:00-07:00" },
  },
  {
  "start": { "dateTime": mon + "T16:00:00-07:00" },
  "end": { "dateTime": mon + "T16:45:00-07:00" },
  },
  {
  "start": { "dateTime": mon + "T16:45:00-07:00" },
  "end": { "dateTime": mon + "T17:30:00-07:00" },
  },


  {
  "start": { "dateTime": tues + "T15:15:00-07:00" },
  "end": { "dateTime": tues + "T16:00:00-07:00" },
  },
  {
  "start": { "dateTime": tues + "T16:00:00-07:00" },
  "end": { "dateTime": tues + "T16:45:00-07:00" },
  },
  {
  "start": { "dateTime": tues + "T16:45:00-07:00" },
  "end": { "dateTime": tues + "T17:30:00-07:00" },
  },


  {
  "start": { "dateTime": thurs + "T14:30:00-07:00" },  
  "end": { "dateTime": thurs + "T15:15:00-07:00" },
  },
  {
  "start": { "dateTime": thurs + "T15:15:00-07:00" },
  "end": { "dateTime": thurs + "T16:00:00-07:00" },
  },
  {
  "start": { "dateTime": thurs + "T16:00:00-07:00" },
  "end": { "dateTime": thurs + "T16:45:00-07:00" },
  },
  {
  "start": { "dateTime": thurs + "T16:45:00-07:00" },
  "end": { "dateTime": thurs + "T17:30:00-07:00" },
  },


  {
  "start": { "dateTime": fri + "T14:30:00-07:00" }, 
  "end": { "dateTime": fri + "T15:15:00-07:00" },
  },
  {
  "start": { "dateTime": fri + "T15:15:00-07:00" },  
  "end": { "dateTime": fri + "T16:00:00-07:00" },
  },
  {
  "start": { "dateTime": fri + "T16:00:00-07:00" },
  "end": { "dateTime": fri + "T16:45:00-07:00" },
  },
  {
  "start": { "dateTime": fri + "T16:45:00-07:00" },
  "end": { "dateTime": fri + "T17:30:00-07:00" },
  },
]



console.log('CALENDAR.JS - calendarEvents is ', calendarEvent)
console.log('CALENDAR.JS - timeSlots is ', timeSlots)

module.exports = { url, calendarEvent, timeSlots }