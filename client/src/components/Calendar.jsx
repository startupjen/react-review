import React, { Component } from 'react'
import Iframe from 'react-iframe'

function Calendar() {
  return(
    <div>
      <Iframe url="https://calendar.google.com/calendar/embed?src=jen.tran%40hackreactor.com&ctz=America/Los_Angeles" 
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