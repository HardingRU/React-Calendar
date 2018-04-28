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
        title: "Some title",
        id: 1
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
}

export default CalendarView
