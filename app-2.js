// this function should use a buffering technique
// to append each chunk of data to a variable 
// as it is received, and then console.log 
// the data once all of the data has been received

// buffering means the technique you've used before
// usually in loops or conditionals of creating
// an empty variable and adding data to it

var https = require('https');
var chunk = '';

function getAndPrintHTMLChunks () {

	var options = {
		host: 'sytantris.github.io',
		path: '/http-examples/step2.html'
	};

	/* Add your code here */

	https.get(options, function(response) {
		response.setEncoding('utf8');

		response.on('data', function(data) {
			chunk += data;
		});

		response.on('end', function() {
			console.log('Data Received: ', chunk, '\n');
			console.log('Response stream complete.');
		});
	})
}

getAndPrintHTMLChunks();