
var utils = require('../utils/index.js');


exports.handleNotMatch = function handleNotMatch(req, res, next) {
    utils.sendData(req, res, null, 404, "路由路径不匹配，资源不存在");
}
