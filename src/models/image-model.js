// var db=require('../database');
// module.exports.displayImage = function(callback){
//    // check unique email address
//    var sql='SELECT image_name FROM images';
//    db.query(sql,function (err, data, fields) {
//    if(err) throw err
//    return callback(data);
//   })
//   }


var db = require("../configs/DBConnection");
module.exports.storeImage = function (inputValues,userid, callback) {
  // check unique email address
  var sql = "SELECT * FROM users WHERE user_image =?";
  db.query(sql, inputValues.image_name, function (err, data, fields) {
    if (err) throw err;
    if (data.length > 1) {
      var msg = inputValues.image_name + " is already exist";
    } else {
      // save users data into database
      var sql = `update users set user_image = (?) where user_id = ${userid} `;
      db.query(sql, inputValues.image_name, function (err, data) {
        if (err) throw err;
      });
      var msg = inputValues.user_image + "is uploaded successfully";
    }
    return callback(msg);
  });
};


module.exports.displayImage = function(id ,callback){
   // check unique email address
   var sql=`SELECT user_image FROM users where user_id = ${id}`;
   db.query(sql,function (err, data, fields) {
   if(err) throw err
   return callback(data);
  })
 }