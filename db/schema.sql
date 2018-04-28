DROP TABLE IF EXISTS events;

CREATE TABLE events (
  id SERIAL PRIMARY KEY,
  title TEXT,
  start_date TEXT,
  end_date TEXT,
  start_time TEXT,
  end_time TEXT
);
