'use strict';

var React = require('react');
var RemindersList = require('./reminders/remindersList');
var UpcomingList = require('./reminders/upcomingList');
var OverdueList = require('./reminders/overdueList');


var Home = React.createClass({
	render: function () {
		return (
			<div>
				<div className="row">
					<UpcomingList />
					<RemindersList />
					<OverdueList />
				</div>
			</div>
		);
	}
});

module.exports = Home;