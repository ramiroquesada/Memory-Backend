const {Schema, model} = require('mongoose');

const RecordSchema = Schema({
	name: {
		type: String,
		required: true
	},
	clicks: {
		type: Number,
		required: true
	},
	time: {
		minutes: {
			type: Number,
			required: true,
		},
		seconds:{
			type: Number,
			required: true,
		},
		miliseconds:{
			type: Number,
			required: true
		},
	},
	date: {
		type: Date,
		required: true,
	},
	gameMode: {
		modeName: {
			type: String,
			required: true,
		},
		modeId: {
			type: Number,
			required: true
		}
	}
});

module.exports = model('Record', RecordSchema);