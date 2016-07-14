'use strict'

var React = require('react');
var TextInput = require('../common_2/textInput');
var DateTime = require('../common_2/dateTimePicker');


var RemindersForm = React.createClass({

	render: function () {
		return (
			<div>
				<form onSubmit={this.props.saveReminder}>
					<TextInput 
						name="Title"
						placeholder="Enter a Title"	
						value={this.props.reminder.title}
						saveReminderState={this.props.saveReminderState}
						error={this.props.errors.title}											
					/>
					<TextInput
						name="Description"
						placeholder="Enter a Description"
						value={this.props.reminder.description}
						saveReminderState={this.props.saveReminderState}
						error={this.props.errors.description}
					/>
					<DateTime />
					<br></br>
					<input type="checkbox"></input>
					<span id="markComplete">Mark as Completed</span>
					<br></br> 
					<br></br>
					<input 
						type="submit" 
						value="Save Reminder"
						className="btn btn-success btn-md" 
					/>
				</form>
			</div>
		);
	}
});

module.exports = RemindersForm;