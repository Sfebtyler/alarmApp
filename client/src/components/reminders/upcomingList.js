'use strict';

var React = require('react');
var ReminderActionCreator = require('../../actions/reminderActionCreator');
var ClockMount = require('../clock/basicClock.js');
var DateMount = require('../clock/date.js');
var ReminderAlert = require('./alert.js')
var Link = require('react-router').Link;
var Moment = require('moment');


var Upcoming = React.createClass({

	updateReminder: function (reminder, event) {
		console.log("You are in the Reminders List Update");
	
		event.preventDefault();
		reminder.completed ? reminder.completed = false : reminder.completed = true;
		ReminderActionCreator.updateReminder(reminder);
	},

	render: function() {

		var createReminder = function (reminder) {

			return (
				<Link to={"/reminders-page/" + reminder._id} id="list-item" key={reminder._id}>
				<li id="list-border" className="mytooltip">
					<div className="row">
						<div id="check" className="col-sm-2, col-md-1, col-lg-1">
							<input type="checkbox" onClick={this.updateReminder.bind(this, reminder)} />
						</div>
						<div id="notCheck" className="col-sm-10, col-md-11, col-lg-11">
							<span id="title">{reminder.title}</span>
							<br />
							<span id="date">{Moment(reminder.dueDate).format('MMMM Do YYYY, h:mm a')}</span>
						</div>
						<span className="mytooltiptext"><span id="description">{reminder.description}</span></span>
					</div>
				</li>
				</Link>
			);
		};
		return (
			<div>
				<div className="col-sm-4, col-md-4">
					<div className="titles"><h3>Upcoming</h3></div>

					<div id="upcoming" className="overflow-completed">
						<ul id="ul-list">
							{this.props.reminders.map(createReminder, this)}
						</ul>
					</div>
				</div>
			</div>
		);
	}
});

module.exports = Upcoming;