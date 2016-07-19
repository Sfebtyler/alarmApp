'use strict'

var React = require('react');
var ReminderActionCreator = require('../../actions/reminderActionCreator');
var ClockMount = require('../clock/basicClock.js');
var DateMount = require('../clock/date.js');
var ReminderAlert = require('./alert.js')
var Link = require('react-router').Link;
var Moment = require('moment');
var ReminderStore = require('../../stores/reminderStore');

var RemindersCompleted = React.createClass({

  getInitialState: function(){
    return{
      reminders: ReminderStore.getAllReminders()
    }
  },

  getCompletedReminders: function(){
  	var CompletedReminders = [];
    for (var i = 0; i<this.state.reminders.length; i++){
    	var reminder = this.state.reminders[i];
    	if (reminder.completed === true){
    		CompletedReminders.push(reminder)
    	}
    }
    return CompletedReminders
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
				<li id="list-border">
					<div className="row">
						<div id="check-completed" className="col-sm-2, col-md-1, col-lg-1">
							<input type="checkbox" checked onClick={this.updateReminder.bind(this, reminder)} />
						</div>
						<div id="notCheck-completed" className="col-sm-4, col-md-5, col-lg-5">
							Title: <span id="title">{reminder.title}</span>
							<br />
							Date: <span id="date">{Moment(reminder.dueDate).format('MMMM Do YYYY, h:mm a')}</span>
						</div>
						<div className="col-sm-4, col-md-5, col-lg-5">
							Description: <span id="description">{reminder.description}</span>
						</div>
					</div>
				</li>
				</Link>
			);
		};
		return (
			<div>
				<div className="col-sm-12, col-md-12">
					<div className="titles"><h3>Completed</h3></div>

					<div id="today" className="overflow-completed">
						<ul id="ul-list">
							{this.getCompletedReminders().map(createReminder, this)}
						</ul>
					</div>
				</div>
			</div>
		);
	}
});

module.exports = RemindersCompleted;