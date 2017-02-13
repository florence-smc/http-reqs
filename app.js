var https = require('https');

function getAndPrintHTMLChunks () {

  var options = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  /* Add your code here */

  https.get(options, function(response) {

  	response.setEncoding('utf8');

  	response.on('data', function (data) {
  		console.log('Chunk received:', data.length, '\n');
  		console.log(data.toString());
  	});

	  response.on('end', function() {
	    console.log('Response stream complete.');
	  });
  })

}

getAndPrintHTMLChunks();