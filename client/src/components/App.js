'use strict';

var React = require('react');
var Header = require('./common_2/Header');


var App = React.createClass({
	render: function() {
		return (
			<div>
				<div><h1>Memorable Memos</h1></div>
				<Header />
				<div className="container">
					{this.props.children}
				</div>
			</div>
		);
	}
});

module.exports = App;