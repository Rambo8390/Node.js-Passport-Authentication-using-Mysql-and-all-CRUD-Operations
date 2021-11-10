var readModel=require('../models/read-model');
module.exports={
 readData:function(req,res){
    
    readModel.readData(req.params.userid ,function(data){
    res.render('create-table', {
      fetchData:data,
      userid : req.params.userid
    }); 
    });
  }
}