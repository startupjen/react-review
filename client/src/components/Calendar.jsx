import React, { Component } from 'react'
import Iframe from 'react-iframe'

function Calendar() {
  // Embed Google Calendar like this: https://support.google.com/calendar/answer/41207?hl=en
  console.log('CALENDAR.JSX - insert your own google embedded calendar link in this file. I took mine out. - Jen')
  return(
    <div>
      <Iframe url="https://calendar.google.com/calendar/embed?src=INSERT_OWN_EMBED_LINK&ctz=America/Los_Angeles" 
        width="800" 
        height="500" 
        frameborder="0" 
        scrolling="no"
        styles={{
          "borderWidth": 0,
          "right": "5vh",
          "display": "inline-block"
        }}/>
    </div>
  )
}

export default Calendar