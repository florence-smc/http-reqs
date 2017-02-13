var https = require('https');
var buffer = '';

// always define the function before you use it
function printHTML(html) {
	console.log(html);
}

function getHTML (options, callback) {

	/* Add your code here */

	https.get(options, function (response) {
		response.setEncoding('utf8');

		response.on('data', function(data) {
			buffer += data;
		});

		response.on('end', function() {
			callback(buffer);
			console.log('Response stream complete.');
		});

	})

}

var requestOptions = {
	host: 'sytantris.github.io',
	path: '/http-examples/step4.html'
}

getHTML(requestOptions, printHTML);