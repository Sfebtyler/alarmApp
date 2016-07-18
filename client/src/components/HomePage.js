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
      //todayReminders: this.getTodayReminders()
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
      reminders: ReminderStore.getAllReminders(),
     // todayReminders: this.getTodayReminders()
  	});
  },
  getTodayReminders: function(){
  	console.log("is this working?")
  	var todayReminders = [];
  	console.log(this.state.reminders)
  	if (this.state.reminders != null){
	    for (var i; i<this.state.reminders.length; i++){
	    	reminder = this.state.reminders[i];
	    	console.log(reminder)
	    	if (Moment(reminder.dueDate).format('MMMM Do YYYY') === Moment(Date.now()).format('MMMM Do YYYY')){
	    		todayReminders.push(reminder)
	    		console.log(reminder)
	    	}
	    }
	    console.log(todayReminders)
	    return todayReminders
	}
  },

	render: function () {
		return (
			<div>
				<div className="row">
					<UpcomingList 						
						reminders={this.state.reminders}
					/>
					<RemindersList 						
						reminders={this.getTodayReminders()}
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