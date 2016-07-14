'use strict';

var Dispatcher = require('../dispatcher/Dispatcher');
var ActionTypes = require('../constants/actionTypes');
var API = require('../helpers/api');
var toastr = require('toastr');


var ReminderActionCreator = {
	createReminder: function (reminder) {
		var newReminderPromise = API.createReminder(reminder);

		newReminderPromise
			.then(function (newReminder) {
				Dispatcher.dispatch({
					actionType: ActionTypes.CREATE_REMINDER,
					reminder: newReminder
				});
			})
			.fail(function (xhr, status, err) {
				console.log("Create Reminder Failed!");
				toastr.error("Create Reminder Failed!");
			});
	},

	deleteReminder: function (Reminder) {
		var prompt = window.confirm("Do you want to Delete this Reminder?")

		if (!prompt) {
			toastr.warning("Delete Canceled");
			return
		}

		var deleteReminderPromise = API.deleteReminder(reminder);

		deleteReminderPromise
			.then(function () {
				Dispatcher.dispatch({
					actionType: ActionTypes.DELETE_REMINDER,
					reminderId: reminder._id
				});
			})
			.fail(function (xhr, status, err) {
				console.log("Delete Reminder Failed!");
				toastr.error("Delete Reminder Failed!");
			});
	},

	updateReminder: function (reminder) {
		var updateReminderPromise = API.updateReminder(reminder);

		updateReminderPromise
			.then(function(updatedReminder) {
				Dispatcher.dispatch({
					actionType: ActionTypes.UPDATE_REMINDER,
					reminder: updatedReminder
				});
			})
			.fail(function (xhr, status, err) {
				console.log("Update Reminder Failed!");
				toastr.error("Update Reminder Failed!");
			});
	}
};

module.exports = ReminderActionCreator;