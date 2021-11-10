var db=require('../configs/DBConnection');
module.exports={ 
  createData:function(inputData,callback){
    var sql = 'INSERT INTO users SET ?'; 
    db.query(sql, inputData,function (err, data) {
    if (err) throw err;
      return callback(data);
    });
  }
}