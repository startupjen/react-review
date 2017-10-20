import React, { Component } from 'react'
import engineers from '../seed/cohort.json'

import CohortRosterEntry from './CohortRosterEntry.jsx'

function CohortRosterList () {
  const title = 'HRLA18'

  return (
    <div className="center">
    <div className="cohort-list-title">{title}, Group Size: {engineers.length}</div>
      <div className="grid">
      { engineers.map( (engineer, index) => (<CohortRosterEntry key={engineer.email} engineer={engineer} />)) }
      </div>
  </div>
  )
}


export default CohortRosterList