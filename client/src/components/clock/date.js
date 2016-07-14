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

	getDaySuffix: function() {
		var daySuffix = ''
		var now = new Date()


		if (now.getDate() == 1 || now.getDate() == 21 || now.getDate() == 31) {
			return daySuffix = 'st'
		}else if (now.getDate() == 2 || now.getDate() == 22) {
			return daySuffix = 'nd'
		}else if (now.getDate() == 3 || now.getDate() == 23) {
			return daySuffix = 'rd'
		}else {
			return daySuffix = 'th'
		}
	},

	getDisplayDate: function() {
		var now = new Date()


		var dayName = this.getDayName()
		var month = this.getMonthName()
		var day = now.getDate()

		var daySuffix = this.getDaySuffix()

		var date = dayName + ', ' + month + ' ' + day + daySuffix

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

