import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import App from './App';
import Calendar from './components/CalendarView'
import AddEvent from './components/AddEvent'


export default (
  <Router>
    <Switch>
      <Route exact path="/" component={App}/>
      <Route exact path="/calendar" component={Calendar}/>
      <Route exact path="/addEvent" component={AddEvent}/>
    </Switch>
  </Router>
)
