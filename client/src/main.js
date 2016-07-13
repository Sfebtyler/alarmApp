'use strict'; //This is for our benefit to write better JS, makes us write better code

var $, jQuery;
$ = jQuery = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;
var browserHistory = require('react-router').browserHistory;
var routes = require('./routes');
var InitializeActionCreator = require('./actions/initializeActionCreator');

InitializeActionCreator.initializeApp();


ReactDOM.render(
	<Router history={browserHistory}>
		{routes}
	</Router>
	, document.getElementById('app')
);

