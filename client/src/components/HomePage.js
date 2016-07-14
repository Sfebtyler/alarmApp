'use strict';

var React = require('react');
var RemindersList = require('./reminders/remindersList');
var UpcomingList = require('./reminders/upcomingList');
var OverdueList = require('./reminders/overdueList');
var AddButton = require('./reminders/button');
var ReminderStore = require('../stores/reminderStore');
var Link = require('react-router').Link;
var Home = React.createClass({
  getInitialState: function(){
    return{
      reminders: ReminderStore.getAllReminders()
    }
  },
  componentWillMount: function(){
    ReminderStore.addChangeListener(this.onChange);
  },
  componentWillUnmount: function(){
    ReminderStore.removeChangeListener(this.onChange);
  },
  onChange: function(){
    this.setState({
      reminders: ReminderStore.getAllReminders()
    });
  },
	render: function () {
		return (
			<div>
				<div className="row">
					<UpcomingList 						
						reminders={this.state.reminders}
					/>
					<RemindersList 						
						reminders={this.state.reminders}
					/>
					<OverdueList 
						reminders={this.state.reminders}
					/>
				</div>
				<Link to='/reminders-page'><AddButton /></Link>
			</div>
		);
	}
});

module.exports = Home;