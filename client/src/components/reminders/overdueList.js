'use strict';

var React = require('react');


var OverdueList = React.createClass({
	render: function () {
		return (
			<div className="col-sm-4, col-md-4">
				<div className="titles"><h3>Overdue</h3></div>
				<div id="overdue" className="overflow">
					<ul>
						<li>Overdue</li>
					</ul>
				</div>
			</div>
		);
	}
});


module.exports = OverdueList;