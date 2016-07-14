'use strict';

var React = require('react');
var $ = require('jquery');
var DateTimeField = require('react-date-picker').Calendar;
var DateFormatSpinnerInput = require('react-date-picker').Calendar;
// var DateTimeField = require('react-date-picker').ClockInput;

var DateTime = React.createClass({
	render: function() {

		return (
			<div>
			    <DateFormatSpinnerInput 
			    dateFormat="MM-DD-YYYY hh:mm a"
			    /> 		
			</div>
		);
	}
});

module.exports = DateTime;