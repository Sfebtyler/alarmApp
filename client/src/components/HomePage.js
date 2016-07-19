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
  getTodayReminders: function(){
  	var todayReminders = [];
    for (var i = 0; i<this.state.reminders.length; i++){
    	var reminder = this.state.reminders[i];
    	if (Moment(reminder.dueDate).format('MMMM Do YYYY') === Moment(Date.now()).format('MMMM Do YYYY') && reminder.completed === false){
    		todayReminders.push(reminder)
    	}
    }
    return todayReminders
  },
  getOverdueReminders: function(){
  	var OverdueReminders = [];
    for (var i = 0; i<this.state.reminders.length; i++){
    	var reminder = this.state.reminders[i];
    	if (Moment(reminder.dueDate).format('MMMM Do YYYY') < Moment(Date.now()).format('MMMM Do YYYY') && reminder.completed === false){
    		OverdueReminders.push(reminder)
    	}
    }
    return OverdueReminders
  },
  getUpcomingReminders: function(){
  	var UpcomingReminders = [];
    for (var i = 0; i<this.state.reminders.length; i++){
    	var reminder = this.state.reminders[i];
    	if (Moment(reminder.dueDate).format('MMMM Do YYYY') > Moment(Date.now()).format('MMMM Do YYYY') && reminder.completed === false){
    		UpcomingReminders.push(reminder)
    	}
    }
    return UpcomingReminders
  },
	render: function () {
		return (
			<div>
				<div className="row">
					<UpcomingList 						
						reminders={this.getUpcomingReminders()}
					/>
					<RemindersList 						
						reminders={this.getTodayReminders()}
					/>
					<OverdueList 
						reminders={this.getOverdueReminders()}
					/>
				</div>
				<Link to='/reminders-page'><AddButton /></Link>
			</div>
		);
	}
});

module.exports = Home;