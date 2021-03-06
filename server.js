const express = require('express');
const app = express();
const logger = require('morgan');
const bodyParser = require('body-parser');

const eventRoutes = require('./routes/eventRoutes');


const port = process.env.PORT || 3001;

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

app.get('/', (req, res) => {
    res.send('Welcome to the calendar!');
});

app.use('/api/events', eventRoutes)

app.use('*', (req, res) => {
    res.send("Route not found");
});
