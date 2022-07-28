const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

// Routes
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users')

// Express App
const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use((err, req, res, next) => {
    res.status(500).send({ message: err.message });
});

module.exports = app;
