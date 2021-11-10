var db=require('../configs/DBConnection');
module.exports={
  editData:function(editId, callback){
    
    var sql=`SELECT * FROM users WHERE user_id=${editId}`;
    db.query(sql, function (err, data) {
      if (err) throw err;
      return callback(data[0]);
    });
  },
  updateData:function(inputData,updateId,callback){
    
    var sql = `UPDATE users SET ? WHERE user_id= ?`;
    db.query(sql, [inputData, updateId], function (err, data) {
    if (err) throw err;
     return callback(data);
  });
  }
}