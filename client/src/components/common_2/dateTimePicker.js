'use strict';

var React = require('react');
var $ = require('jquery');
var DateTimeField = require('react-bootstrap-datetimepicker');

var DateTime = React.createClass({
	render: function() {

		return (
			<div>
			    <DateTimeField defaultText="Please select a date" /> 	
			</div>
		);
	}
});

module.exports = DateTime;