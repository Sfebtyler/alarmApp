'use strict';

var React = require('react');
var Header = require('./common_2/Header');
var Link = require('react-router').Link;


var App = React.createClass({
	render: function() {
		return (
			<div>
				<div className="row">
					<Link to = '/'>
					<div id="memoLogo" className="col-sm-1">
						<img  src="../images/Memo.png" alt="memoLogo" width="75" height="75"/>
					</div>
					</Link>
					<Link to = "/">
					<div className="col-sm-9">
						<h1 >Memorable Memos</h1>
					</div>
					</Link>
				</div>
				<Header />
				<div className="container">
					{this.props.children}
				</div>
			</div>
		);
	}
});

module.exports = App;