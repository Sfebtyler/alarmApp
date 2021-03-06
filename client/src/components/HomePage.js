'use strict';

var React = require('react');
var RemindersList = require('./reminders/remindersList');
var UpcomingList = require('./reminders/upcomingList');
var OverdueList = require('./reminders/overdueList');
var AddButton = require('./reminders/button');
var ReminderStore = require('../stores/reminderStore');
var Link = require('react-router').Link;
var Moment = require('moment');
var _ = require('lodash');

var Home = React.createClass({
  getInitialState: function(){
    return{
      reminders: ReminderStore.getAllReminders(),
      todayReminders: [],
      overdueReminders: [],
      upcomingReminders: []
    }
  },
  componentDidMount: function () {
    var newReminders = [];
    this.timerInterval = setInterval(this.functionToBeCalled, 1000);
  },
  functionToBeCalled: function(){
    var newTodayReminders = this.getTodayReminders();
    var newOverdueReminders = this.getOverdueReminders();
    var newUpcomingReminders = this.getUpcomingReminders();
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
      todayReminders: this.getTodayReminders(),
      overdueReminders: this.getOverdueReminders(),
      upcomingReminders: this.getUpcomingReminders()
  	});
  },
  getTodayReminders: function(){
      var todayReminders = [];
      for (var i = 0; i<this.state.reminders.length; i++){
        var reminder = this.state.reminders[i];
        if (Moment(reminder.dueDate).format('MMMM Do YYYY HH mm') >= Moment(Date.now()).format('MMMM Do YYYY HH mm') && Moment(reminder.dueDate).format('MMMM Do YYYY') === Moment(Date.now()).format('MMMM Do YYYY') && reminder.completed === false){
          todayReminders.push(reminder)
        }
      }
      var newtodayReminders = _.sortBy(todayReminders, "dueDate");
      return newtodayReminders

    },
    getOverdueReminders: function(){
      var overdueReminders = [];
      for (var i = 0; i<this.state.reminders.length; i++){
        var reminder = this.state.reminders[i];
        if (Moment(reminder.dueDate).format('MMMM Do YYYY HH mm') < Moment(Date.now()).format('MMMM Do YYYY HH mm') && reminder.completed === false){
          overdueReminders.push(reminder)
        }
      }
      var newOverdueReminders = _.sortBy(overdueReminders, "dueDate");
      return newOverdueReminders
    },
    getUpcomingReminders: function(){
      var upcomingReminders = [];
      for (var i = 0; i<this.state.reminders.length; i++){
        var reminder = this.state.reminders[i];
        if (Moment(reminder.dueDate).format('MMMM Do YYYY') > Moment(Date.now()).format('MMMM Do YYYY') && reminder.completed === false){
          upcomingReminders.push(reminder)
        }
      }
      var newUpcomingReminders = _.sortBy(upcomingReminders, "dueDate");
      return newUpcomingReminders
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