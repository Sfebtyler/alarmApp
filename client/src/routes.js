'use strict';

var React = require('react');
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
var HomePage = require('./components/HomePage');
var AboutPage = require('./components/about/About');
var App = require('./components/App');
var TodoPage = require('./components/todos/TodoPage');
var ManageTodo = require('./components/todos/manageTodoPage');
var RemindersForm = require('./components/reminders/remindersForm');
var RemindersCompleted = require('./components/reminders/remindersCompleted');


var routes = (
	<Route path="/" component={App}>
		<IndexRoute component={HomePage} />
		<Route path="/about-page" component={AboutPage} />
		<Route path="/todos-page" component={TodoPage} />
		<Route path="/manage-todos" component={ManageTodo} />
		<Route path="/manage-todo/:id" component={ManageTodo} />
		<Route path="/reminders-page" component={RemindersForm} />
		<Route path="/reminders-completed" component={RemindersCompleted} />
	</Route>
);

module.exports = routes;