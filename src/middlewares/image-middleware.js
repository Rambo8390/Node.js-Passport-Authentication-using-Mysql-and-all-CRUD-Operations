var multer = require('multer');
var path = require('path');
const AVATAR_PATH = path.join('/uploads/users/avatars');


module.exports.image={
    storage:function(){
        var storage = multer.diskStorage({
        destination: function (req, file, cb) {
           
          cb(null, path.join(__dirname,'..',AVATAR_PATH))
        },
        filename: function (req, file, cb) {
            cb(null, file.originalname)
        }
      })
      return storage;
},
allowedImage:function(req, file, cb) {
    // Accept images only
    if (!file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/)) {
        req.fileValidationError = 'Only image files are allowed!';
        return cb(new Error('Only image files are allowed!'), false);
    }
    cb(null, true);
}}