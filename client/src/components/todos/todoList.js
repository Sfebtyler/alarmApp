'use strict';

var React = require('react');
var TodoActionCreator = require('../../actions/todoActionCreator');
var Link = require('react-router').Link;


var TodoList = React.createClass({

	deleteTodo: function (todo, event) {
		event.preventDefault();
		TodoActionCreator.deleteTodo(todo);
	},

	updateTodo: function (todo, event) {
		event.preventDefault();
		todo.completed ? todo.completed = false: todo.completed = true;
		TodoActionCreator.updateTodo(todo);
	},

	render: function() {
		var output;

		var createTodoRow = function (todo) {
			var tdClass = '';
			var isDone = 'Mark as Completed';
			var todoTitle = todo.title;
			var todoDescription = todo.description;
			var btnCompleted = 'btn btn-success';
			var btnEdit = (<Link to={'/manage-todo/' + todo._id} className='btn btn-info'>Edit</Link>);
			var btnDelete = (<a href="#" onClick={this.deleteTodo.bind(this, todo)} className='btn btn-danger'>Delete</a>);

			if (todo.completed) {
				tdClass = 'todo-done';
				isDone = 'Remove from Completed';
				todoTitle = (<s>{todo.title}</s>);
				todoDescription = (<s>{todo.description}</s>);
				btnCompleted = 'btn btn-info'
				btnEdit = '';
				btnDelete = '';
			}


			return (
				<tr key={todo._id}>
					<td><input type='checkbox' onClick={this.updateTodo.bind(this, todo)}></input></td>
					<td className={tdClass}>{todoTitle}</td>
					<td className={tdClass}>{todoDescription}</td>
					<td>{btnEdit}</td>
					<td>{btnDelete}</td>
				</tr>
			);
		};

		if (this.props.todos.length > 0) {
			output = this.props.todos.map(createTodoRow, this)
		}
		else {
			output = (<tr align='center'><td>You have noting to do!</td></tr>);
		}

		return (
			<table className="table">
				<thead>
					<tr>
						<th></th>
						<th>Title</th>
						<th>Description</th>
						<th></th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{output}
				</tbody>
			</table>
		);
	}
});

module.exports = TodoList;

// <td><a href="#" onClick={this.updateTodo.bind(this, todo)} className={btnCompleted}>{isDone}</a></td>

