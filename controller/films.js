

var utils = require('../utils/index.js');
var filmModel = require('../model/films.js');

exports.retriveOneFilm = function retriveOneFilm(req, res, next) {
    var id = req.params.id;
    filmModel.findById(id, function(err, dbres, fields) {
        if(err) {
            utils.HandleError(req, res, err, 400, "查询电影失败");
            return ;
        }

        if(dbres && dbres.length != 0) {
            var film  = dbres[0];
            var data = {
                'id'    : film.FilmId,
                'name'  : film.Name,
                'year'  : film.ShowTime,
                'type'  : film.Type,
                'score' : film.Score,
                'area'  : film.Area,
                'des'   : film.Description,
                'img'   : film.Img,
                'actors'   : JSON.parse(film.Actors),
                'comments' : JSON.parse(film.Comments)
            }
            utils.sendData(req, res, data, 200, "获取电影成功");
            return ;
        }

        utils.HandleError(req, res, err, 400, "查询电影不存在");
    })
}

exports.retriveFilms = function retriveFilms(req, res, next) {
    filmModel.findAll(function (err, dbres, fields) {
        if(err) {
            utils.HandleError(req, res, err, 400, "获取电影列表失败");
            return ;
        }

        if(dbres && dbres.legnth != 0) {
            var filmList = [];
            for (var film of dbres) {
                var oneFilm = {
                    'id'    : film.FilmId,
                    'name'  : film.Name,
                    'year'  : film.ShowTime,
                    'type'  : film.Type,
                    'score' : film.Score,
                    'area'  : film.Area,
                    'des'   : film.Description,
                    'img'   : film.Img,
                    'actors'   : JSON.parse(film.Actors),
                    'comments' : JSON.parse(film.Comments),
                    'year'  : film.Year,
                }
                filmList.push(oneFilm);
            }
            utils.sendData(req, res, filmList, 200, "获取电影列表成功");
            return;
        }

        utils.HandleError(req, res, err, 400, "获取电影列表失败");

    });
}

exports.createOneFilm = function createOneFilem(req, res, next) {
    console.log('hear');
    var [name,
        showTime,
        score,
        area,
        description,
        img,
        comments,
        actors,
        type,
        year] = [
            req.body.name,
            req.body.showTime,
            req.body.score,
            req.body.area,
            req.body.des,
            req.body.img,
            req.body.comments, // 数组
            req.body.actors,   // 数组对象
            req.body.type,
            req.body.year];

    filmModel.create(name, showTime, score, area, description, img, comments, actors, type, year, function(err, dbres, fields) {
        if(err) {
            utils.HandleError(req, res, err, 400, "创建电影失败");
            return ;
        }

        if(dbres && dbres.affectedRows == 1) {
            var id = dbres.insertId;
            utils.sendData(req, res, {'id' : id}, 200, "创建电影成功");
            return ;
        }

        utils.HandleError(req, res, err, 400, "创建电影失败");
    })
}
