'use strict';

var ajax = require('./ajax');

module.exports = {
	getAllReminders: getAllReminders,
	createReminder: createReminder,
	deleteReminder: deleteReminder,
	updateReminder: updateReminder
};


function getAllReminders() {
	var url = '/reminders';
	var data = {};
	var type = 'GET';

	return ajax(url, data, type);
};

function createReminder(reminder) {
	var url = '/reminders';
	var data = reminder;

	return ajax(url, data);
}

function deleteReminder(reminder) {
	var url = '/reminders/' + reminder._id;
	var data = {};
	var type = 'DELETE';

	return ajax(url, data, type);
};

function updateReminder(reminder) {
	var url = '/reminders/' + reminder._id;
	var data = reminder;
	var type = 'PUT';

	return ajax(url, data, type);
};

