var fs = require('fs');
var fileModule = {
    taoFile: function(tenFile,noiDung){
        fs.writeFile(tenFile, noiDung,myCallback);
    }
}

function myCallback(err){
    if (err)
        console.log(err);
    else
        console.log('Write operation complete.');
}
module.exports = fileModule;