const Events = require('../models/eventsDB');

const eventsController = {};

eventsController.addEvent = (req, res) => {
  Events.addEvent(req.body)
    .then(event => {
      res.json({
        message: 'ok',
        data: {event}
      })
    })
    .catch(err => {
      res.status(400).json({message: '400', err})
    })
}

eventsController.getEvents = (req, res) => {
  Events.getEvents()
    .then(events => {
      res.json({
        message: 'ok',
        data: {events}
      })
    })
    .catch(err => {
      res.status(400).json({message: '400', err})
    })
}

module.exports = eventsController;
