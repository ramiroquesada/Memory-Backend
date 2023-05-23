const {Schema, model} = require('mongoose');

const RecordSchema = Schema({
	name: {
		type: String,
		required: true
	},
	clicks: {
		type: String,
		required: true
	},
	time: {
		type: String,
		required: true
	},
	date: {
		type: Date,
		required: true,
	},
	gamemode: {
		type: String,
		required: true,
	}
});

module.exports = model('Record', RecordSchema);