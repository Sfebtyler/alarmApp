'use strict';

var Dispatcher = require('../dispatcher/Dispatcher');
var ActionTypes = require('../constants/actionTypes');
var EventEmitter = require('events');
var CHANGE_EVENT = 'change';
var _ = require('lodash');
var toastr = require('toastr');

var _reminders = [];

var ReminderStore = Object.assign({}, EventEmitter.prototype, {

	addChangeListener: function (callback) {
		this.on(CHANGE_EVENT, callback);
	},

	removeChangeListener: function (callback) {
		this.removeListener(CHANGE_EVENT, callback);
	},

	emitChange: function () {
		this.emit(CHANGE_EVENT);
	},

	getAllReminders: function () {
		return _reminders;
	},

	getReminderById: function (todoId) {
		return _.find(_reminders, {_id: remindersId});

	}
});

Dispatcher.register(function (action) {
	switch (action.actionType) {
		case ActionTypes.INITIALIZE:
			_reminders = action.initialData.reminders;
			ReminderStore.emitChange();
			break;

		case ActionTypes.CREATE_REMINDER:
			// add the todo
			_reminders.push(action.reminder);
			ReminderStore.emitChange();
			toastr.success('Reminder Created!');
			break;

		case ActionTypes.DELETE_REMINDER:
			_.remove(_reminders, {_id: action.reminderId})
			ReminderStore.emitChange();
			toastr.error('Reminder Deleted!');
			break;

		case ActionTypes.UPDATE_REMINDER:
			var existingReminder = _.find(_reminders, {_id: action.reminder._id});
			var existingReminderIndex = _.indexOf(_reminders, existingReminder);
			_reminders.splice(existingReminderIndex, 1, action.reminder);
			ReminderStore.emitChange();
			toastr.info("Reminder Updated!");
			break;

		default: 
			// do nothing
	}
});

module.exports = ReminderStore;