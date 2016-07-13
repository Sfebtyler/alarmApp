'use strict';

var React = require('react');


var AddButton = React.createClass({
	render: function () {

		return (
			<div>
				<div className="row">
					<div className="col-sm-4, col-md-4"></div>
					<button className="col-sm-4, col-md-4">Add Reminder</button>
					<div className="col-sm-4, col-md-4"></div>
				</div>
			</div>
		);
	}
});

module.exports = AddButton;