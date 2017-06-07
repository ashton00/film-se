


const utils = require('../utils/index.js');

/** filmdetail表
+-------------+----------------+------+-----+-------------------+----------------+
| Field       | Type           | Null | Key | Default           | Extra          |
+-------------+----------------+------+-----+-------------------+----------------+
| FilmId      | int(11)        | NO   | PRI | NULL              | auto_increment |
| Name        | varchar(64)    | YES  |     | NULL              |                |
| ShowTime    | timestamp      | YES  |     | CURRENT_TIMESTAMP |                |
| Score       | float unsigned | YES  |     | NULL              |                |
| Area        | varchar(64)    | YES  |     | NULL              |                |
| Description | varchar(1024)  | YES  |     | NULL              |                |
| Img         | varchar(255)   | YES  |     | NULL              |                |
| Comments    | text           | YES  |     | NULL              |                |
| Actors      | varchar(255)   | YES  |     | NULL              |                |
| TYPE        | varchar(45)    | YES  |     | NULL              |                |
| Year        | int(11)        | YES  |     | NULL              |                |
+-------------+----------------+------+-----+-------------------+----------------+
 */


exports.findById = function findById(id, cb) {
    const sql = '' +
                'SELECT * FROM FILMDETAIL WHERE FILMID = ?;';
    const values = [id];
    utils.dbQuery(sql, values, cb);
}

exports.findByName = function findByName(name, cb) {
    const sql = '' +
                'SELECT * FROM FILMDETAIL WHERE NAME = ?;';
    const values = [name];
    utils.dbQuery(sql, values, cb);
}

exports.findAll = function findAll (cb) {
    const sql = '' +
                'SELECT * FROM FILMDETAIL;'
    utils.dbQuery(sql, cb);
}

exports.create = function create(name, showTime, score, area, description, img, comments, actors, type, year, cb) {

    showTime = new Date(showTime);
    score = score || 10.0;
    area = area || '未知地区';
    description = description || "暂无评论";
    type = type || "暂无类型";
    year = year || 2017;
    if(!comments) // 如果 comments 为空
        comments = JSON.Stringify(['暂无评论']);

    if(!actors) // 如果 actors 为空
        actors = JSON.Stringify(['暂无演员']);


    const sql = '' +
                'INSERT INTO FILMDETAIL (name, showTime, score, area, description, img, comments, actors, type, year) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?);';
    const values = [name, showTime, score, area, description, img, comments, actors, type, year];
    utils.dbQuery(sql, values, cb);
}
