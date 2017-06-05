


const utils = require('../utils/index.js');



/** User表的信息
+----------+-----------------------+------+-----+---------+----------------+
| Field    | Type                  | Null | Key | Default | Extra          |
+----------+-----------------------+------+-----+---------+----------------+
| UserId   | int(11)               | NO   | PRI | NULL    | auto_increment |
| Name     | varchar(45)           | YES  |     | NULL    |                |
| Gender   | enum('male','female') | YES  |     | NULL    |                |
| Phone    | varchar(64)           | NO   | UNI | NULL    |                |
| Password | varchar(64)           | YES  |     | NULL    |                |
+----------+-----------------------+------+-----+---------+----------------+
 */


exports.register = function(Gender, Phone, Password, cb) {
    const sql = '' +
                'INSERT INTO USER (Gender, Phone, Password) VALUE (?, ?, ?);';
    const values = [Gender, Phone, Password];
    utils.dbQuery(sql, values, cb);
}

exports.findByPhone = function(Phone, cb) {
    const sql = '' +
                'SELECT UserId FROM USER WHERE PHONE = ?;'
    const values = [Phone];
    utils.dbQuery(sql, values, cb);

}

exports.login = function(Phone, Password, cb) {
    const sql  = '' +
                 'SELECT UserId FROM USER WHERE PHONE = ? AND PASSWORD = ?;'
    const values = [Phone, Password];
    utils.dbQuery(sql, values, cb);
}
