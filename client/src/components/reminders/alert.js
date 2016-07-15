'use strict';

var React = require('react');
var ReactNotify = require('react-notify');
var ReminderStore = require('../../stores/reminderStore');


var reminderFunction = React.createClass({

	reminderAlert: function() {

	  this.refs.notificator.success("ReminderStore.reminders.title", "ReminderStore.reminders.description", 900000);
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