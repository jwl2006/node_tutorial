var fs = require('fs');

module.exports = function (dirs, ext, callback) {
    fs.readdir(dirs, function(err, dirlist){
        if (err) {
	  return callback(err);
        }
        filter = "." + process.argv[3];
        var resArr = [];
        resArr = dirlist.filter((file)=> {
	   return file.includes(filter);
        });
        callback(null, resArr);
    });
};

