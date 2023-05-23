const {Router} = require('express');

const { check } = require('express-validator')

const { validarCampos } = require('../middlewares/validar-campos');

const {getRanking, postRecord} = require('../controllers/leaderboard');

const { isDate } = require('../helpers/isDate');

const router = Router()


router.get('/all', getRanking) ;

router.post('/new', [
	//middlewares
	check('name', 'El nombre es obligatorio').not().isEmpty(),
	check('clicks', 'Los clicks son obligatorios').not().isEmpty(),
	check('time', 'El tiempo es obligatorio').not().isEmpty(),
	check('gamemode', 'El modo de juego es obligatorio').not().isEmpty(),
	check('date', 'La fecha es obligatoria').custom( isDate ),
	validarCampos
], postRecord);



module.exports = router