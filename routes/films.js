var express = require('express');
var router = express.Router();

var filmsCtl = require('../controller/films.js');


router.get('/', filmsCtl.retriveFilms);

router.post('/', filmsCtl.createOneFilm);

router.get('/:id', filmsCtl.retriveOneFilm);


module.exports = router;
