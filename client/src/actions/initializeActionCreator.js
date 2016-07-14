'use strict';

var Dispatcher = require('../dispatcher/Dispatcher');
var API = require('../helpers/api');
var ActionTypes = require('../constants/actionTypes');

var InitializeActionCreator = {
	initializeApp: function () {
		var RemindersPromise = API.getAllReminders();

		RemindersPromise
			.then(function(todos) {
				Dispatcher.dispatch({
					actionType: ActionTypes.INITIALIZE,
					initialData: {
						reminders: reminders
					}
				});
			});
	}
}

module.exports = InitializeActionCreator;