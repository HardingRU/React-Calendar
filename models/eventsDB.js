const db = require('../db/config');

  module.exports = {

    addEvent(event) {
    return db.one(`INSERT INTO events (title, start_date, end_date)
                  VALUES ($[title], $[start_date], $[end_date])
                  RETURNING *`, event)
    }

  }
