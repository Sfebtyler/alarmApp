'use strict';

var React = require('react');
var ReminderForm = require('./remindersForm');
var ReminderActionCreator = require('../../actions/reminderActionCreator');
var browserHistory = require('react-router').browserHistory;
var ReminderStore = require('../../stores/reminderStore');


var ManageReminderPage = React.createClass({
	getInitialState: function () {
		return {
			errors: {},
			reminder: {
				title: '',
				description: ''
			}
		}
	},

	componentWillMount: function () {
		var reminderId = this.props.params.id;

		if (reminderId) {
			this.setState({
				reminder: TodoStore.getReminderById(ReminderId)
			});
		}
		
	},

	saveReminderState: function (event) {
		var field = event.target.name;
		var value = event.target.value;
		var newReminder = Object.assign({}, this.state.reminder);

		// sort of like reminder.title or reminder.description
		newTodo[field] = value;

		this.setState({
			reminder: newReminder
		});

	},

	saveReminder: function (event) {
		event.preventDefault();

		if (!this.todoFormIsValid()) {
			return;
		}

		if (this.state.reminder._id) {
			ReminderActionCreator.updateTodo(this.state.reminder);
		}
		else {
			ReminderActionCreator.createTodo(this.state.reminder);
		}

		browserHistory.push('/reminders-page');
	},

	reminderFormIsValid: function () {
		var formIsValid = true;
		var newErrors = {};

		if (this.state.reminder.title.length < 3) {
			newErrors.title = 'Title cannot be less than 3 characters...';
			formIsValid = false;
		}

		if (this.state.reminder.description.length < 3) {
			newErrors.description = 'Description cannot be less than 3 characters...';
			formIsValid = false;
		}

		this.setState({
			errors: newErrors
		});

		return formIsValid;
	},

	render: function () {
		return (
			<div>
				<h2>Manage Todos</h2>
				<TodoForm
					reminder={this.state.reminder}
					saveReminderState={this.saveReminderState}
					saveReminder={this.saveTodo}
					errors={this.state.errors}
				/>
			</div>
		);
	}
});

module.exports = ManageReminderPage;