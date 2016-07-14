'use strict';

var React = require('react');
var $ = require('jquery');
var DateTimeField = require('react-date-picker').DateField;

var DateTime = React.createClass({
	render: function() {

		return (
			<div>
			    <DateTimeField /> 	
			</div>
		);
	}
});

module.exports = DateTime;