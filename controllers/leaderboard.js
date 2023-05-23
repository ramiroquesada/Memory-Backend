const { response } = require('express');

const Record = require('../models/record');

const getRanking = async(req, res = response) => {

	const records = await Record.find();

	res.json({
		ok: true,
		msg: 'ranking',
		records
	});
};

const postRecord = async (req, res = response) => {
	try {
		const record = new Record(req.body);

		await record.save();

		res.status(201).json({
			ok: true,
			msg: 'new record posted',
		});

	} catch (error) {
		res.status(500).json({
			ok: false,
			msg: 'Hable con el administrador'
		})
	}
};

module.exports = {
	getRanking,
	postRecord,
};
