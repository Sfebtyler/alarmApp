'use strict';

var React = require('react');
var RemindersList = require('./reminders/remindersList');
var UpcomingList = require('./reminders/upcomingList');
var OverdueList = require('./reminders/overdueList');
var AddButton = require('./reminders/button');
var Link = require('react-router').Link;


var Home = React.createClass({
	render: function () {
		return (
			<div>
				<div className="row">
					<UpcomingList />
					<RemindersList />
					<OverdueList />
				</div>
				<Link to='/reminders-page'><AddButton /></Link>
			</div>
		);
	}
});

module.exports = Home;