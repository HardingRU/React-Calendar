import React, { Component }from 'react';
import Services from '../services';
import { Redirect } from 'react-router'


class AddEvent extends Component {
  constructor() {
    super();
    this.state = {
      start: null,
      end: false,
      start_time: null,
      end_time: null,
      title: false,
      addRedirect: false
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  componentDidMount() {
    console.log("mounted")
  }

  handleInputChange(e) {
    let value = e.target.value;
    let field = e.target.name;
    this.setState({
        [field]: value
      })
  }

  handleFormSubmit(e) {
    e.preventDefault();
      let addData = {};

      addData.start_time = this.state.start_time;
      addData.start_date = this.state.start;
      addData.end_time = this.state.end_time;
      addData.end_date = this.state.end;
      addData.title = this.state.title;


      Services.addEvent(addData)
      .then(data => {
        console.log(data)
        this.setState({
          addRedirect: true
        })
      })
      .catch(err => {
        console.log("caughting")
        console.log(err);
      })
      console.log("Date Added ->",addData)
  }

  render() {
      return (
        <div>
          <h2>Add New Event</h2>
            <form onSubmit={this.handleFormSubmit}>
              <input type='text' name='title' onChange={this.handleInputChange} placeholder='Event Title' />
              <br></br>
              <input type='date' name='start' onChange={this.handleInputChange} placeholder='Start' />
              <input type='time' name='start_time' onChange={this.handleInputChange} placeholder='Start Time' />
              <br></br>
              <input type='date' name='end' onChange={this.handleInputChange} placeholder='End'/>
              <input type='time' name='end_time' onChange={this.handleInputChange} placeholder='End Time' />
              <input className="btn btn-xs" type='submit' value="Add"/>
            </form>
          </div>
      )
    }
}

export default AddEvent
