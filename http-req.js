var getHTML = require('./http-functions');

function printHTML(html) {
	console.log(html);
}

var requestOptions = {
	host: 'sytantris.github.io',
	path: '/http-examples/step5.html'
}

getHTML(requestOptions, printHTML);

/* it is better to place the callback function 
outside of the module, so that whatever you set
the callback function as has more flexibility;
ie. if you wanted to print the HTML in reverse,
it could do that... etc... */