import React, { Component } from 'react'

function CohortRosterEntry (props) {
  return (
    <div className="cohort-list-entry">
      <div className="engineer-photo"><img src={props.engineer.image} /></div>
      <div className="engineer-name">{props.engineer.name}</div>
      <div className="engineer-email">{props.engineer.email}</div>
  </div>
  )
}

export default CohortRosterEntry