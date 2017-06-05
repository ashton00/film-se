

const config = require('../config/config.js');
const mysql = require('mysql');
const crypto = require('crypto');

var connection = mysql.createConnection(config.mysql);

/**
 * [dbQuery db查询操作]
 * @param    sql    [查询语句]
 * @param    values [查询的值]
 * @param  {Function} cb     [待回调的函数]
 */
exports.dbQuery = function dbQuery(sql, values, cb) {
    // connection.connect();
    connection.query(sql, values, function(err, res, fileds) {
        cb(err, res, fileds);
    });
    // connection.end();
}

/**
 * HandleError 用于统一处理接口调用中的错误
 *
 */

exports.HandleError = function HandleError(req, res, err, status, reason) {
    console.log(err);
    console.log("错误原因：", reason);
    res.status(status).send({
        'err': err,
        'Reason': reason
    })
}

/**
 * [sha1 用于加密密码]
 */
exports.sha1 = function sha1(password) {
    const salt = config.pswSalt;
    const addSaltResult = password + salt;
    return crypto.createHash('sha1').update(addSaltResult, 'utf8').digest('hex');
}

/**
 * [sendData 用于统一的发送数据]
 * @param  {[type]} req    [description]
 * @param  {[type]} res    [description]
 * @param  {[type]} data   [需要传给前端的数据]
 * @param  {[type]} status [请求的状态码]
 * @param  {[type]} info   [请求的其他信息]
 */
exports.sendData = function sendData(req, res, data, status, info) {
    var time = new Date();
    res.status(status).send({
        'time': time,
        'data': data,
        'info': info
    });
    return ;
}
