'use strict';

var React = require('react');
var $ = require('jquery');
var Calendar = require('react-date-picker').Calendar;

var DateTime = React.createClass({
	saveState: function (newDate) {
		var event = {
			target: {
				name: this.props.name,
				value: newDate
			}
		};

		this.props.onChange(event)
	},

	render: function() {

		return (
			<div>
			    <Calendar 
				    dateFormat="MM-DD-YYYY hh:mm a"
					date={this.props.value}
					onChange={this.saveState}
			    /> 		
			</div>
		);
	}
});

module.exports = DateTime;