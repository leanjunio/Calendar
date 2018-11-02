const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

// app configuration
const PORT = process.env.PORT || 8080;
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Connect to mongoose
let options = {
    useNewUrlParser: true,
    user: `calendar`,
    pass: `calendar10`
}
mongoose.connect('mongodb://ds115283.mlab.com:15283/calendar', options);

// Routes
const userRoutes = require('./routes/user');
const calRoutes = require('./routes/calendar');

app.use('/user', userRoutes);
app.use('/calendar', calRoutes);

if (process.env.NODE_ENV === 'production') {
	// Do stuff
}

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));