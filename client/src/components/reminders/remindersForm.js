'use strict'

var React = require('react');
var TextInput = require('../common_2/textInput');
var DateTime = require('../common_2/dateTimePicker');
var Link = require('react-router').Link;
var ReminderActionCreator = require('../../actions/reminderActionCreator');
var Moment = require('moment');

var RemindersForm = React.createClass({

	showDelete: function (reminder) {
		//console.log(Moment(this.props.reminder.dueDate).format('MMMM Do YYYY'))
	    //console.log(Moment(Date.now()).format('MMMM Do YYYY'))
		if (reminder._id) {
				var deleteBtn = (<button onClick={this.deleteReminder.bind(this, this.props.reminder)} id="delete-btn" className="btn btn-secondary btn-md"><Link to={"/"} id="delete-item">Delete</Link></button>);
			}

			return deleteBtn;
	},

	deleteReminder: function (reminder, event) {
		event.preventDefault();
		ReminderActionCreator.deleteReminder(reminder);
	},

	render: function () {

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
					<TextInput
						name="description"
						placeholder="Description"
						value={this.props.reminder.description}
						saveReminderState={this.props.saveReminderState}
						error={this.props.errors.description}
					/>
					<DateTime
						name="dueDate"
						value={this.props.reminder.dueDate}
						onChange={this.props.saveReminderState}
					/>
					<br></br>
					<input type="checkbox" ></input>
					<span id="markComplete">Mark as Completed</span>
					<br></br> 
					<br></br>
					<input 
						id="save-btn"
						type="submit" 
						value="Save"
						className="btn btn-success btn-md" 
					/>
	
					<Link to='/'>
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

//<button onClick={this.deleteReminder.bind(this, this.props.reminder)} id="delete-btn" className="btn btn-secondary btn-md">Delete</button>