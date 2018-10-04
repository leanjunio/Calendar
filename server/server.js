const express = require('express');
const app = express();

// app configuration
const PORT = process.env.PORT || 8080;

// Routes
const userRoutes = require('./routes/user');
const calRoutes = require('./routes/calendar');

app.use('/user', userRoutes);
app.use('/calendar', calRoutes);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));1