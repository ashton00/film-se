
var utils = require('../utils/index.js');
var usersModel = require('../model/users.js');


exports.register = function register(req, res, next) {

    // 这里的密码需加盐，使用sha1加密
    var [Gender, Phone, Password] = [req.body.gender, req.body.phone, utils.sha1(req.body.password)];

    // 检查用户是否存在
    usersModel.findByPhone(Phone, function cb(err, dbres, fields) {
        if(err) {
            utils.HandleError(req, res, err, 400, "询用户是否存在失败");
            return
        }

        // 如果当前用户不存在
        if(dbres && dbres.length == 0) {

            // 注册
            usersModel.register(Gender, Phone, Password, function cb(err, dbres, fields) {
                if(err) {
                    utils.HandleError(req, res, err, 400, '注册用户失败');
                    return ;
                }

                // 如果注册成功
                if(dbres.affectedRows == 1) {
                    var UserId = dbres.insertId;
                    utils.sendData(req, res, {'UserId': UserId}, 200, "注册用户成功")
                } else {
                    utils.HandleError(req, res, err, 400, '注册用户失败');
                }
                return ;
            });

        } else {

            utils.sendData(req, res, null, 200, '当前用户已经存在');

        }

    });


};

exports.login = function login(req, res, next) {
    var [phone, password] = [req.body.phone, utils.sha1(req.body.password)];
    usersModel.login(phone, password, function(err, dbres, fields) {
        if(err) {
            utils.HandleError(req, res, err, 400, "用户登录失败");
            return
        }
        // console.log(dbres);
        // console.log(fields);
        if(dbres && dbres.length != 0) {
            var UserId = dbres[0].UserId;
            utils.sendData(req, res, {'UserId': UserId}, 200, "用户登录成功");
        } else {
            utils.HandleError(req, res, err, 400, '用户登录失败');
        }
        return ;
    });

}
