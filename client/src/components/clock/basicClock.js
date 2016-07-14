'use strict';

var React = require('react');



var addZero = function(i) {
	if (i < 10) 
	{i = "0" + i};
	return i;

}



var clockMount = React.createClass({
	getInitialState: function () {
		return {
			displayTime: this.getDisplayTime()
		};
	},

	componentDidMount: function () {
		this.timerInterval = setInterval(this.tick, 1000);
	},

	componentWillUnmount: function () {
		clearInterval(this.timerInterval);
	},

	tick: function () {
		this.setState({
			displayTime: this.getDisplayTime()
		});
	},

	getDisplayTime: function ()
	{
		var now = new Date();
		var militaryH = now.getHours();
		var M = now.getMinutes();
		var S = now.getSeconds();

		var H = militaryH;

		if (militaryH > 12) {
			H = militaryH - 12
		};

		var M = addZero(M)
		var S = addZero(S)

		var timeOfDay = '';

		if (militaryH <= 12) {
			timeOfDay = 'AM'
		}else {
			timeOfDay = 'PM'

		}

		var timer = H + ":" + M + ":" + S + ' ' + timeOfDay;
		var displayedTime = H + ":" + M + ' ' + timeOfDay;

		return displayedTime;
	},

	render: function () {

		return (
			<div>
				{this.state.displayTime}
			</div>


		);
	}
});




module.exports = clockMount;