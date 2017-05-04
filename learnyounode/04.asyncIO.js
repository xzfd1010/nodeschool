const fs = require('fs');
fs.readFile(process.argv[2],'utf8',function(err,data){
  if(err){
    // console.log打印了，然后return结束执行，和console.log(err);return 的效果一样
    return console.log(err);
  }
  var lines = data.split('\n').length - 1;
  console.log(lines);
})
