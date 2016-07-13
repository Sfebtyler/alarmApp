'use strict';

var React = require('react');
var TodoList = require('./todoList');
var todoApi = require('../../mockApi/todoApi');
var Link = require('react-router').Link;
var TodoStore = require('../../stores/todoStore');


var Todos = React.createClass({

	getInitialState: function () {
		return {
			todos: TodoStore.getAllTodos()
		}
	},

	componentWillMount: function () {
		TodoStore.addChangeListener(this.onChange)
	},

	componentWillUnmount: function () {
		TodoStore.removeChangeListener(this.onChange)
	},

	onChange: function() {
		this.setState({
			todos: TodoStore.getAllTodos(),
		});
	},

	render: function() {
		return (
			<div>
				<h2>Things we need Todo</h2>
				<Link className="btn btn-success btn-sm" to="/manage-todos">Add Todo</Link>
				<TodoList 
					todos={this.state.todos}
				/>
			</div>
		);
	}
});

module.exports = Todos;