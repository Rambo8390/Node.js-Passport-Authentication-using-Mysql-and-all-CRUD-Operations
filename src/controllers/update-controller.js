var updateModel=require('../models/update-model');
module.exports={
editData:function(req,res){
    const editId=req.params.id;
    updateModel.editData(editId,function(data){
      res.render('crud-form', { editData:data});
      console.log(data.affectedRows + " record fetched");
    });
   
},
updateData:function(req,res){
  const inputData= {
    user_name:     req.body.user_name,
    user_email: req.body.user_email,
    user_password : req.body.user_password,
    user_image :         req.body.user_image,
    total_order :      req.body.total_order
  }; 
  const updateId=req.params.id;
  updateModel.updateData(inputData,updateId,function(data){
    res.redirect(`/crud/read/${updateId}`);
    console.log(data.affectedRows + " record(s) updated");
  }); 
}
}