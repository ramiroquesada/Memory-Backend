const { response } = require('express');

const Record = require('../models/record');

const getRanking = async (req, res = response) => {
	try {
		const records = await Record.find();

		res.status(200).json({
			ok: true,
			msg: 'Ranking',
			records,
		});
	} catch (error) {
		res.status(500).json({
			ok: false,
			msg: 'Hable con el administrador',
		});
	}
};

const postRecord = async (req, res = response) => {
	try {
		const record = new Record(req.body);

		await record.save();

		res.status(201).json({
			ok: true,
			msg: 'Nuevo record posteado',
			record
		});
	} catch (error) {
		res.status(500).json({
			ok: false,
			msg: 'Hable con el administrador',
		});
	}
};

module.exports = {
	getRanking,
	postRecord,
};
