// hardcoding values reduces modularity

var https = require('https');
var chunk = '';

var options = {
	host: 'sytantris.github.io',
	path: '/http-examples/step3.html'
};

function getAndPrintHTML () {

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

getAndPrintHTMLChunks(options, options);