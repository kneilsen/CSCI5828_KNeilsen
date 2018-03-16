/***
 * CSCI 5828 - Spring 2018
 * Homework 3
 * Kristopher Neilsen
***/

var fs = require('fs');
var directoryName = process.argv[2];

var all_done = function(size) {
  console.log("Total size:", size);
}

var handleFile = function(stats, i, filenames, total) {
	console.log("Adding "+filenames[i]+" size:"+stats.size);
    processFile(i+1, filenames, total+stats.size);
}

var handleDir = function(i, filenames, total) {
	var subdirectory = filenames[i];
	
	console.log('Processing subdirectory:'+subdirectory);
	
	fs.readdir(subdirectory, function(err, files) {
	  if (err) {
	     console.log(String(err));
	     return;
      }
	  if(files.length == 0){
		  console.log(subdirectory+" is empty");
		  processFile(i+1, filenames, total);
	  }else{
		
		var newfiles = filenames;
		for (j = 0; j < files.length; j++) { 
			 var filepath = subdirectory+"/"+files[j];
			 newfiles = newfiles.concat(filepath);
		}
		
		processFile(i+1, newfiles, total);
	  }
	} ); 
}

var processFile = function(i, filenames, total) {
  var name = filenames[i];
  if (i === filenames.length){
	  all_done(total);
    
  } else{
		  fs.stat(name, function(err, stats) {			  
			if (err) {
				console.log(String(err));
				return;
			}
			if (stats.isFile()) {
			  handleFile(stats, i, filenames, total);
			} else {
			  handleDir(i, filenames, total);
			}
		  });
  }
}

if (!directoryName){
	console.log(String('Error: No directory name provided.'));
	return;
}

fs.readdir(directoryName, function(err, filenames) {
  if (err) {
	console.log(String(err));
	return;
  }
  console.log("Number of Entries in "+directoryName+":", filenames.length)
  for (k = 0; k < filenames.length; k++) { 
	var filepath = directoryName+"/"+filenames[k];
	filenames[k] = filepath;
  }
  processFile(0, filenames, 0);
});