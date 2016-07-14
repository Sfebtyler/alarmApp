'use strict';

var React = require('react');


var startClock = function() {
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

console.log(displayedTime);
};

var addZero = function(i) {
	if (i < 10) 
	{i = "0" + i};
	return i;

}

startClock();

var clockMount = React.createClass({
	render: function () {
		console.log(this.props.errors);
		return (
			<div>
				{displayedTime}
			</div>

		);
	}

});

module.exports = clockMount;