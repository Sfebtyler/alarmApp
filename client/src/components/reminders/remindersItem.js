'use strict'

var React = require('react');


var RemindersItem = React.createClass({


	render: function() {
		return (
			<li key={reminder.id}>
				<div className="row" >
					<div id="check" className="col-sm-2, col-md-1, col-lg-1">
						<input type="checkbox"/>
					</div>
					<div id="notCheck" className="col-sm-10, col-md-11, col-lg-11">
						<span id="title">{reminder.title}</span>
						<br />
						<span id="date">{reminder.date}</span>
					</div>
				</div>
			</li>	
		);
	}
});




module.exports = RemindersItem;