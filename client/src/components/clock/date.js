'use strict';
var React = require('react');

var dateMount = React.createClass({



	getInitialState: function () {
		return {
			displayDate: this.getDisplayDate()
		}
	},

	componentDidMount: function () {
		this.timerInterval = setInterval(this.tick, 1000)
	},

	componentWillUnmount: function () {
		clearInterval(this.timerInterval)
	},

	tick: function () {
		this.setState({
			displayDate: this.getDisplayDate()
		})
	},

	getMonthName: function() {
		var now = new Date()
		var months = ['January','February','March','April','May','June','July','August','September','October','November','December']
	    return months[ now.getMonth() ]
	},

	getDayName: function() {
		var now = new Date()
		var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
	    return days[ now.getDay() ]
	},

	getDisplayDate: function() {


	var now = new Date()

	var dayName = this.getDayName()
	var month = this.getMonthName()
	var day = now.getDay()

	var date = dayName + ', ' + month + ' ' + day

	    return date;
	},

	render: function () {
		return (
			<div>
				{this.state.displayDate}
			</div>
		);
	}
});

module.exports = dateMount;

