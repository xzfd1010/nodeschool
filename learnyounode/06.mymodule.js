const fs = require('fs');
const path = require('path');
module.exports = function(dir,extname,callback){
  fs.readdir(dir,function(err,list) {
    if(err){
      return callback(err);
    }
    var list = list.filter(function(item){
      return path.extname(item).substring(1)===extname;
    })
    callback(null,list);
  })
}
