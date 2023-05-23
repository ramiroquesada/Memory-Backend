const {Router} = require('express');

const { check } = require('express-validator')

const { validarCampos } = require('../middlewares/validar-campos');

const {getRanking, postRecord} = require('../controllers/leaderboard');

const { isDate } = require('../helpers/isDate');

const router = Router()


router.get('/', getRanking) ;

router.post('/new', [
	//middlewares
	check('name', 'El nombre es obligatorio').not().isEmpty(),
	check('record', 'El record es obligatorio').not().isEmpty(),
	check('date', 'Fecha es obligatoria').custom( isDate ),
	validarCampos
], postRecord);



module.exports = router