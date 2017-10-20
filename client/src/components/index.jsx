import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import RandomPairsList from './RandomPairsList.jsx'
import Calendar from './Calendar.jsx'
import CohortRosterList from './CohortRosterList.jsx'

function App() {
  const title = 'Random Calendar Spammer'

  return(
    <div className="app-div">
      <div className="title">{title}</div>
      <div className="grid-top">
        <RandomPairsList />
        <Calendar />
      </div>
      <CohortRosterList />
    </div>
  )
}

ReactDOM.render(<App/>, document.getElementById('app'))