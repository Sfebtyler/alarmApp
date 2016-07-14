'use strict'

var React = require('react');
var ClockMount = require('../clock/basicClock.js');
var DateMount = require('../clock/date.js');

var Reminders = React.createClass({


	render: function() {

		return (
			<div>
				<div className="col-sm-4, col-md-4">
					<div className="titles"><h3><DateMount /></h3><div id="today-date"><ClockMount /></div></div>

					<div id="today" className="overflow">
						<ul>
							<li>You are here</li>
						</ul>
					</div>
				</div>
			</div>
		);
	}
});




module.exports = Reminders;