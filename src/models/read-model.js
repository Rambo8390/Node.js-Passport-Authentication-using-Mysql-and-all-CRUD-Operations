var db=require('../configs/DBConnection');
module.exports={
  readData:function(userid , callback){
    var sql=`SELECT * FROM users where user_id = ${userid}`;
    db.query(sql, function (err, data, fields) {
    if (err) throw err;
    return callback(data);
    });  
  }
 
}