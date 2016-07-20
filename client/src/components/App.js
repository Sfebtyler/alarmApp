'use strict';

var React = require('react');
var Header = require('./common_2/Header');


var App = React.createClass({
	render: function() {
		return (
			<div>
				<div className="row">
					<div id="memoLogo" className="col-sm-1">
						<img  src="../images/Memo.png" alt="memoLogo" width="75" height="75"/>
					</div>
					<div className="col-sm-9">
						<h1 >Memorable Memos</h1>
					</div>
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