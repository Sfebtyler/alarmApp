'use strict';

var Dispatcher = require('../dispatcher/Dispatcher');
var ActionTypes = require('../constants/actionTypes');
var EventEmitter = require('events');
var CHANGE_EVENT = 'change';
var _ = require('lodash');
var toastr = require('toastr');
var Moment = require('moment');

var _reminders = [];
var _todayReminders = [];
var _upcomingReminders = [];
var _overdueReminders = [];


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

	getAllTodayReminders: function () {
		_todayReminders = filterFuncs.getTodayReminders();
		console.log(_todayReminders);
		return _todayReminders;
	},

	getAllUpcomingReminders: function () {
		_upcomingReminders = filterFuncs.getUpcomingReminders();
		return _upcomingReminders;
	},

	getAllOverdueReminders: function () {
		_overdueReminders = filterFuncs.getOverdueReminders();
		return _overdueReminders;
	},

	getReminderById: function (reminderId) {
		return _.find(_reminders, {_id: reminderId});
	}
});

var filterFuncs = {
	getTodayReminders: function(){
	  	var todayReminders = [];
	    for (var i = 0; i<_reminders.length; i++){
	    	var reminder = _reminders[i];
	    	if (Moment(reminder.dueDate).format('MMMM Do YYYY HH mm') >= Moment(Date.now()).format('MMMM Do YYYY HH mm') && Moment(reminder.dueDate).format('MMMM Do YYYY') === Moment(Date.now()).format('MMMM Do YYYY') && reminder.completed === false){
	    		todayReminders.push(reminder)
	    	}
	    }
	    return todayReminders

  	},
	  getOverdueReminders: function(){
	  	var OverdueReminders = [];
	    for (var i = 0; i<_reminders.length; i++){
	    	var reminder = _reminders[i];
	    	if (Moment(reminder.dueDate).format('MMMM Do YYYY HH mm') < Moment(Date.now()).format('MMMM Do YYYY HH mm') && reminder.completed === false){
	    		OverdueReminders.push(reminder)
	    	}
	    }
	    return OverdueReminders
	  },
	  getUpcomingReminders: function(){
	  	var UpcomingReminders = [];
	    for (var i = 0; i<_reminders.length; i++){
	    	var reminder = _reminders[i];
	    	if (Moment(reminder.dueDate).format('MMMM Do YYYY') > Moment(Date.now()).format('MMMM Do YYYY') && reminder.completed === false){
	    		UpcomingReminders.push(reminder)
	    	}
	    }
	    return UpcomingReminders
	  }
}

 

Dispatcher.register(function (action) {
	switch (action.actionType) {
		case ActionTypes.INITIALIZE:
			_reminders = action.initialData.reminders;
			_todayReminders = filterFuncs.getTodayReminders();
			_overdueReminders = filterFuncs.getOverdueReminders();
			_upcomingReminders = filterFuncs.getUpcomingReminders();
			ReminderStore.emitChange();
			break;

		case ActionTypes.CREATE_REMINDER:
			// add the todo
			_reminders.push(action.reminder);
			_todayReminders = filterFuncs.getTodayReminders();
			_overdueReminders = filterFuncs.getOverdueReminders();
			_upcomingReminders = filterFuncs.getUpcomingReminders();
			ReminderStore.emitChange();
			toastr.success('Reminder Created!');
			break;

		case ActionTypes.DELETE_REMINDER:
			_.remove(_reminders, {_id: action.reminderId})
			_todayReminders = filterFuncs.getTodayReminders();
			_overdueReminders = filterFuncs.getOverdueReminders();
			_upcomingReminders = filterFuncs.getUpcomingReminders();
			ReminderStore.emitChange();
			toastr.error('Reminder Deleted!');
			break;

		case ActionTypes.UPDATE_REMINDER:
			var existingReminder = _.find(_reminders, {_id: action.reminder._id});
			var existingReminderIndex = _.indexOf(_reminders, existingReminder);
			_reminders.splice(existingReminderIndex, 1, action.reminder);
			_todayReminders = filterFuncs.getTodayReminders();
			_overdueReminders = filterFuncs.getOverdueReminders();
			_upcomingReminders = filterFuncs.getUpcomingReminders();
			ReminderStore.emitChange();
			toastr.info("Reminder Updated!");
			break;

		default: 
			// do nothing
	}
});

module.exports = ReminderStore;