const mymodule = require('./mymodule.js');
var dir = process.argv[2];
var extname = process.argv[3];
mymodule(dir,extname,function(err,list){
  if(err){
    return console.log(err)
  }
  console.log(list.join('\n'))

})
