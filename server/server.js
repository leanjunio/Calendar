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
mongoose.connect('mongodb://leanjunio:Scysc;234@ds115283.mlab.com:15283/calendar');

// Routes
const userRoutes = require('./routes/user');
const calRoutes = require('./routes/calendar');

app.use('/user', userRoutes);
app.use('/calendar', calRoutes);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));