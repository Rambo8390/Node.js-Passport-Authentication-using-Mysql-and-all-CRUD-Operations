var db=require('../configs/DBConnection');
module.exports={
  deleteData:function(deleteId,callback){
    var sql = 'DELETE FROM users WHERE user_id = ?';
    db.query(sql, [deleteId], function (err, data) {
    if (err) throw err;
     return callback(data);
  });
}
}