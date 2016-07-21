'use strict'

var React = require('react');
var browserHistory = require('react-router').browserHistory;
var TextInput = require('../common_2/textInput');
var TextAreaInput = require('../common_2/textAreaInput');
var DateTime = require('../common_2/dateTimePicker');
var Link = require('react-router').Link;
var ReminderActionCreator = require('../../actions/reminderActionCreator');
var Moment = require('moment');
var toastr = require('toastr');

var RemindersForm = React.createClass({

	showDelete: function (reminder) {
		if (reminder._id) {
				var deleteBtn = (<button onClick={this.deleteReminder.bind(this, this.props.reminder)} id="delete-btn" className="btn btn-secondary btn-md">Delete</button>);
			}

			return deleteBtn;
	},

	deleteReminder: function (reminder, event) {
		event.preventDefault();
		var prompt = window.confirm("Do you want to Delete this Reminder?")

		if (!prompt) {
			toastr.warning("Delete Canceled");
			return
		}

		ReminderActionCreator.deleteReminder(reminder);

		if (reminder.completed) {
			browserHistory.push('/reminders-completed');
		}
		else {
		browserHistory.push('/');
		}
	},

	render: function () {

		function cancelLink (reminder) {
			if (reminder.completed) {
				return "/reminders-completed"
			}
			else {
				return "/"
			}
		}

		return (
			<div>
				<form onSubmit={this.props.saveReminder}>
					<TextInput 
						name="title"
						placeholder="Title"	
						value={this.props.reminder.title}
						saveReminderState={this.props.saveReminderState}
						error={this.props.errors.title}											
					/>
					<TextAreaInput
						name="description"
						placeholder="Description"
						value={this.props.reminder.description}
						saveReminderState={this.props.saveReminderState}
						error={this.props.errors.description}
					/>
					<DateTime
						name="dueDate"
						// value={this.props.reminder.dueDate}
						onChange={this.props.saveReminderState}
					/>
					<br></br> 
					<br></br>
					<input 
						id="save-btn"
						type="submit" 
						value="Save"
						className="btn btn-success btn-md" 
					/>
	
					<Link to={cancelLink(this.props.reminder)}>
						<button 
							id="cancel-btn"
							className="btn btn-secondary btn-md">Cancel
						</button>
					</Link>
					{this.showDelete(this.props.reminder)}
				</form>
			</div>
		);
	}
});

module.exports = RemindersForm;
