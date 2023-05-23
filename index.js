const express = require('express');
const dbConnection = require('./database/config');

const cors = require('cors')

require('dotenv').config()


//crear el servidor express
const app = express();

//db

dbConnection()

//cors

app.use(cors())
//direcorios publicos
app.use( express.static('public') )

//lectura y parseo del body

app.use( express.json()) 

//rutas

app.use('/api/leaderboard', require('./routes/leaderboard'))

//escuchar peticiones

app.listen( process.env.PORT, () => {
	console.log(`servidor corriendo en puerto ${process.env.PORT}`)
} )