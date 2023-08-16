const { response } = require('express')

const Record = require('../models/record')

const getRanking = async (
  req,
  res = response
) => {
  try {
    const limit = 15

    // Obtener los mejores tiempos y menor cantidad de clicks de gamemode id 2
    const bestTimesQuery = await Record.find({
      'gameMode.modeId': 2
    })
      .sort({
        'time.minutes': 1,
        'time.seconds': 1,
        'time.miliseconds': 1,
        clicks: 1
      })
      .limit(limit)

    // Obtener la mayor cantidad de clicks en menos tiempo de gamemode id 1
    const mostClicksQuery = await Record.find({
      'gameMode.modeId': 1
    })
      .sort({
        clicks: -1,
        'time.minutes': 1,
        'time.seconds': 1,
        'time.miliseconds': 1
      })
      .limit(limit)

    // Ejecutar ambas consultas de forma concurrente
    const [memoryRecords, clickAllRecords] =
      await Promise.all([
        bestTimesQuery,
        mostClicksQuery
      ])

    res.status(200).json({
      ok: true,
      msg: 'Ranking',
      memoryRecords,
      clickAllRecords
    })
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: 'Hable con el administrador'
    })
  }
}

const postRecord = async (
  req,
  res = response
) => {
  try {
    const record = new Record(req.body)

    await record.save()

    res.status(201).json({
      ok: true,
      msg: 'Nuevo record posteado',
      record
    })
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: 'Hable con el administrador'
    })
  }
}

module.exports = {
  getRanking,
  postRecord
}
