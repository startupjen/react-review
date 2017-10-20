import React, { Component } from 'react'
import { Button, ButtonToolbar } from 'react-bootstrap'
import axios from 'axios'

export default class RandomPairsList extends Component {
  constructor(props) {
    super(props)
    this.handleClickGenerateNewPairs = this.handleClickGenerateNewPairs.bind(this)
    this.handleClickSpamDemCalendars = this.handleClickSpamDemCalendars.bind(this)

    this.state = {
      pairs: ['bloop bloop bloop'],
      showNewPairs: false
    }
  }

  handleClickGenerateNewPairs() {
    this.generateRandomPairs()
  }

  handleClickSpamDemCalendars() {
    this.spamCalendars()
  }

  // this function will not fully work because you need access tokens on the 'url' variable
  spamCalendars() {
    const { calendarEvent, timeSlots, url } = require('../seed/calendar')
    
    for (let i = 0; i < this.state.pairs.length; i++) {
      let summary
      let attendees

      this.state.pairs[i].engineer2 ? summary = `Weekly Code Review w/Jen (${this.state.pairs[i].engineer1.name}/${this.state.pairs[i].engineer2.name})` : summary = `Weekly Code Review w/Jen (${this.state.pairs[i].engineer1.name})`
      this.state.pairs[i].engineer2 ? attendees = [{email: "jentran39+double@gmail.com"}, {email: "jen@jentran.co"}] : attendees = [{email: "jentran39+single@gmail.com"}]
    
      const calendarInvite = Object.assign( {}, calendarEvent, { start: timeSlots[i].start, end: timeSlots[i].end, summary, attendees } )
    
      axios.post(url, calendarInvite).then( (response) => console.log('spamCalendars() - SUCCESS!! ', summary, ' response is ', response) )
    }

  }

  generateRandomPairs() {
    const pairs = []
    const engineers = require('../seed/cohort.json').slice()

    while ( engineers.length > 0 ) {  
      let max = Math.floor( engineers.length - 1 )
      let random = Math.floor( Math.random() * (max + 1) )
      const engineer1 = engineers.splice(random, 1)[0]
      const newPair = {}
      newPair.engineer1 = engineer1

      // to handle odd cohort sizes
      if (engineers.length > 0) {
        max = Math.floor( engineers.length - 1 )
        random = Math.floor( Math.random() * (max + 1) )
        const engineer2 = engineers.splice(random, 1)[0] || null
        newPair.engineer2 = engineer2
      }

      pairs.push(newPair)
    }

    this.setState({ pairs, showNewPairs: true})
  }

  render() {
    return(
      <div className="pairs-list">
        <ButtonToolbar>
          <Button bsStyle="success" onClick={this.handleClickGenerateNewPairs}>Generate Random Pairs!!!</Button>
          <Button bsStyle="success" onClick={this.handleClickSpamDemCalendars}>Spam Dem Calendars</Button>
        </ButtonToolbar>

        { this.state.showNewPairs ? 
          (<ul>{this.state.pairs.map( (pair, index) => (<li key={index}>{pair.engineer1.name}{pair.engineer2 ? '/' + pair.engineer2.name: null}</li>) ) }</ul>)
          :
          null
        }
      </div>
    )
  }
}