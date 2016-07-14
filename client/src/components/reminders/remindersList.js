'use strict'

var React = require('react');
var ReminderActionCreator = require('../../actions/reminderActionCreator');

var Reminders = React.createClass({
	deleteReminder: function (reminder, event) {
		event.preventDefault();
		ReminderActionCreator.deleteReminder(reminder);
	},

	updateReminder: function (reminder, event) {
		event.preventDefault();
		reminder.completed ? reminder.completed = false : reminder.completed = true;
		ReminderActionCreator.updateReminder(reminder);
	},
	render: function() {
		var createReminder = function(reminder){
			return (
				<li key={reminder._id}>
					<div className="row" >
						<div id="check" className="col-sm-2, col-md-1, col-lg-1">
							<input type="checkbox"/>
						</div>
						<div id="notCheck" className="col-sm-10, col-md-11, col-lg-11">
							<span id="title">{reminder.title}</span>
							<br />
							<span id="date">{reminder.date}</span>
						</div>
					</div>
				</li>	
			);
		};
		return (
			<div>
				<div className="col-sm-4, col-md-4">
					<div className="titles"><h3>Today</h3><div id="today-date">Monday July 11 4:35</div></div>

					<div id="today" className="overflow">
						<ul>
							{this.props.reminders.map(createReminder, this)}
						</ul>
					</div>
				</div>
			</div>
		);
	}
});




module.exports = Reminders;