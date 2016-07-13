'use strict';

var React = require('react');
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
var HomePage = require('./components/HomePage');
var App = require('./components/App');
var RemindersForm = require('./components/reminders/remindersForm');
var RemindersCompleted = require('./components/reminders/remindersCompleted');


var routes = (
	<Route path="/" component={App}>
		<IndexRoute component={HomePage} />
		<Route path="/reminders-page" component={RemindersForm} />
		<Route path="/reminders-completed" component={RemindersCompleted} />
	</Route>
);

module.exports = routes;