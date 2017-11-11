var express = require('express');
var router = express.Router();
var buracoController = require('../controllers/buracoController');

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { title: 'Backend da aplicação de buracos !' });
});

router.get('/api/buracos',buracoController.listagem);

router.post('/api/buracos',buracoController.cadastro);

module.exports = router;
