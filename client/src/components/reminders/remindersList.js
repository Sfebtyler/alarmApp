'use strict'

var React = require('react');


var Reminders = React.createClass({


	render: function() {

		return (
			<div>
				<div className="col-sm-4, col-md-4">
					<div className="titles"><h3>Today</h3><div id="today-date">Monday July 11 4:35</div></div>

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