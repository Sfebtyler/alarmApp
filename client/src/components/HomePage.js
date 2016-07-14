'use strict';

var React = require('react');
var RemindersList = require('./reminders/remindersList');
var UpcomingList = require('./reminders/upcomingList');
var OverdueList = require('./reminders/overdueList');
var AddButton = require('./reminders/button');
var Link = require('react-router').Link;
var _todos = [    {
      id: 0,
      title: 'Do the Dishes',
      description: 'Not needed',
      date: ' Friday July 15 6:00PM'
    },
   {
      id: 1,
      title: 'Finish math homework',
      description: 'Do all 1000 problems',
      date: ' Monday July 18 9:00AM'
    },
       {
      id: 2,
      title: 'Finish math homework',
      description: 'Do all 1000 problems',
      date: ' Monday July 19 9:00AM'
    },
       {
      id: 3,
      title: 'Finish math homework',
      description: 'Do all 1000 problems',
      date: ' Monday July 20 9:00AM'
    },
       {
      id: 4,
      title: 'Finish math homework',
      description: 'Do all 1000 problems',
      date: ' Monday July 21 9:00AM'
    },
       {
      id: 5,
      title: 'Finish math homework',
      description: 'Do all 1000 problems',
      date: ' Monday July 25 9:00AM'
    },
       {
      id: 6,
      title: 'Finish math homework',
      description: 'Do all 1000 problems',
      date: ' Monday July 30 9:00AM'
    },
       {
      id: 7,
      title: 'Finish math homework',
      description: 'Do all 1000 problems',
      date: ' Monday July 31 9:00AM'
    },
       {
      id: 8,
      title: 'Finish math homework',
      description: 'Do all 1000 problems',
      date: ' Monday August 1 9:00AM'
    },
       {
      id: 9,
      title: 'Finish math homework',
      description: 'Do all 1000 problems',
      date: ' Monday August 4 9:00AM'
    },
       {
      id: 10,
      title: 'Finish math homework',
      description: 'Do all 1000 problems',
      date: ' Monday July 18 9:00AM'
    }];

var Home = React.createClass({
	getInitialState: function(){
		return{
			todos: _todos
		}
	},
	render: function () {
		return (
			<div>
				<div className="row">
					<UpcomingList 						
						todos={this.state.todos}
					/>
					<RemindersList 						
						todos={this.state.todos}
					/>
					<OverdueList 
						todos={this.state.todos}
					/>
				</div>
				<Link to='/reminders-page'><AddButton /></Link>
			</div>
		);
	}
});

module.exports = Home;