var createModel=require('../models/create-model');
module.exports={
crudForm:function(req, res) {
    res.render('crud-form');
},
createData:function(req,res){
  const inputData= {
    user_name:     req.body.user_name,
    user_email: req.body.user_email,
    user_password : req.body.user_password,
    user_image :         req.body.user_image,
    total_order :      req.body.total_order
  };
createModel.createData(inputData,function(data){
      res.redirect('/crud/form');
      console.log(data.affectedRows + " record created");
    });
}

}