const {Schema, model} = require('mongoose');

const RecordSchema = Schema({
	name: {
		type: String,
		required: true
	},
	record: {
		type: String,
		required: true
	},
	date: {
		type: Date,
		required: true,
	},
});

module.exports = model('Record', RecordSchema);