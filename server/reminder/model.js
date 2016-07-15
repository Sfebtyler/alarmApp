var mongoose = require('mongoose');

var ReminderSchema = new mongoose.Schema({
	title: { type: String, required: true, unique: true, dropDups: true },
	description: { type: String, required: true },
	completed: { type: Boolean, default: false },
	createdAt: { type: Date, default: Date.now },
	updatedAt: Date,
	// dueDate: { type: Date, required: true }
})

ReminderSchema.pre('save', function(done)
{
	this.updatedAt = new Date();
	done();
})

module.exports = mongoose.model('Reminder', ReminderSchema);



