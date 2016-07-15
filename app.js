var colors = require('colors');
var express = require('express');
var mongoose = require('mongoose');
var morgan = require('morgan');
var passport = require('passport');
var path = require('path');
var skipper = require('skipper');


//Configure Mongoose
// mongoose.connect('mongodb://mongodb.cs.dixie.edu/EricBelliston')
mongoose.connect('mongodb://mongodb.cs.dixie.edu/EricBelliston')

mongoose.connection.on('connected', function() {
	console.log("Data Base Connected...\n".green);
})
mongoose.connection.on('error', function(err) {
	console.log("Data Base Connectetion FALIED...\n".red + err.message);
})
// require('./config/passport');


//Configure Express
var app = express();

// Set up statics
app.use(express.static(__dirname + '/dist'));

app.use(morgan('dev'));
// app.use(passport.initialize());
app.use(skipper());

app.use('/reminders', require('./server/reminder/routes'));
// app.use('/users', require('./server/user/routes'));

app.get('*', function(req, res) {
	res.sendFile(path.join(__dirname, '/dist/index.html'));
});


app.listen(9005, function () {
	console.log("Listening on localhost:9005. Successful Connection");
});