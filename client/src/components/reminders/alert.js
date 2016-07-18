'use strict';

var React = require('react');
var ReactNotify = require('react-notify');
var ReminderStore = require('../../stores/reminderStore');
var moment = require('moment');
var _ = require('lodash')


var reminderFunction = React.createClass({

	componentDidMount: function () {
		this.timerInterval = setInterval(this.dateReached, 1000);
	},

	componentWillUnmount: function () {
		clearInterval(this.timerInterval);
	},

	dateReached: function () {
		var that = this;
		var reminders = ReminderStore.getAllReminders() 


		reminders.forEach(function (reminder) {
			var cDueDate = moment(reminder.dueDate).format('MMMM Do YYYY, h:mm:ss a');
			var cCurrentDate = moment(Date.now()).format('MMMM Do YYYY, h:mm:ss a');
			if (cDueDate === cCurrentDate) {
				console.log('there was a match')
				that.refs.notificator.success(reminder.title, reminder.description, 900000);
			}
		})

				 

	},

	render: function() {
		return (
			<div>
				<ReactNotify ref='notificator' />
			</div>
		);
	}
});

module.exports = reminderFunction;

//remove test button from reminderslist.js