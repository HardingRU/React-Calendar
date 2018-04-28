const db = require('../db/config');

  module.exports = {

    addEvent(event) {
      return db.one(`INSERT INTO events (title, start_date, end_date, start_time, end_time)
                    VALUES ($[title], $[start_date], $[end_date], $[start_time], $[end_time])
                    RETURNING *`, event)
    },

    getEvents() {
      return db.any(`SELECT * FROM events`)
    }

  }
