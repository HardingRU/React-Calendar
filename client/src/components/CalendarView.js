import React, { Component }from 'react';
import Services from '../services';
//import { Redirect } from 'react-router'
import Calendar from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";

Calendar.setLocalizer(Calendar.momentLocalizer(moment));


class CalendarView extends Component {
  constructor() {
    super();
    this.state = {
      events: [],
      apiDataLoaded: false
    }
    this.aggregateDates = this.aggregateDates.bind(this);

  }

  aggregateDates(events) {
    console.log("in agg")
    console.log(events)
    let allEvents = []
    for (let i = 0; i < events.length; i++) {
      let tempDate = {}
      tempDate.title = events[i].title
      tempDate.id = events[i].id
      let startDateArray = events[i].start_date.split('-');
      let endDateArray = events[i].end_date.split('-');
      let startTimeArray = events[i].start_time.split(':');
      let endTimeArray = events[i].end_time.split(':');
      tempDate.start = new Date(startDateArray[0], startDateArray[1], startDateArray[2], startTimeArray[0], startTimeArray[1])
      tempDate.end = new Date(endDateArray[0], endDateArray[1], endDateArray[2], endTimeArray[0], endTimeArray[1])
      allEvents.push(tempDate)
      console.log(tempDate)
    }
    this.setState({
      events: allEvents,
      apiDataLoaded: true
    })
  }

  componentDidMount() {
    Services.getEvents()
    .then(events => {
      console.log(events.data.data.events)
      this.aggregateDates(events.data.data.events)
    })
    .catch(err => {
      console.log(err)
    })
  }

  renderCalendar() {
    return (
      <div>
        <h1>Calendar Page</h1>
        <Calendar
          selectable
          defaultDate={new Date()}
          defaultView="month"
          events={this.state.events}
          style={{ height: "100vh" }}
          onSelectEvent={event => alert(event.id)}
          onSelectSlot={slotInfo =>
            alert(
              `selected slot: \n\nstart ${slotInfo.start.toLocaleString()} ` +
              `\nend: ${slotInfo.end.toLocaleString()}` +
              `\naction: ${slotInfo.action}`
            )
          }
        />
      </div>
    )
  }

  render() {
    return (

      <div> {this.state.apiDataLoaded ? this.renderCalendar() : <h1>Loading...</h1>} </div>
    )
  }
}

export default CalendarView
