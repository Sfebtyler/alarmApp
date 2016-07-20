'use strict';

var React = require('react');
var RemindersList = require('./reminders/remindersList');
var UpcomingList = require('./reminders/upcomingList');
var OverdueList = require('./reminders/overdueList');
var AddButton = require('./reminders/button');
var ReminderStore = require('../stores/reminderStore');
var Link = require('react-router').Link;
var Moment = require('moment');

var Home = React.createClass({
  getInitialState: function(){
    return{
      reminders: ReminderStore.getAllReminders(),
      todayReminders: ReminderStore.getAllTodayReminders(),
      overdueReminders: ReminderStore.getAllOverdueReminders(),
      upcomingReminders: ReminderStore.getAllUpcomingReminders()
    }
  },
  componentDidMount: function () {
    var newReminders = [];
    this.timerInterval = setInterval(this.functionToBeCalled, 1000);
  },
  functionToBeCalled: function(){
    var newTodayReminders = ReminderStore.getAllTodayReminders();
    var newOverdueReminders = ReminderStore.getAllOverdueReminders();
    var newUpcomingReminders = ReminderStore.getAllUpcomingReminders();
    this.setState({
      todayReminders: newTodayReminders,      
      overdueReminders: newOverdueReminders,
      upcomingReminders: newUpcomingReminders
    });
  },
  componentWillMount: function(){
    ReminderStore.addChangeListener(this.onChange);
  },

  componentWillUnmount: function(){
    ReminderStore.removeChangeListener(this.onChange);
    clearInterval(this.timerInterval);

  },

  onChange: function(){
    this.setState({
      reminders: ReminderStore.getAllReminders(),
      todayReminders: ReminderStore.getAllTodayReminders(),
      overdueReminders: ReminderStore.getAllOverdueReminders(),
      upcomingReminders: ReminderStore.getAllUpcomingReminders()
  	});
  },

	render: function () {
		return (
			<div>
				<div className="row">
					<UpcomingList 						
						reminders={this.state.upcomingReminders}
					/>
					<RemindersList 						
						reminders={this.state.todayReminders}
						// onReminder={this.onChange}
					/>
					<OverdueList 
						reminders={this.state.overdueReminders}
					/>
				</div>
				<Link to='/reminders-page'><AddButton /></Link>
			</div>
		);
	}
});

module.exports = Home;