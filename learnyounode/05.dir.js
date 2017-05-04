const path = require('path');
const fs = require('fs');
fs.readdir(process.argv[2],function(err,list){
  if(err){
    return console.log(err);
  }
  var list = list.filter(function(item){
    return path.extname(item).substring(1)===process.argv[3]
  })
  console.log(list.join('\n'))
})
