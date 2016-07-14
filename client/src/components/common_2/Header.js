'use strict';

var React = require('react');
var Link = require('react-router').Link;

var Header = React.createClass({
	render: function () {
		return (
			<div>
				<nav className="navbar navbar-inverse">
  					<ul className='nav navbar-nav'>
  						<li><Link to='/'>Home</Link></li>
  						<li><Link to='/reminders-page'>Add Reminder</Link></li>
  						<li><Link to='/reminders-completed'>Completed</Link></li>
					</ul>
				</nav>
			</div>
		);
	}
});


module.exports = Header;