import React, { Component }from 'react';
//import Services from '../services';
//import { Redirect } from 'react-router'
import Calendar from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";

Calendar.setLocalizer(Calendar.momentLocalizer(moment));


class CalendarView extends Component {
  constructor() {
    super();
    this.state = {
      events: [
      {
        start: new Date(),
        end: new Date(moment().add(1, "days")),
        title: "Some title"
      }
    ]
    }
//    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentDidMount() {
  }

  render() {
    return (
      <div>
        <h1>Calendar Page</h1>
        <Calendar
          defaultDate={new Date()}
          defaultView="month"
          events={this.state.events}
          style={{ height: "100vh" }}
        />
      </div>
    )
  }
}

export default CalendarView
