'use strict';

var React = require('react');


var Upcoming = React.createClass({
	render: function () {

		return (
			<div className="col-sm-4, col-md-4">
				<div className="titles"><h3>Upcoming</h3></div>
				<div id="upcoming" className="overflow">
					<ul>
						<li>Upcoming</li>
					</ul>
				</div>
			</div>
		);
	}
});

module.exports = Upcoming;