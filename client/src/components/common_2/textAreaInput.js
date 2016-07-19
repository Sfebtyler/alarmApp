'use strict';

var React = require('react');


var TextAreaInput = React.createClass({
	render: function () {
		var wrapperClass = 'form-group';

		if (this.props.error && this.props.error.length > 0) {
			wrapperClass += ' ' + 'has-error';
		}

		return (
			<div className={wrapperClass}>
				<label htmlFor={this.props.name}>{this.props.placeholder}</label>
				<div className="field">
					<textarea 
						name={this.props.name}
						className="form-control"
						placeholder={this.props.placeholder}
						ref={this.props.name}
						value={this.props.value}
						onChange={this.props.saveReminderState}
						rows="4"
						id="description"
					/>
					<div>{this.props.error}</div>
				</div>
			</div>
		);
	}
});


module.exports = TextAreaInput;